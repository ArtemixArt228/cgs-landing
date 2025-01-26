import React from "react";

import { IPortfolioReview } from "../../../../types/Admin/AdminPortfolio.types";

import * as Styled from "./project-see-more-projects.styled";
import { PortfolioProjectsContainer } from "../../../case-studies/styles";

import { useWindowDimension } from "../../../../hooks/useWindowDimension";
import {
  ArrowTitleSeeMoreProject,
  ArrowTitleSeeMoreProjectMobile,
} from "./components";
import { PortfolioProjectComponent } from "../../../case-studies/components";

export const SeeMoreProjects = ({
  title,
  projectsIndustry,
  projectsCategory,
  mainProjectTitle,
}: {
  title: string;
  projectsIndustry: IPortfolioReview[];
  projectsCategory: IPortfolioReview[];
  mainProjectTitle: string;
}) => {
  const { width } = useWindowDimension();
  const slicedIndustry = projectsIndustry
    .filter((project) => project.general.title !== mainProjectTitle)
    .splice(0, 2);

  const slicedCategory = projectsCategory.filter(
    (project) => project.general.title !== mainProjectTitle
  );

  return (
    <Styled.SeeMoreProjectsWrapper>
      <Styled.SeeMoreProjectsTitleContainer>
        <Styled.SeeMoreProjectsArrow>
          {width && width > 767 ? (
            <ArrowTitleSeeMoreProject />
          ) : (
            <ArrowTitleSeeMoreProjectMobile />
          )}
        </Styled.SeeMoreProjectsArrow>
        <Styled.SeeMoreProjectsTitle>{title}</Styled.SeeMoreProjectsTitle>
        <Styled.SeeMoreProjectsArrow className="second">
          {width && width > 767 ? (
            <ArrowTitleSeeMoreProject />
          ) : (
            <ArrowTitleSeeMoreProjectMobile />
          )}
        </Styled.SeeMoreProjectsArrow>
      </Styled.SeeMoreProjectsTitleContainer>
      <PortfolioProjectsContainer className="see-more-projects">
        {slicedIndustry.length === 2
          ? slicedIndustry
              .filter((project) => project.general.title !== mainProjectTitle)
              .map((project) => (
                <PortfolioProjectComponent
                  className="see-more-projects"
                  key={project._id}
                  project={project}
                />
              ))
          : [...slicedIndustry, ...slicedCategory]
              .filter((project) => project.general.title !== mainProjectTitle)
              .splice(0, 2)
              .map((project) => (
                <PortfolioProjectComponent
                  className="see-more-projects"
                  key={project._id}
                  project={project}
                />
              ))}
      </PortfolioProjectsContainer>
    </Styled.SeeMoreProjectsWrapper>
  );
};
