import React from 'react';

const Entry = ({ name, location, detail, startDate, endDate, text }) => (
	<React.Fragment>
		<p className="text large">
			<b>{ name }</b>
			{ location ? ', ' + location : '' }
			{ detail ? ' — ' + detail : '' }
		</p>
		{ startDate && endDate ? (
			<p className="time">
				{ startDate } - { endDate }
			</p>
		) : null }
		<p className="text light">
			{ text }
		</p>
		<br />
	</React.Fragment>
);

export default Entry;