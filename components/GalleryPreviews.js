import React from "react";

import PhotoGrid from "./PhotoGrid";
import PhotoGridItem from "./PhotoGridItem";

const GalleryPreviews = ({ baseUrl, galleryOrder, galleries, onSelect }) => {
	const onSelectGalleryIndex = (index) => onSelect(galleryOrder[index]);
	return (
		<PhotoGrid>
			{galleryOrder
				.map((key) => galleries[key])
				.map(({ thumbnailPath, previewImage }, index) => {
					const imageUrl = `${baseUrl}${thumbnailPath}${previewImage.fileName}`;

					return (
						<PhotoGridItem
							key={imageUrl}
							index={index}
							imageUrl={imageUrl}
							customStyles={previewImage.customStyles}
							caption={previewImage.caption}
							span={previewImage.span}
							onClick={onSelectGalleryIndex}
						/>
					);
				})}
		</PhotoGrid>
	);
};

export default GalleryPreviews;
