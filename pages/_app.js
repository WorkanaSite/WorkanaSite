import {ChakraProvider} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import Footer from 'src/components/Footer';
import SEO from 'src/components/SEO';
import theme from 'theme';
import {useEffect} from 'react';
import * as ga from 'analytics/index';

function MyApp({Component, pageProps}) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = url => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <SEO title={pageProps?.seo?.title} />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
