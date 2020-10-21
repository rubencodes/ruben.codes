import { useRef, useState, useLayoutEffect } from "react";

function checkElementVisibility(el) {
  const { left, right, top, bottom } = el.getBoundingClientRect();

  // Check left bound.
  const isLeftVisible = left >= 0;

  // Check right bound.
  const rightBound = document.body.clientWidth;
  const isRightVisible = right <= rightBound;

  // Check top bound.
  const isTopVisible = top >= 0;

  // Check bottom bound.
  const bottomBound = document.body.clientHeight;
  const isBottomVisible = bottom <= bottomBound;

  return {
    isLeftVisible,
    isRightVisible,
    isTopVisible,
    isBottomVisible,
  };
}

function useElementVisibility() {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState({});
  useLayoutEffect(() => {
    const eventListener = () => {
      const el = ref.current;
      if (!el) return;

      setIsVisible(checkElementVisibility(el));
    };

    eventListener();
    window.addEventListener("resize", eventListener, false);
    return () => window.removeEventListener("resize", eventListener);
  }, []);

  return [ref, isVisible];
}

export default useElementVisibility;
