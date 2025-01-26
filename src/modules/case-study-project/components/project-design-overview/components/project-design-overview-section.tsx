import React from "react";
import * as Styled from ".././project-design-overview.styled";
import ArrowStroke from "../../../../../components/svg/ArrowStroke";
import { DesignOverviewCard } from "./project-design-overview-card";
import { useMediaQuery } from "@mui/material";
import { IDesignOverviewCard } from "../../../../../types/Admin/AdminPortfolio.types";
interface IProps {
  cards?: IDesignOverviewCard[];
  cardType: "font" | "color" | "accessibility";
  sectionTitle?: string;
  sectionDescription?: string;
}
export const DesignOverviewSection = ({
  cards,
  cardType,
  sectionTitle,
  sectionDescription,
}: IProps) => {
  const isSmallDesktop = useMediaQuery("(min-width: 1100px)");
  return (
    <Styled.SectionWrapper>
      <Styled.SectionTextWrapper>
        <Styled.SectionTitle>
          {sectionTitle}
          <Styled.SectionTitleArrow>
            <ArrowStroke />
          </Styled.SectionTitleArrow>
        </Styled.SectionTitle>
        <Styled.SectionDescription>
          {sectionDescription}
        </Styled.SectionDescription>
      </Styled.SectionTextWrapper>
      <Styled.SectionLine />
      <Styled.CardsContainer>
        {cards?.length === 1 && isSmallDesktop && (
          <DesignOverviewCard key={"hidden"} cardType={"hidden"} />
        )}
        {cards?.map((card) => (
          <DesignOverviewCard key={card._id} card={card} cardType={cardType} />
        ))}
      </Styled.CardsContainer>
    </Styled.SectionWrapper>
  );
};
