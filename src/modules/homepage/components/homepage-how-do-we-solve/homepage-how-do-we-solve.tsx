import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import * as Styled from "./homepage-how-do-we-solve.styled";

import Header from "../../../../components/TitleWithRects/Header";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

import { queryKeys } from "../../../../consts/queryKeys";

import mobileBG from "/public/PainBlock/mobileBGPainSection.png";
import painBlockBackground from "/public/PainBlock/painBlockBG.png";

export const HowDoWeSolveBlock = () => {
  const queryClient = useQueryClient();
  const howDoWeSolveItBlockData = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.HowDoWeSolveItBlock;

  const isMobile = useMediaQuery("(max-width:625px)");

  return (
    <Styled.Wrapper>
      {howDoWeSolveItBlockData?.title && (
        <Header
          title={howDoWeSolveItBlockData?.title}
          mobileTitle={howDoWeSolveItBlockData?.title}
          className="homepage"
          hasBackgroundFrame={true}
        />
      )}
      <Styled.BackgroundContainer>
        <Styled.BackgroundImage id={"solution"} zIndex={-1}>
          <Styled.GridContainer>
            {isMobile ? (
              <Image
                layout="fill"
                src={mobileBG.src}
                alt="painBlockBackground"
              />
            ) : (
              <Image
                layout="fill"
                src={painBlockBackground}
                alt="painBlockBackground"
              />
            )}

            {howDoWeSolveItBlockData?.solutions.map((solution, i) => (
              <Styled.GridItem key={`${solution.subtitle}-${i}`}>
                <Styled.Heading>{solution.subtitle}</Styled.Heading>
                <Styled.Paragraph
                  dangerouslySetInnerHTML={{ __html: solution.text }}
                />
              </Styled.GridItem>
            ))}
          </Styled.GridContainer>
        </Styled.BackgroundImage>
      </Styled.BackgroundContainer>
    </Styled.Wrapper>
  );
};
