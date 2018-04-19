import React from 'react';
import css from 'styled-jsx/css';

import CityMap from './CityMap.js';

const sidebar = css`
div#Sidebar {
	padding-top: 20px;
	
	display: flex;
	flex-direction: column;
}
@media(max-width: 767px) {
	div#Sidebar {
		padding: 0;
	}
}
`;
const Sidebar = ({ info, skills, languages, links, cities }) => (
	<div id="Sidebar">
		<style jsx>{ sidebar }</style>
		{ info ? (
			<React.Fragment>
				<b className="subheading">Contact Me</b>
				<p className="text">
					<b>{ info.phoneNumber }</b><br />
					<b>{ info.emailAddress }</b>
				</p>
				<br />
			</React.Fragment>
		) : null }
		{ skills ? (
			<React.Fragment>
				<b className="subheading">Skills</b>
				<p className="text light">
					{ skills.join(' • ') }
				</p>
				<br />
			</React.Fragment>
		) : null }
		{ languages ? (
			<React.Fragment>
				<b className="subheading">Languages</b>
				<p className="text light">
					{ languages.join(' • ') }
				</p>
				<br />
			</React.Fragment>
		) : null }
		{ cities ? (
			<React.Fragment>
				<b className="subheading">Cities</b>
				<p className="time">Places I've Called Home</p>
				<CityMap cities={ cities } />
			</React.Fragment>
		) : null }
		{ links ? (
			<React.Fragment>
				<b className="subheading">Links</b>
				<ul className="list">
					{ links.map(({ title, href }, i) => (
						<li key={ i }><a href={ href } target="_blank">{ title }</a></li>
					)) }
				</ul>
			</React.Fragment>
		) : null }
	</div>
);

export default Sidebar;