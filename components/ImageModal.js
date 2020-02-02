import React, { useEffect } from "react";

import styles from "./ImageModal.module.css";

function useBodyClassList(...classList) {
	useEffect(() => {
		document.body.classList.add(...classList);

		return () => document.body.classList.remove(...classList);
	}, [classList]);
}

const ImageModal = ({ src, close }) => {
	useBodyClassList("no_scroll");

	return (
		<div className={styles.imageModal} onClick={close}>
			<div className={styles.imageModal__Inner} onClick={(e) => e.preventDefault() || e.stopPropagation()}>
				<img className={styles.imageModal__Image} src={src} />
			</div>
		</div>
	);
};

export default ImageModal;
