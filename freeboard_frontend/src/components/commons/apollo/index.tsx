import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";

import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { createUploadLink } from "apollo-upload-client";

import {
  accessTokenState,
  basketLength,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../../../commons/store";
import { ReactNode, useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import { getUserInfo } from "../../../commons/libraries/getUserInfo";

const APOLLO_CACHE = new InMemoryCache();
interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState); // eslint-disable-line no-unused-vars
  const refreshTokenFunc = useRecoilValueLoadable(restoreAccessTokenLoadable);
  const [basketTemp, setBasketTemp] = useRecoilState(basketLength); // eslint-disable-line no-unused-vars

  useEffect(() => {
    refreshTokenFunc.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });

    const Fetch = async (accessToken: string) => {
      const resultUserInfo = await getUserInfo(accessToken);
      setUserInfo(resultUserInfo);
      return resultUserInfo;
    };

    Fetch(accessToken);

    const temp = JSON.parse(localStorage.getItem("baskets") || "[]");

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
    uri: "https://backend08.codebootcamp.co.kr/graphql/graphql04",
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
