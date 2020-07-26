import React, { memo, useCallback } from "react";
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
  const renderButtons = useCallback(
    ({ buttonStyle, imageInfo, elementRef }) => (
      <>
        <PhotoGridItemButton
          buttonStyle={buttonStyle}
          onClick={(e) =>
            onImageToggleMove(
              imageInfo,
              e.target.closest("button"),
              elementRef.current,
            )
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
    ),
    [onImageToggleMove, onImageResizeWidth, onImageResizeHeight, onImageRemove],
  );

  return (
    <div ref={gridRef} className={styles.photoGrid}>
      {images.map((image, index) => (
        <SortablePhotoGridItem
          key={image.fileName}
          index={index}
          imageIndex={index}
          {...image}
          onClick={onImageClick}
          renderButtons={renderButtons}
          isEditMode={isEditMode}
        />
      ))}
      {children}
    </div>
  );
};

export default memo(SortableContainer(PhotoGrid));
