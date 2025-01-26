import React from "react";
import * as PageStyled from "../../../case-studies/styles";
import * as Styled from "./project-concept-to-completion.styled";

import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";
import BlockRectangles from "../../../../components/TitleWithRects/BlockRectangles";
import { IBlockProps } from "../../../../types/CaseStudy";
import { useMediaQuery } from "@mui/material";
import ConceptToCompletionBlock from "../../../../components/Common/ConceptToCompletionBlock";

export const ConceptToCompletion = ({ project }: IBlockProps) => {
  const isMobileCurrent = useMediaQuery("(max-width: 767px)");
  return (
    <PageStyled.PortfolioPageWrapper>
      <Styled.ConceptToCompletionContainer>
        {!isMobileCurrent ? (
          <PageStyled.FeaturesDescription className="concept-completion">
            <PageStyled.FeaturesText>
              <BlockRectangles className="impl-process-rect" />
              <div>From Concept to Completion</div>
            </PageStyled.FeaturesText>
            <PageStyled.FeaturesDescription>
              {project?.conceptToCompletion.description}
            </PageStyled.FeaturesDescription>
          </PageStyled.FeaturesDescription>
        ) : (
          <PageStyled.FeaturesDescription>
            <MobileInfiniteText
              title="From Concept to Completion"
              className="case-study"
            />
            <PageStyled.FeaturesDescription>
              {project?.conceptToCompletion.description}
            </PageStyled.FeaturesDescription>
          </PageStyled.FeaturesDescription>
        )}
        <ConceptToCompletionBlock items={project?.conceptToCompletion.item} />
      </Styled.ConceptToCompletionContainer>
    </PageStyled.PortfolioPageWrapper>
  );
};
