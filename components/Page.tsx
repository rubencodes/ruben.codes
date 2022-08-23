import React from "react";
import { useRouter } from "next/router";
import { SectionType } from "../types/SectionType";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

const PAGE_MAP = {
  "/": SectionType.About,
  "/about": SectionType.About,
  "/experience": SectionType.Experience,
  "/education": SectionType.Education,
  "/projects": SectionType.Projects,
};

export function Page() {
  const router = useRouter();
  const activeSection = PAGE_MAP[router.pathname] || SectionType.About;

  return (
    <div className="h-screen w-full max-w-[800px] mx-auto pt-20 px-4 flex flex-col">
      <div className="h-screen w-full max-w-[800px] mx-auto pt-20 px-4 flex flex-col">
        <Header activeSection={activeSection} />
        <Main activeSection={activeSection} />
        <Footer />
      </div>
    </div>
  );
}
