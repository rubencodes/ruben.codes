import { useEffect, useState } from "react";

function useLazyEffect(effectFunction, deps) {
	const [targetElement, setTargetElement] = useState(null);
	useEffect(() => {
		if (!targetElement || typeof effectFunction !== "function") {
			return;
		}

		if (!("IntersectionObserver" in window)) {
			effectFunction(targetElement);
			return;
		}

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
