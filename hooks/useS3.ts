import { useMemo } from "react";

import useScript from "./useScript";
import { IS_DEV } from "../utilities/constants";
import { AWSConfig } from "../types/AWSConfig";

const AWS_S3_SDK = "https://sdk.amazonaws.com/js/aws-sdk-2.717.0.min.js";

declare global {
  interface Window {
    AWS?: any;
  }
}

function useS3({ bucketName, bucketRegion, credentials }: AWSConfig) {
  const isReady = useScript(AWS_S3_SDK, { shouldLoadScript: IS_DEV });
  const s3 = useMemo(() => {
    if (!isReady) return null;

    // Authenticate credentials.
    window.AWS?.config.update({
      region: bucketRegion,
      credentials,
    });

    return new window.AWS?.S3({
      apiVersion: "2006-03-01",
      params: { Bucket: bucketName },
    });
  }, [isReady]);

  return s3;
}

export default useS3;
