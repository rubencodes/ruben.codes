import React from "react";

import PhotoGridItem from "./PhotoGridItem";

import styles from "./PhotoGridPreviews.module.css";

const PhotoGridPreviews = ({ baseUrl, galleryOrder, galleries, onSelect }) => (
	<div className={styles.photoGridPreviews}>
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
						onClick={() => onSelect(galleryOrder[i])}
						span={3}
					/>
				);
			})}
	</div>
);

export default PhotoGridPreviews;
