import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenQuiz } from "../../../../pages/quiz/store";
import { accessTokenState, userInfoState } from "../store";

const APOLLO_CACHE = new InMemoryCache(); // 새로고침 하면 없어지기 때문에 따로 분리함.

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // const [accessTokenQ, setAccessTokenQ] = useRecoilState(accessTokenQuiz);

  /* 
  //1. 프리렌더링 예제 = process.browser 방법
  if (process.browser) {
    console.log("지금은 브라우저");
    const result = localStorage.getItem("accessToken") || "";
  } else {
    console.log("지금은 프론트엔드 서버");
    const result = localStorage.getItem("accessToken") || "";
  }

  // 2. 프리렌더링 예제  = typeof window방법
  // 🔻두번 렌더링되는데, 프론트엔드 서버인지 브라우저인지 구별하는 거 
  if (typeof window !== "undefined") { 
    console.log("지금은 브라우저");
    const result = localStorage.getItem("accessToken") || "";
  } else {
    console.log("지금은 프론트엔드 서버");
    const result = localStorage.getItem("accessToken") || "";
  }
  */

  // 3. 프리렌더링 무시 - useEffect 방법

  useEffect(() => {
    console.log("지금은 브라우저");
    const accessToken = localStorage.getItem("accessToken") || "";
    const userInfo = localStorage.getItem("userInfo");
    setAccessToken(accessToken);
    if (!accessToken || !userInfo) return;

    setUserInfo(JSON.parse(userInfo));

    console.log(accessToken);
  }, []);

  // useEffect(() => {
  //   console.log("지금은 브라우저");
  //   const accessToken = localStorage.getItem("accessToken") || "";
  //   setAccessTokenQ(accessToken);
  //   console.log(accessToken);
  // }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      // Authorization: `Bearer ${accessTokenQ}`,
    },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: APOLLO_CACHE,
    connectToDevTools: true,
    // 브라우저에서 아폴로클라이언트데브툴스 사용할 때
  });

  // prettier-ignore
  return(
    <>
      <ApolloProvider client={client}>
        {props.children}
      </ApolloProvider>
    </>
  )
}
