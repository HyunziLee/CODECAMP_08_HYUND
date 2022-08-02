import "../styles/globals.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 노트북 RAM에 저장(=global states)
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
