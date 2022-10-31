import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";

import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
  userInfoState,
} from "../store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

const APOLLO_CACHE = new InMemoryCache(); // 새로고침 하면 없어지기 때문에 따로 분리함.

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);

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
    // 1. 기존방식(refreshToken 이전)
    // console.log("지금은 브라우저");
    // const accessToken = localStorage.getItem("accessToken") || "";
    // const userInfo = localStorage.getItem("userInfo");
    // setAccessToken(accessToken);
    // if (!accessToken || !userInfo) return;

    // setUserInfo(JSON.parse(userInfo));

    // console.log(accessToken);

    // 2. 새로운 방식
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    //
    //
    //
    //

    //refreshToken이용할 때, 새로고침한 경우 withAuth안됨
    // withAuth랑 같이 봐야함
    // 해결방법 1 -restoreAccessToken을 두번 요청하기
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    //
    //
    //
    //
    //

    // 해결방법2 - 나만의 로딩 활용하기
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    //   setIsLoaded(true);
    // });
    //
    //
    //
    //

    // 해결방법3 - RecoilSelector 활용하기
    aaa.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크(UNAUTHENTICATED)
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken 재발급 받기
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급 받은 accessToken을 저장히기
              setAccessToken(newAccessToken);

              // 3-1. 재발급받은 accessToken으로 방금 실패한 쿼리 재요청하기(토큰 바꿔치기)

              operation.setContext({
                headers: {
                  ...operation.getContext().headers, // 만료된 토큰이 추가되어있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2. 재발급받은 accessToken으로 방금 실패한 쿼리 재요청하기(변경된 operation 재요청하기)
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql04",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 순서 중요 - errorLink먼저
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
