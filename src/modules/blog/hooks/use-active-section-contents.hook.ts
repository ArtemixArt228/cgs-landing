import { useEffect, useState, useRef } from "react";

export const useActiveSection = (headerIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const headerRefs = useRef<Record<string, HTMLElement | null>>({}); // Initialize headerRefs

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-22% 0px -78% 0px",
        threshold: 0,
      }
    );

    // Capture current value of headerRefs to avoid ESLint warnings
    const currentRefs = { ...headerRefs.current };

    // Populate headerRefs and observe elements
    headerIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        currentRefs[id] = element;
        observer.observe(element);
      }
    });

    return () => {
      // Unobserve elements on cleanup
      headerIds.forEach((id) => {
        const element = currentRefs[id];
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headerIds]);

  return { activeSection, headerRefs, setActiveSection };
};
