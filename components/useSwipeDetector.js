import { useEffect, useRef, useState } from "react";

// Based on https://stackoverflow.com/a/23230280
function useSwipeDetector({
	onLeftSwipe,
	onRightSwipe,
	onUpSwipe,
	onDownSwipe,
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
		};

		function handleTouchMove(evt) {
			if (!xDown.current || !yDown.current) {
				return;
			}

			const [firstTouch] = evt.touches;
			const xUp = firstTouch.clientX;
			const yUp = firstTouch.clientY;
			const xDiff = xDown.current - xUp;
			const yDiff = yDown.current - yUp;

			if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
				if (xDiff > 0) {
					if (onRightSwipe) onRightSwipe();
				} else {
					if (onLeftSwipe) onLeftSwipe();
				}
			} else {
				if (yDiff > 0) {
					if (onUpSwipe) onUpSwipe();
				} else {
					if (onDownSwipe) onDownSwipe();
				}
			}

			/* reset values */
			xDown.current = null;
			yDown.current = null;
		};

		domRef.addEventListener("touchstart", handleTouchStart, false);
		domRef.addEventListener("touchmove", handleTouchMove, false);

		return () => {
			domRef.removeEventListener("touchstart", handleTouchStart);
			domRef.removeEventListener("touchmove", handleTouchMove);
		};
	}, [domRef, onLeftSwipe, onRightSwipe, onUpSwipe, onDownSwipe]);

	return (ref) => setDomRef(ref);
};

export default useSwipeDetector;
