import React from "react";

import styles from "./PhotoGridPlaceholder.module.css";

const PhotoGridPlaceholder = ({ show }) => {
  if (!show) {
    return null;
  }

  return <div className={styles.photoGridPlaceholder} />;
};

export default PhotoGridPlaceholder;
