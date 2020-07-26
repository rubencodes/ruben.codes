import React from "react";
import classnames from "classnames";

import useDragAndDropUploader from "../hooks/useDragAndDropUploader";
import useS3Uploader from "../hooks/useS3Uploader";
import createPhotoUploads from "../utilities/createPhotoUploads";
import { AWS_CREDENTIALS } from "../utilities/constants";

import styles from "./PhotoGridUploader.module.css";

const PhotoGridUploader = ({
  dropZoneRef,
  fullPath,
  thumbnailPath,
  onStartUpload,
  onFinishUpload,
  disabled,
}) => {
  const uploader = useS3Uploader(AWS_CREDENTIALS);
  const isHovering = useDragAndDropUploader(
    dropZoneRef,
    (files) => {
      if (disabled) {
        return;
      }

      onStartUpload();
      return createPhotoUploads({
        files,
        fullPath,
        thumbnailPath,
        uploader,
      }).then((fileNames) => onFinishUpload(fileNames));
    },
    [uploader, disabled],
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
