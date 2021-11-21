import React from "react";

import styles from "./ConfigButtonContainer.module.css";

const ConfigButtonContainer: React.FC = ({ children }) => (
  <div className={styles.configButtonContainer}>
    <div className={styles.configButtonContainer__Inner}>{children}</div>
  </div>
);

export default ConfigButtonContainer;
