import React from "react";
import Head from "next/head";

import { state } from "../util/constants";
import Resume from "../components/Resume.js";

const Home = () => (
  <>
    <Head>
      <title>{state.home.metaTitle}</title>
      <meta key="title" property="og:title" content={state.home.metaTitle} />
      <meta key="description" property="og:description" content={state.home.metaDescription} />
      <meta key="url" property="og:url" content={state.home.metaUrl} />
      <meta key="image" property="og:image" content={state.home.metaImage} />
    </Head>
    <Resume name={state.name} {...state.home} />
  </>
);

export default Home;
