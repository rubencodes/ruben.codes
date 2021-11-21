import { useState, useCallback, useMemo } from "react";

import useQueryStringState from "../hooks/useQueryStringState";
import toIntOrNull from "../utilities/toIntOrNull";
import { GalleryImage } from "../types/Gallery";

interface LocalImage extends GalleryImage {
  baseUrl: string;
  path: string;
}

const normalizeImage = ({
  baseUrl,
  path,
  ...image
}: LocalImage): GalleryImage => ({
  ...image,
  imageUrl: image.imageUrl || `${baseUrl}${path}${image.fileName}`,
  spanWidth: image.spanWidth || 1,
  spanHeight: image.spanHeight || 1,
  customStyles: {
    backgroundPositionX: "50%",
    backgroundPositionY: "0%",
    ...(image.customStyles || {}),
  },
});

function useImageManager(
  baseUrl: string,
  fullPath: string,
  thumbnailPath: string,
  defaultPreviewImage: GalleryImage,
  defaultImages: GalleryImage[],
) {
  // Helpers for normalizing the image URLs.
  const normalizeThumbnailImage = useCallback(
    // eslint-disable-next-line no-unused-vars
    ({ imageUrl: _, ...image }) =>
      normalizeImage({ baseUrl, path: thumbnailPath, ...image }),
    [baseUrl, thumbnailPath],
  );
  const normalizeFullImage = useCallback(
    // eslint-disable-next-line no-unused-vars
    ({ imageUrl: _, ...image }) =>
      normalizeImage({ baseUrl, path: fullPath, ...image }),
    [baseUrl, fullPath],
  );

  // Contains both the stored images and newly uploaded ones.
  const [allImages, setAllImages] = useState(
    defaultImages.map(normalizeThumbnailImage),
  );

  // Selected image state.
  const [selectedImageIndex, setSelectedImageIndex] = useQueryStringState(
    "selected",
    toIntOrNull,
  );
  const selectedImageUrl =
    typeof selectedImageIndex === "number" &&
    Number.isInteger(selectedImageIndex)
      ? normalizeFullImage(allImages[selectedImageIndex]).imageUrl
      : null;

  // Helpers for updating the images array.
  const appendImage = useCallback(
    (image) => {
      setAllImages((imgs) => [...imgs, normalizeThumbnailImage(image)]);
    },
    [normalizeThumbnailImage],
  );
  const removeImage = useCallback((index) => {
    setAllImages((imgs) => {
      const withoutImage = [...imgs.slice(0, index), ...imgs.slice(index + 1)];

      return withoutImage;
    });
  }, []);
  const updateImage = useCallback((image, index) => {
    setAllImages((imgs) => {
      const withoutImage = [...imgs.slice(0, index), ...imgs.slice(index + 1)];
      const withImage = [
        ...withoutImage.slice(0, index),
        image,
        ...withoutImage.slice(index),
      ];

      return withImage;
    });
  }, []);
  const moveImage = useCallback(({ oldIndex, newIndex }) => {
    setAllImages((imgs) => {
      const image = imgs[oldIndex];
      const withoutImage = [
        ...imgs.slice(0, oldIndex),
        ...imgs.slice(oldIndex + 1),
      ];
      const withImage = [
        ...withoutImage.slice(0, newIndex),
        image,
        ...withoutImage.slice(newIndex),
      ];

      return withImage;
    });
  }, []);

  const imageManager = useMemo(
    () => ({
      allImages,

      selectedImageUrl,
      selectedImageIndex,
      setSelectedImageIndex,

      appendImage,
      removeImage,
      updateImage,
      moveImage,
    }),
    [
      allImages,
      selectedImageUrl,
      selectedImageIndex,
      setSelectedImageIndex,
      appendImage,
      removeImage,
      updateImage,
      moveImage,
    ],
  );

  return imageManager;
}

export default useImageManager;
