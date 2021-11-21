import { KeyboardEvent, useEffect } from "react";

function useEvent<EventName extends string>(
  eventName: EventName,
  func: EventListener,
  deps: any[],
  bindToElement: boolean,
) {
  useEffect(() => {
    document.addEventListener(eventName, func, bindToElement);
    return () => document.removeEventListener(eventName, func, bindToElement);
  }, [bindToElement, eventName, ...deps]);
}

export default useEvent;
