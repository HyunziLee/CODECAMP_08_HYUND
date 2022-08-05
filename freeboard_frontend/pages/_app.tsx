import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/commons/layout/index";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RecoilRoot, useRecoilState } from "recoil";
import { accessTokenState } from "../src/components/commons/store";
import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      {/* 🔻 useMutation 등 사용할 때  써야함 */}
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
