import Image from "next/image";
import React, { useMemo } from "react";
import { useMediaQuery } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";

import * as Styled from "./homepage-pain-block.styled";

import { queryKeys } from "../../../../consts/queryKeys";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

export const PainBlock = () => {
  const queryClient = useQueryClient();
  const whyDoesItHappenBlockData = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.WhyDoesItHappenBlock;

  const isMoreThan1800 = useMediaQuery("(min-width:1800px)");

  const size = useMemo(() => (isMoreThan1800 ? 51 : 38), [isMoreThan1800]);
  return (
    <Styled.SectionWrapper>
      <Styled.FailWrapper>
        {whyDoesItHappenBlockData?.title && (
          <Styled.StatementsContainer
            dangerouslySetInnerHTML={{ __html: whyDoesItHappenBlockData.title }}
          />
        )}

        <Styled.Subtitle>{whyDoesItHappenBlockData?.subtitle}</Styled.Subtitle>

        <div style={{ width: "100%", background: "#F1EFED", borderRadius: 16 }}>
          <Styled.FailCausesContainer>
            {whyDoesItHappenBlockData?.reasons.map((reason, i) => (
              <Styled.FailCausesItem key={`${reason.title}-${i}`}>
                <Image
                  width={size}
                  height={size}
                  src={reason.image?.url}
                  alt="reason"
                />
                <span>{reason.title}</span>
              </Styled.FailCausesItem>
            ))}
          </Styled.FailCausesContainer>
        </div>
      </Styled.FailWrapper>
    </Styled.SectionWrapper>
  );
};
