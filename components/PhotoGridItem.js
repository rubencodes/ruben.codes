import React, { forwardRef, memo } from "react";
import classnames from "classnames";

import useLazyEffect from "../hooks/useLazyEffect";
import ImageLicenseData from "./ImageLicenseData";

import styles from "./PhotoGridItem.module.css";

const PhotoGridItem = ({
  imageIndex,
  imageUrl,
  customStyles,
  spanWidth = 1,
  spanHeight = 1,
  caption,
  onClick,
  customContainerStyles,
  renderButtons,
}) => {
  const elementRef = useLazyEffect(
    (element) => {
      element.style.backgroundImage = `url(${imageUrl})`;
    },
    [imageUrl],
  );
  const isDisabled = !onClick || !!renderButtons;
  const imageInfo = {
    imageIndex,
    imageUrl,
    customStyles,
    spanWidth,
    spanHeight,
    caption,
  };

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
      {renderButtons && (
        <div className={styles.photoGridItem__ButtonsContainer}>
          {renderButtons({
            buttonStyle: styles.photoGridItem__Button,
            imageInfo,
          })}
        </div>
      )}
    </div>
  );
};

export default memo(PhotoGridItem);
