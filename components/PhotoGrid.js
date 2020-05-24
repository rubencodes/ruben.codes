import React, { memo } from "react";

import PhotoGridItem from "./PhotoGridItem";
import ImageModal from "./ImageModal";
import useKeydownEvent from "./useKeydownEvent";
import useQueryStringState from "./useQueryStringState";

import styles from "./PhotoGrid.module.css";

const toIntOrNull = (val) => val ? parseInt(val, 10) : null;

const PhotoGrid = ({ baseUrl, images }) => {
	const [selectedImageIndex, setSelectedImageIndex] = useQueryStringState("selected", toIntOrNull);
	const selectedImagePath = Number.isInteger(selectedImageIndex)
		? images[selectedImageIndex].path
		: null;

	useKeydownEvent((event) => {
		// Don't do anything if there's no image.
		if (!Number.isInteger(selectedImageIndex)) {
			return;
		}

		switch (event.key) {
			case "ArrowLeft": {
				setSelectedImageIndex(Math.max(selectedImageIndex - 1, 0));
				return;
			}
			case "ArrowRight": {
				setSelectedImageIndex(Math.min(selectedImageIndex + 1, images.length - 1));
				return;
			}
			case "Escape": {
				setSelectedImageIndex(null);
				return;
			}
			default: {
				return;
			}
		}
	}, [images, selectedImageIndex]);

	return (
		<>
			<div className={styles.photoGrid}>
				{images.map(({ thumbnailPath, span, customStyles }, index) => (
					<PhotoGridItem
						key={index}
						imageUrl={`${baseUrl}${thumbnailPath}`}
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

export default memo(PhotoGrid);
