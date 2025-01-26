import React, { useState } from "react";
import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";
import { IBlockProps, ICaseStudyModalData } from "../../../../types/CaseStudy";
import * as StyledPortfolioPage from "../../../case-studies/styles";
import * as Styled from "./project-ai-solutions.styled";
import arrowsIcon from "../../../../../public/Portfolio/Arrows.svg";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";
import { CaseStudyModal } from "../project-info-modal/project-info-modal";
import { AiSolutionsListItem } from "./components";

export const AiSolutionsBlock = ({
  isMobile,
  isDesktop,
  project,
}: IBlockProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ICaseStudyModalData | null>(null);
  const isLargeDesktop = useMediaQuery("(min-width: 1920px)");
  const arrowsIconWidth = isLargeDesktop ? 204 : 123;
  const arrowsIconHeight = isLargeDesktop ? 28 : 22;
  const iconSize = isLargeDesktop ? 83 : 62;

  let className = "";
  let itemClassName = "";
  let itemCounter = 0;

  const findFeature = (featureTitle: string) => {
    const featureInfo = project!.featuresWeImplemented.features.find(
      (feature) => feature.title === featureTitle
    );
    if (!featureInfo) return null;

    return {
      imageUrl: featureInfo.featureImage.image?.url || "",
      description: featureInfo.description,
      title: featureInfo.title,
    };
  };

  const addClassToListAndItem = () => {
    if (
      project &&
      project.aiSolutionsToAchieveGoal &&
      project.aiSolutionsToAchieveGoal?.solutions
    ) {
      if (project.aiSolutionsToAchieveGoal.solutions.length === 3) {
        className = "three-in-a-row";
        itemClassName = "grid-item-in-a-row";
        return;
      }

      if (project.aiSolutionsToAchieveGoal.solutions.length === 5) {
        className = "five-grid-elements";
        itemClassName = "grid-item";
        return;
      }
    }
  };

  addClassToListAndItem();

  return (
    <>
      {project &&
        project.aiSolutionsToAchieveGoal &&
        project.aiSolutionsToAchieveGoal.includeBlock && (
          <StyledPortfolioPage.PortfolioPageWrapper
            flexDirection="column"
            className="ai-solutions-block"
          >
            {isMobile && (
              <div>
                <MobileInfiniteText
                  title={project.aiSolutionsToAchieveGoal.title}
                  className="case-study"
                />
              </div>
            )}

            <Styled.AiSolutionsContainer>
              {!isMobile && (
                <Styled.AiSolutionsTitleContainer>
                  {isDesktop && (
                    <Image
                      src={arrowsIcon}
                      alt="arrows"
                      width={arrowsIconWidth}
                      height={arrowsIconHeight}
                    />
                  )}
                  <Styled.AiSolutionsTitle>
                    {project.aiSolutionsToAchieveGoal.title}
                  </Styled.AiSolutionsTitle>
                  {isDesktop && (
                    <Image
                      src={arrowsIcon}
                      alt="arrows"
                      style={{ transform: "rotate(180deg)" }}
                      width={arrowsIconWidth}
                      height={arrowsIconHeight}
                    />
                  )}
                </Styled.AiSolutionsTitleContainer>
              )}
              <Styled.AiSolutionsList className={className}>
                {project.aiSolutionsToAchieveGoal.solutions.map((solution) => {
                  itemCounter++;
                  const featureModalData = findFeature(solution.featureTitle);
                  return (
                    <>
                      <AiSolutionsListItem
                        modalData={featureModalData}
                        setModalData={setModalData}
                        setIsModalOpen={setIsModalOpen}
                        itemCounter={itemCounter}
                        className={itemClassName}
                        key={solution._id}
                        iconSize={iconSize}
                        icon={solution.featureImage.image!.url}
                        altText={solution.title}
                        title={solution.title}
                        description={solution.description}
                      />
                    </>
                  );
                })}
              </Styled.AiSolutionsList>
            </Styled.AiSolutionsContainer>
          </StyledPortfolioPage.PortfolioPageWrapper>
        )}
      {modalData && (
        <CaseStudyModal
          isModalOpen={isModalOpen}
          modalData={modalData}
          setIsModalOpen={setIsModalOpen}
          isSolutionModal={false}
        />
      )}
    </>
  );
};
