import React from "react";

import styles from "./PhotoGrid.module.css";

const PhotoGrid = ({ children }) => (
	<div className={styles.photoGrid}>
		{children}
	</div>
);

export default PhotoGrid;
