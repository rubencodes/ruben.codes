import useEvent from "./useEvent";

function useKeydownEvent(func, deps, bindToElement) {
  useEvent("keydown", func, [...deps], bindToElement);
}

export default useKeydownEvent;
