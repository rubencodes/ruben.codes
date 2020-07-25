import React from "react";
import classnames from "classnames";

const Icon = ({ className, type }) => (
  <i className={classnames(`fas fa-${type}`, className)} />
);

export default Icon;
