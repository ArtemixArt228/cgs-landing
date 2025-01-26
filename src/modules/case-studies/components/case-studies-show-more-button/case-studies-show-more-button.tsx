import React from "react";
import * as Styled from "./case-studies-show-more-button.styled";
import loader from "/public/showMoreLoader.svg";
import Image from "next/future/image";

interface IProps {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
}

export const ShowMoreButton = ({ text, onClick, isLoading }: IProps) => {
  if (isLoading) {
    return (
      <Styled.RotatingDiv>
        <Image src={loader} alt="Loading..." />
      </Styled.RotatingDiv>
    );
  }

  return (
    <Styled.ShowMoreButton onClick={onClick}>{text}</Styled.ShowMoreButton>
  );
};
