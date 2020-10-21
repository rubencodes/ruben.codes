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
      <PhotographyHeader subheader="About" />
      <p className="text">
        My name is Ruben Martinez Jr. I'm a New York City based photographer and
        software engineer. My artistic interests are mainly around capturing
        human portraits, both in the studio and out in the real world. I most
        often shoot with my Sony A7RIV mirrorless camera, and I prefer to shoot
        with a macro lens to capture more intimately framed shots. Check out my
        photo galleries via the link above, and feel free to contact me if you
        see anything you like or if you'd be interested in collaborating on a
        shoot.
      </p>
    </main>
    <Footer />
  </>
);

export default About;
