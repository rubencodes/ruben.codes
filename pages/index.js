import React from "react";
import Head from "next/head";

import { state } from "../util/constants";
import Resume from "../components/Resume.js";

const Home = () => (
  <>
    <Head>
      <title>{state.home.metaTitle}</title>
      <meta property="og:title" content={state.home.metaTitle} />
      <meta property="og:description" content={state.home.metaDescription} />
      <meta property="og:url" content={state.home.metaUrl} />
      <meta property="og:image" content={state.home.metaImage} />
    </Head>
    <Resume name={state.name} {...state.home} />
  </>
);

export default Home;
