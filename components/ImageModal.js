import React, { memo, useCallback, useMemo } from "react";

import Carousel from "./Carousel";
import useBodyClassList from "../hooks/useBodyClassList";

import styles from "./ImageModal.module.css";

const ImageModal = ({ baseUrl, fullPath, images, selectedImageIndex, setSelectedImageIndex }) => {
	useBodyClassList("no_scroll");
	const close = useCallback(() => setSelectedImageIndex(null), [setSelectedImageIndex]);
	const formattedImageList = useMemo(() => {
		return images.map(({ fileName }) => ({
			url: `${baseUrl}${fullPath}${fileName}`
		}));
	});

	return (
		<div className={styles.imageModal} onClick={close}>
			<div
				className={styles.imageModal__Inner}
				onClick={(e) => e.preventDefault() || e.stopPropagation()}
				style={{
					width: "100%",
					height: "100%",
				}}
			>
				<Carousel
					className={styles.imageModal__Carousel}
					currentPage={selectedImageIndex}
					setCurrentPage={setSelectedImageIndex}
					images={formattedImageList}
					onClickOutside={close}
					verticalCount={1}
					horizontalCount={1}
					spacing={0}
					hidePageIndicators
					hidePageNavigationButtons
				/>
			</div>
		</div>
	);
};

export default memo(ImageModal);
