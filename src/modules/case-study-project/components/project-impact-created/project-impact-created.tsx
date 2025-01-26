import React from "react";
import * as PageStyled from "../../../case-studies/styles";
import * as Styled from "./project-impact-created.styled";
import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";
import BlockRectangles from "../../../../components/TitleWithRects/BlockRectangles";
import { IBlockProps } from "../../../../types/CaseStudy";

export const ImpactCreated = ({ project, isMobile }: IBlockProps) => {
  return (
    <PageStyled.PortfolioPageWrapper>
      <PageStyled.ConceptContainer>
        {!isMobile ? (
          <PageStyled.FeaturesText>
            <BlockRectangles className="impl-process-rect" />
            <div>
              {" "}
              <PageStyled.FeaturesText>Impact created</PageStyled.FeaturesText>
            </div>
          </PageStyled.FeaturesText>
        ) : (
          <MobileInfiniteText title="IMPACT CREATED" className="case-study" />
        )}
        <Styled.CardsContainer>
          {project?.impactCreated.items.map((block, idx) => (
            <Styled.CardWrapper key={idx}>
              <Styled.Title>
                <Styled.CountWrapper>{block.amount}</Styled.CountWrapper>
                <Styled.Text>{block.description}</Styled.Text>
              </Styled.Title>
              <Styled.Description>
                <span>{block.aditionalText}</span>
              </Styled.Description>
            </Styled.CardWrapper>
          ))}
        </Styled.CardsContainer>
      </PageStyled.ConceptContainer>
    </PageStyled.PortfolioPageWrapper>
  );
};
