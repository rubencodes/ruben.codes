import React, { useEffect, useRef } from "react";
import classnames from "classnames";

import styles from "./PhotoGridItem.module.css";

function useLazyLoad(imageUrl) {
	const elementRef = useRef(null);
	useEffect(() => {
		if (!elementRef || !elementRef.current || !("IntersectionObserver" in window)) {
			return;
		}

		const lazyImage = elementRef.current;
		const lazyImageObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				let lazyImage = entry.target;

				if (!entry.isIntersecting) {
					return;
				} else {
					lazyImage.style.backgroundImage = `url(${imageUrl})`;
				}
			});
		});

		lazyImageObserver.observe(lazyImage);
	}, [elementRef, imageUrl]);

	return elementRef;
}

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
