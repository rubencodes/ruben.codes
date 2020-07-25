import { useEffect, useState } from "react";

function useCache(value, useCachedValue) {
  const [valueCache, setValueCache] = useState(value);
  useEffect(() => {
    if (useCachedValue) {
      return;
    }

    setValueCache(value);
  }, [value]);

  return valueCache;
}

export default useCache;
