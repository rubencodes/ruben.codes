import React from "react";
import classnames from "classnames";

import styles from "./Tooltip.module.css";

const Tooltip = ({ text, children, direction }) => {
  if (!text) {
    return children;
  }

  return (
    <div className={styles.tooltip}>
      <div
        className={classnames(
          styles.tooltip__text,
          styles[`tooltip__text--${direction}`],
        )}
      >
        {text}
      </div>
      {children}
    </div>
  );
};

export default Tooltip;
