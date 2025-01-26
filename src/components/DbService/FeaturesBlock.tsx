import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import TextTypingAnimation from "../Typewrite";

import * as Styled from "../../styles/DbService/FeaturesBlock.styled";

import { IServiceDb } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import { SplitBrackets } from "../../utils/splitBrackets";

import { useOnScreen } from "../../hooks/useOnScreen";

import bgImage from "../../../public/DbService/featuresBg.svg";
// import bgImageMobile from "../../../public/DbService/database-mobile-svg.svg";
import bgImageMobile from "../../../public/DbService/feature-mobile-bg.svg";

const FeaturesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.featuresBlock;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  const databasesTextBlock = data && [
    data.databases.text1,
    data.databases.text2,
    data.databases.text3,
  ];

  const serversTextBlock = data && [data.servers.text1, data.servers.text2];

  return (
    <>
      {data && (
        <Styled.Title ref={elRef}>
          {isScrolled && (
            <TextTypingAnimation miliseconds={250} text={data.subtitle} />
          )}
        </Styled.Title>
      )}
      <Styled.Container ref={elRef}>
        <Styled.BgImage
          src={bgImage.src}
          alt="second block image"
        ></Styled.BgImage>
        <Styled.BgImageMobile
          src={bgImageMobile.src}
          alt="second block image mobile"
        ></Styled.BgImageMobile>

        <Styled.ContentWrapper>
          <div style={{ position: "relative" }}>
            <Styled.Subtitle>{data?.databases.subtitle}</Styled.Subtitle>
            {databasesTextBlock &&
              databasesTextBlock.map((text, i) => {
                return (
                  <Styled.TextContent
                    key={`text${i}`}
                    className={isScrolled ? "scrolled" : undefined}
                    ind={i}
                  >
                    <SplitBrackets text={text} />
                  </Styled.TextContent>
                );
              })}
          </div>
          <div style={{ position: "relative" }}>
            <Styled.Subtitle>{data?.servers.subtitle}</Styled.Subtitle>
            {serversTextBlock &&
              serversTextBlock.map((text, i) => {
                return (
                  <Styled.TextContent
                    key={`text${i}`}
                    className={isScrolled ? "scrolled" : undefined}
                    ind={i + 3}
                  >
                    <SplitBrackets text={text} />
                  </Styled.TextContent>
                );
              })}
          </div>
        </Styled.ContentWrapper>
      </Styled.Container>
    </>
  );
};

export default FeaturesBlock;
