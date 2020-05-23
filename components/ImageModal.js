import React from "react";

import Loader from "./Loader";
import useWindowSize from "./useWindowSize";
import useImageLoader from "./useImageLoader";
import useBodyClassList from "./useBodyClassList";

import styles from "./ImageModal.module.css";

function fitSizeWithinSize(innerRectangle, outerRectangle) {
	// Use the outer rectangle if we don't have an inner one.
	if (!innerRectangle) {
		return outerRectangle;
	}

	// Use the inner rectangle if it's smaller than the outer rectangle.
	if (innerRectangle.width <= outerRectangle.width && innerRectangle.height <= outerRectangle.height) {
		return innerRectangle;
	}

	// Width constrained.
	const innerAspectRatio = innerRectangle.width / innerRectangle.height;
	const outerAspectRatio = outerRectangle.width / outerRectangle.height;
	if (innerAspectRatio > outerAspectRatio) {
		return {
			width: outerRectangle.width,
			height: outerRectangle.width / innerAspectRatio,
		};
	}

	// Height constrained.
	return {
		width: outerRectangle.height * innerAspectRatio,
		height: outerRectangle.height,
	};
}

const ImageModal = ({ src, close }) => {
	const {
		imageSource,
		imageSize,
		isLoading,
	} = useImageLoader(src);
	useBodyClassList("no_scroll");
	const windowSize = useWindowSize();
	const modalSize = fitSizeWithinSize(imageSize, {
		width: (windowSize.width * 0.9),
		height: (windowSize.height * 0.9),
	});

	return (
		<div className={styles.imageModal} onClick={close}>
			<div
				className={styles.imageModal__Inner}
				onClick={(e) => e.preventDefault() || e.stopPropagation()}
				style={modalSize}
			>
				{isLoading ? (
					<div className={styles.imageModal__Loading}>
						<Loader />
					</div>
				) : (
					<img className={styles.imageModal__Image} src={imageSource} />
				)}
			</div>
		</div>
	);
};

export default ImageModal;
