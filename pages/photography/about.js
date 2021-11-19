import React from "react";
import Head from "next/head";
import classnames from "classnames";

import PhotographyHeader from "../../components/PhotographyHeader";
import Footer from "../../components/Footer";
import { state } from "../../utilities/constants";

import styles from "./index.module.css";

const About = () => (
  <>
    <Head>
      <title>{state.photography.metaTitle}</title>
      <meta name="description" content={state.photography.metaDescription} />
      <meta
        key="title"
        property="og:title"
        content={state.photography.metaTitle}
      />
      <meta
        key="description"
        property="og:description"
        content={state.photography.metaDescription}
      />
      <meta key="url" property="og:url" content={state.photography.metaUrl} />
      <meta
        key="image"
        property="og:image"
        content={state.photography.metaImage}
      />
    </Head>
    <main className={classnames("page", styles.photography)}>
      <PhotographyHeader subheader={state.photography.pageTitle} />
      <p className="text">
        {state.photograpy.pageText}
      </p>
    </main>
    <Footer />
  </>
);

export default About;
