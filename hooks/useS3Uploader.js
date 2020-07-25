import { useCallback } from "react";
import useS3 from "./useS3";

function useS3Uploader(awsCredentials) {
  const s3 = useS3(awsCredentials);
  const uploadFile = useCallback(
    (path, file) => {
      if (!s3) return;

      // Use S3 ManagedUpload class as it supports multipart uploads.
      const fileName = file.name;
      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: awsCredentials.bucketName,
          Key: `${path}${fileName}`,
          Body: file,
          ACL: "public-read",
        },
      });

      return upload.promise();
    },
    [s3],
  );

  return uploadFile;
}

export default useS3Uploader;
