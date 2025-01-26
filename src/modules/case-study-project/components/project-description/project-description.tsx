import React, { useMemo } from "react";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";
import { useMediaQuery } from "@mui/material";
import countryList from "react-select-country-list";
import Router from "next/router";

import * as Styled from "./project-description.styled";
import * as PageStyled from "../../../case-studies/styles";

import { SplitBrackets } from "../../../../utils/splitBrackets";

import { IBlockProps } from "../../../../types/CaseStudy";
import { CanadaFlag, CircleProjectPage } from "./components";
import { PlatformLinks } from "../project-links";

export const ProjectDescription = ({ project }: IBlockProps) => {
  const isDesktop = useMediaQuery("(min-width: 1100px)");

  const countryOptions = useMemo(() => countryList().getData(), []);

  const breadcrumbs: React.ReactNode[] = [
    <a key="home" href="/">
      Homepage
    </a>,
    <a key="portfolio" href="/portfolio">
      Case studies
    </a>,
    <span key="project">{project?.general.title}</span>,
  ];

  const handleTagClick = async (tag: string) => {
    await Router.push(`/portfolio?industries=${tag}`);
  };

  return (
    <Styled.PortfolioPageWrapper className="hero-section">
      <Styled.FullWidthWrapper>
        <Styled.BreadcrumbsCaseStudy>
          {breadcrumbs.map((breadcrumb, index) => (
            <React.Fragment key={index}>
              {breadcrumb}
              {index < breadcrumbs.length - 1 && (
                <Styled.BreadcrumbSeparator>&gt;</Styled.BreadcrumbSeparator>
              )}
            </React.Fragment>
          ))}
        </Styled.BreadcrumbsCaseStudy>
        <Styled.PortfolioPageHeaderContainer>
          <Styled.Block1HeaderContainerBlock>
            <h2>{project?.general.title}</h2>
            <Styled.HeaderBottomSection>
              <Styled.HeaderBottomSectionFlag>
                {project?.general.country ? (
                  <ReactCountryFlag
                    alt="Country flag"
                    countryCode={
                      countryOptions.find(
                        (item) => item.label == project?.general.country
                      )?.value ?? ""
                    }
                    svg
                  />
                ) : (
                  <CanadaFlag />
                )}
                <p>
                  {project?.general.country
                    ? project.general.country
                    : "Canada"}
                </p>
              </Styled.HeaderBottomSectionFlag>
              {project && (
                <PlatformLinks
                  project={project}
                  lightTheme
                  className="case-study-project"
                />
              )}
            </Styled.HeaderBottomSection>
          </Styled.Block1HeaderContainerBlock>
        </Styled.PortfolioPageHeaderContainer>
        {!isDesktop && (
          <Styled.HeaderImageContainer>
            <CircleProjectPage />
            <Styled.HeaderImage>
              {project?.imageProjectBanner?.image?.url !== "" && (
                <Image
                  alt="project image"
                  src={project!.imageProjectBanner.image!.url}
                  layout="fill"
                  objectFit="cover"
                  priority
                  unoptimized
                />
              )}
            </Styled.HeaderImage>
          </Styled.HeaderImageContainer>
        )}
        <Styled.PortfolioPageInfoContainer>
          <PageStyled.FeaturesText>About project:</PageStyled.FeaturesText>
          <PageStyled.FeaturesDescription>
            <SplitBrackets text={project?.general.aboutProject} />
          </PageStyled.FeaturesDescription>
        </Styled.PortfolioPageInfoContainer>
        <Styled.CaseStudyTagContainer>
          {project?.general.tags.map((tag) => (
            <Styled.CaseStudyTag
              key={tag}
              title={tag}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </Styled.CaseStudyTag>
          ))}
        </Styled.CaseStudyTagContainer>
      </Styled.FullWidthWrapper>
      {isDesktop && (
        <Styled.HeaderImageContainer>
          <CircleProjectPage />
          <Styled.HeaderImage>
            {project?.imageProjectBanner?.image?.url !== "" && (
              <Image
                alt="project image"
                src={project!.imageProjectBanner.image!.url}
                layout="fill"
                objectFit="contain"
                priority
                unoptimized
              />
            )}
          </Styled.HeaderImage>
        </Styled.HeaderImageContainer>
      )}
    </Styled.PortfolioPageWrapper>
  );
};
