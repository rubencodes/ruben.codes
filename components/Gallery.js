import React, { useRef, useState } from "react";
import Head from "next/head";
import classnames from "classnames";

import ImageLicenseData from "./ImageLicenseData";
import PhotoGrid from "./PhotoGrid";
import PhotoGridHero from "./PhotoGridHero";
import PhotoGridPlaceholder from "./PhotoGridPlaceholder";
import PhotoGridUploader from "./PhotoGridUploader";
import ImageModal from "./ImageModal";
import Icon from "./Icon";
import useImageManager from "../hooks/useImageManager";
import useImageUploadManager from "../hooks/useImageUploadManager";
import useImageActions from "../hooks/useImageActions";
import { IS_DEV } from "../utilities/constants";

import styles from "./Gallery.module.css";

const noop = () => false;

const PhotoGridGallery = ({
  baseUrl,
  fullPath,
  thumbnailPath,
  images,
  previewImage,
  isPublished,
  onTogglePublish,
  onUpdateImages,
}) => {
  // Ref to the grid DOM node.
  const gridRef = useRef();

  // Provide advanced image utilities.
  const imageManager = useImageManager(
    baseUrl,
    fullPath,
    thumbnailPath,
    previewImage,
    images,
  );
  const imageUploadManager = useImageUploadManager(
    (fileName) => imageManager.appendImage({ fileName }),
    [imageManager.appendImage],
  );
  const imageActions = useImageActions(imageManager);

  // Optionally, allow editing the layout.
  const [isSaving, setIsSaving] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const onToggleEditMode = () => {
    if (isEditMode) {
      setIsSaving(true);

      const galleryImages = imageManager.allImages.map(
        // eslint-disable-next-line no-unused-vars
        ({ imageUrl: _, ...image }) => image,
      );
      return onUpdateImages(galleryImages);
    }

    setIsEditMode(true);
  };

  const iconType = (() => {
    if (isSaving) {
      return "spinner";
    }

    if (isEditMode) {
      return "save";
    } else {
      return "edit";
    }
  })();

  return (
    <>
      <PhotoGridHero {...imageManager.previewImage} />
      <PhotoGrid
        gridRef={gridRef}
        images={imageManager.allImages}
        onImageClick={imageActions.onImageClick}
        onImageResizeWidth={imageActions.onImageResizeWidth}
        onImageResizeHeight={imageActions.onImageResizeHeight}
        onImageToggleMove={imageActions.onImageToggleMove}
        onImageRemove={imageActions.onImageRemove}
        isEditMode={isEditMode}
        axis="xy"
        onSortEnd={imageManager.moveImage}
        shouldCancelStart={noop}
        useWindowAsScrollContainer
        useDragHandle
      >
        {isEditMode && (
          <>
            <PhotoGridPlaceholder show={imageUploadManager.isUploading} />
            <PhotoGridUploader
              dropZoneRef={gridRef}
              fullPath={fullPath}
              thumbnailPath={thumbnailPath}
              onStartUpload={imageUploadManager.onStartUpload}
              onFinishUpload={imageUploadManager.onFinishUpload}
              disabled={imageUploadManager.isUploading}
            />
          </>
        )}
        {imageManager.selectedImageUrl && (
          <>
            <Head>
              <meta
                key="image"
                property="og:image"
                content={imageManager.selectedImageUrl}
              />
            </Head>
            <ImageLicenseData imageUrl={imageManager.selectedImageUrl} />
            <ImageModal
              baseUrl={baseUrl}
              fullPath={fullPath}
              images={imageManager.allImages}
              selectedImageIndex={imageManager.selectedImageIndex}
              setSelectedImageIndex={imageManager.setSelectedImageIndex}
            />
          </>
        )}
      </PhotoGrid>
      {IS_DEV && (
        <div className={styles.photoGrid__ConfigButtonContainer}>
          <button
            className={classnames(
              styles.photoGrid__ConfigButton,
              styles.photoGrid__ConfigButtonEdit,
            )}
            onClick={onToggleEditMode}
          >
            <Icon
              className={styles[`photoGrid__ConfigButtonEdit__${iconType}`]}
              type={iconType}
            />
          </button>
          <button
            className={styles.photoGrid__ConfigButton}
            onClick={onTogglePublish}
          >
            <Icon type={isPublished ? "eye-slash" : "eye"} />
          </button>
        </div>
      )}
    </>
  );
};

export default PhotoGridGallery;
