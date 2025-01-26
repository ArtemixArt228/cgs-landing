import { useCallback, useState } from "react";
import { NextRouter } from "next/router";
import { scroller } from "react-scroll";

export const useBlogPagination = (router: NextRouter) => {
  const [currentPage, setCurrentPage] = useState<number>(() =>
    parseInt((router.query.page as string) || "1", 10)
  );

  const scrollToArticles = useCallback(() => {
    scroller.scrollTo("articles-container", {
      duration: 0,
      delay: 0,
      smooth: false,
      offset: -150,
    });
  }, []);

  return { currentPage, setCurrentPage, scrollToArticles };
};
