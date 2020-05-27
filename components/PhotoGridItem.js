import React, { forwardRef, memo } from "react";
import classnames from "classnames";

import useLazyEffect from "../hooks/useLazyEffect";
import ImageLicenseData from "./ImageLicenseData";

import styles from "./PhotoGridItem.module.css";

const PhotoGridItem = forwardRef(({
	index,
	imageUrl,
	caption,
	onClick,
	customContainerStyles,
	customStyles,
	span = 1,
}, ref) => {
	const elementRef = useLazyEffect((element) => {
		element.style.backgroundImage = `url(${imageUrl})`;
	}, [imageUrl]);

	return (
		<button
			ref={ref}
			className={classnames(styles.photoGridItem, styles[`photoGridItemSpan${span}`])}
			onClick={() => onClick(index)}
			disabled={!onClick}
			style={customContainerStyles}
		>
			<ImageLicenseData imageUrl={imageUrl} />
			<div
				ref={elementRef}
				className={styles.photoGridItem__Inner}
				style={customStyles}
			/>
			<div className={styles.photoGridItem__Caption}>
				{caption}
			</div>
		</button>
	);
});

export default memo(PhotoGridItem);
