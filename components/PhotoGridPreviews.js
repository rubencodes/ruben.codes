import React from "react";

import PhotoGridItem from "./PhotoGridItem";

import styles from "./PhotoGridPreviews.module.css";

const PhotoGridPreviews = ({ baseUrl, galleryOrder, galleries, onSelect }) => (
	<div className={styles.photoGridPreviews}>
		{galleryOrder.map((key) => galleries[key]).map(({ previewImage, caption }, i) => (
			<PhotoGridItem
				key={i}
				imageUrl={`${baseUrl}${previewImage.path}`}
				customStyles={previewImage.customStyles}
				caption={caption}
				onClick={() => onSelect(galleryOrder[i])}
				span={3}
			/>
		))}
	</div>
);

export default PhotoGridPreviews;
