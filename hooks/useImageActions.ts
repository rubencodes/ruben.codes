import { useCallback, useState, useEffect } from "react";
import { GalleryImage } from "../types/Gallery";

import clamp from "../utilities/clamp";
import getPercentFromString from "../utilities/getPercentFromString";
import useImageManager from "./useImageManager";

function onImagePan(
  event: WheelEvent,
  { imageIndex, ...image }: GalleryImage & { imageIndex: number },
  updateImage: (image: GalleryImage, index: number) => void,
) {
  event.preventDefault();

  const { didChange, backgroundPositionX, backgroundPositionY } =
    calculateNextBackgroundPositions(event);

  // Update the state if necessary.
  if (didChange) {
    updateImage(
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
}

const calculateNextPosition = (currentValue: string, delta: number) => {
  if (Math.abs(delta) > 1) {
    const valuePercent = getPercentFromString(currentValue);

    return `${clamp(valuePercent + delta, {
      min: 0,
      max: 100,
    })}%`;
  }

  return currentValue;
};

const calculateNextBackgroundPositions = (event: WheelEvent) => {
  const { deltaX, deltaY, target: imageEl } = event;
  const { backgroundPositionX, backgroundPositionY } = (
    imageEl as HTMLImageElement
  ).style;
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
function useImageActions(imageManager: ReturnType<typeof useImageManager>) {
  // Image was clicked.
  const onImageClick = useCallback(
    ({ imageIndex }) => imageManager.setSelectedImageIndex(imageIndex),
    [imageManager.setSelectedImageIndex],
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
  const [imagePanEnabledList, setImagePanEnabledList] = useState<
    {
      imageUrl: string;
      imageEl: HTMLImageElement;
    }[]
  >([]);
  const onImageTogglePan = useCallback(
    ({ imageUrl }, buttonEl: HTMLButtonElement, imageEl: HTMLImageElement) => {
      const isImagePanEnabled = imagePanEnabledList.find(
        (img) => img.imageUrl === imageUrl,
      );

      if (isImagePanEnabled) {
        buttonEl.style.backgroundColor = "#FFFFFF";
        setImagePanEnabledList((list) =>
          list.filter((img) => img.imageUrl !== imageUrl),
        );
      } else {
        buttonEl.style.backgroundColor = "#05CC05";
        setImagePanEnabledList((list) => [...list, { imageUrl, imageEl }]);
      }
    },
    [imagePanEnabledList],
  );
  useEffect(() => {
    const eventListeners: Record<string, (event: WheelEvent) => void> = {};
    imagePanEnabledList.forEach(({ imageUrl, imageEl }) => {
      const imageIndex = imageManager.allImages.findIndex(
        (img) => img.imageUrl === imageUrl,
      );
      const image = imageManager.allImages[imageIndex];
      eventListeners[imageUrl] = (event) =>
        onImagePan(event, { imageIndex, ...image }, imageManager.updateImage);
      imageEl.addEventListener(
        "mousewheel",
        eventListeners[imageUrl] as EventListener,
        false,
      );
    });

    return () => {
      imagePanEnabledList.forEach(({ imageUrl, imageEl }) => {
        imageEl.removeEventListener(
          "mousewheel",
          eventListeners[imageUrl] as EventListener,
        );
      });
    };
  }, [imageManager.allImages, imageManager.updateImage, imagePanEnabledList]);

  return {
    onImageClick,
    onImageRemove,
    onImageResizeWidth,
    onImageResizeHeight,
    onImageTogglePan,
  };
}

export default useImageActions;
