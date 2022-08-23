import React, { useState } from "react";
import Head from "next/head";

import { Header } from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { SectionType } from "../types/SectionType";
import { state } from "../utilities/constants";

const Home = () => {
  const [activeSection, setActiveSection] = useState<SectionType>(
    SectionType.About,
  );
  return (
    <div className="h-screen w-full max-w-[800px] mx-auto pt-20 px-4 flex flex-col">
      <Head>
        <title>{state.home.metaTitle}</title>
        <meta name="description" content={state.home.metaDescription} />
        <meta key="title" property="og:title" content={state.home.metaTitle} />
        <meta
          key="description"
          property="og:description"
          content={state.home.metaDescription}
        />
        <meta key="url" property="og:url" content={state.home.metaUrl} />
        <meta key="image" property="og:image" content={state.home.metaImage} />
      </Head>
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Main activeSection={activeSection} />
      <Footer />
    </div>
  );
};

export default Home;
