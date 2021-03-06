import React, { useRef, useMemo, useLayoutEffect, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import CarouselItem from "./CarouselItem";
import useKeydownEvent from "../hooks/useKeydownEvent";
import useIsFirstRender from "../hooks/useIsFirstRender";
import useArrayNavigator from "../hooks/useArrayNavigator";

import styles from "./Carousel.module.css";

// Scroll to a page in a scroll area.
const scrollToPage = (
  scrollArea,
  page,
  { isScrolling, setIsScrolling, immediate = false },
) => {
  // Check to make sure we're not actively scrolling.
  if (isScrolling) return;

  // Check to make sure we're not already scrolled to that page.
  const scrolledPage = scrollArea.scrollLeft / scrollArea.clientWidth;
  if (scrolledPage === page) {
    return;
  }

  setIsScrolling(true);
  scrollArea.scrollTo({
    left: scrollArea.clientWidth * page,
    behavior: immediate ? "auto" : "smooth",
  });
  setTimeout(() => setIsScrolling(false), immediate ? 10 : 1000);
};

// Split an array into chunks of a given size.
const arrayToChunks = (arr, chunkSize) => {
  return arr.reduce(
    (chunks, item) => {
      const lastChunk = chunks[chunks.length - 1];
      const hasRoomInChunk = lastChunk.length < chunkSize;
      return hasRoomInChunk
        ? [...chunks.slice(0, chunks.length - 1), [...lastChunk, item]]
        : [...chunks, [item]];
    },
    [[]],
  );
};

const Carousel = ({
  className,
  currentPage,
  setCurrentPage,
  images,
  onSelectImage,
  onClickOutside,
  verticalCount,
  horizontalCount,
  spacing,
  hidePageIndicators,
  hidePageNavigationButtons,
}) => {
  // Split the image array in pages.
  const pageSize = verticalCount * horizontalCount;
  const pagedImages = useMemo(() => arrayToChunks(images, pageSize), [
    images,
    pageSize,
  ]);
  const pageCount = pagedImages.length;
  const pageWrapperStyle = {
    margin: `0 ${-spacing / 2}px`,
  };
  const pageStyle = {
    gridTemplate: `repeat(${verticalCount}, 1fr) / repeat(${horizontalCount}, 1fr)`,
    gridGap: spacing,
    paddingLeft: spacing / 2,
    paddingRight: spacing / 2,
  };

  // Update current page state from scroll.
  const isScrollingRef = useRef(false);
  const onScroll = useCallback(
    (event) => {
      const isScrolling = isScrollingRef.current;
      const page = event.target.scrollLeft / event.target.clientWidth;
      const nextPage = Math.round(page);

      // If we're not known to be scrolling, and we're between pages,
      // Mark that as scrolling.
      if (!isScrolling && currentPage !== nextPage) {
        isScrollingRef.current = true;
      }

      // If we're known to be scrolling, but we've arrived at the next page,
      // Mark scrolling done, and update the current page.
      if (isScrolling && nextPage === page) {
        setCurrentPage(nextPage);
        isScrollingRef.current = false;
      }
    },
    [currentPage, setCurrentPage],
  );

  // Update current page state from keyboard.
  const ArrayNavigator = useArrayNavigator(
    currentPage,
    setCurrentPage,
    pageCount,
  );
  useKeydownEvent(
    (event) => {
      // Don't do anything while already scrolling.
      const isScrolling = isScrollingRef.current;
      if (isScrolling) {
        return;
      }

      switch (event.key) {
        case "ArrowLeft": {
          ArrayNavigator.decrement();
          break;
        }
        case "ArrowRight": {
          ArrayNavigator.increment();
          break;
        }
        case "Home": {
          ArrayNavigator.goToStart();
          break;
        }
        case "End": {
          ArrayNavigator.goToEnd();
          break;
        }
        case "Escape": {
          ArrayNavigator.clear();
          break;
        }
        default: {
          break;
        }
      }
    },
    [ArrayNavigator],
  );

  // When the current page state changes, make sure we're scrolled to the correct page.
  const scrollAreaRef = useRef(null);
  const isFirstRender = useIsFirstRender();
  useLayoutEffect(() => {
    scrollToPage(scrollAreaRef.current, currentPage, {
      isScrolling: isScrollingRef.current,
      setIsScrolling: (val) => (isScrollingRef.current = val),
      immediate: isFirstRender,
    });
  }, [currentPage]);

  return (
    <section
      className={classnames(styles.carousel, className)}
      aria-roledescription="carousel"
      aria-label="Image Carousel"
    >
      <div
        ref={scrollAreaRef}
        id="carouselPageWrapper"
        className={styles.carouselPageWrapper}
        style={pageWrapperStyle}
        onScroll={onScroll}
        aria-live="polite"
        tabIndex={-1}
      >
        {pagedImages.map((images, pageIndex) => (
          <div
            key={pageIndex}
            className={styles.carouselPage}
            style={pageStyle}
            role="group"
            aria-roledescription="slide"
            aria-label={`${pageIndex} of ${pagedImages.length}`}
            aria-hidden={currentPage != pageIndex}
          >
            {images.map(({ url, altText }) => (
              <CarouselItem
                key={url}
                image={url}
                ariaLabel={altText}
                onSelectImage={onSelectImage}
                onClickOutside={onClickOutside}
              />
            ))}
          </div>
        ))}
      </div>
      {!hidePageIndicators && pagedImages.length > 0 && (
        <div className={styles.carouselPageControls}>
          {!hidePageNavigationButtons && (
            <button
              className={styles.carouselPageButton}
              onClick={ArrayNavigator.decrement}
              disabled={currentPage === 0}
              aria-controls="carouselPageWrapper"
              aria-label="Previous Page"
            >
              <div className={styles.carouselPageButtonPrev} />
            </button>
          )}
          {!hidePageIndicators &&
            pagedImages.map((_, index) => (
              <span
                key={index}
                className={classnames(styles.carouselPageIndicator, {
                  [styles.carouselPageIndicator__active]: index === currentPage,
                  [styles.carouselPageIndicator__inactive]:
                    index !== currentPage,
                })}
              />
            ))}
          {!hidePageNavigationButtons && (
            <button
              className={styles.carouselPageButton}
              onClick={ArrayNavigator.increment}
              disabled={currentPage === pagedImages.length - 1}
              aria-controls="carouselPageWrapper"
              aria-label="Next Page"
            >
              <div className={styles.carouselPageButtonNext} />
            </button>
          )}
        </div>
      )}
    </section>
  );
};

Carousel.propTypes = {
  className: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      altText: PropTypes.string,
    }),
  ),
  onSelectImage: PropTypes.func,
  verticalCount: PropTypes.number,
  horizontalCount: PropTypes.number,
  spacing: PropTypes.number,
  hidePageIndicators: PropTypes.bool,
  initialPage: PropTypes.number,
};

Carousel.defaultProps = {
  className: "",
  images: [],
  onSelectImage: null,
  verticalCount: 1,
  horizontalCount: 1,
  spacing: 8,
  hidePageIndicators: false,
  initialPage: 0,
};

export default Carousel;
