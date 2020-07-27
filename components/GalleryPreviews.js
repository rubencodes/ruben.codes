import React, { useState, useCallback } from "react";

import PhotoGrid from "./PhotoGrid";
import GalleryCreator from "./GalleryCreator";
import ConfigButtonContainer from "./ConfigButtonContainer";
import ConfigButton from "./ConfigButton";
import useGalleryImageManager from "../hooks/useGalleryImageManager";
import useImageActions from "../hooks/useImageActions";
import { IS_DEV } from "../utilities/constants";

const noop = () => false;

const GalleryPreviews = ({
  baseUrl,
  galleryOrder,
  galleries,
  onCreateGallery,
  onUpdateGalleryPreviews,
  onSelect,
}) => {
  const onSelectGalleryIndex = ({ imageIndex }) =>
    onSelect(galleryOrder[imageIndex]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const onToggleShowModal = useCallback(
    () => setShowCreateModal((show) => !show),
    [],
  );

  // Provide advanced image utilities.
  const imageManager = useGalleryImageManager(galleryOrder, galleries);
  const imageActions = useImageActions(imageManager);

  // Optionally, allow editing the layout.
  const [isSaving, setIsSaving] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const onToggleEditMode = () => {
    if (isEditMode) {
      setIsSaving(true);
      return onUpdateGalleryPreviews(
        imageManager.galleryOrder,
        imageManager.galleries,
      );
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
      <PhotoGrid
        images={imageManager.galleryOrder
          .map((key) => imageManager.galleries[key])
          .filter(({ isPublished }) => isPublished || IS_DEV)
          .map(({ thumbnailPath, previewImage }) => ({
            imageUrl: `${baseUrl}${thumbnailPath}${previewImage.fileName}`,
            fileName: previewImage.fileName,
            customStyles: previewImage.customStyles,
            caption: previewImage.caption,
            spanWidth: previewImage.spanWidth,
            spanHeight: previewImage.spanHeight,
          }))}
        onImageClick={onSelectGalleryIndex}
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
      />
      {IS_DEV && (
        <>
          <ConfigButtonContainer>
            <ConfigButton
              tooltipText="Edit Galleries"
              tooltipDirection="right"
              iconType={iconType}
              onClick={onToggleEditMode}
            />
            <ConfigButton
              tooltipText="New Gallery"
              tooltipDirection="right"
              iconType="plus"
              onClick={onToggleShowModal}
            />
          </ConfigButtonContainer>
          {showCreateModal && (
            <GalleryCreator
              onCreateGallery={onCreateGallery}
              onExit={onToggleShowModal}
            />
          )}
        </>
      )}
    </>
  );
};

export default GalleryPreviews;
