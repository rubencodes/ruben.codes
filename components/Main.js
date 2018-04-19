import React from 'react';
import css from 'styled-jsx/css';

import Entry from './Entry.js';
import Gallery from './Gallery.js';

const main = css`
div#Main {
	padding: 20px;
	
	display: flex;
	flex-direction: column;
}
@media(max-width: 767px) {
	div#Main {
		padding: 0;
	}
}
`;
const imageGallery = css`div.ImageGallery {
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
}`;

const Main = ({ name, title, about, art, design, experience, education, projects }) => (
	<div id="Main">
		<style jsx>{ main }</style>
		<style jsx>{ imageGallery }</style>
		<h1 className="heading">{ name }</h1>
		<p className="text large">{ title }</p>
		<br />
		{ about ? (
			<React.Fragment>
				<b className="subheading">About</b>
				<p className="text light">{ about }</p>
			</React.Fragment>
		) : null }
		{ art ? (
			<React.Fragment>
				<b className="subheading">Art</b>
				<div className="ImageGallery">
					<Gallery {...art} />
				</div>
			</React.Fragment>
		) : null }
		{ experience ? (
			<React.Fragment>
				<b className="subheading">Work</b>
				{ experience.map((props, i) => (
					<Entry key={ i } { ...props } />
				)) }
			</React.Fragment>
		) : null }
		{ education ? (
			<React.Fragment>
				<b className="subheading">Education</b>
				{ education.map((props, i) => (
					<Entry key={ i } { ...props } />
				)) }
			</React.Fragment>
		) : null }
		{ projects ? (
			<React.Fragment>
				<b className="subheading">Projects</b>
				{ projects.map((props, i) => (
					<Entry key={ i } { ...props } />
				)) }
			</React.Fragment>
		) : null }
		{ design ? (
			<React.Fragment>
				<b className="subheading">Design</b>
				<p className="time">Examples of apps and promotional materials I've designed.</p>
				<div className="ImageGallery">
					<Gallery {...design} />
				</div>
			</React.Fragment>
		) : null }
	</div>
);

export default Main;