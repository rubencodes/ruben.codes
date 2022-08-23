/* eslint-disable react/jsx-no-target-blank */
import classNames from "classnames";
import Link from "next/link";
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
    <Link href={to} passHref>
      <a
        className={classNames({
          "text-indigo-600 font-semibold": !isActive,
          "text-indigo-700 font-bold": isActive,
        })}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
        {isExternal && <Icon type="link" />}
      </a>
    </Link>
  );
}
