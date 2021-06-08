import {ChakraProvider} from '@chakra-ui/react';
import Footer from 'src/components/Footer';
import SEO from 'src/components/SEO';
import theme from 'theme';

function MyApp({Component, pageProps}) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SEO title={pageProps?.seo?.title} />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
