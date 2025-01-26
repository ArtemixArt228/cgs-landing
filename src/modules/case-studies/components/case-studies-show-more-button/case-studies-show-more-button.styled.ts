import styled, { keyframes } from "styled-components";
import themes from "../../../../utils/themes";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingDiv = styled.div`
  width: 48px;
  height: 48px;
  animation: ${rotate} 2s linear infinite;
`;
export const ShowMoreButton = styled.div`
  font-family: ${themes.primary.font.family.namu};
  border: 1px solid black;
  transition: all 0.3s;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 44px;
    width: 100%;
    font-size: 16px;
    max-width: 343px;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 315px;
    height: 48px;
    font-size: 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 388px;
    height: 59.33px;
    font-size: 22px;
  }
`;
