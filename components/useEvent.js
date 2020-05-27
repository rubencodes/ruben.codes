import { useEffect } from "react";

function useEvent(eventName, func, deps, bindToElement = document) {
	useEffect(() => {
		bindToElement.addEventListener(eventName, func);
		return () => bindToElement.removeEventListener(eventName, func);
	}, [bindToElement, eventName, ...deps]);
}

export default useEvent;
