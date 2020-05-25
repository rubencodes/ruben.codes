import React, { memo } from "react";

import PhotoGridItem from "./PhotoGridItem";
import ImageModal from "./ImageModal";
import useKeydownEvent from "./useKeydownEvent";
import useQueryStringState from "./useQueryStringState";
import useRandomCycleThroughItems from "./useRandomCycleThroughItems";

import styles from "./PhotoGrid.module.css";

const COLORS = [
	"blue",
	"red",
	"yellow",
	"forestgreen",
	"orange",
	"pink",
	"rebeccapurple",
];
const CYCLE_TIMEOUT = 300;
const toIntArray = (val) => {
	if (!val) {
		return [];
	}

	const arr = Array.isArray(val) ? val : val.split(",");
	return arr
		.map((i) => parseInt(i, 10))
		.filter((n) => !Number.isNaN(n));
};
const toIntOrNull = (val) => {
	return val && !Number.isNaN(parseInt(val, 10))
		? parseInt(val, 10)
		: null
};

const PhotoGrid = ({ baseUrl, path, thumbnailPath, images }) => {
	const [highlightedImageIndices] = useQueryStringState("highlighted", toIntArray);
	const highlightedColor = useRandomCycleThroughItems(COLORS, CYCLE_TIMEOUT);

	const [selectedImageIndex, setSelectedImageIndex] = useQueryStringState("selected", toIntOrNull);
	const selectedImageFileName = Number.isInteger(selectedImageIndex)
		? images[selectedImageIndex].fileName
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
				{images.map(({ fileName, span, customStyles }, index) => (
					<PhotoGridItem
						key={index}
						imageUrl={`${baseUrl}${thumbnailPath}${fileName}`}
						customStyles={customStyles}
						customContainerStyles={(highlightedImageIndices.includes(index) ? {
							borderColor: highlightedColor,
							borderWidth: 4,
							borderStyle: "solid",
						} : {})}
						onClick={() => setSelectedImageIndex(index)}
						span={span}
					/>
				))}
			</div>
			{selectedImageFileName && (
				<ImageModal
					src={`${baseUrl}${path}${selectedImageFileName}`}
					close={() => setSelectedImageIndex(null)}
				/>
			)}
		</>
	)
};

export default memo(PhotoGrid);
