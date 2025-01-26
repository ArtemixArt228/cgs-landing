import React, { useState } from "react";

import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";
import { CaseStudyModal } from "../project-info-modal/project-info-modal";
import BlockRectangles from "../../../../components/TitleWithRects/BlockRectangles";

import * as PageStyled from "../../../case-studies/styles";
import * as Styled from "./project-problems-and-solutions.styled";

import { IBlockProps, ICaseStudyModalData } from "../../../../types/CaseStudy";
import { ProblemAndSolutionItem } from "./components";

export const ProblemsAndSolutions = ({
  project,
  isMobile,
  isSmallDesktop,
}: IBlockProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ICaseStudyModalData | undefined>(
    undefined
  );

  const handleModalOpen = (
    problem: string,
    solution: string,
    imageUrl: string,
    problemSubtitle?: string
  ) => {
    setModalData({
      title: problem,
      description: solution,
      subtitle: problemSubtitle,
      imageUrl,
    });
    setIsModalOpen(true);
  };

  const renderProblemsAndSolutions = (filterFn: (index: number) => boolean) => {
    return project?.problemsAndSolutions.problemAndSolution
      .slice(0, 6)
      .filter((_, index) => filterFn(index))
      .map((item) => (
        <ProblemAndSolutionItem
          key={item._id}
          problemSolution={item}
          handleModalOpen={handleModalOpen}
        />
      ));
  };
  return (
    <>
      <PageStyled.PortfolioPageWrapper flexDirection="column">
        <Styled.ProblemsAndSolutionsMainContainer>
          <Styled.BlocksContainer>
            <PageStyled.FeaturesDescription className="problems-and-solutions">
              {!isMobile ? (
                <PageStyled.FeaturesText>
                  <BlockRectangles className="impl-process-rect" />
                  <div>Problems & Solutions</div>
                </PageStyled.FeaturesText>
              ) : (
                <MobileInfiniteText
                  title="PROBLEMS & SOLUTIONS"
                  className="case-study"
                />
              )}
              <PageStyled.FeaturesDescription>
                {project?.problemsAndSolutions.description}
              </PageStyled.FeaturesDescription>
            </PageStyled.FeaturesDescription>
            {isSmallDesktop && (
              <>{renderProblemsAndSolutions((index) => index % 2 !== 0)}</>
            )}
            {!isSmallDesktop && <>{renderProblemsAndSolutions(() => true)}</>}
          </Styled.BlocksContainer>
          {isSmallDesktop && (
            <Styled.BlocksContainer>
              {renderProblemsAndSolutions((index) => index % 2 == 0)}
            </Styled.BlocksContainer>
          )}
        </Styled.ProblemsAndSolutionsMainContainer>
      </PageStyled.PortfolioPageWrapper>
      <CaseStudyModal
        isModalOpen={isModalOpen}
        modalData={modalData}
        setIsModalOpen={setIsModalOpen}
        isSolutionModal={true}
      />
    </>
  );
};
