import React from "react";
import Head from "next/head";

import Resume from "../components/Resume.js";

const Home = () => (
  <Head>
    <title>Ruben Martinez Jr. - Artist, Developer, Technologist</title>
    <meta property="og:title" content="Ruben Martinez Jr. - Artist, Developer, Technologist" />
    <meta property="og:description" content="Meet Ruben. He's a cool guy." />
    <meta property="og:url" content="https://ruben.codes/" />
    <meta property="og:image" content="https://ruben.codes/static/photography/landscapes/43.jpg" />
  </Head>
  <Resume />
);

export default Home;
