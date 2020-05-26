import { useCallback } from "react";

function useArrayNavigator(value, setValue, length) {
	const decrement = useCallback(() => setValue(Math.max(value - 1, 0)), [value, setValue]);
	const increment = useCallback(() => setValue(Math.min(value + 1, length - 1)), [value, length, setValue]);
	const clear = useCallback(() => setValue(null), [setValue]);

	return {
		decrement,
		increment,
		clear,
	};
}

export default useArrayNavigator;
