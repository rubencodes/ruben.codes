import React, { useState } from "react";

import PhotoGrid from "./PhotoGrid";
import GalleryCreator from "./GalleryCreator";
import ConfigButtonContainer from "./ConfigButtonContainer";
import ConfigButton from "./ConfigButton";
import { IS_DEV } from "../utilities/constants";

const GalleryPreviews = ({
  baseUrl,
  galleryOrder,
  galleries,
  onCreateGallery,
  onSelect,
}) => {
  const onSelectGalleryIndex = ({ imageIndex }) =>
    onSelect(galleryOrder[imageIndex]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const onToggleShowModal = () => setShowCreateModal(!showCreateModal);

  // Optionally, allow editing the layout.
  const [isSaving, setIsSaving] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const onToggleEditMode = () => {
    if (isEditMode) {
      setIsSaving(true);
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
        images={galleryOrder
          .map((key) => galleries[key])
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
        isEditMode={isEditMode}
        useWindowAsScrollContainer
        useDragHandle
      />
      {IS_DEV && (
        <>
          <ConfigButtonContainer>
            <ConfigButton iconType={iconType} onClick={onToggleEditMode} />
            <ConfigButton iconType="plus" onClick={onToggleShowModal} />
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
