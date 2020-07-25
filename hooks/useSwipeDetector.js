import { useEffect, useRef, useState } from "react";

// Based on https://stackoverflow.com/a/23230280
function useSwipeDetector({
  // Event listeners.
  onLeftSwipe,
  onRightSwipe,
  onUpSwipe,
  onDownSwipe,

  // Threshold to detect swipe.
  verticalSwipeThreshold = 50,
  horizontalSwipeThreshold = 30,
}) {
  const [domRef, setDomRef] = useState(null);
  const xDown = useRef(null);
  const yDown = useRef(null);

  useEffect(() => {
    if (!domRef) {
      return;
    }

    function handleTouchStart(evt) {
      const [firstTouch] = evt.touches;
      xDown.current = firstTouch.clientX;
      yDown.current = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      if (!xDown.current || !yDown.current) {
        return;
      }

      const [firstTouch] = evt.touches;
      const xUp = firstTouch.clientX;
      const yUp = firstTouch.clientY;
      const xDiff = xDown.current - xUp;
      const yDiff = yDown.current - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > horizontalSwipeThreshold) {
          if (onRightSwipe) onRightSwipe();
        } else if (xDiff < -horizontalSwipeThreshold) {
          if (onLeftSwipe) onLeftSwipe();
        }
      } else {
        if (yDiff > verticalSwipeThreshold) {
          if (onUpSwipe) onUpSwipe();
        } else if (yDiff < -verticalSwipeThreshold) {
          if (onDownSwipe) onDownSwipe();
        }
      }
    }

    function handleTouchEnd() {
      xDown.current = null;
      yDown.current = null;
    }

    domRef.addEventListener("touchstart", handleTouchStart, false);
    domRef.addEventListener("touchmove", handleTouchMove, false);
    domRef.addEventListener("touchend", handleTouchEnd, false);

    return () => {
      domRef.removeEventListener("touchstart", handleTouchStart);
      domRef.removeEventListener("touchmove", handleTouchMove);
      domRef.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    domRef,
    onLeftSwipe,
    onRightSwipe,
    onUpSwipe,
    onDownSwipe,
    verticalSwipeThreshold,
    horizontalSwipeThreshold,
  ]);

  return (ref) => setDomRef(ref);
}

export default useSwipeDetector;
