import React, { useState } from "react";
import Image from "next/future/image";
import * as PageStyled from "../../../case-studies/styles";
import * as Styled from "./project-client-about-us.styled";
import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";
import { ITestimonial } from "../../../../types/Components.types";
import { IClientAboutUs } from "../../../../types/Admin/AdminPortfolio.types";
import { IBlockProps } from "../../../../types/CaseStudy";
import BlockRectangles from "../../../../components/TitleWithRects/BlockRectangles";
import { ModalContent } from "../../../shared/testimonials/components";
import { Gender } from "../../../../consts";
import clientWomanPlaceholder from "/public/Portfolio/WomanPlaceholder.svg";
import clientManPlaceholder from "/public/Portfolio/ManPlaceholder.svg";
import clientStar from "/public/clientStar.svg";
import clieltPlayButton from "/public/clientPlayButton.svg";
import linkedinIcon from "/public/linkedIn.svg";

const convertToTestimonials = (client: IClientAboutUs): ITestimonial => {
  return {
    name: client.name,
    link: client.portfolioLink ?? "",
    videoUrl: client.video.image?.url,
    stars: client.stars,
    company: client.company,
    text: client.text,
  } as ITestimonial;
};

export const ClientAboutUs = ({ project, isMobile }: IBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    if (project?.clientAboutUs.video.image?.url.length) {
      setIsOpen(true);
    }
  };
  const imgPlaceholder =
    project?.clientAboutUs.gender == Gender.Woman
      ? clientWomanPlaceholder
      : clientManPlaceholder;
  return (
    <>
      <PageStyled.PortfolioPageWrapper>
        <PageStyled.ConceptContainer>
          {!isMobile ? (
            <PageStyled.FeaturesText>
              <BlockRectangles className="impl-process-rect" />
              <div>What clients say about us?</div>
            </PageStyled.FeaturesText>
          ) : (
            <MobileInfiniteText
              title="What clients say about us?"
              className="case-study"
            />
          )}
          <Styled.ClientWrapper>
            <div
              onClick={openModal}
              style={{
                position: "relative",
                cursor: project?.clientAboutUs.video.image?.url.length
                  ? "pointer"
                  : "auto",
              }}
            >
              {project?.clientAboutUs.video.image?.url && (
                <Image
                  src={clieltPlayButton}
                  style={{
                    position: "absolute",
                    top: "calc(50% - 21px)",
                    left: "calc(50% - 21px)",
                  }}
                  alt={"playButton"}
                />
              )}
              <Styled.ClientImage
                src={
                  project?.clientAboutUs.clientImage.image?.url ||
                  imgPlaceholder.src
                }
                alt="client"
              />
            </div>
            <Styled.ClientInfoWrapper>
              <Styled.NameAndStars>
                <Styled.ClientName>
                  {project?.clientAboutUs.name}
                </Styled.ClientName>
                <Styled.Stars>
                  {new Array(project?.clientAboutUs.stars)
                    .fill(1)
                    .map((_, i) => (
                      <Styled.Star key={i} src={clientStar} alt={"star"} />
                    ))}
                </Styled.Stars>
              </Styled.NameAndStars>
              <Styled.ClientDescription>
                {project?.clientAboutUs.company}
              </Styled.ClientDescription>
              <Styled.ClientSpeech>
                {project?.clientAboutUs.text}
              </Styled.ClientSpeech>
              {project?.clientAboutUs.linkedin && (
                <a
                  href={project.clientAboutUs.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Styled.LinkedIn>
                    <Image
                      src={linkedinIcon}
                      alt={"Linkedin"}
                      width={32}
                      height={32}
                    />
                    Linkedin
                  </Styled.LinkedIn>
                </a>
              )}
            </Styled.ClientInfoWrapper>
          </Styled.ClientWrapper>
        </PageStyled.ConceptContainer>
      </PageStyled.PortfolioPageWrapper>
      {project && (
        <ModalContent
          isFormOpen={isOpen}
          setIsFormOpen={setIsOpen}
          testimonial={convertToTestimonials(project.clientAboutUs)}
        />
      )}
    </>
  );
};
