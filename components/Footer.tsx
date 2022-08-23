import React from "react";

export function Footer() {
  return (
    <footer className="w-full text-center mt-auto py-8">
      <p className="font-mono font-semibold">
        Copyright © {new Date().getFullYear()} Ruben Martinez Jr.
      </p>
    </footer>
  );
}
