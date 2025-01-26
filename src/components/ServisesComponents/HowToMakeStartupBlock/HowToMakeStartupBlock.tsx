import React from "react";
import { useMediaQuery } from "@mui/material";

import * as Styled from "./HowToMakeStartupBlock.styled";
import * as StyledGeneral from "../../../styles/Services.styled";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";
import ReactPlayer from "react-player";
import { IHowToMakeStartupSectionProps } from "../../../types/Services.types";
import { ActionButton } from "../../ActionButton/ActionButton";
interface IProps {
  data?: IHowToMakeStartupSectionProps;
  className?: string;
}
const HowToMakeStartupBlock: React.FC<IProps> = ({ data, className }) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const gifSrc = data?.videoLink;

  return (
    <Styled.HeroSectionContainer className={className}>
      <Styled.HeroSectionContent>
        <Styled.TitleAndDescription>
          {!isMobile && (
            <StyledGeneral.BlockHeader
              className={"how-to-startup " + className}
            >
              {data?.title}
            </StyledGeneral.BlockHeader>
          )}
          {isMobile && (
            <MobileInfiniteText
              title="How to make your startup more profitable with AI"
              className="services"
            />
          )}
          <Styled.Text className={className}>{data?.text}</Styled.Text>
        </Styled.TitleAndDescription>
        <Styled.HeroSectionBtnContainer>
          <ActionButton buttonText={data?.button} className="services-common" />
        </Styled.HeroSectionBtnContainer>
      </Styled.HeroSectionContent>

      <Styled.HeroSectionImageContainer>
        <Styled.VideoWrapper>
          <ReactPlayer
            width={"100%"}
            height={"100%"}
            url={gifSrc}
            controls={true}
            loop={true}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 0,
                  rel: 0,
                  loop: 1,
                  iv_load_policy: 3,
                  disablekb: 1,
                  playsinline: 1,
                },
              },
            }}
          />
        </Styled.VideoWrapper>
      </Styled.HeroSectionImageContainer>
    </Styled.HeroSectionContainer>
  );
};
export default HowToMakeStartupBlock;
