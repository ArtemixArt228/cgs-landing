import React from "react";
import styled from "styled-components";
import themes from "../../../../../utils/themes";

const Svg = styled.svg`
  position: absolute;
  @media ${themes.primary.media.maxMobile} {
    top: -3%;
    right: -34%;
    width: 90%;
    height: 90%;
  }
  @media ${themes.primary.media.min768Mobile} {
    top: 0;
    right: -25%;
    width: 83%;
    height: 83%;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    right: -28%;
    width: 540px;
    height: 540px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    right: -27%;
    width: 720px;
    height: 720px;
  }
`;
export const CircleProjectPage = () => {
  return (
    <Svg viewBox="0 0 561 561" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g>
        <circle
          cx="280.5"
          cy="280.5"
          r="280.5"
          fill="url(#paint0_linear_15557_43521)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_15557_43521"
          x1="0"
          y1="270"
          x2="540"
          y2="270"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={themes.primary.colors.portfolioGradient1} />
          <stop
            offset="1"
            stopColor={themes.primary.colors.portfolioGradient2}
          />
        </linearGradient>
        <clipPath id="clip0_15557_43521">
          <rect width="368" height="561" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
