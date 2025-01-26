import React from "react";
import Image from "next/image";

import * as Styled from "../../../styles/Logo.styled";

import logo from "/public/Header/logo/CGS-team-logo.svg";
import logoTablet from "/public/Header/logo/CGS-team-logo-tablet.png";
import { useMediaQuery } from "@mui/material";

interface ILogoProps {
  cssClass?: string;
}

const Logo = ({ cssClass }: ILogoProps) => {
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1100px)");
  return (
    <Styled.LogoWrapper className={cssClass}>
      <Styled.ImageWrapper>
        <Image
          src={isTablet ? logoTablet : logo}
          alt="logo"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          priority
        />
      </Styled.ImageWrapper>
    </Styled.LogoWrapper>
  );
};
export default Logo;
