import React from "react";
import classnames from "classnames";

import useLazyLoad from "./useLazyLoad";

import styles from "./PhotoGridItem.module.css";

const PhotoGridItem = ({ imageUrl, caption, onClick, customStyles, span = 1 }) => {
	const elementRef = useLazyLoad(imageUrl);

	return (
		<button className={classnames(styles.photoGridItem, styles[`photoGridItemSpan${span}`])} onClick={onClick}>
			<div
				ref={elementRef}
				className={styles.photoGridItem__Inner}
				style={{ ...customStyles }}
			/>
			<div className={styles.photoGridItem__Caption}>{caption}</div>
		</button>
	);
};

export default PhotoGridItem;
