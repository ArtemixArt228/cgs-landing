import React from "react";
import Image from "next/image";

import * as Styled from "../../styles/Calculator/CalculatorComponent.styled";

import logoWithoutText from "../../../public/logoWithoutText.svg";

const CalculatorLogo = () => {
  return (
    <Styled.LogoWrapper>
      <Styled.LogoImageWrapper>
        <Image
          src={logoWithoutText}
          alt="logo without the text"
          objectFit="contain"
        />
      </Styled.LogoImageWrapper>
      <Styled.LogoText>СGS-team</Styled.LogoText>
    </Styled.LogoWrapper>
  );
};

export default CalculatorLogo;
