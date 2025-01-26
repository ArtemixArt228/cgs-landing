import React from "react";

import {
  BlackButton,
  ArrowContainer,
} from "../../styles/HomePage/General.styled";

import { IBlackButtonProps } from "../../types/Button.types";

import ButtonArrow from "../../utils/ButtonArrow";

const BlackButtonComponent = ({
  href = undefined,
  style,
  text,
  onClick,
}: IBlackButtonProps) => {
  return (
    <BlackButton
      target="_blank"
      rel="noopener noreferrer"
      size="1em"
      padding={"18px 17px"}
      className="seeAll"
      href={href}
      style={style}
      onClick={onClick}
    >
      {text}
      <ArrowContainer>
        <ButtonArrow />
      </ArrowContainer>
    </BlackButton>
  );
};

export default BlackButtonComponent;
