import { useEffect } from "react";

function useBodyClassList(...classList: unknown[]) {
  const classNames = classList.filter(
    (str): str is string => typeof str === "string",
  );
  useEffect(() => {
    document.body.classList.add(...classNames);
    return () => document.body.classList.remove(...classNames);
  }, classNames);
}

export default useBodyClassList;
