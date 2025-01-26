import { useEffect, useRef, useState } from "react";

export const useScrollLock = (
  isLocked: boolean,
  fixedPaddingElementsSelectors: string[] = [],
  fixedMarginElementsSelectors: string[] = []
) => {
  const [hasLockedScroll, setHasLockedScroll] = useState(false);
  const scrollbarWidthRef = useRef(0);

  useEffect(() => {
    const lockScroll = () => {
      const scrollbarWidthCurrent =
        window.innerWidth - document.documentElement.clientWidth;
      scrollbarWidthRef.current = scrollbarWidthCurrent;
      setHasLockedScroll(true);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidthRef.current}px`;

      fixedPaddingElementsSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          const currentPaddingRight =
            parseInt(
              window.getComputedStyle(element as HTMLElement).paddingRight,
              10
            ) || 0;
          const newPaddingRight =
            currentPaddingRight + scrollbarWidthRef.current;
          (element as HTMLElement).style.paddingRight = `${newPaddingRight}px`;
        });
      });
      fixedMarginElementsSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          (
            element as HTMLElement
          ).style.marginRight = `${scrollbarWidthRef.current}px`;
        });
      });
    };

    const unlockScroll = () => {
      setHasLockedScroll(false);
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";

      fixedPaddingElementsSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          const currentPaddingRight =
            parseInt(
              window.getComputedStyle(element as HTMLElement).paddingRight,
              10
            ) || 0;
          const previousPaddingRight =
            currentPaddingRight - scrollbarWidthRef.current;
          (
            element as HTMLElement
          ).style.paddingRight = `${previousPaddingRight}px`;
        });
      });
      fixedMarginElementsSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          (element as HTMLElement).style.marginRight = "0px";
        });
      });
    };

    if (isLocked && !hasLockedScroll) {
      lockScroll();
    } else if (!isLocked && hasLockedScroll) {
      unlockScroll();
    }
    return () => {
      isLocked && hasLockedScroll && unlockScroll();
    };
  }, [isLocked]);
};
