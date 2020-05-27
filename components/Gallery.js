import React, { useEffect, useRef } from "react";
import Head from "next/head";

import ImageLicenseData from "./ImageLicenseData";
import PhotoGrid from "./PhotoGrid";
import PhotoGridItem from "./PhotoGridItem";
import ImageModal from "./ImageModal";
import useKeydownEvent from "../hooks/useKeydownEvent";
import useQueryStringState from "../hooks/useQueryStringState";
import useRandomCycleThroughItems from "../hooks/useRandomCycleThroughItems";
import useArrayNavigator from "../hooks/useArrayNavigator";
import useSwipeDetector from "../hooks/useSwipeDetector";

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
	// Highlighted image state for prominence.
	const highlightedImageElementsRef = useRef({});
	const [highlightedImageIndices] = useQueryStringState("highlighted", toIntArray);
	const highlightedColor = useRandomCycleThroughItems(COLORS, CYCLE_TIMEOUT);
	useEffect(() => {
		const firstHighlighted = highlightedImageIndices.sort()[0];
		const element = highlightedImageElementsRef.current[firstHighlighted];
		const needsScroll = element && !isElementInViewport(element);
		if (needsScroll) {
			setTimeout(() => {
				element.scrollIntoView({
					behavior: "smooth",
					block: "center",
					inline: "nearest"
				})
			}, 100);
		}
	}, [...highlightedImageIndices]);

	// Selected image state for the image modal.
	const [selectedImageIndex, setSelectedImageIndex] = useQueryStringState("selected", toIntOrNull);
	const { decrement, increment, clear } = useArrayNavigator(selectedImageIndex, setSelectedImageIndex, images.length);
	const selectedImageUrl = Number.isInteger(selectedImageIndex)
		? `${baseUrl}${path}${images[selectedImageIndex].fileName}`
		: null;

	// Add keyboard navigation for the modal.
	useKeydownEvent((event) => {
		// Don't do anything if there's no image.
		if (!Number.isInteger(selectedImageIndex)) {
			return;
		}

		switch (event.key) {
			case "ArrowLeft": {
				decrement();
				return;
			}
			case "ArrowRight": {
				increment();
				return;
			}
			case "Escape": {
				clear();
				return;
			}
			default: {
				return;
			}
		}
	}, [selectedImageIndex, decrement, increment, clear]);

	// Add swipe navigation for the modal.
	const swipeTargetRef = useSwipeDetector({
		onLeftSwipe: decrement,
		onRightSwipe: increment,
		onUpSwipe: clear,
		onDownSwipe: clear,
	});

	return (
		<PhotoGrid>
			{images.map(({ fileName, span, customStyles }, index) => {
				const isHighlighted = highlightedImageIndices.includes(index);
				const highlightedRef = (ref) => highlightedImageElementsRef.current[index] = ref;
				const highlightedStyle = {
					borderColor: highlightedColor,
					borderWidth: 4,
					borderStyle: "solid",
				};
				const imageUrl = `${baseUrl}${thumbnailPath}${fileName}`;

				return (
					<PhotoGridItem
						key={index}
						index={index}
						ref={isHighlighted ? highlightedRef : undefined}
						customContainerStyles={isHighlighted ? highlightedStyle : undefined}
						imageUrl={imageUrl}
						customStyles={customStyles}
						span={span}
						onClick={setSelectedImageIndex}
					/>
				);
			})}
			{selectedImageUrl && (
				<>
					<Head>
						<meta key="image" property="og:image" content={`${baseUrl}${thumbnailPath}${images[selectedImageIndex].fileName}`} />
					</Head>
					<ImageLicenseData imageUrl={selectedImageUrl} />
					<ImageModal
						ref={swipeTargetRef}
						src={selectedImageUrl}
						close={clear}
					/>
				</>
			)}
		</PhotoGrid>
	)
};

export default PhotoGridGallery;
