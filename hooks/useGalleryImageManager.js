import { useState, useCallback, useMemo } from "react";

function useGalleryImageManager(_galleryOrder, _galleries) {
  // Contains both the stored images and newly uploaded ones.
  const [galleryOrder, setGalleryOrder] = useState(_galleryOrder);
  const [galleries, setGalleries] = useState(_galleries);

  // Helpers for updating the images array.
  const removeImage = useCallback((index) => {
    const galleryId = galleryOrder[index];
    setGalleryOrder((galls) => {
      const withoutGallery = [
        ...galls.slice(0, index),
        ...galls.slice(index + 1),
      ];

      return withoutGallery;
    });
    setGalleries((galleries) => {
      const newGalleries = { ...galleries };
      delete newGalleries[galleryId];

      return newGalleries;
    });
  }, []);
  const updateImage = useCallback((previewImage, index) => {
    const galleryId = galleryOrder[index];
    setGalleries((galls) => {
      return {
        ...galls,
        [galleryId]: {
          ...galls[galleryId],
          previewImage,
        },
      };
    });
  }, []);
  const moveImage = useCallback(({ oldIndex, newIndex }) => {
    setGalleryOrder((galls) => {
      const galleryId = galls[oldIndex];
      const withoutGallery = [
        ...galls.slice(0, oldIndex),
        ...galls.slice(oldIndex + 1),
      ];
      const withImage = [
        ...withoutGallery.slice(0, newIndex),
        galleryId,
        ...withoutGallery.slice(newIndex),
      ];

      return withImage;
    });
  }, []);

  const imageManager = useMemo(
    () => ({
      galleryOrder,
      galleries,

      removeImage,
      updateImage,
      moveImage,
    }),
    [galleryOrder, galleries, removeImage, updateImage, moveImage],
  );

  return imageManager;
}

export default useGalleryImageManager;
