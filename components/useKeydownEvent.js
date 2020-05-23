import { useEffect } from "react";

function useKeydownEvent(func, deps) {
	useEffect(() => {
		document.addEventListener("keydown", func);
		return () => document.removeEventListener("keydown", func);
	}, [...deps]);
}

export default useKeydownEvent;
