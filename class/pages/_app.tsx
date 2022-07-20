// import '../styles/globals.css'
import 'antd/dist/antd.css';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'
import { AppProps } from 'next/app';
import {Global} from "@emotion/react"
import { globalStyles } from '../src/commons/styles/globalStyles';


function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })


  return (
    <ApolloProvider client={client}>
      <Global styled={globalStyles} />
      <Component {...pageProps} />
    </ApolloProvider>
    
  )
}

export default MyApp
