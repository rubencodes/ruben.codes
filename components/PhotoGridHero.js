import React, { memo } from "react";

import PhotoGrid from "./PhotoGrid";

const PhotoGridHero = ({ children, ...previewImage }) => (
  <div className="hero">
    <PhotoGrid images={[{ ...previewImage, spanWidth: 3 }]} />
    {children}
  </div>
);

export default memo(PhotoGridHero);
