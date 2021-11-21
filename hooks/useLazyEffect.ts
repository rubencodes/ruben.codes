import { useEffect, useState } from "react";

function useLazyEffect<El extends Element>(
  effectFunction: (el: El | null) => void,
  deps: any[],
) {
  const [targetElement, setTargetElement] = useState<El | null>(null);
  useEffect(() => {
    // No target element or effect function yet, just give up.
    if (!targetElement || typeof effectFunction !== "function") {
      return;
    }

    // No IntersectionObserver support, just give up and call the function.
    if (!("IntersectionObserver" in window)) {
      effectFunction(targetElement);
      return;
    }

    // Setup IntersectionObserver to watch for intersections.
    const targetElementObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        effectFunction(entry.target as El);
      });
    });

    targetElementObserver.observe(targetElement);
  }, [targetElement, ...deps]);

  return (ref: El) => setTargetElement(ref);
}

export default useLazyEffect;
