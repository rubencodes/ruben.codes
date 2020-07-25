import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import classnames from "classnames";

import InstagramLink from "../../components/InstagramLink";
import GalleryPreviews from "../../components/GalleryPreviews";
import Footer from "../../components/Footer";
import fetchConfig from "../../utilities/fetchConfig";
import { state } from "../../utilities/constants";

import styles from "./index.module.css";

const Photography = ({ photographyConfig }) => {
  const router = useRouter();
  const onSelect = (gallery) => router.push(`/photography/${gallery}`);

  return (
    <>
      <Head>
        <title>{state.photography.metaTitle}</title>
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
        <h1 className="heading">{state.name}</h1>
        <b className="subheading">
          Photography &nbsp;
          <InstagramLink />
        </b>
        <GalleryPreviews {...photographyConfig} onSelect={onSelect} />
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      photographyConfig: await fetchConfig(state.photography.metaConfig),
    },
  };
}

export default Photography;
