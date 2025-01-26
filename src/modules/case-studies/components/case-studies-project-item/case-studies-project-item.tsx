import React, { forwardRef } from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import { IPortfolioReview } from "../../../../types/Admin/AdminPortfolio.types";

import * as Styled from "./case-studies-project-item.styled";
import * as PageStyled from "../../styles";
import { ArrowBtn, BtnPolyline } from "./components";
import { PlatformLinks } from "../../../case-study-project/components";
import clsx from "clsx";

export const PortfolioProjectComponent = forwardRef<
  HTMLDivElement,
  {
    project: IPortfolioReview;
    className?: string;
    loadedImagesCounter?: () => void;
  }
>(({ project, loadedImagesCounter, className }, ref) => {
  const is768px = useMediaQuery("(max-width:768px)");

  const splited = is768px
    ? project.general.aboutProject?.split("^")
    : project.general.aboutProject?.split("|");

  const handleImageLoad = () => {
    loadedImagesCounter && loadedImagesCounter();
  };

  const navigateToProjectPage = (url: string, id?: string) => {
    const newUrl = url.toLowerCase().replace(/\s+/g, "-");
    const fullPath = `/portfolio/${newUrl}-${id}?projectId=${id}`;
    window.open(fullPath, "_blank");
  };

  return (
    <Styled.ProjectItemContainer
      className={className}
      onClick={() => navigateToProjectPage(project.general.title, project._id)}
      ref={ref}
      isProjectLink={!project.general.NDA}
    >
      <Styled.ProjectsContainerHeader className={className} lightTheme>
        <Styled.ProjectsContainerHeaderTitle className={className} lightTheme>
          <h4>{project.general.title}</h4>
          <Styled.ProjectsContainerHeaderSubtitle
            className={className}
            lightTheme
          >
            <p>{`// ${project.general.industry}`}</p>
          </Styled.ProjectsContainerHeaderSubtitle>
        </Styled.ProjectsContainerHeaderTitle>
        <PlatformLinks
          project={project}
          lightTheme
          className={clsx(className, "case-studies")}
        />
      </Styled.ProjectsContainerHeader>
      <Styled.ProjectsContainerImage>
        <Image
          src={project!.imageBanner.image!.url}
          style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
          className={"image"}
          alt="project image"
          objectFit="cover"
          layout="fill"
          unoptimized
          priority
          onLoad={handleImageLoad}
        />
      </Styled.ProjectsContainerImage>
      <Styled.ProjectsContainerInfo>
        <Styled.ProjectsContainerHeader
          className={className}
          lightTheme={false}
        >
          <Styled.ProjectsContainerHeaderTitle
            className={className}
            lightTheme={false}
          >
            <h4>{project.general.title}</h4>
            <Styled.ProjectsContainerHeaderSubtitle
              className={className}
              lightTheme={false}
            >
              <p>{`// ${project.general.industry}`}</p>
            </Styled.ProjectsContainerHeaderSubtitle>
          </Styled.ProjectsContainerHeaderTitle>
          <PlatformLinks
            project={project}
            lightTheme={false}
            className={className}
          />
        </Styled.ProjectsContainerHeader>
        <Styled.ProjectsContainerInfoLower>
          <Styled.ProjectsContainerInfoText>
            <p>{splited?.map((el) => el !== "" && el.replace(/[\^|]/g, ""))}</p>
          </Styled.ProjectsContainerInfoText>
          <Styled.ProjectsContainerInfoBtn>
            <BtnPolyline />
            <Styled.ButtonContent>
              <span>READ MORE</span>
              <ArrowBtn />
            </Styled.ButtonContent>
          </Styled.ProjectsContainerInfoBtn>
          <Styled.ProjectsContainerInfoIconsContainer>
            {project.projectOverview.technologies
              .filter((item) => item.main)
              .map((tech) => (
                <Styled.PortfolioTechIconTextContainer key={tech._id}>
                  <Image
                    src={tech.image.url}
                    alt="tech"
                    layout="fill"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                  <PageStyled.PortfolioTechText title={tech.name}>
                    {tech.name}
                  </PageStyled.PortfolioTechText>
                </Styled.PortfolioTechIconTextContainer>
              ))
              .splice(0, 6)}
          </Styled.ProjectsContainerInfoIconsContainer>
        </Styled.ProjectsContainerInfoLower>
      </Styled.ProjectsContainerInfo>
    </Styled.ProjectItemContainer>
  );
});

PortfolioProjectComponent.displayName = "PortfolioProjectComponent";
