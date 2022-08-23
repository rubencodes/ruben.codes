import classNames from "classnames";
import React from "react";

interface Props {
  children: React.ReactNode;
  onClick(): void;
  isActive: boolean;
}

export function NavItem({ children, onClick, isActive }: Props) {
  return (
    <button
      className={classNames("text-indigo-600", {
        "text-indigo-700 font-bold": isActive,
      })}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}
