import React, { useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";
import { useQuery } from "@tanstack/react-query";

import * as Styled from "./category-dropdown.styled";

import { cvAdminService } from "../../../../services";

import { CvData } from "../../../../../types";

import { queryKeys } from "../../../../../../../consts/queryKeys";

import Arrow from "public/upArrowSidebar.svg";

export const CategoryDropdown = () => {
  const { data } = useQuery([queryKeys.getCvPage], () =>
    cvAdminService.getCvPage()
  );

  const { values, errors, setValues } = useFormikContext<CvData>();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const changeCategory = (category: string) => {
    setIsOpen(false);
    setValues((prevState) => ({
      ...prevState,
      category: category,
    }));
  };

  return (
    <Styled.DropdownWrapper>
      <Styled.DropdownButton
        iserror={!!errors.category && !values.category.length}
        onClick={() => setIsOpen(!isOpen)}
        className={
          isOpen ? "open" : values.category ? "categoryText" : undefined
        }
      >
        {values.category ? <>{values.category}</> : <div>Category</div>}
        <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownButton>
      <Styled.DropdownContent className={isOpen ? "open" : undefined}>
        {data?.categories.map((cat, idx) => (
          <div
            key={`${cat}${idx}`}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => changeCategory(cat)}
          >
            <span>{cat}</span>
          </div>
        ))}
      </Styled.DropdownContent>
    </Styled.DropdownWrapper>
  );
};
