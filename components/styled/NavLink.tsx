import classNames from "classnames";
import React from "react";
import Icon from "../Icon";

interface Props {
  children: React.ReactNode;
  to: string;
  isActive: boolean;
  isExternal?: boolean;
}

export function NavLink({ children, to, isActive, isExternal }: Props) {
  return (
    <a
      className={classNames("text-indigo-600", {
        "text-indigo-700 font-bold": isActive,
      })}
      href={to}
    >
      {children}
      {isExternal && <Icon type="link" />}
    </a>
  );
}
