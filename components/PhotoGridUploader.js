import React from "react";
import classnames from "classnames";

import useDragAndDropUploader from "../hooks/useDragAndDropUploader";
import useS3Uploader from "../hooks/useS3Uploader";
import { AWS_CREDENTIALS } from "../utilities/constants";

import styles from "./PhotoGridUploader.module.css";

const PhotoGridUploader = ({
  dropZoneRef,
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

      onStartUpload();
      const fileUploads = [...files].map((file) => uploadFile("test/", file));
      return Promise.all(fileUploads)
        .then((results) => {
          return results.filter(Boolean).map(({ Location }) => Location);
        })
        .then((fileUrls) => onFinishUpload(fileUrls));
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
