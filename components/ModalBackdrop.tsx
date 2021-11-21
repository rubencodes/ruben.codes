import React from "react";
import classnames from "classnames";

import styles from "./ModalBackdrop.module.css";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ModalBackdrop: React.FC<Props> = ({ className, ...props }) => (
  <div className={classnames(styles.modalBackdrop, className)} {...props} />
);

export default ModalBackdrop;
