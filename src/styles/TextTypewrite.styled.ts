import styled from "styled-components";
import themes from "../utils/themes";
import { cursorBlinking } from "./Animations.styled";

export const TypewriteTextWrapper = styled.span``;

export const Cursor = styled.span`
  width: 2px;
  height: 1.45em;
  background-color: ${themes.primary.colors.primary};
  animation: ${cursorBlinking} 1s steps(1) infinite;
  position: absolute;
  bottom: -0.2em;
  right: -0.2em;

  @media (max-width: 768px) {
    width: 1.4px;
    height: 1.23em;
  }
`;

export const DisplayedPart = styled.span`
  display: inline;
  position: relative;
  @media ${themes.primary.media.maxLaptop} {
    &.itSupport {
      letter-spacing: 0;
    }
  }
`;

export const HiddenPart = styled.span`
  display: inline;
  opacity: 0;
`;

export const LastPart = styled.span`
  display: inline-block;

  @media (min-width: 769px) {
    position: relative;
  }

  @media ${themes.primary.media.maxLaptop} {
    &.itSupport {
      letter-spacing: 0;
    }
  }

  @media (max-width: 1100px) {
    &.dappAudit {
      display: inline;
    }
  }
`;
