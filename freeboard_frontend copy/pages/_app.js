import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout/index";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    // 🔻 useMutation 등 사용할 때  써야함
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
