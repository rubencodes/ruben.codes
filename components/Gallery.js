import React, { useRef, useState } from "react";
import Head from "next/head";

import ImageLicenseData from "./ImageLicenseData";
import PhotoGrid from "./PhotoGrid";
import ImageModal from "./ImageModal";
import ConfigButtonContainer from "./ConfigButtonContainer";
import ConfigButton from "./ConfigButton";
import FileInput from "./FileInput";
import useImageManager from "../hooks/useImageManager";
import useImageUploadManager from "../hooks/useImageUploadManager";
import useImageActions from "../hooks/useImageActions";
import useS3Uploader from "../hooks/useS3Uploader";
import createPhotoUploads from "../utilities/createPhotoUploads";
import { AWS_CREDENTIALS, IS_DEV } from "../utilities/constants";

const noop = () => false;

const PhotoGridGallery = ({
  baseUrl,
  fullPath,
  thumbnailPath,
  images,
  previewImage,
  isPublished,
  onUpdateImages,
  onTogglePublish,
  onDelete,
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

  // Handle uploads.
  const uploader = useS3Uploader(AWS_CREDENTIALS);
  const onFileInputChange = ({ target: { files } }) => {
    // Stop if there's a pending upload.
    if (imageUploadManager.isUploading) {
      return;
    }

    // Make sure we're in edit mode first.
    setIsEditMode(true);

    // Upload the file.
    imageUploadManager.onStartUpload();
    return createPhotoUploads({
      files,
      fullPath,
      thumbnailPath,
      uploader,
    }).then((fileNames) => imageUploadManager.onFinishUpload(fileNames));
  };

  return (
    <>
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
        <ConfigButtonContainer>
          <ConfigButton
            tooltipText="Edit Images"
            tooltipDirection="right"
            iconType={iconType}
            onClick={onToggleEditMode}
          />
          <FileInput
            onChange={onFileInputChange}
            disabled={imageUploadManager.isUploading}
            accept=".jpg,.jpeg"
            multiple
          >
            {({ open }) => (
              <ConfigButton
                tooltipText="New Image"
                tooltipDirection="right"
                iconType={imageUploadManager.isUploading ? "spinner" : "plus"}
                onClick={open}
              />
            )}
          </FileInput>
          <ConfigButton
            tooltipText={isPublished ? "Unpublish Gallery" : "Publish Gallery"}
            tooltipDirection="right"
            iconType={isPublished ? "eye-slash" : "eye"}
            onClick={onTogglePublish}
          />
          <ConfigButton
            tooltipText="Delete Gallery"
            tooltipDirection="right"
            iconType="trash"
            onClick={onDelete}
          />
        </ConfigButtonContainer>
      )}
    </>
  );
};

export default PhotoGridGallery;
