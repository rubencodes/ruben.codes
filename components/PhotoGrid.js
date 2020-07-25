import React from "react";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";

import Icon from "./Icon";
import PhotoGridItem from "./PhotoGridItem";

import styles from "./PhotoGrid.module.css";

const PhotoGridItemButton = ({ buttonStyle, ...props }) => (
  <button className={buttonStyle} {...props} />
);
const PhotoGridItemMoveButton = SortableHandle(PhotoGridItemButton);
const SortablePhotoGridItem = SortableElement(PhotoGridItem);

export const PhotoGrid = ({
  gridRef,
  children,
  images,
  onImageClick,
  onImageResize,
  onImageRemove,
  isEditMode,
}) => {
  const GridItem = isEditMode ? SortablePhotoGridItem : PhotoGridItem;
  const renderButtons = isEditMode
    ? ({ buttonStyle, imageInfo }) => (
        <>
          <PhotoGridItemMoveButton buttonStyle={buttonStyle}>
            <Icon type="arrows-alt" />
          </PhotoGridItemMoveButton>
          <PhotoGridItemButton
            buttonStyle={buttonStyle}
            onClick={() => onImageResize(imageInfo)}
          >
            <Icon type="arrows-alt-h" />
          </PhotoGridItemButton>
          <PhotoGridItemButton
            buttonStyle={buttonStyle}
            onClick={() => onImageRemove(imageInfo)}
          >
            <Icon type="times" />
          </PhotoGridItemButton>
        </>
      )
    : null;

  return (
    <div ref={gridRef} className={styles.photoGrid}>
      {images.map(({ imageUrl, caption, spanWidth, customStyles }, index) => (
        <GridItem
          key={index}
          index={index}
          imageIndex={index}
          imageUrl={imageUrl}
          caption={caption}
          spanWidth={spanWidth}
          customStyles={customStyles}
          onClick={onImageClick}
          renderButtons={renderButtons}
        />
      ))}
      {children}
    </div>
  );
};

export default SortableContainer(PhotoGrid);
