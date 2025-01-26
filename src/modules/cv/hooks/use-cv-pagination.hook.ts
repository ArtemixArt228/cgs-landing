import { useCallback, useState } from "react";
import { NextRouter } from "next/router";
import { scroller } from "react-scroll";

export const useCvPagination = (router: NextRouter) => {
  const [currentPage, setCurrentPage] = useState<number>(() =>
    parseInt((router.query.page as string) || "1", 10)
  );

  const scrollFunction = useCallback(() => {
    const topHeight = window.innerWidth > 768 ? -70 : -100;

    scroller.scrollTo("cv-wrapper", {
      duration: 0,
      delay: 0,
      smooth: false,
      offset: topHeight,
    });
  }, []);

  return { currentPage, setCurrentPage, scrollFunction };
};
