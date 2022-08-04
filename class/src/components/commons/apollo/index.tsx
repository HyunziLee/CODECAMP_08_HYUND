import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode } from "react";
import { useRecoilState } from "recoil";
import { accessTokenQuiz } from "../../../../pages/quiz/store";
import { accessTokenState } from "../store";

const APOLLO_CACHE = new InMemoryCache(); // 새로고침 하면 없어지기 때문에 따로 분리함.

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [accessTokenQ, setAccessTokenQ] = useRecoilState(accessTokenQuiz);
  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: {
      // Authorization: `Bearer ${accessToken}`, 수업
      Authorization: `Bearer ${accessTokenQ}`,
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
