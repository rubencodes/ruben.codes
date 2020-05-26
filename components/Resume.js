import React from "react";

import Main from "./Main";
import Sidebar from "./Sidebar";

import styles from "./Resume.module.css";

const Resume = ({
	name,
	about,
	art,
	design,
	experience,
	education,
	projects,
	info,
	skills,
	languages,
	links,
	cities,
}) => (
	<div className={styles.resumeContainer}>
		<Main
			name={name}
			about={about}
			art={art}
			design={design}
			experience={experience}
			education={education}
			projects={projects}
		/>
		<Sidebar
			info={info}
			skills={skills}
			languages={languages}
			links={links}
			cities={cities}
		/>
	</div>
);

export default Resume;
