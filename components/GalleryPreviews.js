import React from "react";

import PhotoGrid from "./PhotoGrid";
import PhotoGridItem from "./PhotoGridItem";

const GalleryPreviews = ({ baseUrl, galleryOrder, galleries, onSelect }) => (
	<PhotoGrid>
		{galleryOrder
			.map((key) => galleries[key])
			.map(({ thumbnailPath, previewImage }, i) => {
				const imageUrl = `${baseUrl}${thumbnailPath}${previewImage.fileName}`;

				return (
					<PhotoGridItem
						key={imageUrl}
						imageUrl={imageUrl}
						customStyles={previewImage.customStyles}
						caption={previewImage.caption}
						span={previewImage.span}
						onClick={() => onSelect(galleryOrder[i])}
					/>
				);
			})}
	</PhotoGrid>
);

export default GalleryPreviews;
