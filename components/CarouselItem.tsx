import React, { useState } from "react";

import Loader from "./Loader";
import useImageLoader from "../hooks/useImageLoader";
import useLazyEffect from "../hooks/useLazyEffect";

import styles from "./CarouselItem.module.css";

interface Props {
  image: string;
  tabIndex?: number;
  ariaLabel?: string;
  onClickOutside?: React.MouseEventHandler;
}

const CarouselItem: React.FC<Props> = ({
  image,
  tabIndex,
  ariaLabel,
  onClickOutside,
}) => {
  const [imageToLoad, setImageToLoad] = useState<string | null>(null);
  const { imageSource, isLoading } = useImageLoader(imageToLoad);
  const elementRef = useLazyEffect<HTMLButtonElement>(
    () => setImageToLoad(image),
    [image],
  );

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
          src={imageSource ?? undefined}
          onClick={(event) => event.stopPropagation()}
        />
      )}
    </button>
  );
};

export default CarouselItem;
