import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";

import { useRecoilState } from "recoil";
import { createUploadLink } from "apollo-upload-client";

import { accessTokenState, userInfoState } from "../store";
import { ReactNode, useEffect } from "react";

const APOLLO_CACHE = new InMemoryCache();
interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    console.log("지금은 브라우저");
    const accessToken = localStorage.getItem("accessToken") || "";
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    setAccessToken(accessToken);

    if (!accessToken || !userInfo) return;
    setUserInfo(userInfo);
  }, []);

  console.log(userInfo);

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
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
