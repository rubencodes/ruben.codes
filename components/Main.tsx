import React from "react";

import MainItem from "./MainItem";
import InlineGallery from "./InlineGallery";

import styles from "./Main.module.css";
import { Item } from "../types/Item";

interface Props {
  name: string;
  about: string;
  art: {
    baseURL: string;
    largePrefix: string;
    thumbPrefix: string;
    images: string[];
  };
  design: {
    baseURL: string;
    largePrefix: string;
    thumbPrefix: string;
    images: string[];
  };
  experience: Item[];
  education: Item[];
  projects: Item[];
}

const Main: React.FC<Props> = ({
  name,
  about,
  art,
  design,
  experience,
  education,
  projects,
}) => (
  <div className={styles.mainContainer}>
    <h1 className="heading">{name}</h1>
    {about && (
      <>
        <b className="subheading">About</b>
        <p className="text light">{about}</p>
      </>
    )}
    {art && (
      <>
        <b className="subheading">Art</b>
        <div className={styles.imageGalleryContainer}>
          <InlineGallery {...art} />
        </div>
      </>
    )}
    {experience && (
      <>
        <b className="subheading">Work</b>
        {experience.map((props, i) => (
          <MainItem key={i} {...props} />
        ))}
      </>
    )}
    {education && (
      <>
        <b className="subheading">Education</b>
        {education.map((props, i) => (
          <MainItem key={i} {...props} />
        ))}
      </>
    )}
    {projects && (
      <>
        <b className="subheading">Projects</b>
        {projects.map((props, i) => (
          <MainItem key={i} {...props} />
        ))}
      </>
    )}
    {design && (
      <>
        <b className="subheading">Design</b>
        <p className="time">
          {"Examples of apps and promotional materials I've designed."}
        </p>
        <div className={styles.imageGalleryContainer}>
          <InlineGallery {...design} />
        </div>
      </>
    )}
  </div>
);

export default Main;
