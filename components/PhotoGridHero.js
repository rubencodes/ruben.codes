import React, { memo } from "react";

import PhotoGridItem from "./PhotoGridItem";
import PhotoGrid from "./PhotoGrid";

const PhotoGridHero = (previewImage) => (
	<div className="hero">
		<PhotoGrid images={[{ ...previewImage, span: 3 }]} />
	</div>
);

export default memo(PhotoGridHero);
