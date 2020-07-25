import React, { useState } from "react";
import PropTypes from "prop-types";

import Loader from "./Loader";
import useImageLoader from "../hooks/useImageLoader";
import useLazyEffect from "../hooks/useLazyEffect";

import styles from "./CarouselItem.module.css";

const CarouselItem = ({ image, tabIndex, ariaLabel, onClickOutside }) => {
  const [imageToLoad, setImageToLoad] = useState(null);
  const { imageSource, isLoading } = useImageLoader(imageToLoad);
  const elementRef = useLazyEffect(() => setImageToLoad(image), [image]);

  return (
    <button
      ref={elementRef}
      className={styles.carouselPageItem}
      tabIndex={tabIndex}
      onClick={onClickOutside}
      disabled={!onClickOutside}
    >
      {isLoading ? (
        <div className={styles.carouselPageItemLoader}>
          <Loader />
        </div>
      ) : (
        <img
          className={styles.carouselPageItemImage}
          alt={ariaLabel}
          src={imageSource}
          onClick={(event) => event.stopPropagation()}
        />
      )}
    </button>
  );
};

CarouselItem.propTypes = {
  image: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  onSelectImage: PropTypes.func,
};

CarouselItem.defaultProps = {
  onSelectImage: null,
};

export default CarouselItem;
