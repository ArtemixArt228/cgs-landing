import React from "react";
import * as PageStyled from "../../../case-studies/styles";
import * as Styled from "./project-design-overview.styled";
import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";
import BlockRectangles from "../../../../components/TitleWithRects/BlockRectangles";
import { IBlockProps } from "../../../../types/CaseStudy";
import { DesignOverviewSection } from "./components";

export const DesignOverview = ({ project, isMobile }: IBlockProps) => {
  return (
    <>
      {project?.designOverview?.includeBlock && (
        <PageStyled.PortfolioPageWrapper>
          <Styled.ContentContainer>
            {!isMobile ? (
              <PageStyled.FeaturesText>
                <BlockRectangles className="impl-process-rect" />
                <div>Design Overview</div>
              </PageStyled.FeaturesText>
            ) : (
              <MobileInfiniteText
                title="Design Overview"
                className="case-study"
              />
            )}
            <DesignOverviewSection
              sectionTitle={project?.designOverview.fontSection.title}
              sectionDescription={
                project?.designOverview.fontSection.description
              }
              cards={project?.designOverview.fontSection.cards}
              cardType="font"
            />
            <DesignOverviewSection
              sectionTitle={project?.designOverview.colorSection.title}
              sectionDescription={
                project?.designOverview.colorSection.description
              }
              cards={project?.designOverview.colorSection.cards}
              cardType="color"
            />
            <DesignOverviewSection
              sectionTitle={project?.designOverview.accessibilitySection.title}
              sectionDescription={
                project?.designOverview.accessibilitySection.description
              }
              cards={project?.designOverview.accessibilitySection.cards}
              cardType="accessibility"
            />
          </Styled.ContentContainer>
        </PageStyled.PortfolioPageWrapper>
      )}
    </>
  );
};
