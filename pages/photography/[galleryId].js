import React from "react";
import { useRouter } from "next/router";

import PhotoGrid from "../../components/PhotoGrid";
import { state } from "../../util/constants";

import styles from "./index.module.css";

const Gallery = () => {
	const router = useRouter();
	const { galleryId } = router.query
	const selectedGallery = state.photography.galleries[galleryId];

	if (!selectedGallery) {
		return null;
	}

	return (
		<div className={styles.photography}>
			<h1 className="heading">{state.name}</h1>
			<b className="subheading">{selectedGallery.caption}</b>
			<PhotoGrid baseUrl={state.photography.baseUrl} {...selectedGallery} />
		</div>
	);
};

export default Gallery;
