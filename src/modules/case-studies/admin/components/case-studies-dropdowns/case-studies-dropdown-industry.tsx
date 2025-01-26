import React, { useState } from "react";
import Image from "next/image";
import { useFormikContext } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { adminPortfolioService } from "../../../../../services/adminPortfolioPage";

import * as Styled from "../../../../../styles/AdminPortfolio";
import Arrow from "/public/upArrowSidebar.svg";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import TrashIconBtn from "../../../../../components/Admin/RateCard/trashIconBtn";
import { queryKeys } from "../../../../../consts/queryKeys";

interface IDropdownProps {
  industries: string[];
  iserror?: boolean;
}

export const DropdownIndustry = ({ industries, iserror }: IDropdownProps) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { values, setFieldValue } = useFormikContext<IPortfolioReview>();

  const { mutateAsync: deleteIndustry } = useMutation(
    [queryKeys.removePortfolioIndustry],
    (industry: string) => adminPortfolioService.removeIndustry(industry),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.getPortfolioPage]);
      },
    }
  );

  const changeIndustryHandler = (industry: string) => {
    setIsOpen(false);
    setFieldValue("general.industry", industry);
  };

  return (
    <Styled.DropdownWrapper>
      <Styled.DropdownBanner
        isOpen={isOpen}
        iserror={iserror}
        onClick={() => setIsOpen(!isOpen)}
      >
        {values.general.industry.length > 0
          ? values.general.industry
          : "//Choose one Industry"}
        <Image width={12} height={12} src={Arrow.src} alt="Arrow" />
      </Styled.DropdownBanner>
      <Styled.Content className={isOpen ? "open" : undefined}>
        {industries.map((industry, idx) => (
          <div
            key={`${industry}${idx}`}
            onMouseDown={(e) => e.preventDefault()}
          >
            <span
              onClick={() => {
                changeIndustryHandler(industry);
              }}
            >
              {industry}
            </span>
            <TrashIconBtn onClick={() => deleteIndustry(industry)} />
          </div>
        ))}
      </Styled.Content>
    </Styled.DropdownWrapper>
  );
};
