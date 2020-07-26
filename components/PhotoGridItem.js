import React, { useRef, memo, useEffect } from "react";
import classnames from "classnames";

import useLazyEffect from "../hooks/useLazyEffect";
import ImageLicenseData from "./ImageLicenseData";

import styles from "./PhotoGridItem.module.css";

const PhotoGridItem = ({
  imageIndex,
  imageUrl,
  fileName,
  customStyles,
  spanWidth = 1,
  spanHeight = 1,
  caption,
  onClick,
  customContainerStyles,
  renderButtons,
  isEditMode,
}) => {
  const elementRef = useRef();
  const lazyLoadBackground = useLazyEffect(
    (element) => {
      element.style.backgroundImage = `url(${imageUrl})`;
    },
    [imageUrl],
  );
  useEffect(() => lazyLoadBackground(elementRef.current), []);

  const isDisabled = !onClick || isEditMode;
  const imageInfo = {
    imageIndex,
    imageUrl,
    fileName,
    customStyles,
    spanWidth,
    spanHeight,
    caption,
  };

  console.log(fileName, customStyles);

  return (
    <div
      className={classnames(
        styles.photoGridItem,
        styles[`photoGridItemSpanWidth${spanWidth}`],
        styles[`photoGridItemSpanHeight${spanHeight}`],
        { [styles.photoGridItemActive]: !isDisabled },
      )}
    >
      <button
        className={styles.photoGridItem__Main}
        onClick={() => onClick(imageInfo)}
        disabled={isDisabled}
        style={customContainerStyles}
      >
        <ImageLicenseData imageUrl={imageUrl} />
        <div
          ref={elementRef}
          className={styles.photoGridItem__Inner}
          style={customStyles}
        />
        <div className={styles.photoGridItem__Caption}>{caption}</div>
      </button>
      {isEditMode && (
        <div className={styles.photoGridItem__ButtonsContainer}>
          {renderButtons({
            buttonStyle: styles.photoGridItem__Button,
            imageInfo,
            elementRef,
          })}
        </div>
      )}
    </div>
  );
};

export default memo(PhotoGridItem);
