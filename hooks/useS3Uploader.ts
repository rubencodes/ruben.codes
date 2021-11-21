import { useCallback } from "react";
import { AWSConfig } from "../types/AWSConfig";

import useS3 from "./useS3";

function useS3Uploader(
  awsConfig: AWSConfig,
): (path: string, file: File) => Promise<any> {
  const s3 = useS3(awsConfig);
  const uploadFile = useCallback(
    (path: string, file: File) => {
      if (!s3) return;

      // Use S3 ManagedUpload class as it supports multipart uploads.
      const fileName = file.name;
      const upload = s3.upload({
        Bucket: awsConfig.bucketName,
        Key: `${path}${fileName}`,
        Body: file,
        ACL: "public-read",
      });

      return upload.promise();
    },
    [s3],
  );

  return uploadFile;
}

export default useS3Uploader;
