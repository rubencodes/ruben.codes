import React, { useState, useCallback } from "react";
import classnames from "classnames";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import InstagramLink from "../../components/InstagramLink";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import fetchConfig from "../../utilities/fetchConfig";
import { state } from "../../utilities/constants";

import styles from "./index.module.css";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const GalleryPage = ({ photographyConfig }) => {
  const {
    query: { galleryId },
  } = useRouter();

  const [photographyState, setPhotographyState] = useState(photographyConfig);
  const {
    baseUrl,
    galleries: { [galleryId]: selectedGallery },
  } = photographyState;
  const updatePhotographyConfig = useCallback((galleryImages) => {
    // Optimistically update.
    setPhotographyState((currentPhotographyState) => ({
      ...currentPhotographyState,
      galleries: {
        ...currentPhotographyState.galleries,
        [galleryId]: {
          ...currentPhotographyState.galleries[galleryId],
          images: galleryImages,
        },
      },
    }));

    window.location.reload();
  }, []);

  const { fullPath, thumbnailPath, previewImage = {}, images } =
    selectedGallery || {};

  return (
    <>
      <Head>
        <title>
          {state.photography.metaTitle} - {previewImage.caption}
        </title>
        <meta
          key="title"
          property="og:title"
          content={`${state.photography.metaTitle} - ${previewImage.caption}`}
        />
        <meta
          key="description"
          property="og:description"
          content={state.photography.metaDescription}
        />
        <meta
          key="url"
          property="og:url"
          content={`${state.photography.metaUrl}/${galleryId}`}
        />
        <meta
          key="image"
          property="og:image"
          content={`${state.photography.baseUrl}${thumbnailPath}${previewImage.fileName}`}
        />
      </Head>
      <main className={classnames("page", styles.photography)}>
        <h1 className="heading">{state.name}</h1>
        <b className="subheading">
          Photography &nbsp;
          <InstagramLink />
        </b>
        <Gallery
          baseUrl={baseUrl}
          fullPath={fullPath}
          thumbnailPath={thumbnailPath}
          images={images}
          previewImage={previewImage}
          updatePhotographyConfig={updatePhotographyConfig}
        />
        <div className={styles.buttonContainer}>
          <Link href="/photography">
            <a>← Go Back</a>
          </Link>
          <button onClick={scrollToTop}>↑ Scroll to Top</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {
      params: context.params,
      photographyConfig: await fetchConfig(state.photography.metaConfig),
    },
  };
}

export default GalleryPage;
