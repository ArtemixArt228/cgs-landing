import React from "react";
import { Pagination } from "@mui/material";

import * as Styled from "./pagination-bar.styled";

import { IPaginationBar } from "../../../../types/Components.types";

import { usePaginationLogic } from "../../../../hooks/use-pagination-logic.hook";

export const PaginationBar = ({
  totalPages,
  currentPage,
  setCurrentPage,
  scrollFunction,
}: IPaginationBar) => {
  const { handlePageChange } = usePaginationLogic(
    currentPage,
    setCurrentPage,
    scrollFunction
  );

  return (
    <Styled.PaginationWrapper>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        siblingCount={0}
        boundaryCount={1}
        size="large"
      />
    </Styled.PaginationWrapper>
  );
};
