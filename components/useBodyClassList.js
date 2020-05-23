import { useEffect } from "react";

function useBodyClassList(...classList) {
	const classNames = classList.filter((str) => typeof str === "string");
	useEffect(() => {
		document.body.classList.add(...classNames);
		return () => document.body.classList.remove(...classNames);
	}, classNames);
}

export default useBodyClassList;
