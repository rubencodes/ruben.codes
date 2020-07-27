import React, { memo, useCallback } from "react";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";

import PhotoGridItem from "./PhotoGridItem";
import ConfigButton from "./ConfigButton";

import styles from "./PhotoGrid.module.css";

const ConfigButtonSortable = SortableHandle(ConfigButton);
const PhotoGridItemSortable = SortableElement(PhotoGridItem);

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
    ({ imageInfo, elementRef }) => (
      <>
        <ConfigButton
          iconType="arrows-alt"
          onClick={(e) =>
            onImageToggleMove(
              imageInfo,
              e.target.closest("button"),
              elementRef.current,
            )
          }
        />
        <ConfigButtonSortable iconType="hand-rock" />
        <ConfigButton
          iconType="arrows-alt-h"
          onClick={() => onImageResizeWidth(imageInfo)}
        />
        <ConfigButton
          iconType="arrows-alt-v"
          onClick={() => onImageResizeHeight(imageInfo)}
        />
        <ConfigButton
          iconType="times"
          onClick={() => onImageRemove(imageInfo)}
        />
      </>
    ),
    [onImageToggleMove, onImageResizeWidth, onImageResizeHeight, onImageRemove],
  );

  return (
    <div ref={gridRef} className={styles.photoGrid}>
      {images.map((image, index) => (
        <PhotoGridItemSortable
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
