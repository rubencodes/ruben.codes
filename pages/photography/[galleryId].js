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
import { state, AWS_CREDENTIALS, IS_DEV } from "../../utilities/constants";

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
  const onUpdateGalleryImages = useCallback(
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
  const onToggleGalleryPublish = useCallback(() => {
    const { isPublished } = photographyState.galleries[galleryId];
    const confirmationMessage = `Are you sure you want to ${
      isPublished ? "unpublish" : "publish"
    } this gallery?`;
    if (!confirm(confirmationMessage)) {
      return;
    }

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
            isPublished: !isPublished,
          },
        },
      },
      uploader,
    }).then(() => window.location.reload());
  }, [uploader, photographyState]);
  const onDeleteGallery = useCallback(() => {
    const confirmationMessage = `Are you sure you want to delete this gallery?`;
    if (!confirm(confirmationMessage)) {
      return;
    }

    // Generate the new config.
    // We could optimisitcally update here, but the
    // JSON upload is so fast it's not really worth it.
    const newConfig = {
      ...photographyState,
      galleryOrder: photographyState.galleryOrder.filter(
        (id) => id !== galleryId,
      ),
    };
    delete newConfig.galleries[galleryId];

    return createConfigUpload({
      json: newConfig,
      uploader,
    }).then(() => window.location.reload());
  }, [uploader, photographyState]);

  // Extract the relevant info.
  const { baseUrl, galleries: { [galleryId]: selectedGallery } = {} } =
    photographyState || {};
  const { fullPath, thumbnailPath, previewImage, images, isPublished } =
    selectedGallery || {};
  const shouldShowGallery =
    photographyState && selectedGallery && (isPublished || IS_DEV);
  const shouldShow404 =
    photographyState && (!selectedGallery || (!isPublished && !IS_DEV));

  return (
    <>
      <main className={classnames("page", styles.photography)}>
        <h1 className="heading">{state.name}</h1>
        <b className="subheading">
          Photography &nbsp;
          <InstagramLink />
        </b>
        {shouldShowGallery && (
          <Gallery
            baseUrl={baseUrl}
            fullPath={fullPath}
            thumbnailPath={thumbnailPath}
            images={images}
            previewImage={previewImage}
            isPublished={isPublished}
            onUpdateImages={onUpdateGalleryImages}
            onTogglePublish={onToggleGalleryPublish}
            onDelete={onDeleteGallery}
          />
        )}
        {shouldShow404 && <h2>404 not found :(</h2>}
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
