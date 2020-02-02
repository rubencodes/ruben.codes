import React from 'react';

import MainItem from './MainItem';
import Gallery from './Gallery';

import styles from "./Main.module.css";

const Main = ({ name, title, about, art, design, experience, education, projects }) => (
	<div className={styles.mainContainer}>
		<h1 className="heading">{name}</h1>
		<p className="text large">{title}</p>
		<br />
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
					<Gallery {...art} />
				</div>
			</>
		)}
		{experience && (
			<>
				<b className="subheading">Work</b>
				{ experience.map((props, i) => (
					<MainItem key={i} {...props} />
				)) }
			</>
		)}
		{education && (
			<>
				<b className="subheading">Education</b>
				{ education.map((props, i) => (
					<MainItem key={i} {...props} />
				)) }
			</>
		)}
		{projects && (
			<>
				<b className="subheading">Projects</b>
				{ projects.map((props, i) => (
					<MainItem key={i} {...props} />
				)) }
			</>
		)}
		{design && (
			<>
				<b className="subheading">Design</b>
				<p className="time">Examples of apps and promotional materials I've designed.</p>
				<div className={styles.imageGalleryContainer}>
					<Gallery {...design} />
				</div>
			</>
		)}
	</div>
);

export default Main;
