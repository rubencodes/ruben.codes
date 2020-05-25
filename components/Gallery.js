import React, { memo, useLayoutEffect, useRef, useCallback } from "react";

import PhotoGrid from "./PhotoGrid";
import PhotoGridItem from "./PhotoGridItem";
import ImageModal from "./ImageModal";
import useKeydownEvent from "./useKeydownEvent";
import useQueryStringState from "./useQueryStringState";
import useRandomCycleThroughItems from "./useRandomCycleThroughItems";

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

function isElementInViewport(el) {
	const rect = el.getBoundingClientRect();

	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

const PhotoGridGallery = ({ baseUrl, path, thumbnailPath, images }) => {
	const highlightedImageElementsRef = useRef({});
	const [highlightedImageIndices] = useQueryStringState("highlighted", toIntArray);
	const highlightedColor = useRandomCycleThroughItems(COLORS, CYCLE_TIMEOUT);
	useLayoutEffect(() => {
		const firstHighlighted = highlightedImageIndices.sort()[0];
		const element = highlightedImageElementsRef.current[firstHighlighted];
		const needsScroll = element && !isElementInViewport(element);
		if (needsScroll) {
			setTimeout(() => element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }), 100);
		}
	}, [...highlightedImageIndices]);

	const [selectedImageIndex, setSelectedImageIndex] = useQueryStringState("selected", toIntOrNull);
	const updateSelectedImageIndex = useCallback((index) => setSelectedImageIndex(index), []);
	const clearSelectedImageIndex = useCallback(() => setSelectedImageIndex(null), []);
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
			<PhotoGrid>
				{images.map(({ fileName, span, customStyles }, index) => {
					const isHighlighted = highlightedImageIndices.includes(index);
					const highlightedRef = (ref) => highlightedImageElementsRef.current[index] = ref;
					const highlightedStyle = {
						borderColor: highlightedColor,
						borderWidth: 4,
						borderStyle: "solid",
					};

					return (
						<PhotoGridItem
							key={index}
							index={index}
							ref={isHighlighted ? highlightedRef : undefined}
							customContainerStyles={isHighlighted ? highlightedStyle : undefined}
							imageUrl={`${baseUrl}${thumbnailPath}${fileName}`}
							customStyles={customStyles}
							span={span}
							onClick={updateSelectedImageIndex}
						/>
					);
				})}
			</PhotoGrid>
			{selectedImageFileName && (
				<ImageModal
					src={`${baseUrl}${path}${selectedImageFileName}`}
					close={clearSelectedImageIndex}
				/>
			)}
		</>
	)
};

export default memo(PhotoGridGallery);
