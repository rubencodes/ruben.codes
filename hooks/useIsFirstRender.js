import { useEffect, useRef } from "react";

function useIsFirstRender() {
  const isFirstRenderRef = useRef(true);
  useEffect(() => {
    isFirstRenderRef.current = false;
  }, []);

  return isFirstRenderRef.current;
}

export default useIsFirstRender;
