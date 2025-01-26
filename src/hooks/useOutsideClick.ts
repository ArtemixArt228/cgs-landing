import React, { useEffect } from "react";

const useOutsideClick = (
  elementRef: React.RefObject<HTMLHeadingElement>,
  handler: (value: boolean) => void,
  value: boolean,
  attached = false
) => {
  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: any) => {
      if (!elementRef.current) return;
      if (!elementRef.current.contains(e.target)) {
        handler(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [attached, value, handler, elementRef]);
};

export default useOutsideClick;
