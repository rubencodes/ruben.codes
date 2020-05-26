import React from "react";
import Head from "next/head";

const ImageLicenseData = ({ imageUrl }) => (
	<Head>
		<script
			key={imageUrl}
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "https://schema.org/",
					"@type": "ImageObject",
					"url": imageUrl,
					"license": "https://creativecommons.org/licenses/by-nc/4.0/",
					"acquireLicensePage": "https://ruben.codes"
				})
			}}
		/>
	</Head>
);

export default ImageLicenseData;
