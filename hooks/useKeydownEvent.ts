import useEvent from "./useEvent";

function useKeydownEvent(
  func: (event: KeyboardEvent) => void,
  deps: any[],
  bindToElement: boolean,
) {
  useEvent("keydown", func as (event: Event) => void, [...deps], bindToElement);
}

export default useKeydownEvent;
