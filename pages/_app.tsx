import React from "react";
import Head from "next/head";

import { state } from "../utilities/constants";

import "./_app.css";

interface Props<PageProps> {
  Component: React.ComponentType<PageProps>;
  pageProps: PageProps;
}

function AppContainer<PageProps>({ Component, pageProps }: Props<PageProps>) {
  return (
    <>
      <Head>
        <title>{state.metaTitle}</title>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={state.metaTwitter} />
        <meta name="theme-color" content={state.metaThemeColor} />
        <link rel="icon" type="image/png" href={state.metaFavicon} />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400"
          as="style"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700"
          as="style"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,700"
          as="style"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
          as="style"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
          />
        </noscript>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default AppContainer;
