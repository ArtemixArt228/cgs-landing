import { useEffect, useState, MutableRefObject } from "react";

export const useOnScreen = <T extends Element>(
  ref: MutableRefObject<T | null>,
  onFirstScroll = false
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (onFirstScroll) {
        entry.isIntersecting && setIntersecting(true);
      } else {
        setIntersecting(entry.isIntersecting);
      }
    });

    const current = ref.current;

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [ref, onFirstScroll]);

  return isIntersecting;
};
