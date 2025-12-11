import React, { useEffect, useRef } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus(); // directly accessing the DOM element
    }
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default AutoFocusInput;
