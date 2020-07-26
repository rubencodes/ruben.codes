import { useState, useCallback } from "react";

function useInputState(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const [files, setFiles] = useState([]);
  const onChange = useCallback((event) => {
    setValue(event.target.value);
    setFiles(event.target.files);
  }, []);

  return [value, onChange, files];
}

export default useInputState;
