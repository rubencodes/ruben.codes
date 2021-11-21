import React, { useRef } from "react";

import styles from "./FileInput.module.css";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  children: (options: { open: () => void }) => React.ReactNode;
  accept?: string;
  multiple?: boolean;
  disabled?: boolean;
}

const FileInput: React.FC<Props> = ({ children, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
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
