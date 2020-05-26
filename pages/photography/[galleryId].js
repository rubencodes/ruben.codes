import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

import InstagramLink from "../../components/InstagramLink";
import Gallery from "../../components/Gallery";
import PhotoGridItem from "../../components/PhotoGridItem";
import { state } from "../../util/constants";

import styles from "./index.module.css";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const GalleryPage = () => {
	const { query: { galleryId } } = useRouter();
	const baseUrl = state.photography.baseUrl;
	const selectedGallery = state.photography.galleries[galleryId];

	if (!selectedGallery) {
		return null;
	}

	const {
		path,
		thumbnailPath,
		previewImage = {},
		images,
	} = selectedGallery || {};
	const imageUrl = `${baseUrl}${thumbnailPath}${previewImage.fileName}`;

	return (
		<>
			<Head>
				<title>Ruben Martinez Jr. - Photography - {previewImage.caption}</title>
				<meta property="og:title" content={`Ruben Martinez Jr. - Photography - ${previewImage.caption}`} />
				<meta property="og:description" content="Explore photo galleries by New York City photographer Ruben Martinez Jr." />
				<meta property="og:image" content={imageUrl} />
				<meta property="og:url" content={`https://ruben.codes/photography/${galleryId}`} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<div className={styles.photography}>
				<h1 className="heading">{state.name}</h1>
				<b className="subheading">
					Photography
					&nbsp;
				<InstagramLink />
				</b>
				<div className="hero">
					<PhotoGridItem
						imageUrl={imageUrl}
						customStyles={previewImage.customStyles}
						caption={previewImage.caption}
						span={3}
					/>
				</div>
				<Gallery
					baseUrl={baseUrl}
					path={path}
					thumbnailPath={thumbnailPath}
					images={images}
				/>
				<div className={styles.buttonContainer}>
					<Link href="/photography">
						← Go Back
				</Link>
					<button onClick={scrollToTop}>
						↑ Scroll to Top
				</button>
				</div>
			</div>
		</>
	);
};

export default GalleryPage;
