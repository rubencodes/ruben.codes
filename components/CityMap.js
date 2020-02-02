import React from "react";

import styles from "./CityMap.module.css";

const CityMap = ({ cities }) => {
	let url = `https://maps.googleapis.com/maps/api/staticmap?center=United+States&zoom=3&size=350x350&maptype=roadmap`;
	url += cities.map(({ coordinates }) => "&markers=color:red%7C" + coordinates.join(",")).join("");
	url += `&key=${process.env.STATIC_MAPS_API_KEY}`;

	return (
		<img className={styles.cityMap} src={url} />
	);
};

export default CityMap;
