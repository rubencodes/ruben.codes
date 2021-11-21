import { useEffect, useState } from "react";

function useCache<Value>(value: Value, shouldUseCache: boolean) {
  const [valueCache, setValueCache] = useState(value);
  useEffect(() => {
    if (shouldUseCache) {
      return;
    }

    setValueCache(value);
  }, [value]);

  return valueCache;
}

export default useCache;
