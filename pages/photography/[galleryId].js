import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import PhotoGrid from "../../components/PhotoGrid";
import PhotoGridItem from "../../components/PhotoGridItem";
import { state } from "../../util/constants";

import styles from "./index.module.css";

const Gallery = () => {
	const router = useRouter();
	const { galleryId } = router.query
	const baseUrl = state.photography.baseUrl;
	const selectedGallery = state.photography.galleries[galleryId];

	if (!selectedGallery) {
		return null;
	}

	return (
		<div className={styles.photography}>
			<h1 className="heading">{state.name}</h1>
			<b className="subheading">
				<Link href={"/photography"}>
					{"< Go Back"}
				</Link>
				&nbsp;
				Photography
			</b>
			<div className="hero">
				<PhotoGridItem
					imageUrl={`${baseUrl}${selectedGallery.previewImage.thumbnailPath}`}
					customStyles={selectedGallery.previewImage.customStyles}
					caption={selectedGallery.caption}
					span={3}
				/>
			</div>
			<PhotoGrid baseUrl={baseUrl} {...selectedGallery} />
		</div>
	);
};

export default Gallery;
