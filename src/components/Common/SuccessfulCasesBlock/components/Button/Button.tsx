import React from "react";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

import * as Styled from "./Button.styled";

import leftArrow from "/public/PainBlock/leftArrow.svg";
import rightArrow from "/public/PainBlock/rightArrow.svg";
import { ActionButton } from "../../../../ActionButton/ActionButton";

export const Button = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Styled.ButtonContainer isMobile={isMobile}>
      <Styled.ArrowWrapper>
        <Styled.AnimatedArrow delay={0}>
          <Image src={leftArrow} alt="leftArrow" width={24} height={24} />
        </Styled.AnimatedArrow>

        <Styled.AnimatedArrow delay={1}>
          <Image src={leftArrow} alt="leftArrow" width={24} height={24} />
        </Styled.AnimatedArrow>

        <Styled.AnimatedArrow delay={2}>
          <Image src={leftArrow} alt="leftArrow" width={24} height={24} />
        </Styled.AnimatedArrow>

        <Styled.AnimatedArrow delay={3}>
          <Image src={leftArrow} alt="leftArrow" width={24} height={24} />
        </Styled.AnimatedArrow>
      </Styled.ArrowWrapper>
      <ActionButton
        buttonText="Book the consultation"
        className="homepage-success-cases"
      />
      <Styled.ArrowWrapper>
        <Styled.AnimatedArrow delay={0}>
          <Image src={rightArrow} alt="rightArrow" width={24} height={24} />
        </Styled.AnimatedArrow>
        <Styled.AnimatedArrow delay={1}>
          <Image src={rightArrow} alt="rightArrow" width={24} height={24} />
        </Styled.AnimatedArrow>
        <Styled.AnimatedArrow delay={2}>
          <Image src={rightArrow} alt="rightArrow" width={24} height={24} />
        </Styled.AnimatedArrow>
        <Styled.AnimatedArrow delay={3}>
          <Image src={rightArrow} alt="rightArrow" width={24} height={24} />
        </Styled.AnimatedArrow>
      </Styled.ArrowWrapper>
    </Styled.ButtonContainer>
  );
};
