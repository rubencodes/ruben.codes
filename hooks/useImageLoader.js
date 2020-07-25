import { useState, useEffect } from "react";

function useImageLoader(src) {
  const [imageSource, setImageSource] = useState(null);
  const [imageSize, setImageSize] = useState(null);
  const isLoading = imageSource === null;
  useEffect(() => {
    if (!src) {
      return;
    }

    const image = new Image();
    image.onload = function () {
      setImageSource(src);
      setImageSize({
        width: this.width,
        height: this.height,
      });
    };
    image.src = src;
    setImageSource(null);
    setImageSize(null);
  }, [src]);

  return {
    imageSource,
    imageSize,
    isLoading,
  };
}

export default useImageLoader;
