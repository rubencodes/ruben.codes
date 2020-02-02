import React from "react";

import Main from './Main';
import Sidebar from './Sidebar';
import { state } from '../util/constants';

import styles from "./Resume.module.css";

const Resume = () => (
	<div className={styles.resumeContainer}>
		<Main
			name={state.name}
			title={state.title}
			about={state.about}
			art={state.art}
			design={state.design}
			experience={state.experience}
			education={state.education}
			projects={state.projects} />
		<Sidebar
			info={state.info}
			skills={state.skills}
			languages={state.languages}
			links={state.links}
			cities={state.cities} />
	</div>
);

export default Resume;
