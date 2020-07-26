import React, { useState, useCallback } from "react";
import Head from "next/head";
import classnames from "classnames";
import useSWR from "swr";
import { useRouter } from "next/router";

import InstagramLink from "../../components/InstagramLink";
import GalleryPreviews from "../../components/GalleryPreviews";
import Footer from "../../components/Footer";
import useS3Uploader from "../../hooks/useS3Uploader";
import fetchConfig from "../../utilities/fetchConfig";
import createPhotoUploads from "../../utilities/createPhotoUploads";
import createConfigUpload from "../../utilities/createConfigUpload";
import { state, AWS_CREDENTIALS } from "../../utilities/constants";

import styles from "./index.module.css";

const Photography = () => {
  const router = useRouter();
  const onSelect = (gallery) => router.push(`/photography/${gallery}`);

  // Load the photography config.
  const [photographyState, setPhotographyState] = useState(null);
  useSWR(state.photography.metaConfig, fetchConfig, {
    onSuccess: setPhotographyState,
  });

  // Handle updainge the photography config.
  const uploader = useS3Uploader(AWS_CREDENTIALS);
  const onCreateGallery = useCallback(
    async (galleryType, galleryId, caption, file) => {
      const fullPath = `photography/${galleryType}/${galleryId}`;
      const thumbnailPath = `photography/${galleryType}_small/${galleryId}`;
      const [imageFileName] = await createPhotoUploads({
        fullPath,
        thumbnailPath,
        file,
        uploader,
      });

      // Generate the new config.
      // We could optimisitcally update here, but the
      // JSON upload is so fast it's not really worth it.
      return createConfigUpload({
        json: {
          ...photographyState,
          galleryOrder: [...photographyState.galleryOrder, galleryId],
          galleries: {
            ...photographyState.galleries,
            [galleryId]: {
              fullPath,
              thumbnailPath,
              previewImage: {
                caption,
                fileName: imageFileName,
                spanWidth: 1,
                spanHeight: 1,
                customStyles: {},
              },
              images: [],
            },
          },
        },
        uploader,
      }).then(() => window.location.reload());
    },
    [uploader, photographyState],
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
        {photographyState && (
          <GalleryPreviews
            {...photographyState}
            onCreateGallery={onCreateGallery}
            onSelect={onSelect}
          />
        )}
      </main>
      <Footer />
    </>
  );
};

export default Photography;
