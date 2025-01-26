import React from "react";
import Image from "next/image";

import BlockRectangles from "../../../../components/TitleWithRects/BlockRectangles";
import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";

import * as Styled from "./project-overview.styled";
import * as PageStyled from "../../../case-studies/styles";

import { IBlockProps } from "../../../../types/CaseStudy";

import ButtonArrow from "../../../../utils/ButtonArrow";

export const ProjectOverview = ({ project, isMobile }: IBlockProps) => {
  const sortedTechnologies = project?.projectOverview.technologies
    .slice(0, 6)
    .sort((a, b) => {
      if (a.main === b.main) {
        return 0;
      }
      return a.main ? -1 : 1;
    });

  return (
    <PageStyled.PortfolioPageWrapper
      flexDirection="column"
      className="project-overview-wrapper"
    >
      <Styled.ProjectOverviewContainer>
        <Styled.ProjectInfoOverview>
          {!isMobile ? (
            <PageStyled.FeaturesText>
              <BlockRectangles className="impl-process-rect" />
              <div>Project overview</div>
            </PageStyled.FeaturesText>
          ) : (
            <MobileInfiniteText
              title="PROJECT OVERVIEW"
              className="case-study"
            />
          )}
          <PageStyled.FeaturesDescription>
            {project?.projectOverview.description}
          </PageStyled.FeaturesDescription>
        </Styled.ProjectInfoOverview>
        <Styled.ProjectInfoContainer>
          <Styled.ProjectInfoItemContainer className="short">
            <Styled.ProjectInfoItemLabel>Budget</Styled.ProjectInfoItemLabel>
            <Styled.ProjectInfoItemText>
              {project?.projectOverview.budget}
            </Styled.ProjectInfoItemText>
          </Styled.ProjectInfoItemContainer>
          <Styled.ProjectInfoItemContainer className="short">
            <Styled.ProjectInfoItemLabel>Timeframe</Styled.ProjectInfoItemLabel>
            <Styled.ProjectInfoItemText>{`${
              project?.projectOverview.timeframe
            } month${
              project && +project?.projectOverview.timeframe === 1 ? "" : "s"
            }`}</Styled.ProjectInfoItemText>
          </Styled.ProjectInfoItemContainer>
          <Styled.ProjectInfoItemContainer className="short">
            <Styled.ProjectInfoItemLabel>
              Release Date
            </Styled.ProjectInfoItemLabel>
            <Styled.ProjectInfoItemText>
              {project?.projectOverview.releaseDate}
            </Styled.ProjectInfoItemText>
          </Styled.ProjectInfoItemContainer>
          <Styled.ProjectInfoItemContainer className="short">
            <Styled.ProjectInfoItemLabel>Team size</Styled.ProjectInfoItemLabel>
            <Styled.ProjectInfoItemText>
              {project?.projectOverview.teamSize} members
            </Styled.ProjectInfoItemText>
          </Styled.ProjectInfoItemContainer>
          <Styled.ProjectInfoItemContainer className="long">
            <Styled.ProjectInfoItemLabel>Platform</Styled.ProjectInfoItemLabel>
            <Styled.PlatformsContainer>
              {(project?.general.web_link ||
                (project?.projectOverview.platform.web &&
                  !project?.general.web_link)) && (
                <Styled.ProjectInfoItemTextLink
                  isNDA={project?.general.NDA || !project?.general.web_link}
                >
                  <a
                    href={
                      !project?.general.NDA && project?.general.web_link
                        ? project?.general.web_link
                        : undefined
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Web
                  </a>

                  <span className="arrow">
                    <ButtonArrow currentColor />
                  </span>
                </Styled.ProjectInfoItemTextLink>
              )}
              {(project?.general.ios_link ||
                (project?.projectOverview.platform.ios &&
                  !project?.general.ios_link)) && (
                <Styled.ProjectInfoItemTextLink
                  isNDA={project?.general.NDA || !project?.general.ios_link}
                >
                  <a
                    href={
                      !project?.general.NDA && project?.general.ios_link
                        ? project?.general.ios_link
                        : undefined
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    iOS
                  </a>
                  <span className="arrow">
                    <ButtonArrow currentColor />
                  </span>
                </Styled.ProjectInfoItemTextLink>
              )}
              {(project?.general.android_link ||
                (project?.projectOverview.platform.android &&
                  !project?.general.android_link)) && (
                <Styled.ProjectInfoItemTextLink
                  isNDA={project?.general.NDA || !project?.general.android_link}
                >
                  <a
                    href={
                      !project?.general.NDA && project?.general.android_link
                        ? project?.general.android_link
                        : undefined
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Android
                  </a>
                  <span className="arrow">
                    <ButtonArrow currentColor />
                  </span>
                </Styled.ProjectInfoItemTextLink>
              )}
            </Styled.PlatformsContainer>
          </Styled.ProjectInfoItemContainer>
          <Styled.ProjectInfoItemContainer className="long">
            <Styled.ProjectInfoItemLabel>
              Technologies
            </Styled.ProjectInfoItemLabel>
            <Styled.TechnologiesIconContainer>
              {sortedTechnologies?.map((item) => (
                <Styled.TechnologyItemContainer key={item.image.url}>
                  <Styled.TechnologyImage>
                    <Image
                      src={item.image.url}
                      alt="tech"
                      layout="fill"
                      objectFit="fill"
                    />
                  </Styled.TechnologyImage>
                  <Styled.TechnologyText>{item.name}</Styled.TechnologyText>
                </Styled.TechnologyItemContainer>
              ))}
            </Styled.TechnologiesIconContainer>
          </Styled.ProjectInfoItemContainer>
        </Styled.ProjectInfoContainer>
      </Styled.ProjectOverviewContainer>
    </PageStyled.PortfolioPageWrapper>
  );
};
