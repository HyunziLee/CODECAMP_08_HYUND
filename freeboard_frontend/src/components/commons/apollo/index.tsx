import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";

import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";

import { accessTokenState, userInfoState } from "../store";
import { ReactNode, useEffect } from "react";
import { onError } from "@apollo/client/link/error";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const APOLLO_CACHE = new InMemoryCache();
interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    // 1. 기존방식(refreshToken 이전)
    // console.log("지금은 브라우저다!!!!!");
    // const accessToken = localStorage.getItem("accessToken") || "";
    // const userInfo = localStorage.getItem("userInfo");
    // setAccessToken(accessToken);

    if (!accessToken || !userInfo) return;
    setUserInfo(JSON.parse(userInfo));

    // 2. 새로운방식(refreshToken 이후)
    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

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
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
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
