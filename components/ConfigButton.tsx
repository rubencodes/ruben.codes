import React from "react";
import classnames from "classnames";

import Icon from "./Icon";
import Tooltip, { TOOLTIP_DIRECTIONS } from "./Tooltip";

import styles from "./ConfigButton.module.css";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconType: string;
  iconClassName?: string;
  tooltipText: string;
  tooltipDirection: TOOLTIP_DIRECTIONS;
}

const ConfigButton: React.FC<Props> = ({
  className,
  iconType,
  iconClassName,
  tooltipText,
  tooltipDirection,
  ...props
}) => (
  <Tooltip text={tooltipText} preferredDirection={tooltipDirection}>
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
