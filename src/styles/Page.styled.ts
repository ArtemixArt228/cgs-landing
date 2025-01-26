import styled, { css, keyframes } from "styled-components";
import themes from "../utils/themes";

interface IButtonTextStyledProps {
  fontSize?: string;
}

export const ButtonText = styled.span.attrs(
  ({ fontSize }: IButtonTextStyledProps) => ({
    fontSize: fontSize,
  })
)`
  position: relative;
  z-index: 3;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-weight: ${themes.primary.font.weight.extraBold};
  font-family: ${themes.primary.font.family.gilroy};
  cursor: pointer;
  color: ${themes.primary.colors.primary};

  ${(props) => css`
    font-size: ${props.fontSize};
  `}

  @media ${themes.primary.media.maxMobile} {
    font-weight: ${themes.primary.font.weight.extraBold};
    font-size: 1.1em;
  }
`;

export const Loading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: ${themes.primary.colors.secondary};
  font-size: ${themes.primary.font.size.tertiary};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;
