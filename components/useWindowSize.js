import { useEffect, useState } from "react";

function useWindowSize() {
	const [size, setSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});
	useEffect(() => {
		const onResize = () => setSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});

		document.addEventListener("resize", onResize);
		return () => document.removeEventListener("resize", onResize);
	}, []);

	return size;
}

export default useWindowSize;
