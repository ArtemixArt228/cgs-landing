import { useEffect, useState, MutableRefObject } from "react";

export const useDynamicLoading = <T extends Element>(
  ref: MutableRefObject<T | null>
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      !isIntersecting && setIntersecting(true);
    };

    const observer = new IntersectionObserver(([entry]) => {
      !isIntersecting && entry.isIntersecting && setIntersecting(true);
    });
    const current = ref.current;
    if (current) {
      observer.observe(current);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, isIntersecting]);

  return isIntersecting;
};
