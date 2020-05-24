import { useEffect, useRef } from "react";

function useLazyLoad(imageUrl) {
	const elementRef = useRef(null);
	useEffect(() => {
		if (!elementRef || !elementRef.current || !("IntersectionObserver" in window)) {
			return;
		}

		const lazyImage = elementRef.current;
		const lazyImageObserver = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				let lazyImage = entry.target;

				if (!entry.isIntersecting) {
					return;
				} else {
					lazyImage.style.backgroundImage = `url(${imageUrl})`;
				}
			});
		});

		lazyImageObserver.observe(lazyImage);
	}, [elementRef, imageUrl]);

	return elementRef;
}

export default useLazyLoad;
