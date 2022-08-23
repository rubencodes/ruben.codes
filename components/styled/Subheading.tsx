import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Subheading({ children }: Props) {
  return <h2 className="text-lg font-semibold font-sans pb-2">{children}</h2>;
}
