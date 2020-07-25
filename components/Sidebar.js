import React from "react";

import CityMap from "./CityMap";

import styles from "./Sidebar.module.css";

const Sidebar = ({ info, skills, languages, links, cities }) => (
  <div className={styles.sidebarContainer}>
    {info && (
      <>
        <b className="subheading">Contact Me</b>
        <p className="text">
          <b>{info.phoneNumber}</b>
          <br />
          <b>{info.emailAddress}</b>
        </p>
        <br />
      </>
    )}
    {skills && (
      <>
        <b className="subheading">Skills</b>
        <p className="text light">{skills.join(" • ")}</p>
        <br />
      </>
    )}
    {languages && (
      <>
        <b className="subheading">Languages</b>
        <p className="text light">{languages.join(" • ")}</p>
        <br />
      </>
    )}
    {cities && (
      <>
        <b className="subheading">Cities</b>
        <p className="time">Places I've Called Home</p>
        <CityMap cities={cities} />
      </>
    )}
    {links && (
      <>
        <b className="subheading">Links</b>
        <ul className="list">
          {links.map(({ title, href }, i) => (
            <li key={i}>
              <a href={href} target="_blank">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default Sidebar;
