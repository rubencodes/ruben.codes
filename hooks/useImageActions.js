import { useCallback } from "react";

// Handle image actions.
function useImageActions(imageManager) {
  const onImageClick = useCallback(
    ({ imageIndex }) => imageManager.setSelectedImageIndex(imageIndex),
    [],
  );
  const onImageRemove = useCallback(
    ({ imageIndex }) => imageManager.removeImage(imageIndex),
    [imageManager.removeImage],
  );
  const onImageResizeWidth = useCallback(
    ({ imageIndex, ...image }) => {
      imageManager.updateImage(
        { ...image, spanWidth: (image.spanWidth % 3) + 1 },
        imageIndex,
      );
    },
    [imageManager.updateImage],
  );
  const onImageResizeHeight = useCallback(
    ({ imageIndex, ...image }) => {
      imageManager.updateImage(
        { ...image, spanHeight: (image.spanHeight % 3) + 1 },
        imageIndex,
      );
    },
    [imageManager.updateImage],
  );
  const onImageMove = useCallback((event) => {
    event.preventDefault();
    const { deltaX, deltaY, target: image } = event;
    const { backgroundPositionX, backgroundPositionY } = image.style;

    // Handle horizontal movement.
    if (Math.abs(deltaX) > 1) {
      const backgroundPositionXPercent = parseInt(
        backgroundPositionX.match(/(.*)%/)[1],
        10,
      );

      image.style.backgroundPositionX = `${Math.min(
        Math.max(backgroundPositionXPercent + deltaX, 0),
        100,
      )}%`;
    }

    // Handle vertical movement.
    if (Math.abs(deltaY) > 1) {
      const backgroundPositionYPercent = parseInt(
        backgroundPositionY.match(/(.*)%/)[1],
        10,
      );

      image.style.backgroundPositionY = `${Math.min(
        Math.max(backgroundPositionYPercent + deltaY, 0),
        100,
      )}%`;
    }
  }, []);
  const onImageToggleMove = useCallback(
    (button, image) => {
      const DEFAULT_COLOR = "#FFFFFF";
      const ENABLED_COLOR = "#05CC05";
      const isMoveModeEnabled = button.style.backgroundColor === ENABLED_COLOR;
      if (isMoveModeEnabled) {
        image.removeEventListener("mousewheel", onImageMove);
        button.style.backgroundColor = DEFAULT_COLOR;
      } else {
        image.addEventListener("mousewheel", onImageMove);
        button.style.backgroundColor = ENABLED_COLOR;
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
