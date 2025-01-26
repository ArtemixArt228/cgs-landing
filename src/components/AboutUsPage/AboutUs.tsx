import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import linkedInLocal from "../../../public/linkedIn.svg";
import MobileTeamGallery from "./MobileTeamGallery";
import DesktopTeamGallery from "./DesktopTeamGallery";
import FooterBlock from "./FooterBlock";

import * as Styled from "./AboutUs.styled";
import { IAboutUs } from "../../types/Admin/Response.types";
import { queryKeys } from "../../consts/queryKeys";
import { SplitBrackets } from "../../utils/splitBrackets";
import { IHomePageResponse } from "../../types/Admin/AdminHomePage.types";

const AboutUs = ({ data }: IAboutUs) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const {
    about: { video, image, header, codex, philosophy },
    numbers: { years, employees, projects, customers },
    team: { title, members },
    footerBlock,
  } = data;

  const queryClient = useQueryClient();
  const footerData = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.FooterBlock;
  const linkedInIcon = footerData?.images[3].image?.url;

  const parsedText = (text: string) => {
    const textArray = text.split("|");
    return (
      <>
        {textArray.map((e: string, i: number) => {
          const parsedString = "<span>" + e + "</span>";
          return <p key={i}>{parse(parsedString)}</p>;
        })}
      </>
    );
  };

  return (
    <>
      <Styled.HeroAboutContainer>
        <Styled.Layout style={{ position: "absolute", zIndex: 10 }}>
          <Styled.HeroHeaderText>
            <SplitBrackets text={header} />
          </Styled.HeroHeaderText>
        </Styled.Layout>
        <Styled.VideoFilter />
        <video
          loop
          playsInline
          muted
          autoPlay
          poster={data && image ? image.url : ""}
          preload="auto"
        >
          <source
            src={data && video?.image ? video.image.url : ""}
            type="video/mp4"
          />
        </video>
      </Styled.HeroAboutContainer>
      <Styled.Layout>
        <Styled.HeadlinesContainer>
          <Styled.HeadlineContainer>
            {!isMobile ? (
              <Styled.Subtitle>{codex.title}</Styled.Subtitle>
            ) : (
              <MobileInfiniteText title={codex.title} />
            )}
            <Styled.Text>{parsedText(codex.text)}</Styled.Text>
          </Styled.HeadlineContainer>
          <Styled.HeadlineContainer>
            {!isMobile ? (
              <Styled.Subtitle>{philosophy.title}</Styled.Subtitle>
            ) : (
              <MobileInfiniteText title={philosophy.title} />
            )}
            <Styled.Text>{parsedText(philosophy.text)}</Styled.Text>
          </Styled.HeadlineContainer>
        </Styled.HeadlinesContainer>
        <Styled.NumbersContainer>
          <Styled.Achievement>
            <Styled.AchievementNumber>{years.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{years.text}</Styled.AchievementText>
          </Styled.Achievement>
          <Styled.Achievement>
            <Styled.AchievementNumber>{employees.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{employees.text}</Styled.AchievementText>
          </Styled.Achievement>
          <Styled.Achievement>
            <Styled.AchievementNumber>{projects.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{projects.text}</Styled.AchievementText>
          </Styled.Achievement>
          <Styled.Achievement>
            <Styled.AchievementNumber>{customers.num}</Styled.AchievementNumber>
            <Styled.AchievementText>{customers.text}</Styled.AchievementText>
          </Styled.Achievement>
        </Styled.NumbersContainer>
        <Styled.OurTeamContainer>
          {!isMobile ? (
            <DesktopTeamGallery
              team={{ title, members }}
              linkedInIcon={linkedInIcon ? linkedInIcon : linkedInLocal}
            />
          ) : (
            <MobileTeamGallery team={{ title, members }} />
          )}
        </Styled.OurTeamContainer>
        <FooterBlock footerBlock={footerBlock} />
      </Styled.Layout>
    </>
  );
};

export default AboutUs;
