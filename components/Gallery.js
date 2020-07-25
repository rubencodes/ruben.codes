import React, { useState, useCallback, useRef } from "react";
import Head from "next/head";

import ImageLicenseData from "./ImageLicenseData";
import PhotoGrid from "./PhotoGrid";
import PhotoGridHero from "./PhotoGridHero";
import PhotoGridPlaceholder from "./PhotoGridPlaceholder";
import PhotoGridUploader from "./PhotoGridUploader";
import ImageModal from "./ImageModal";
import useQueryStringState from "../hooks/useQueryStringState";
import toIntOrNull from "../utilities/toIntOrNull";

const fileNameToImageUrl = (baseUrl, path, image) => ({
  ...image,
  imageUrl: `${baseUrl}${path}${image.fileName}`,
  spanWidth: image.spanWidth || 1,
  spanHeight: image.spanHeight || 1,
  customStyles: {
    backgroundPositionX: "50%",
    backgroundPositionY: "0%",
    ...(image.customStyles || {}),
  },
});

const PhotoGridGallery = ({
  isEditMode = process.env.NODE_ENV === "development", // Only enabled in dev for now.
  baseUrl,
  fullPath,
  thumbnailPath,
  images,
  previewImage,
}) => {
  // Helpers for normalizing the image URLs.
  const normalizeThumbnailImage = (image) =>
    fileNameToImageUrl(baseUrl, thumbnailPath, image);
  const normalizeFullImage = (image) =>
    fileNameToImageUrl(baseUrl, fullPath, image);

  // Ref to the grid DOM node.
  const gridRef = useRef();

  // Contains both the stored images and newly uploaded ones.
  const [allImages, setAllImages] = useState(
    images.map(normalizeThumbnailImage),
  );

  // Helpers for updating the images array.
  const appendImage = useCallback((image) => {
    setAllImages((imgs) => [...imgs, image]);
  }, []);
  const removeImage = useCallback((index) => {
    setAllImages((imgs) => {
      const withoutImage = [...imgs.slice(0, index), ...imgs.slice(index + 1)];

      return withoutImage;
    });
  }, []);
  const updateImage = useCallback((image, index) => {
    setAllImages((imgs) => {
      const withoutImage = [...imgs.slice(0, index), ...imgs.slice(index + 1)];
      const withImage = [
        ...withoutImage.slice(0, index),
        image,
        ...withoutImage.slice(index),
      ];

      return withImage;
    });
  }, []);
  const moveImage = useCallback(({ oldIndex, newIndex }) => {
    setAllImages((imgs) => {
      const image = imgs[oldIndex];
      const withoutImage = [
        ...imgs.slice(0, oldIndex),
        ...imgs.slice(oldIndex + 1),
      ];
      const withImage = [
        ...withoutImage.slice(0, newIndex),
        image,
        ...withoutImage.slice(newIndex),
      ];

      return withImage;
    });
  }, []);

  // Uploading image state.
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const onStartUpload = useCallback(() => setIsUploadingFile(true), []);
  const onFinishUpload = useCallback(
    (imageUrls) => {
      setIsUploadingFile(false);
      imageUrls.forEach((imageUrl) =>
        appendImage({
          imageUrl,
          spanWidth: 1,
          customStyles: {},
          isUploaded: true,
        }),
      );
    },
    [appendImage],
  );

  // Handle image actions.
  const onImageClick = useCallback(
    ({ imageIndex }) => setSelectedImageIndex(imageIndex),
    [],
  );
  const onImageRemove = useCallback(
    ({ imageIndex }) => removeImage(imageIndex),
    [removeImage],
  );
  const onImageResizeWidth = useCallback(
    ({ imageIndex, ...image }) => {
      updateImage(
        { ...image, spanWidth: (image.spanWidth % 3) + 1 },
        imageIndex,
      );
    },
    [updateImage],
  );
  const onImageResizeHeight = useCallback(
    ({ imageIndex, ...image }) => {
      updateImage(
        { ...image, spanHeight: (image.spanHeight % 3) + 1 },
        imageIndex,
      );
    },
    [updateImage],
  );

  // Selected image state.
  const [selectedImageIndex, setSelectedImageIndex] = useQueryStringState(
    "selected",
    toIntOrNull,
  );
  const selectedImageUrl = Number.isInteger(selectedImageIndex)
    ? normalizeFullImage(images[selectedImageIndex]).imageUrl
    : null;

  return (
    <>
      <PhotoGridHero {...normalizeThumbnailImage(previewImage)} />
      <PhotoGrid
        gridRef={gridRef}
        images={allImages}
        onImageClick={onImageClick}
        onImageResizeWidth={onImageResizeWidth}
        onImageResizeHeight={onImageResizeHeight}
        onImageRemove={onImageRemove}
        isEditMode={isEditMode}
        axis="xy"
        onSortEnd={moveImage}
        shouldCancelStart={() => false}
        useWindowAsScrollContainer
        useDragHandle
      >
        {isEditMode && (
          <>
            <PhotoGridPlaceholder show={isUploadingFile} />
            <PhotoGridUploader
              dropZoneRef={gridRef}
              fullPath={fullPath}
              thumbnailPath={thumbnailPath}
              onStartUpload={onStartUpload}
              onFinishUpload={onFinishUpload}
              disabled={isUploadingFile}
            />
          </>
        )}
        {selectedImageUrl && (
          <>
            <Head>
              <meta
                key="image"
                property="og:image"
                content={selectedImageUrl}
              />
            </Head>
            <ImageLicenseData imageUrl={selectedImageUrl} />
            <ImageModal
              baseUrl={baseUrl}
              fullPath={fullPath}
              images={images}
              selectedImageIndex={selectedImageIndex}
              setSelectedImageIndex={setSelectedImageIndex}
            />
          </>
        )}
      </PhotoGrid>
    </>
  );
};

export default PhotoGridGallery;
