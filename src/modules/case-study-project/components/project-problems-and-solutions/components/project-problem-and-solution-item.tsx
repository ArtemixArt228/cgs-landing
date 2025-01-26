import React, { useState } from "react";
import Image from "next/image";

import * as Styled from "../project-problems-and-solutions.styled";

import ArrowStroke from "../../../../../components/svg/ArrowStroke";
import { ProblemAndSolutionAITag, TruncatedTextWithLearnMore } from ".";
import { IProblemAndSolutionItem } from "../../../../../types/Admin/AdminPortfolio.types";
import clsx from "clsx";

interface ProblemAndSolutionItemProps {
  problemSolution: IProblemAndSolutionItem;
  handleModalOpen: (
    problem: string,
    solution: string,
    imageUrl: string,
    problemSubtitle?: string
  ) => void;
}

export const ProblemAndSolutionItem: React.FC<ProblemAndSolutionItemProps> = ({
  problemSolution,
  handleModalOpen,
}) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const { problemTitle, problemSubtitle, solutionDescription, solutionImage } =
    problemSolution;
  return (
    <Styled.ProblemSolutionBlockContainer
      onClick={
        isTruncated
          ? () =>
              handleModalOpen(
                problemTitle,
                solutionDescription,
                solutionImage.image!.url!,
                problemSubtitle
              )
          : undefined
      }
      style={isTruncated ? { cursor: "pointer" } : undefined}
      className={clsx(problemSubtitle && "ai-card")}
    >
      <Styled.ImageWrapper>
        <Image
          alt="Problem&Solution image"
          src={solutionImage.image?.url ?? ""}
          layout="fill"
          objectFit="contain"
          priority
          unoptimized
        />
      </Styled.ImageWrapper>
      <Styled.ProblemSolutionTextContainer>
        {problemSubtitle && (
          <ProblemAndSolutionAITag problemSubtitle={problemSubtitle} />
        )}
        <Styled.ProblemTitleAndArrowContainer>
          <Styled.ProblemTitle className={clsx(problemSubtitle && "ai-card")}>
            {problemTitle}
          </Styled.ProblemTitle>
          <Styled.ProblemArrow className={clsx(problemSubtitle && "ai-card")}>
            <ArrowStroke />
          </Styled.ProblemArrow>
        </Styled.ProblemTitleAndArrowContainer>
        <TruncatedTextWithLearnMore
          className={problemSubtitle ? "ai-card" : ""}
          text={solutionDescription}
          setIsTruncated={setIsTruncated}
          lineCountDesktop={6}
          lineCountMobile={5}
        />
      </Styled.ProblemSolutionTextContainer>
    </Styled.ProblemSolutionBlockContainer>
  );
};
