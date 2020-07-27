import React from "react";
import classnames from "classnames";

import Icon from "./Icon";
import Tooltip from "./Tooltip";

import styles from "./ConfigButton.module.css";

const ConfigButton = ({
  className,
  iconType,
  iconClassName,
  tooltipText,
  tooltipDirection,
  ...props
}) => (
  <Tooltip text={tooltipText} direction={tooltipDirection}>
    <button className={classnames(styles.configButton, className)} {...props}>
      <Icon
        className={classnames(
          styles[`configButton__Icon--${iconType}`],
          iconClassName,
        )}
        type={iconType}
      />
    </button>
  </Tooltip>
);

export default ConfigButton;
