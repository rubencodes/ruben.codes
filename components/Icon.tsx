import React from "react";
import classnames from "classnames";

interface Props {
  className: string;
  type: string;
}

const Icon: React.FC<Props> = ({ className, type }) => (
  <i className={classnames(`fas fa-${type}`, className)} />
);

export default Icon;
