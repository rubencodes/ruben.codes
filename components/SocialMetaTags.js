import React from "react";

const SocialMetaTags = ({
	title,
	description,
	imageUrl,
	pageUrl,
}) => (
	<>
		<meta property="og:title" content={title} />
		<meta property="og:description" content={description} />
		<meta property="og:image" content={imageUrl} />
		<meta property="og:url" content={pageUrl} />

		<meta name="twitter:title" content={title} />
		<meta name="twitter:description" content={description} />
		<meta name="twitter:image" content={imageUrl} />
		<meta name="twitter:card" content="summary_large_image" />
	</>
);

export default SocialMetaTags;
