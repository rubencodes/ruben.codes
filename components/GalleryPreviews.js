import React from "react";

import PhotoGrid from "./PhotoGrid";
import GalleryCreator from "./GalleryCreator";
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

  return (
    <PhotoGrid
      images={galleryOrder
        .map((key) => galleries[key])
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
    >
      {IS_DEV && <GalleryCreator onCreateGallery={onCreateGallery} />}
    </PhotoGrid>
  );
};

export default GalleryPreviews;
