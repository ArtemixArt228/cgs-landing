import React from "react";
import * as PageStyled from "../../../case-studies/styles";
import ButtonArrow from "../../../../utils/ButtonArrow";
import { openInNewTab } from "../../../../utils/OpenInNewTab";
import { IPortfolioReview } from "../../../../types/Admin/AdminPortfolio.types";

interface IProps {
  project: IPortfolioReview;
  lightTheme: boolean;
  className?: string;
}

const renderLink = (label: string, url: string, isInfoCont = false) => (
  <PageStyled.ProjectHeaderLinkWrapper onClick={() => openInNewTab(url)}>
    <PageStyled.ProjectsContainerHeaderLink
      isInfoCont={isInfoCont}
      isProjectLink
    >
      <p>{label}</p>
      <PageStyled.ProjectsContainerArrowContainer isProjectLink>
        <ButtonArrow />
      </PageStyled.ProjectsContainerArrowContainer>
    </PageStyled.ProjectsContainerHeaderLink>
  </PageStyled.ProjectHeaderLinkWrapper>
);

export const PlatformLinks = ({
  project,
  lightTheme,
  className = "",
}: IProps) => {
  const { general } = project;
  const { NDA, web_link, ios_link, android_link } = general;

  return (
    <PageStyled.ProjectHeaderLinkContainer className={className}>
      {NDA ? (
        <PageStyled.ProjectsContainerHeaderLink
          isProjectLink={false}
          isInfoCont={false}
        >
          <span>NDA</span>
          <PageStyled.ProjectsContainerArrowContainer isProjectLink={false}>
            <ButtonArrow />
          </PageStyled.ProjectsContainerArrowContainer>
        </PageStyled.ProjectsContainerHeaderLink>
      ) : (
        <>
          {web_link && renderLink("WEB", web_link, !lightTheme)}
          {ios_link && renderLink("iOS", ios_link, !lightTheme)}
          {android_link && renderLink("ANDROID", android_link, !lightTheme)}
        </>
      )}
    </PageStyled.ProjectHeaderLinkContainer>
  );
};
