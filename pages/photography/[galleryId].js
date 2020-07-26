import React, { useState, useCallback } from "react";
import classnames from "classnames";
import Link from "next/link";
import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";

import InstagramLink from "../../components/InstagramLink";
import Gallery from "../../components/Gallery";
import Footer from "../../components/Footer";
import useS3Uploader from "../../hooks/useS3Uploader";
import fetchConfig from "../../utilities/fetchConfig";
import { state, AWS_CREDENTIALS } from "../../utilities/constants";
import styles from "./index.module.css";

const {
  metaConfigPath: path,
  metaConfigFileName: fileName,
  metaUrl,
  metaDescription,
  metaTitle,
} = state.photography;

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const GalleryPage = () => {
  const {
    query: { galleryId },
  } = useRouter();

  const uploadFile = useS3Uploader(AWS_CREDENTIALS);
  const [photographyState, setPhotographyState] = useState(null);
  const updatePhotographyConfig = useCallback(
    async (galleryImages) => {
      // Optimistically update.
      const updatedConfig = {
        ...photographyState,
        galleries: {
          ...photographyState.galleries,
          [galleryId]: {
            ...photographyState.galleries[galleryId],
            images: galleryImages,
          },
        },
      };
      setPhotographyState(updatedConfig);

      const file = new File([JSON.stringify(updatedConfig)], fileName, {
        type: "application/json",
      });

      return uploadFile(path, file).then(() => window.location.reload());
    },
    [uploadFile, photographyState],
  );
  useSWR(state.photography.metaConfig, fetchConfig, {
    onSuccess: setPhotographyState,
  });

  const { baseUrl, galleries: { [galleryId]: selectedGallery } = {} } =
    photographyState || {};
  const { fullPath, thumbnailPath, previewImage = {}, images } =
    selectedGallery || {};

  return (
    <>
      <Head>
        <title>
          {metaTitle} - {previewImage.caption}
        </title>
        <meta
          key="title"
          property="og:title"
          content={`${metaTitle} - ${previewImage.caption}`}
        />
        <meta
          key="description"
          property="og:description"
          content={metaDescription}
        />
        <meta key="url" property="og:url" content={`${metaUrl}/${galleryId}`} />
        <meta
          key="image"
          property="og:image"
          content={`${baseUrl}${thumbnailPath}${previewImage.fileName}`}
        />
      </Head>
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
            uploadFile={uploadFile}
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
