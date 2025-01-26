import React from "react";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

import * as Styled from "./dev-personal-info.styled";

import { CvData } from "../../types";

import { SplitBrackets } from "../../../../utils/splitBrackets";

import bgImageHeaderCv from "public/CV/header-bg-image-cv.svg";
import bgImageHeaderMobileCv from "public/CV/header-bg-image-mobile-cv.svg";
import avatarFrame from "public/CV/cv-avatar-frame.svg";

interface IPersonalProps {
  data?: CvData;
}

const HeaderSection = ({
  data,
  isMobile,
  image,
}: {
  data?: CvData["personal"];
  isMobile: boolean;
  image?: { url: string } | null;
}) => (
  <Styled.PersonalContainerHeader className="personal-info">
    <Styled.NamePosition className="cv-name-position">
      <Styled.Name>{data?.name}</Styled.Name>
      <Styled.Role>{isMobile ? data?.role : `// ${data?.role}`}</Styled.Role>
    </Styled.NamePosition>
    {image && <AvatarSection image={image} isMobile={isMobile} />}
  </Styled.PersonalContainerHeader>
);

const AvatarSection = ({
  image,
  isMobile,
}: {
  image: { url: string };
  isMobile: boolean;
}) => (
  <Styled.ImageBlockWrapper>
    <Styled.ImageWrapper className="cv-avatar-wrapper">
      <Styled.ImageBackground />
      <Styled.ImageContainer>
        {!isMobile && (
          <Styled.AvatarFrame>
            <Image src={avatarFrame} alt="Avatar frame" layout="fill" />
          </Styled.AvatarFrame>
        )}
        <Image
          src={image.url}
          alt="Developer's photo"
          layout="fill"
          objectFit="contain"
          objectPosition="top left"
          priority
        />
      </Styled.ImageContainer>
    </Styled.ImageWrapper>
  </Styled.ImageBlockWrapper>
);

const SummarySection = ({
  summary,
  isMobile,
}: {
  summary?: string;
  isMobile: boolean;
}) => (
  <Styled.Summary className="cv-personal-summary">
    <SplitBrackets text={summary} />
    {isMobile && (
      <BackgroundImage src={bgImageHeaderMobileCv.src} alt="bg image" />
    )}
  </Styled.Summary>
);

const BackgroundImage = ({ src, alt }: { src: string; alt: string }) => (
  <Styled.BgImageContainer>
    <Image layout="fill" src={src} alt={alt} />
  </Styled.BgImageContainer>
);

export const DevPersonalInfo = ({ data }: IPersonalProps) => {
  const isMobile = useMediaQuery("(max-width: 1051px)");
  const personalData = data?.personal;

  return (
    <Styled.PersonalContainer>
      <HeaderSection
        data={personalData}
        isMobile={isMobile}
        image={data?.image}
      />
      <SummarySection summary={personalData?.summary} isMobile={isMobile} />
      {!isMobile && (
        <BackgroundImage src={bgImageHeaderCv.src} alt="bg image" />
      )}
    </Styled.PersonalContainer>
  );
};
