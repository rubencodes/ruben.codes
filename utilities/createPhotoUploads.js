import ImageBlobReduce from "image-blob-reduce";

import { FULL_IMAGE_SIZE, THUMBNAIL_IMAGE_SIZE } from "./constants";

const createPhotoUploads = async ({
  fullPath,
  thumbnailPath,
  files,
  uploader,
}) => {
  const paths = {
    [FULL_IMAGE_SIZE]: fullPath,
    [THUMBNAIL_IMAGE_SIZE]: thumbnailPath,
  };
  const reduce = new ImageBlobReduce();

  return Promise.all(
    [...files].map((file) => {
      if (!file) return null;

      return Promise.all(
        [FULL_IMAGE_SIZE, THUMBNAIL_IMAGE_SIZE].map(async (max) => {
          const resizedBlob = await reduce.toBlob(file, { max });
          const resizedFile = new File([resizedBlob], file.name);
          return uploader(paths[max], resizedFile);
        }),
      );
    }),
  ).then(([{ Location }]) => {
    return Location.match(new RegExp(`${fullPath}(.*)`))[1];
  });
};

export default createPhotoUploads;
