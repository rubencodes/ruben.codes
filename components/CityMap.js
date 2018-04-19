import React from 'react';

const CityMap = ({ cities }) => {
	let url = `https://maps.googleapis.com/maps/api/staticmap?center=United+States&zoom=3&size=350x350&maptype=roadmap`;
	url += cities.map(({ name, coordinates }) => '&markers=color:red%7C' + coordinates.join(',')).join('');
	
	return (
		<React.Fragment>
			<img className="CityMap" src={ url } />
			<style jsx>{`
				img.CityMap {
					width: 100%;
					max-width: 300px;
					object-fit: contain;
					border-radius: 10px;
				}
			`}</style>
		</React.Fragment>
	);
};

export default CityMap;