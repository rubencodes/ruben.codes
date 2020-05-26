import { useEffect, useState } from "react";

const DEFAULT_SIZE = {
	width: 250,
	height: 250,
};

function useWindowSize() {
	const [size, setSize] = useState(DEFAULT_SIZE);
	useEffect(() => {
		const onResize = () => setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		onResize(); // Set for initial render.
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);

	return size;
}

export default useWindowSize;
