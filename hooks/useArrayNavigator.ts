import { useCallback } from "react";

function useArrayNavigator(
  value: number,
  setValue: (val: number | null) => void,
  length: number,
) {
  const decrement = useCallback(
    () => setValue(Math.max(value - 1, 0)),
    [value, setValue],
  );
  const increment = useCallback(
    () => setValue(Math.min(value + 1, length - 1)),
    [value, length, setValue],
  );
  const goToStart = useCallback(() => setValue(0), [setValue]);
  const goToEnd = useCallback(() => setValue(length - 1), [length, setValue]);
  const goToIndex = useCallback(
    (newValue: number) => {
      setValue(Math.min(Math.max(newValue, 0), length - 1));
    },
    [length, setValue],
  );
  const clear = useCallback(() => setValue(null), [setValue]);

  return {
    decrement,
    increment,
    goToStart,
    goToEnd,
    goToIndex,
    clear,
  };
}

export default useArrayNavigator;
