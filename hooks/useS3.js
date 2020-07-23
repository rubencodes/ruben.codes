import useScript from "./useScript";
import { useMemo } from "react";

const AWS_S3_SDK = "https://sdk.amazonaws.com/js/aws-sdk-2.717.0.min.js";

function useS3({ bucketName, bucketRegion, credentials }) {
	const isReady = useScript(AWS_S3_SDK);
	const s3 = useMemo(() => {
		if (!isReady) return null;

		// Authenticate credentials.
		AWS.config.update({
			region: bucketRegion,
			credentials,
		});

		return new AWS.S3({
			apiVersion: "2006-03-01",
			params: { Bucket: bucketName }
		});
	}, [isReady]);

	return s3;
}

export default useS3;
