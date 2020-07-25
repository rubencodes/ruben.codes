import { useEffect, useState } from "react";

const getWindowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
});

function useWindowSize(defaultSize) {
  const [size, setSize] = useState(defaultSize);
  useEffect(() => {
    const onResize = () => setSize(getWindowSize());

    onResize(); // Set for initial render.
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}

export default useWindowSize;
