import React from "react";

import { PhotoGrid } from "./PhotoGrid";

const GalleryPreviews = ({ baseUrl, galleryOrder, galleries, onSelect }) => {
	const onSelectGalleryIndex = ({ imageIndex }) => onSelect(galleryOrder[imageIndex]);
	return (
		<PhotoGrid
			images={galleryOrder
				.map((key) => galleries[key])
				.map(({ thumbnailPath, previewImage }) => ({
					imageUrl: `${baseUrl}${thumbnailPath}${previewImage.fileName}`,
					customStyles: previewImage.customStyles,
					caption: previewImage.caption,
					span: previewImage.span,
				}))
			}
			onImageClick={onSelectGalleryIndex}
		/>
	);
};

export default GalleryPreviews;
