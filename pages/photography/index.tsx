import React, { useCallback } from "react";
import Head from "next/head";
import classnames from "classnames";
import { useRouter } from "next/router";

import PhotographyHeader from "../../components/PhotographyHeader";
import GalleryPreviews from "../../components/GalleryPreviews";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";
import useS3Uploader from "../../hooks/useS3Uploader";
import createPhotoUploads from "../../utilities/createPhotoUploads";
import createConfigUpload from "../../utilities/createConfigUpload";
import { state, AWS_CREDENTIALS } from "../../utilities/constants";
import { GalleryConfig } from "../../types/Gallery";

import styles from "./index.module.css";

interface Props {
  photographyState: GalleryConfig;
}

const Photography: React.FC<Props> = ({ photographyState }) => {
  const router = useRouter();
  const onSelect = (gallery: string) => router.push(`/photography/${gallery}`);

  // Handle updating the photography config.
  const uploader = useS3Uploader(AWS_CREDENTIALS);
  const onCreateGallery = useCallback(
    async (galleryType, galleryId, caption, file) => {
      // Prevent overwrites.
      if (photographyState.galleryOrder.includes(galleryId)) {
        throw new Error(
          `Gallery '${galleryId}' already exists. Choose a new name.`,
        );
      }

      const fullPath = `photography/${galleryType}/${galleryId}/`;
      const thumbnailPath = `photography/${galleryType}_small/${galleryId}/`;
      const [imageFileName] = await createPhotoUploads({
        fullPath,
        thumbnailPath,
        files: [file],
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
              isPublished: false,
            },
          },
        },
        uploader,
      }).then(() => window.location.reload());
    },
    [uploader, photographyState],
  );
  const onUpdateGalleryPreviews = useCallback(
    async (galleryOrder, galleries) => {
      // Generate the new config.
      // We could optimisitcally update here, but the
      // JSON upload is so fast it's not really worth it.
      return createConfigUpload({
        json: {
          ...photographyState,
          galleryOrder,
          galleries,
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
        <PhotographyHeader />
        {photographyState && (
          <GalleryPreviews
            {...photographyState}
            onCreateGallery={onCreateGallery}
            onUpdateGalleryPreviews={onUpdateGalleryPreviews}
            onSelect={onSelect}
          />
        )}
        {!photographyState && (
          <div className="loader-container">
            <Loader />
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(state.photography.metaConfig, { mode: "cors" });
  const data = await res.json();

  return {
    props: {
      photographyState: data,
    },
  };
}

export default Photography;
