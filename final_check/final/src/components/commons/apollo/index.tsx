import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
  useApolloClient,
  useQuery,
} from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

import {
  accessTokenState,
  basketLength,
  getUserInfoLoadable,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../../commons/store";
import { onError } from "@apollo/client/link/error";
import { FETCH_USER_LOGGED_IN } from "../../../commons/gql";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";
interface IApolloSettingProps {
  children: ReactNode;
}
const APOLLO_CACHE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const bbb = useRecoilValueLoadable(getUserInfoLoadable);

  useEffect(() => {
    console.log(accessToken);
    aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
    const Fetch = async (accessToken) => {
      const resultUserInfo = await getUserInfo(accessToken);
      console.log(resultUserInfo);
      setUserInfo(resultUserInfo);
      return resultUserInfo;
    };
    const newUserInfo = Fetch(accessToken); // localStorage는 항상 문자열만 저장 가능

    const temp = JSON.parse(localStorage.getItem("baskets"));

    setBasketTemp(temp?.length);
  }, [accessToken]);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken);
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
    // 브라우저에서 아폴로클라이언트데브툴스 사용할 때
  });

  return (
    <>
      {/* 🔻 useMutation 등 사용할 때  써야함 */}
      <ApolloProvider client={client}>{props.children}</ApolloProvider>
    </>
  );
}
