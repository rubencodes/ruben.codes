/* eslint-disable react/prop-types */
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
  onImageTogglePan,
  onImageResizeWidth,
  onImageResizeHeight,
  onImageRemove,
  isEditMode,
}) => {
  const renderButtons = useCallback(
    ({ imageInfo, elementRef }) => (
      <>
        <ConfigButtonSortable
          tooltipText="Move Image"
          tooltipDirection="top"
          iconType="hand-rock"
        />
        <ConfigButton
          tooltipText="Horizontal Resize"
          tooltipDirection="top"
          iconType="arrows-alt-h"
          onClick={() => onImageResizeWidth(imageInfo)}
        />
        <ConfigButton
          tooltipText="Vertical Resize"
          tooltipDirection="top"
          iconType="arrows-alt-v"
          onClick={() => onImageResizeHeight(imageInfo)}
        />
        <ConfigButton
          tooltipText="Pan Image"
          tooltipDirection="top"
          iconType="arrows-alt"
          onClick={(e) =>
            onImageTogglePan(
              imageInfo,
              e.target.closest("button"),
              elementRef.current,
            )
          }
        />
        <ConfigButton
          tooltipText="Delete Image"
          tooltipDirection="top"
          iconType="times"
          onClick={() => onImageRemove(imageInfo)}
        />
      </>
    ),
    [onImageTogglePan, onImageResizeWidth, onImageResizeHeight, onImageRemove],
  );

  return (
    <div ref={gridRef} className={styles.photoGrid}>
      {images.map((image, index) => (
        <PhotoGridItemSortable
          key={image.fileName}
          index={index}
          ariaLabel={`Image ${index + 1} of ${images.length}`}
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
