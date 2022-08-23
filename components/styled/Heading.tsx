import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Heading({ children }: Props) {
  return <h1 className="font-bold font-serif text-4xl">{children}</h1>;
}
