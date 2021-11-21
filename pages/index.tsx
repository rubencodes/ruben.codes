import React from "react";
import Head from "next/head";
import classnames from "classnames";

import { state } from "../utilities/constants";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import styles from "./index.module.css";

const Home = () => (
  <>
    <Head>
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
    <main className={classnames("page", styles.resumeContainer)}>
      <Main
        name={state.name}
        about={state.home.about}
        art={state.home.art}
        design={state.home.design}
        experience={state.home.experience}
        education={state.home.education}
        projects={state.home.projects}
      />
      <Sidebar
        info={state.home.info}
        skills={state.home.skills}
        languages={state.home.languages}
        links={state.home.links}
        cities={state.home.cities}
      />
    </main>
    <Footer />
  </>
);

export default Home;
