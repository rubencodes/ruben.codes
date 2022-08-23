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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={state.metaTwitter} />
        <meta name="theme-color" content={state.metaThemeColor} />

        <title>{state.home.metaTitle}</title>
        <meta name="description" content={state.home.metaDescription} />
        <meta key="title" property="og:title" content={state.home.metaTitle} />
        <meta
          key="description"
          property="og:description"
          content={state.home.metaDescription}
        />
        <meta key="url" property="og:url" content={state.home.metaUrl} />
        <meta key="image" property="og:image" content={state.home.metaImage} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default AppContainer;
