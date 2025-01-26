import React from "react";
import Image from "next/image";

import * as Styled from "../project-problems-and-solutions.styled";

interface IProps {
  problemSubtitle: string;
  className?: string;
  isModal?: boolean;
}

export const ProblemAndSolutionAITag: React.FC<IProps> = ({
  problemSubtitle,
  className = "",
  isModal = false,
}) => {
  const iconUrl = isModal
    ? "/Portfolio/problem-solution/problem-solution-ai-icon-modal.svg"
    : "/Portfolio/problem-solution/problem-solution-ai-icon.svg";
  return (
    <Styled.AiTag className={className}>
      <Styled.Icon className={className}>
        <Image src={iconUrl} alt="Ai solution icon" layout="fill" />
      </Styled.Icon>
      <Styled.ProblemSubtitle className={className}>
        {problemSubtitle}
      </Styled.ProblemSubtitle>
    </Styled.AiTag>
  );
};
