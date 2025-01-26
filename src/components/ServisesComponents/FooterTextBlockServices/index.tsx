import React, { useRef } from "react";

import { GetEstimationButton } from "../../../modules/contact-us/components";
import ButtonShareComponent from "../../Common/ButtonShare/ButtonShareComponent";

import * as Styled from "../../../styles/AiService/Footer.styled";

import { SplitBrackets } from "../../../utils/splitBrackets";

import { IHeaderFooterServicesProps } from "../../../types/Services.types";

const FooterTextBlockServices = ({
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
        <SplitBrackets text={title} />
      </Styled.Title>
      <Styled.Text className={className}>
        <SplitBrackets text={text} />
      </Styled.Text>

      <Styled.ButtonWrapper ref={elRef}>
        <GetEstimationButton
          buttonLink={btnLink}
          buttonText={btnText}
          buttonClassName={`services`}
          id="services-footer"
        />
        <ButtonShareComponent className={`services`} />
      </Styled.ButtonWrapper>
    </>
  );
};

export default FooterTextBlockServices;
