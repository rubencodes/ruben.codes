import React, { useState } from "react";

import PhotoGridItem from "./PhotoGridItem";
import ImageModal from "./ImageModal";
import useKeydownEvent from "./useKeydownEvent";

import styles from "./PhotoGrid.module.css";

const PhotoGrid = ({ baseUrl, images }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useState(null);
	const selectedImagePath = selectedImageIndex !== null
		? images[selectedImageIndex].path
		: null;

	useKeydownEvent((event) => {
		switch (event.key) {
			case "ArrowLeft": {
				setSelectedImageIndex((index) => Math.max(index - 1, 0));
				return;
			}
			case "ArrowRight": {
				setSelectedImageIndex((index) => Math.min(index + 1, images.length - 1));
				return;
			}
			case "Escape": {
				setSelectedImageIndex(null);
			}
			default: {
				return;
			}
		}
	}, [images]);

	return (
		<>
			<div className={styles.photoGrid}>
				{images.map(({ path, span, customStyles }, index) => (
					<PhotoGridItem
						key={index}
						imageUrl={`${baseUrl}${path}`}
						customStyles={customStyles}
						onClick={() => setSelectedImageIndex(index)}
						span={span}
					/>
				))}
			</div>
			{selectedImagePath && (
				<ImageModal
					src={`${baseUrl}${selectedImagePath}`}
					close={() => setSelectedImageIndex(null)}
				/>
			)}
		</>
	)
};

export default PhotoGrid;
