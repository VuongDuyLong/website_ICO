import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import MainLayout from "@/layouts";
import theme from '../src/themes'
import { Provider } from "react-redux";
import store from "@/reduxs/store";

 function MyApp({ Component, pageProps }: AppProps) {
 // return <Component {...pageProps} />
 return (
     <Provider store={store}>
      <ChakraProvider theme={theme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ChakraProvider>
    </Provider>
 )
}

export default MyApp