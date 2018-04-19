import React, { Component } from 'react';
import Head from 'next/head';
import css from 'styled-jsx/css';

import Main from '../components/Main.js';
import Sidebar from '../components/Sidebar.js';
import StateProvider from '../components/StateProvider.js';

const resume = css`
div#Resume {
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 250px;
  max-width: 800px;
  margin: 20px auto;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.4);
  box-sizing: content-box;
}
@media(max-width: 767px) {
  div#Resume {
    padding: 20px;
    margin: 0px auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    box-shadow: none;
  }
}
`;

const App = () => (
  <React.Fragment>
    <style jsx global>{`
      * {
        box-sizing: border-box;
      }
      html, body, #root {
        width: 100vw;
        height: 100vh;
        padding: 0;
        margin: 0;
        background: #444;
      }
      h1.heading {
        font-family: 'IBM Plex Serif', serif;
        font-weight: 700;
        font-size: 2.5em;
        margin: 0;
        margin-bottom: 20px;
      }
      b.subheading {
        color: #69F;
        font-family: 'IBM Plex Sans', sans;
        font-weight: bold;
        font-size: small;
        text-transform: uppercase;
        margin-top: 20px;
        margin-bottom: 10px;
      }
      p.text {
        font-family: 'IBM Plex Serif', serif;
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        line-height: 22px;
      }
      p.text.light {
        color: gray;
      }
      p.text.large {
        font-size: 16px;
      }
      p.text.small {
        font-size: 12px;
      }
      p.time {
        font-family: 'IBM Plex Sans', sans;
        font-weight: 300;
        font-size: small;
        text-transform: uppercase;
        color: gray;
        margin-top: 8px;
        margin-bottom: 8px;
      }
      ul.list {
        font-family: 'IBM Plex Serif', serif;
        font-weight: 400;
        padding-left: 0;
        list-style: none;
      }
      ul.list>li {
        margin: 0 0 5px;
        height: 25px;
      }
      a {
        font-family: 'IBM Plex Sans', sans;
        text-decoration: none;
        background: #69F;
        color: white;
        border-radius: 10px;
        padding: 2px 10px;
        user-select: none;
      }
      
      @media(max-width: 767px) {
        html, body, #root {
          background: white;
        }
        #resume {
          grid-template-columns: 1fr;
          grid-template-rows: auto auto;
          box-shadow: none;
        }
        #Sidebar {
          padding: 20px;
        }
        div.Art .Gallery {
          overflow: visible;
        }
      }
    `}</style>
    <style jsx>{ resume }</style>
    <Head>
      <title>Ruben Martinez Jr - Developer, Entrepreneur, Technologist</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="theme-color" content="#000000" />
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Serif:400,700" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:300,700" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
    </Head>
    <StateProvider>
      { (state) => (
        <div id="Resume">
          <Main
            name={ state.name }
            title={ state.title }
            about={ state.about }
            art={ state.art }
            design={ state.design }
            experience={ state.experience }
            education={ state.education }
            projects={ state.projects } />
          <Sidebar
            info={ state.info }
            skills={ state.skills }
            languages={ state.languages }
            links={ state.links }
            cities={ state.cities } />
        </div>
      ) }
    </StateProvider>
  </React.Fragment>
);

export default App;