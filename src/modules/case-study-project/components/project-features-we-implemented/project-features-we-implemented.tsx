import React from "react";

import * as PageStyled from "../../../case-studies/styles";
import * as Styled from "./project-features-we-implemented.styled";

import { IBlockProps } from "../../../../types/CaseStudy";
import { FeatureSlide } from "./components";

export const FeaturesWeImplemented = ({ project }: IBlockProps) => {
  return (
    <Styled.FeaturesContainer>
      <PageStyled.PortfolioPageWrapper>
        <PageStyled.ConceptContainer>
          <FeatureSlide
            data={{
              title: "Features We Implemented",
              testimonials: project!.featuresWeImplemented.features!,
            }}
          />
        </PageStyled.ConceptContainer>
      </PageStyled.PortfolioPageWrapper>
    </Styled.FeaturesContainer>
  );
};
