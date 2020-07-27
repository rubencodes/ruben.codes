import React, { useRef } from "react";

import styles from "./FileInput.module.css";

const FileInput = ({ children, ...props }) => {
  const inputRef = useRef(null);
  const open = () => inputRef.current?.click();

  return (
    <>
      <input
        ref={inputRef}
        className={styles.fileInput}
        type="file"
        {...props}
      />
      {children({ open })}
    </>
  );
};

export default FileInput;
