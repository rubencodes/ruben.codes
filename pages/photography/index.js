import React from "react";
import Head from "next/head";
import classnames from "classnames";
import useSWR from "swr";
import { useRouter } from "next/router";

import InstagramLink from "../../components/InstagramLink";
import GalleryPreviews from "../../components/GalleryPreviews";
import Footer from "../../components/Footer";
import fetchConfig from "../../utilities/fetchConfig";
import { state } from "../../utilities/constants";

import styles from "./index.module.css";

const Photography = () => {
  const router = useRouter();
  const onSelect = (gallery) => router.push(`/photography/${gallery}`);
  const { data: photographyConfig } = useSWR(
    state.photography.metaConfig,
    fetchConfig,
  );

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
        {photographyConfig && (
          <GalleryPreviews {...photographyConfig} onSelect={onSelect} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Photography;
