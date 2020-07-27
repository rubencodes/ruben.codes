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
        useWindowAsScrollContainer
        useDragHandle
      />
      {IS_DEV && (
        <>
          <ConfigButtonContainer>
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
