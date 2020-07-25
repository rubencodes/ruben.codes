import { useEffect, useState } from "react";

function useLazyEffect(effectFunction, deps) {
  const [targetElement, setTargetElement] = useState(null);
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

        effectFunction(entry.target);
      });
    });

    targetElementObserver.observe(targetElement);
  }, [targetElement, ...deps]);

  return (ref) => setTargetElement(ref);
}

export default useLazyEffect;
