import React from "react";
import { useRouter } from "next/router";

import PhotoGridPreviews from "../../components/PhotoGridPreviews";
import { state } from "../../util/constants";

import styles from "./index.module.css";

const Photography = () => {
	const router = useRouter();
	const onSelect = (gallery) => router.push(`/photography/${gallery}`);

	return (
		<div className={styles.photography}>
			<h1 className="heading">{state.name}</h1>
			<b className="subheading">Photo Galleries</b>
			<PhotoGridPreviews {...state.photography} onSelect={onSelect} />
		</div>
	);
};

export default Photography;
