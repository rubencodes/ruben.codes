import { useEffect } from "react";

function useEvent(eventName, func, deps, bindToElement) {
	useEffect(() => {
		(bindToElement || document).addEventListener(eventName, func);
		return () => (bindToElement || document).removeEventListener(eventName, func);
	}, [bindToElement, eventName, ...deps]);
}

export default useEvent;
