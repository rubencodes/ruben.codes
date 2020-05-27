import useEvent from "./useEvent";

function useKeydownEvent(func, deps, bindToElement = document) {
	useEvent("keydown", func, [...deps], bindToElement);
}

export default useKeydownEvent;
