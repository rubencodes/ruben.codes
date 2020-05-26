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
	const {
		baseUrl,
		galleries: { [galleryId]: selectedGallery }
	} = state.photography;

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
				<title>{state.photography.metaTitle} - {previewImage.caption}</title>
				<meta property="og:title" content={`${state.photography.metaTitle} - ${previewImage.caption}`} />
				<meta property="og:description" content={state.photography.metaDescription} />
				<meta property="og:url" content={`${state.photography.metaUrl}/${galleryId}`} />
				<meta property="og:image" content={imageUrl} />
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
