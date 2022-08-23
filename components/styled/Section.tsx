import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Section({ children }: Props) {
  return <section className="py-4">{children}</section>;
}
