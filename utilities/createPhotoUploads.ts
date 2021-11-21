import ImageBlobReduce from "image-blob-reduce";

import { FULL_IMAGE_SIZE, THUMBNAIL_IMAGE_SIZE } from "./constants";
import { isNotNull } from "./isNotNull";

const SIZES = [FULL_IMAGE_SIZE, THUMBNAIL_IMAGE_SIZE] as const;

interface UploadInfo {
  fullPath: string;
  thumbnailPath: string;
  files: File[];
  uploader: (path: string, file: File) => Promise<any>;
}

const createPhotoUploads = async ({
  fullPath,
  thumbnailPath,
  files,
  uploader,
}: UploadInfo) => {
  const paths = {
    [FULL_IMAGE_SIZE]: fullPath,
    [THUMBNAIL_IMAGE_SIZE]: thumbnailPath,
  };
  const reduce = new ImageBlobReduce();

  return Promise.all(
    [...files].map((file) => {
      if (!file) return null;

      return Promise.all(
        SIZES.map(async (max) => {
          const resizedBlob = await reduce.toBlob(file, { max });
          const resizedFile = new File([resizedBlob], file.name);
          return uploader(paths[max], resizedFile);
        }),
      );
    }),
  ).then((results) => {
    return results
      .filter(isNotNull)
      .map(
        ([{ Location }]) => Location.match(new RegExp(`${fullPath}(.*)`))[1],
      );
  });
};

export default createPhotoUploads;
