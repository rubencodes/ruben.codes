import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Nav({ children }: Props) {
  return (
    <nav className="py-4 w-full flex justify-between gap-2 flex-wrap">
      {children}
    </nav>
  );
}
