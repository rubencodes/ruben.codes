import React from "react";
import Image from "next/image";
import { STATIC_MAPS_API_KEY } from "../utilities/constants";

import styles from "./CityMap.module.css";

interface Props {
  cities: {
    coordinates: [string, string];
  }[];
}

const CityMap: React.FC<Props> = ({ cities }) => {
  let url = `https://maps.googleapis.com/maps/api/staticmap?center=United+States&zoom=3&size=350x350&maptype=roadmap`;
  url += cities
    .map(({ coordinates }) => "&markers=color:red%7C" + coordinates.join(","))
    .join("");
  url += `&key=${STATIC_MAPS_API_KEY}`;

  return <Image className={styles.cityMap} src={url} />;
};

export default CityMap;
