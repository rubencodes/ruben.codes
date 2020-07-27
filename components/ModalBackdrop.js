import React from "react";
import classnames from "classnames";

import styles from "./ModalBackdrop.module.css";

const ModalBackdrop = ({ className, ...props }) => (
  <div className={classnames(styles.modalBackdrop, className)} {...props} />
);

export default ModalBackdrop;
