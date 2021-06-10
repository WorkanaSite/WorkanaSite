import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import {ColorModeScript} from '@chakra-ui/react';
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
