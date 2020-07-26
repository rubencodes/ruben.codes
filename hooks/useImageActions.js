import { useCallback, useRef } from "react";

import clamp from "../utilities/clamp";
import getPercentFromString from "../utilities/getPercentFromString";

const calculateNextPosition = (currentValue, delta) => {
  if (Math.abs(delta) > 1) {
    const valuePercent = getPercentFromString(currentValue);

    return `${clamp(valuePercent + delta, {
      min: 0,
      max: 100,
    })}%`;
  }

  return currentValue;
};

const calculateNextBackgroundPositions = (event) => {
  const { deltaX, deltaY, target: imageEl } = event;
  const { backgroundPositionX, backgroundPositionY } = imageEl.style;
  const newBackgroundPositionX = calculateNextPosition(
    backgroundPositionX,
    deltaX,
  );
  const newBackgroundPositionY = calculateNextPosition(
    backgroundPositionY,
    deltaY,
  );

  return {
    didChange:
      newBackgroundPositionX !== backgroundPositionX ||
      newBackgroundPositionY !== backgroundPositionY,
    backgroundPositionX: newBackgroundPositionX,
    backgroundPositionY: newBackgroundPositionY,
  };
};

// Handle image actions.
function useImageActions(imageManager) {
  // Image was clicked.
  const onImageClick = useCallback(
    ({ imageIndex }) => imageManager.setSelectedImageIndex(imageIndex),
    [imageManager.setSelectedImageInde],
  );

  // Remove Image button clicked.
  const onImageRemove = useCallback(
    ({ imageIndex }) => imageManager.removeImage(imageIndex),
    [imageManager.removeImage],
  );

  // Resize Image Width button clicked.
  const onImageResizeWidth = useCallback(
    ({ imageIndex, ...image }) => {
      imageManager.updateImage(
        { ...image, spanWidth: (image.spanWidth % 3) + 1 },
        imageIndex,
      );
    },
    [imageManager.updateImage],
  );

  // Resize Image Height button clicked.
  const onImageResizeHeight = useCallback(
    ({ imageIndex, ...image }) => {
      imageManager.updateImage(
        { ...image, spanHeight: (image.spanHeight % 3) + 1 },
        imageIndex,
      );
    },
    [imageManager.updateImage],
  );

  // Pan Image button clicked.
  const imageMoveHandlers = useRef({});
  const onImageMove = useCallback(
    (event, { imageIndex, ...image }) => {
      event.preventDefault();

      const {
        didChange,
        backgroundPositionX,
        backgroundPositionY,
      } = calculateNextBackgroundPositions(event);

      // Update the state if necessary.
      if (didChange) {
        imageManager.updateImage(
          {
            ...image,
            customStyles: {
              ...image.customStyles,
              backgroundPositionX,
              backgroundPositionY,
            },
          },
          imageIndex,
        );
      }
    },
    [imageManager.updateImage],
  );
  const onImageToggleMove = useCallback(
    ({ imageIndex, ...image }, buttonEl, imageEl) => {
      const isMoveModeEnabled = imageMoveHandlers.current[image.imageUrl];
      if (isMoveModeEnabled) {
        buttonEl.style.backgroundColor = "#FFFFFF";
        imageEl.removeEventListener(
          "mousewheel",
          imageMoveHandlers.current[image.imageUrl],
        );
      } else {
        buttonEl.style.backgroundColor = "#05CC05";
        imageMoveHandlers.current[image.imageUrl] = (event) => {
          onImageMove(event, { imageIndex, ...image });
        };
        imageEl.addEventListener(
          "mousewheel",
          imageMoveHandlers.current[image.imageUrl],
        );
      }
    },
    [onImageMove],
  );

  return {
    onImageClick,
    onImageRemove,
    onImageResizeWidth,
    onImageResizeHeight,
    onImageToggleMove,
  };
}

export default useImageActions;
