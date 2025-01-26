import React, { CSSProperties } from "react";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import ButtonArrow from "../../../../utils/ButtonArrow";
import useContactFormRedirect from "../../../../hooks/useContactFormRedirect";
import Image from "next/image";
import Arrow from "/public/Header/arrow.svg";

interface IGetEstimationButtonProps {
  buttonText?: string;
  buttonLink?: string;
  buttonClassName?: string;
  arrowClassName?: string;
  style?: CSSProperties;
  extRef?: React.Ref<HTMLAnchorElement | null>;
  openFormHandlerAdditional?: () => void;
  calendlyLink?: string;
  id?: string;
  isAiChatbotPage?: boolean;
}

export const GetEstimationButton = ({
  buttonText = "BOOK A CALL",
  buttonClassName = "",
  arrowClassName = "",
  style,
  isAiChatbotPage,
}: IGetEstimationButtonProps) => {
  const { handleButtonClick } = useContactFormRedirect();

  return (
    <>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 1.5em"}
        rel="noopener noreferrer"
        className={buttonClassName}
        onClick={handleButtonClick}
        style={style}
      >
        {buttonText}
        {!isAiChatbotPage && (
          <ArrowContainer className={arrowClassName}>
            <ButtonArrow />
          </ArrowContainer>
        )}
        {isAiChatbotPage && <Image src={Arrow} alt="arrow" />}
      </BlackButton>
    </>
  );
};
