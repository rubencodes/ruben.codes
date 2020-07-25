import Head from "next/head";

import { state } from "../utilities/constants";

import "./_app.css";

const AppContainer = ({ Component, pageProps }) => (
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
    </Head>
    <Component {...pageProps} />
  </>
);

export default AppContainer;
