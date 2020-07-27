import React, { memo, useMemo } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { state } from "../utilities/constants";

import PhotoGrid from "./PhotoGrid";

const { metaUrl, metaDescription, metaTitle } = state.photography;

const PhotoGridHero = (previewImage) => {
  const {
    query: { galleryId },
  } = useRouter();

  const images = useMemo(() => [{ ...previewImage, spanWidth: 3 }], [
    ...Object.keys(previewImage),
    ...Object.values(previewImage),
  ]);

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
        <meta key="image" property="og:image" content={previewImage.imageUrl} />
      </Head>
      <div className="hero">
        <PhotoGrid images={images} useDragHandle />
      </div>
    </>
  );
};

export default memo(PhotoGridHero);
