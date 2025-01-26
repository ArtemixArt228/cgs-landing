import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";

import Arrow from "/public/upArrowSidebar.svg";
import * as Styled from "../../../../../styles/AdminPortfolio";
import * as Styles from "../../../../../styles/AdminPage";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";

export const DropdownCategory = ({
  categories,
  iserror = false,
}: {
  categories: string[];
  iserror?: boolean;
}) => {
  const { values, setFieldValue } = useFormikContext<IPortfolioReview>();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [catArr, setCatArr] = useState<string[]>(values.categories || []);

  const changeTechHandler = (category: string) => {
    setIsOpen(false);
    setCatArr((prevState) => [category, ...prevState]);
  };
  const removeTagHandler = (idx: number) => {
    const temp = [...catArr];
    temp.splice(idx, 1);

    setCatArr(temp);
  };

  useEffect(() => {
    setFieldValue("categories", catArr);
  }, [catArr, setFieldValue]);

  return (
    <>
      <Styled.DropdownWrapperTechnology>
        <Styled.DropdownBanner
          isOpen={isOpen}
          iserror={iserror}
          onClick={() => setIsOpen(!isOpen)}
        >
          {"CATEGORY"}
          <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
        </Styled.DropdownBanner>
        <Styled.Content className={isOpen ? "open" : undefined}>
          {categories?.map((cat, idx) => (
            <div
              key={`${cat}${idx}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => changeTechHandler(cat)}
            >
              <span>{cat}</span>
            </div>
          ))}
        </Styled.Content>
      </Styled.DropdownWrapperTechnology>
      <Styles.AdminFourthBlockFlexTag>
        {values.categories.map((cat, idx) => (
          <Styles.AdminPageFourthTechTagWrapper key={`${cat}${idx}`}>
            <Styles.AdminPageFourthTechTag>
              <span>{cat}</span>
              <span onClick={() => removeTagHandler(idx)}>x</span>
            </Styles.AdminPageFourthTechTag>
          </Styles.AdminPageFourthTechTagWrapper>
        ))}
      </Styles.AdminFourthBlockFlexTag>
    </>
  );
};
