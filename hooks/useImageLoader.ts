import { useState, useEffect } from "react";

function useImageLoader(src: string | null) {
  const [imageSource, setImageSource] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const isLoading = imageSource === null;
  useEffect(() => {
    if (!src) {
      return;
    }

    const image = new Image();
    image.onload = function () {
      setImageSource(src);
      setImageSize({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        width: this.width,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
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
