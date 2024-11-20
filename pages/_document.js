// _document.js
import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '.';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          {/* Custom fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          {/* Persist color mode */}
          <ColorModeScript/>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
