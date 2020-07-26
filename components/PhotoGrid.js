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
  onImageToggleMove,
  onImageResizeWidth,
  onImageResizeHeight,
  onImageRemove,
  isEditMode,
}) => {
  const GridItem = isEditMode ? SortablePhotoGridItem : PhotoGridItem;
  const renderButtons = isEditMode
    ? ({ buttonStyle, imageInfo, elementRef }) => (
        <>
          <PhotoGridItemButton
            buttonStyle={buttonStyle}
            onClick={(e) =>
              onImageToggleMove(e.target.closest("button"), elementRef.current)
            }
          >
            <Icon type="arrows-alt" />
          </PhotoGridItemButton>
          <PhotoGridItemMoveButton buttonStyle={buttonStyle}>
            <Icon type="hand-rock" />
          </PhotoGridItemMoveButton>
          <PhotoGridItemButton
            buttonStyle={buttonStyle}
            onClick={() => onImageResizeWidth(imageInfo)}
          >
            <Icon type="arrows-alt-h" />
          </PhotoGridItemButton>
          <PhotoGridItemButton
            buttonStyle={buttonStyle}
            onClick={() => onImageResizeHeight(imageInfo)}
          >
            <Icon type="arrows-alt-v" />
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
      {images.map((image, index) => (
        <GridItem
          key={index}
          index={index}
          imageIndex={index}
          {...image}
          onClick={onImageClick}
          renderButtons={renderButtons}
        />
      ))}
      {children}
    </div>
  );
};

export default SortableContainer(PhotoGrid);
