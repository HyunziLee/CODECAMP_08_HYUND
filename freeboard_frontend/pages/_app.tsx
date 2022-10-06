import "../styles/globals.css";
import "antd/dist/antd.css";
import Layout from "../src/commons/layout/index";
import { AppProps } from "next/app";

import { RecoilRoot } from "recoil";

import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {/* 🔻 useMutation 등 사용할 때  써야함! */}
      <ApolloSetting>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloSetting>
    </RecoilRoot>
  );
}

export default MyApp;
