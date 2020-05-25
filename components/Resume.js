import React from "react";

import Main from "./Main";
import Sidebar from "./Sidebar";
import { state } from "../util/constants";

import styles from "./Resume.module.css";

const { home } = state;

const Resume = () => (
	<div className={styles.resumeContainer}>
		<Main
			name={state.name}
			about={home.about}
			art={home.art}
			design={home.design}
			experience={home.experience}
			education={home.education}
			projects={home.projects}
		/>
		<Sidebar
			info={home.info}
			skills={home.skills}
			languages={home.languages}
			links={home.links}
			cities={home.cities}
		/>
	</div>
);

export default Resume;
