import { useState, useEffect, useRef } from "react";

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
function useRandomCycleThroughItems(items, milliseconds) {
	const [randomItem, setRandomItem] = useState();
	const timeoutRef = useRef();
	useEffect(() => {
		setRandomItem(getRandomItem(items));
		timeoutRef.current = setInterval(() => setRandomItem(getRandomItem(items)), milliseconds);

		return () => clearInterval(timeoutRef.current);
	}, [...items, milliseconds]);

	return randomItem;
}

export default useRandomCycleThroughItems;
