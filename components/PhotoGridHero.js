import React from "react";

import PhotoGridItem from "./PhotoGridItem";

const PhotoGridHero = ({ previewImage }) => (
	<div className="hero">
		<PhotoGridItem
			index={0}
			imageUrl={previewImage.fileUrl}
			customStyles={previewImage.customStyles}
			caption={previewImage.caption}
			span={3}
			disabled
		/>
	</div>
);

export default PhotoGridHero;
