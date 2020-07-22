import React, { useEffect, useRef } from "react";
import Head from "next/head";

import ImageLicenseData from "./ImageLicenseData";
import PhotoGrid from "./PhotoGrid";
import PhotoGridItem from "./PhotoGridItem";
import ImageModal from "./ImageModal";
import useQueryStringState from "../hooks/useQueryStringState";
import useRandomCycleThroughItems from "../hooks/useRandomCycleThroughItems";
import toIntArray from "../utilities/toIntArray";
import toIntOrNull from "../utilities/toIntOrNull";
import isElementInViewport from "../utilities/isElementInViewport";
import { COLORS, CYCLE_TIMEOUT } from "../utilities/constants";

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
	const selectedImageUrl = Number.isInteger(selectedImageIndex)
		? `${baseUrl}${path}${images[selectedImageIndex].fileName}`
		: null;

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
						baseUrl={baseUrl}
						path={path}
						images={images}
						selectedImageIndex={selectedImageIndex}
						setSelectedImageIndex={setSelectedImageIndex}
					/>
				</>
			)}
		</PhotoGrid>
	)
};

export default PhotoGridGallery;
