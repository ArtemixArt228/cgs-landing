import styled from "styled-components";
import themes from "../../utils/themes";

export const ButtonWrapper = styled.div`
  width: 100%;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  margin: 24px 24px 0 0;
  width: 35px;
  height: 35px;
  cursor: pointer;
  z-index: 2;

  @media ${themes.primary.media.maxPCFullHD} {
    width: 30px;
    height: 30px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    margin: 15px 15px 0 0;
    width: 24px;
    height: 24px;
  }
`;

export const HiddenWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  height: 97%;
  margin: 10px 0;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 20px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }

  scrollbar-color: ${themes.primary.colors.primary} transparent;
  scrollbar-width: thin;

  @media ${themes.primary.media.estiomationFormWidth} {
  }
`;

export const List = styled.div`
  list-style-type: square;
  margin: 66px 0 0 0;

  @media ${themes.primary.media.maxPCFullHD} {
    margin: 55px 0 0 0;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    margin-top: 42px;
    margin-inline: auto;
  }
`;

export const ListTitle = styled.p`
  margin-bottom: 7px;
  width: 100%;
  font-size: 32px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  line-height: 1.1875;
  text-align: center;

  @media ${themes.primary.media.maxPCFullHD} {
    font-size: 26px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 18px;
    text-align: center;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 16px;
  }
`;
