import styled, { keyframes } from "styled-components";
import themes from "../../../../../utils/themes";

export const Card = styled.li`
  position: sticky;
  margin-bottom: 10px;
  margin: 0 0 10px 30px;
  width: 93%;
  border-bottom: 1px solid #8f8e93;
  @media ${themes.primary.media.maxTabletLandScape} {
    margin: 0 0 10px;
  }
  @media ${themes.primary.media.maxMobile} {
    width: 95%;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    width: 335px;
  }
  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

interface ITitleProps {
  isHilighted: boolean;
}

export const arrowOne = keyframes`
  0% {
    transform: translate(-30px, -30px);
  }
  100% {
    transform: translate(0px, 0px);;
  }
`;
export const arrowTwo = keyframes`
  0% {
    transform: translate(0px, 0px);
  }
  100% {
    transform: translate(30px, 30px);;
  }
`;

export const CardTitle = styled.button<ITitleProps>`
  color: ${(props) => (props.isHilighted ? "#5869dd" : "black")};
  display: flex;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.83em;
  line-height: 160%;
  margin: 0 0 11px 0;
  padding: 0;
  transition: color 0.3s ease;
  background: transparent;
  border: none;
  :hover {
    color: #5869dd;
    & .arrowContainer {
      & path:nth-child(1) {
        animation: ${arrowOne} 1s 1 forwards ease;
      }
      & path:nth-child(2) {
        animation: ${arrowTwo} 1s 1 forwards ease;
      }
    }
  }
  & .arrowContainer {
    & svg path:nth-child(1) {
      transform: translate(-30px, -30px);
    }
    & svg path:nth-child(2) {
      transform: translate(0px, 0px);
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;

export const CardTitleText = styled.span`
  display: inline-block;
  margin: 0 43px 0 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 22px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 18px;
  }
`;

export const CardTitleImage = styled.span`
  width: 36px;
  height: 36px;
  overflow: hidden;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
`;

export const CardText = styled.p`
  font-size: 1.33em;
  line-height: 150%;
  margin: 0 0 10px 0;
  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;
