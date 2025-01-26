import React from "react";
import * as StyledAiSolutions from "../project-ai-solutions.styled";
import Image from "next/image";
import { IAiSolutionsListItemProps } from "../../../../../types/CaseStudy";

export const AiSolutionsListItem = ({
  modalData,
  setModalData,
  setIsModalOpen,
  itemCounter,
  className,
  iconSize,
  icon,
  altText,
  title,
  description,
}: IAiSolutionsListItemProps) => {
  const handleModal = () => {
    if (modalData) {
      setIsModalOpen(true);
      setModalData(modalData);
    }
  };

  return (
    <StyledAiSolutions.AiSolutionsListItem
      className={className + itemCounter}
      onClick={handleModal}
    >
      <StyledAiSolutions.AiSolutionsIconContainer>
        <Image src={icon} width={iconSize} height={iconSize} alt={altText} />
      </StyledAiSolutions.AiSolutionsIconContainer>
      <StyledAiSolutions.AiSolutionsTextContainer>
        <StyledAiSolutions.AiSolutionsHeadline>
          {title}
        </StyledAiSolutions.AiSolutionsHeadline>
        <StyledAiSolutions.AiSolutionsDescription>
          {description}
        </StyledAiSolutions.AiSolutionsDescription>
      </StyledAiSolutions.AiSolutionsTextContainer>
    </StyledAiSolutions.AiSolutionsListItem>
  );
};
