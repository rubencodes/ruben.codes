import React, { useState } from "react";

import PhotoGridItem from "./PhotoGridItem";
import ImageModal from "./ImageModal";

import styles from "./PhotoGrid.module.css";

const PhotoGrid = ({ baseUrl, images }) => {
	const [selectedImage, setSelectedImage] = useState(null);

	return (
		<>
			<div className={styles.photoGrid}>
				{images.map(({ path, span, customStyles }, i) => (
					<PhotoGridItem
						key={i}
						imageUrl={`${baseUrl}${path}`}
						customStyles={customStyles}
						onClick={() => setSelectedImage(path)}
						span={span}
					/>
				))}
			</div>
			{selectedImage && (
				<ImageModal
					src={`${baseUrl}${selectedImage}`}
					close={() => setSelectedImage(null)}
				/>
			)}
		</>
	)
};

export default PhotoGrid;
