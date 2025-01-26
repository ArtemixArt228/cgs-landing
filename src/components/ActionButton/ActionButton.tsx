import React from "react";
import useContactFormRedirect from "../../hooks/useContactFormRedirect";
import Image from "next/image";
import Arrow from "/public/arrow-right-down.svg";
import ArrowHeader from "/public/Header/arrow.svg";
import * as Styled from "./ActionButton.styled";

interface IGetEstimationButtonProps {
  buttonText?: string;
  className?: string;
  isHeaderButton?: boolean;
  handleAction?: () => void;
}

export const ActionButton = ({
  buttonText = "Get estimation",
  className = "",
  isHeaderButton = false,
  handleAction,
}: IGetEstimationButtonProps) => {
  const { handleButtonClick } = useContactFormRedirect();

  return (
    <Styled.ActionButton
      className={className}
      onClick={handleAction ?? handleButtonClick}
    >
      {buttonText}
      <Styled.ImageWrapper className={className}>
        <Image src={isHeaderButton ? ArrowHeader : Arrow} alt="Arrow" />
      </Styled.ImageWrapper>
    </Styled.ActionButton>
  );
};
