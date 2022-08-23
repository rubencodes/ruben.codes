import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { state } from "../utilities/constants";

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href={state.metaFavicon} />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500,600,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
