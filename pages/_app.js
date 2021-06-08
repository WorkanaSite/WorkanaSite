import {ChakraProvider} from '@chakra-ui/react';
import Footer from 'src/components/Footer';
import theme from 'theme';

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
