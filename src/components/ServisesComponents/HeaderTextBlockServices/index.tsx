import React, { useRef } from "react";

import { GetEstimationButton } from "../../../modules/contact-us/components";
import ButtonShareComponent from "../../Common/ButtonShare/ButtonShareComponent";
import TextTypingAnimation from "../../Typewrite";

import * as Styled from "../../../styles/AiService/HeadBlock.styled";

import { SplitBrackets } from "../../../utils/splitBrackets";

import { IHeaderFooterServicesProps } from "../../../types/Services.types";

const HeaderTextBlockServices = ({
  title,
  text,
  btnText,
  btnLink,
  className,
}: IHeaderFooterServicesProps) => {
  const elRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Styled.Title className={className}>
        <TextTypingAnimation
          className={className}
          text={title}
          mobileBreackPoint={className === "ai" ? 767 : 768}
        />
      </Styled.Title>
      <Styled.Description className={className}>
        <SplitBrackets text={text} />
      </Styled.Description>

      <Styled.ButtonWrapper ref={elRef} className={className}>
        <GetEstimationButton
          buttonLink={btnLink}
          buttonText={btnText}
          buttonClassName="services header"
          id="services-header"
        />
        <ButtonShareComponent className={`services`} />
      </Styled.ButtonWrapper>
    </>
  );
};

export default HeaderTextBlockServices;
