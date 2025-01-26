import styled from "styled-components";
import themes from "../../utils/themes";
import TicketButton from "./../TicketButton/index";
import { arrowOne, arrowTwo } from "../../styles/HomePage/General.styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(
    clamp(
      623px,
      623px + (100vw - 1440px) * ((850 - 623) / (1920 - 1440)),
      850px
    )
  );
  height: calc(
    clamp(
      269px,
      269px + (100vw - 1440px) * ((355 - 269) / (1920 - 1440)),
      355px
    )
  );

  @media (max-width: 700px) {
    width: 90%;
    height: 215px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 100%;
  }
`;

export const Button = styled(TicketButton)`
  -webkit-tap-highlight-color: transparent;
`;

export const Logo = styled.img`
  width: 7.063rem;
  height: 1.538rem;
  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 5rem;
    height: 1rem;
  }
`;

export const SubTitle = styled.span`
  text-transform: uppercase;
  font-size: ${themes.primary.font.size.quinary};
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: ${themes.primary.font.size.hexadecimal};
  }
`;

export const TicketInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  cursor: pointer;

  @media ${themes.primary.media.maxTabletPortrait} {
    column-gap: 30px;
  }

  @media (max-width: 710px) {
    column-gap: 20px;
  }

  @media ${themes.primary.media.minTablet} {
    column-gap: 5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 0;
  }
`;

export const TicketInnerSvgWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  svg {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

export const TicketPosition = styled.div`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 1.8vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transform: rotate(-180deg) translateX(20px);
  writing-mode: vertical-lr;
  text-orientation: mixed;
  text-align: center;
  margin: 0;
  width: 90px;

  @media (min-width: 1300px) {
    font-size: 24px;

    &.admin {
      font-size: 22px;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-right: 10px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-right: 30px;
    font-size: 24px;
    width: 60px;
  }

  @media (max-width: 710px) {
    font-size: 3.39vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-right: 20px;
    width: 50px;
    font-size: 0.875rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 40px;
  }

  @media (min-width: 1500px) {
    width: 115px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 138px;
    margin-right: -5px;
    font-size: 32px;
  }
`;

export const LeftDivider = styled.hr`
  width: 27%;
  height: 2.5px;
  background-color: black;
  align-self: center;
  position: absolute;
  left: -10px;
  transform: rotate(90deg);
  border: none;
  border-radius: 5px;

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 2px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    left: -22px;
    width: 35%;
  }
`;

export const RightDivider = styled.hr`
  width: 25%;
  height: 2.5px;
  background-color: black;
  align-self: center;
  position: absolute;
  transform: rotate(270deg);
  border: none;
  border-radius: 5px;
  right: -32px;
  @media ${themes.primary.media.maxTabletLandScape} {
    height: 2px;
    right: -28px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    display: none;
  }
`;

export const TicketPositionContainer = styled.div`
  padding-top: 10px;
  z-index: 2;
  @media (max-width: 1360px) {
    padding-top: 18px;
  }
  @media (max-width: 1250px) {
    padding-top: 28px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    padding-top: 13px;
  }

  @media (max-width: 1110px) {
    padding-top: 23px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding-top: 10px;
  }

  @media ${themes.primary.media.minTablet} {
    padding-top: 20px;
  }

  @media (max-width: 575px) {
    padding-top: 40px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-top: 20px;
  }
`;

export const TicketPositionTitle = styled.p`
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 33px;
  text-transform: uppercase;
  margin: 0;
  margin-top: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 1300px) {
    &.admin {
      font-size: 30px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 42px;
    margin-top: 22px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 34px;
  }

  @media (max-width: 710px) {
    font-size: 4.2vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 1.25rem;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 1rem;
  }
`;

export const TicketPositionStack = styled.p`
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 8px;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 20px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 20px;
  }

  @media (max-width: 710px) {
    font-size: 3vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 0.875rem;
    margin-top: 4px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.75rem;
  }
`;

export const TicketDataBackground = styled.div`
  position: absolute;
  width: 70%;
  bottom: 0;
  right: 40px;

  @media ${themes.primary.media.maxTabletPortrait} {
    bottom: 0;
  }

  @media (max-width: 700px) {
    bottom: 1%;
  }

  @media (max-width: 650px) {
    bottom: 7%;
  }

  @media (max-width: 600px) {
    bottom: 11%;
  }

  @media (max-width: 550px) {
    bottom: 14%;
  }

  @media (max-width: 510px) {
    bottom: 17%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 80%;
    bottom: 0;
    right: 5%;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    bottom: 7%;
  }
`;

export const ArrowContainer = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: -23px;
  top: 39.5%;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 1.7px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 65px;
    height: 65px;
    top: 40.5%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    right: -22px;
    top: 40%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 30px;
    height: 30px;
    right: -6px;
    top: 42.5%;
  }
`;

export const TicketContainer = styled.div`
  background-image: url(/CareerDecorations/outer.svg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  padding: calc(
    clamp(16px, 16px + (100vw - 1440px) * ((23 - 16) / (1920 - 1440)), 23px)
  );
  position: relative;
  right: -2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media ${themes.primary.media.maxTabletLandScape} {
    padding: 13px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 265px;
    padding: 16px;
  }

  @media (max-width: 710px) {
    max-width: none;
    width: 100%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 350px;
    height: 209px;
    background-image: url(/CareerDecorations/outerMobile.svg);
    padding: 10px;
    right: 0;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    width: 300px;
    height: 209px;
    background-image: url(/CareerDecorations/outerMobile.svg);
    padding: 10px;
  }
  &:hover ${TicketInnerSvgWrapper} {
    svg,
    path {
      fill: none;
    }
  }
  &:hover ${ArrowContainer} {
    & path:nth-child(1) {
      /* transform: translate(0px, 0px); */
      animation: ${arrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      /* transform: translate(36px, -36px); */
      animation: ${arrowTwo} 1s 1 forwards ease-in-out;
    }
  }
`;
