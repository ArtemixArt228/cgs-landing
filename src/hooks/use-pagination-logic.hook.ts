import React, { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const usePaginationLogic = (
  currentPage: number,
  setCurrentPage: (page: number) => void,
  scrollFunction: () => void
) => {
  const router = useRouter();

  const isInitialRender = useRef(true);
  const previousPage = useRef(currentPage);

  // Handle page change and update the URL query
  const handlePageChange = useCallback(
    async (_event: React.ChangeEvent<unknown>, pageNumber: number) => {
      setCurrentPage(pageNumber);

      await router.replace(
        {
          pathname: router.pathname,
          query: {
            ...router.query,
            page: pageNumber.toString(),
          },
        },
        undefined,
        { shallow: true }
      );
    },
    [router, setCurrentPage]
  );

  // Manage scroll behavior on page change
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
    } else if (previousPage.current !== currentPage) {
      scrollFunction();
    }
    previousPage.current = currentPage;
  }, [currentPage, scrollFunction]);

  return { handlePageChange };
};
