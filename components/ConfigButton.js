import React from "react";
import classnames from "classnames";

import Icon from "./Icon";

import styles from "./ConfigButton.module.css";

const ConfigButton = ({ className, iconType, iconClassName, ...props }) => (
  <button className={classnames(styles.configButton, className)} {...props}>
    <Icon className={iconClassName} type={iconType} />
  </button>
);

export default ConfigButton;
