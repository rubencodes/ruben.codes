import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import InstagramLink from "../../components/InstagramLink";
import GalleryPreviews from "../../components/GalleryPreviews";
import { state } from "../../util/constants";

import styles from "./index.module.css";

const Photography = () => {
	const router = useRouter();
	const onSelect = (gallery) => router.push(`/photography/${gallery}`);

	return (
		<>
			<Head>
				<title>{state.photography.metaTitle}</title>
				<meta key="title" property="og:title" content={state.photography.metaTitle} />
				<meta key="description" property="og:description" content={state.photography.metaDescription} />
				<meta key="url" property="og:url" content={state.photography.metaUrl} />
				<meta key="image" property="og:image" content={state.photography.metaImage} />
			</Head>
			<div className={styles.photography}>
				<h1 className="heading">{state.name}</h1>
				<b className="subheading">
					Photography
					&nbsp;
				<InstagramLink />
				</b>
				<GalleryPreviews {...state.photography} onSelect={onSelect} />
			</div>
		</>
	);
};

export default Photography;
