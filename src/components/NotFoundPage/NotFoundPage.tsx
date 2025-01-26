import React from "react";

import {
  ArrowContainer,
  BlackButton,
} from "../../styles/HomePage/General.styled";
import * as Styled from "./NotFoundPage.styled";

import ButtonArrow from "../../utils/ButtonArrow";

const NotFoundContent = () => {
  return (
    <Styled.NotFoundContainer>
      <Styled.ImageWrapper>
        <Styled.Image src={"/NotFoundPage/tetris.svg"} alt="not found image" />
      </Styled.ImageWrapper>
      <Styled.Description>
        <Styled.Title>
          The page you`re
          <br />
          looking for <br />
          does not exist
        </Styled.Title>
        <BlackButton
          target={"_blank"}
          rel="noopener noreferrer"
          size={"1.55em"}
          padding={"18px 35px"}
          href={"/"}
        >
          Back Home
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </Styled.Description>
    </Styled.NotFoundContainer>
  );
};

export default NotFoundContent;
