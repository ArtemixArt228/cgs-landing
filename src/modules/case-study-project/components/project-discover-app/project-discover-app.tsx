import React from "react";
import * as PageStyled from "../../../case-studies/styles";
import * as Styled from "./project-discover-app.styled";
import { MobileInfiniteText } from "../../../../components/MobileInfiniteText/MobileInfiniteText";
import BlockRectangles from "../../../../components/TitleWithRects/BlockRectangles";
import { IBlockProps } from "../../../../types/CaseStudy";
import ReactPlayer from "react-player";

export const DiscoverApp = ({ project, isMobile }: IBlockProps) => {
  const gifSrc = project?.discoverInAction.actionImage.image?.url;
  return (
    <PageStyled.PortfolioPageWrapper>
      <Styled.DiscoverAppContainer>
        <Styled.DisplayAppText>
          {!isMobile ? (
            <PageStyled.FeaturesText>
              <BlockRectangles className="impl-process-rect" />
              <div>DISCOVER THE APP IN ACTION</div>
            </PageStyled.FeaturesText>
          ) : (
            <MobileInfiniteText
              title="Discover the app in action"
              className="case-study"
            />
          )}
          <PageStyled.FeaturesDescription>
            {project?.discoverInAction.description}
          </PageStyled.FeaturesDescription>
        </Styled.DisplayAppText>
        <Styled.GifContainer>
          <Styled.VideoWrapper>
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              style={{ scale: "1.01" }}
              url={gifSrc}
              controls={true}
              loop={true}
              playing={true}
              muted
              config={{
                youtube: {
                  playerVars: {
                    autoplay: 1,
                    rel: 0,
                    loop: 1,
                    iv_load_policy: 3,
                    disablekb: 1,
                    playsinline: 1,
                    mute: 1,
                  },
                },
              }}
            />
          </Styled.VideoWrapper>
        </Styled.GifContainer>
      </Styled.DiscoverAppContainer>
    </PageStyled.PortfolioPageWrapper>
  );
};
