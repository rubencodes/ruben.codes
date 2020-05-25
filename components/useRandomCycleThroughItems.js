import { useState, useEffect, useRef } from "react";

const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
function useRandomCycleThroughItems(items, milliseconds) {
	const [randomItem, setRandomItem] = useState();
	const timeoutRef = useRef();
	useEffect(() => {
		setRandomItem(getRandomItem(items));
		timeoutRef.current = setInterval(() => {
			setRandomItem((currentRandomItem) => {
				let newRandomItem = getRandomItem(items);
				while (items.length > 1 && currentRandomItem === newRandomItem) {
					newRandomItem = getRandomItem(items)
				}

				return newRandomItem;
			});
		}, milliseconds);

		return () => clearInterval(timeoutRef.current);
	}, [...items, milliseconds]);

	return randomItem;
}

export default useRandomCycleThroughItems;
