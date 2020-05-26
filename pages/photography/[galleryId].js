import React from "react";
import Link from "next/link";
import Head from "next/head";

import InstagramLink from "../../components/InstagramLink";
import Gallery from "../../components/Gallery";
import PhotoGridItem from "../../components/PhotoGridItem";
import { state } from "../../util/constants";

import styles from "./index.module.css";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const GalleryPage = ({ params: { galleryId } }) => {
	const {
		baseUrl,
		galleries: { [galleryId]: selectedGallery }
	} = state.photography;

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
				<meta property="og:image" content={`${state.photography.baseUrl}${thumbnailPath}${previewImage.fileName}`} />
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

export async function getStaticProps(context) {
	return {
		props: {
			params: context.params
		},
	};
}

export async function getStaticPaths() {
	const paths = state.photography.galleryOrder.map((galleryId) => ({
		params: { galleryId: "kitty_k" }
	}));

	return {
		paths: paths,
		fallback: false,
  };
}

export default GalleryPage;
