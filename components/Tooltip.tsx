import React, { useEffect, useState } from "react";
import classnames from "classnames";

import useElementVisibility from "../hooks/useElementVisibility";

import styles from "./Tooltip.module.css";

export enum TOOLTIP_DIRECTIONS {
  TOP = "top",
  BOTTOM = "bottom",
  LEFT = "left",
  RIGHT = "right",
}

interface Props {
  text: string;
  preferredDirection: TOOLTIP_DIRECTIONS;
}

const Tooltip: React.FC<Props> = ({ text, children, preferredDirection }) => {
  const [ref, visibility] = useElementVisibility<HTMLDivElement>();
  if (!text) {
    return <>{children}</>;
  }

  // Change preferred direction if necessary.
  const [direction, setDirection] = useState(preferredDirection);
  useEffect(() => {
    const { isTopVisible, isBottomVisible, isLeftVisible, isRightVisible } =
      visibility;

    switch (direction) {
      case TOOLTIP_DIRECTIONS.TOP: {
        if (!isTopVisible && isBottomVisible) {
          setDirection(TOOLTIP_DIRECTIONS.BOTTOM);
        }

        break;
      }
      case TOOLTIP_DIRECTIONS.BOTTOM: {
        if (!isBottomVisible && isTopVisible) {
          setDirection(TOOLTIP_DIRECTIONS.TOP);
        }

        break;
      }
      case TOOLTIP_DIRECTIONS.LEFT: {
        if (!isLeftVisible && isRightVisible) {
          setDirection(TOOLTIP_DIRECTIONS.RIGHT);
        }

        break;
      }
      case TOOLTIP_DIRECTIONS.RIGHT: {
        if (!isRightVisible && isLeftVisible) {
          setDirection(TOOLTIP_DIRECTIONS.LEFT);
        }

        break;
      }
      default: {
        break;
      }
    }
  }, [preferredDirection, visibility]);

  return (
    <div className={styles.tooltip}>
      <div
        ref={ref}
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
