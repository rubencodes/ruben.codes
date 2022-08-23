import React from "react";
import classNames from "classnames";

interface Props {
  className?: string;
  to: string;
  children: React.ReactNode;
}

export function ExternalLink({ className, to, children }: Props) {
  return (
    <a
      className={classNames("font-semibold", className)}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
