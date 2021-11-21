import { useState, useCallback, useMemo } from "react";

function useImageUploadManager(
  callback: (fileName: string) => void,
  callbackDependencies: any[],
) {
  // Uploading image state.
  const [isUploading, setIsUploading] = useState(false);
  const onStartUpload = useCallback(() => setIsUploading(true), []);
  const onFinishUpload = useCallback((fileNames) => {
    setIsUploading(false);
    fileNames.forEach(callback);
  }, callbackDependencies);

  const imageUploadManager = useMemo(
    () => ({
      isUploading,
      onStartUpload,
      onFinishUpload,
    }),
    [isUploading, onStartUpload, onFinishUpload],
  );

  return imageUploadManager;
}

export default useImageUploadManager;
