import React from "react";

import styles from "./ConfigButtonContainer.module.css";

const ConfigButtonContainer = ({ children }) => (
  <div className={styles.configButtonContainer}>{children}</div>
);

export default ConfigButtonContainer;
