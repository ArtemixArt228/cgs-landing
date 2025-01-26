import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  EstimationPaginationContainer,
  EstimationPaginationPage,
} from "../../styles/EstimationForm.styled";
import { useFormikContext } from "formik";

const Pagination = ({
  pageCount,
  currentPage,
  setPage,
  setTouched,
}: {
  pageCount: number;
  currentPage: number;
  setPage: Dispatch<SetStateAction<number>>;
  setTouched: Dispatch<SetStateAction<boolean>>;
}) => {
  const { validateForm, isValid } = useFormikContext();

  const [maxOpenPage, setMaxOpenPage] = useState(1);

  const paginationPages = Array.from(Array(pageCount).keys());

  useEffect(() => {
    if (maxOpenPage <= currentPage) setMaxOpenPage(currentPage);
  }, [currentPage]);

  return (
    <EstimationPaginationContainer>
      {paginationPages.map((page) => (
        <EstimationPaginationPage
          key={page}
          style={{
            background: `${page + 1 === currentPage ? "#000" : "#F1EFED"}`,
            color: `${
              page + 1 === currentPage
                ? "#fff"
                : maxOpenPage >= page + 1
                ? "#000"
                : "#8F8E93"
            }`,
            border: `${maxOpenPage >= page + 1 ? "1px solid #000" : "none"}`,
          }}
          onClick={async () => {
            await validateForm();

            setTouched(false);

            if (
              (maxOpenPage >= page + 1 && isValid) ||
              currentPage >= page + 1
            ) {
              setPage(page + 1);
            } else {
              setTouched(true);
            }
          }}
        >
          {page + 1}
        </EstimationPaginationPage>
      ))}
    </EstimationPaginationContainer>
  );
};

export default Pagination;
