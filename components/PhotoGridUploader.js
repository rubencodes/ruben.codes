import React from "react";
import classnames from "classnames";
import ImageBlobReduce from "image-blob-reduce";

import useDragAndDropUploader from "../hooks/useDragAndDropUploader";
import useS3Uploader from "../hooks/useS3Uploader";
import { AWS_CREDENTIALS } from "../utilities/constants";

import styles from "./PhotoGridUploader.module.css";

const FULL_IMAGE_SIZE = 2000;
const THUMBNAIL_IMAGE_SIZE = 1000;
const reduce = new ImageBlobReduce();

const PhotoGridUploader = ({
  dropZoneRef,
  fullPath,
  thumbnailPath,
  onStartUpload,
  onFinishUpload,
  disabled,
}) => {
  const uploadFile = useS3Uploader(AWS_CREDENTIALS);
  const isHovering = useDragAndDropUploader(
    dropZoneRef,
    (files) => {
      if (disabled) {
        return;
      }

      const uploadFiles = async (file) => {
        if (!file) return null;

        const paths = {
          [FULL_IMAGE_SIZE]: fullPath,
          [THUMBNAIL_IMAGE_SIZE]: thumbnailPath,
        };

        return Promise.all(
          [FULL_IMAGE_SIZE, THUMBNAIL_IMAGE_SIZE].map(async (max) => {
            const resizedBlob = await reduce.toBlob(file, { max });
            const resizedFile = new File([resizedBlob], file.name);
            return uploadFile(paths[max], resizedFile);
          }),
        );
      };
      const extractFileNames = (results) => {
        return results
          .filter(Boolean)
          .map(
            ([{ Location }]) =>
              Location.match(new RegExp(`${fullPath}(.*)`))[1],
          );
      };

      onStartUpload();
      const fileUploads = [...files].map(uploadFiles);
      return Promise.all(fileUploads)
        .then(extractFileNames)
        .then(onFinishUpload);
    },
    [uploadFile, disabled],
  );

  return (
    <div
      className={classnames(styles.photoGridUploader, {
        [styles.photoGridUploaderVisible]: isHovering,
      })}
    >
      Upload File
    </div>
  );
};

export default PhotoGridUploader;
