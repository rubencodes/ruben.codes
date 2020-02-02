import React from "react";

const MainItem = ({ name, location, detail, startDate, endDate, text }) => (
	<>
		<p className="text large">
			<b>{name}</b>
			{location ? ", " + location : ""}
			{detail ? " — " + detail : ""}
		</p>
		{startDate && endDate && (
			<p className="time">
				{startDate} - {endDate}
			</p>
		)}
		<p className="text light">
			{text}
		</p>
		<br />
	</>
);

export default MainItem;
