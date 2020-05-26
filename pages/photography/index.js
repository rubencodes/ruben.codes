import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import SocialMetaTags from "../../components/SocialMetaTags";
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
				<title>Ruben Martinez Jr. - Photography</title>
				<SocialMetaTags
					title="Ruben Martinez Jr. - Photography"
					description="Explore photo galleries by New York City photographer Ruben Martinez Jr."
					pageUrl="https://ruben.codes/photography"
					imageUrl="https://ruben.codes/static/photography/landscapes/46.jpg"
				/>
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
