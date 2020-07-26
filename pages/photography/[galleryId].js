import React, { useState, useCallback } from "react";
import classnames from "classnames";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";

import InstagramLink from "../../components/InstagramLink";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import useS3Uploader from "../../hooks/useS3Uploader";
import fetchConfig from "../../utilities/fetchConfig";
import scrollToTop from "../../utilities/scrollToTop";
import createConfigUpload from "../../utilities/createConfigUpload";
import { state, AWS_CREDENTIALS } from "../../utilities/constants";

import styles from "./index.module.css";

const GalleryPage = () => {
  const {
    query: { galleryId },
  } = useRouter();

  // Load the photography config.
  const [photographyState, setPhotographyState] = useState(null);
  useSWR(state.photography.metaConfig, fetchConfig, {
    onSuccess: setPhotographyState,
  });

  // Handle updainge the photography config.
  const uploader = useS3Uploader(AWS_CREDENTIALS);
  const updatePhotographyConfig = useCallback(
    async (galleryImages) => {
      // Generate the new config.
      // We could optimisitcally update here, but the
      // JSON upload is so fast it's not really worth it.
      return createConfigUpload({
        json: {
          ...photographyState,
          galleries: {
            ...photographyState.galleries,
            [galleryId]: {
              ...photographyState.galleries[galleryId],
              images: galleryImages,
            },
          },
        },
        uploader,
      }).then(() => window.location.reload());
    },
    [uploader, photographyState],
  );

  // Extract the relevant info.
  const { baseUrl, galleries: { [galleryId]: selectedGallery } = {} } =
    photographyState || {};
  const { fullPath, thumbnailPath, previewImage, images } =
    selectedGallery || {};

  return (
    <>
      <main className={classnames("page", styles.photography)}>
        <h1 className="heading">{state.name}</h1>
        <b className="subheading">
          Photography &nbsp;
          <InstagramLink />
        </b>
        {photographyState && (
          <Gallery
            baseUrl={baseUrl}
            fullPath={fullPath}
            thumbnailPath={thumbnailPath}
            images={images}
            previewImage={previewImage}
            updatePhotographyConfig={updatePhotographyConfig}
          />
        )}
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
    },
  };
}

export default GalleryPage;
