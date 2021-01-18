import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { Provider, createClient, defaultExchanges, subscriptionExchange } from 'urql'
import theme from '../theme'
import Header from '../components/Header'

const client = createClient({
  url: "http://localhost:5000/graphql",
  fetchOptions: {
    credentials: "include"
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Header />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
