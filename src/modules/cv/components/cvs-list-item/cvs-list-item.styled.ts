import styled, { keyframes } from "styled-components";
import themes from "../../../../utils/themes";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const arrowOne = keyframes`
  0% {
    transform: translate(-36px, 36px);
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
    transform: translate(36px, -36px);;
  }
`;

export const ListItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #8f8e93;
  padding-bottom: 23px;
  padding-inline: 20px;
  margin-bottom: 52px;

  @media ${themes.primary.media.minPCFullHD} {
    padding-bottom: 30px;
    padding-inline: 25px;
    margin-bottom: 65px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 18px;
    margin-bottom: 20px;
  }

  @media (max-width: 766px) {
    width: 106%;
    margin-left: -20px;
  }

  @media (max-width: 650px) {
    width: 107%;
  }

  @media (max-width: 550px) {
    width: 108%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 112%;
    margin-left: -20px;
  }
`;

export const ListItemTitle = styled.a`
  display: flex;
  justify-content: space-between;
`;

export const ListItemActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  @media ${themes.primary.media.maxMobile} {
    height: auto;
    margin-top: 4px;
  }
`;

export const ListItemPDF = styled.div`
  font-size: 14px;
  color: #5869dd;
  cursor: pointer;

  @media ${themes.primary.media.maxMobile} {
    font-size: 13px;
  }
`;

export const ListItemLink = styled.a<{ linkHover: boolean }>`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  height: 40px;
  padding-right: 2px;

  & path {
    transition: ${({ linkHover }) => linkHover && "transform 1s ease-in-out"};
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s ease-in-out;
    }
  }

  p {
    margin: 0;
    font-family: ${themes.primary.font.family.namu};
    font-size: 1.5em;
    font-weight: 900;
    line-height: 130%;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    gap: 5px;

    p {
      font-size: 22px;
      line-height: 160%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    height: 26px;

    p {
      font-size: 18px;
    }
  }
`;

export const ListItemArrowContainer = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${themes.primary.colors.headerBorderHover};
  border: 2px solid ${themes.primary.colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  & svg {
    width: 25px;
    height: 25px;
    margin-left: -0.55px;
    margin-top: -0.5px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 40px;
    height: 40px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 26px;
    height: 26px;
  }
`;

export const ListItemName = styled.div<{ onHover: boolean }>`
  font-family: ${themes.primary.font.family.namu};
  font-size: 2.5em;
  font-weight: 900;
  line-height: 130%;
  color: ${(props) => (props.onHover ? "#5869DD" : "#000")};
  transition: 0.1s all linear;

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 37px;
    line-height: 160%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 2em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 22px;
  }
`;
export const ListItemPosition = styled.div`
  color: #8f8e93;
  font-size: 1.5em;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  line-height: 130%;
  margin-top: 3px;

  @media screen and ${themes.primary.media.minPCFullHD} {
    font-size: 23px;
    line-height: 160%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 1em;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 0;
    font-size: 14px;
  }
`;

export const Loader = styled.img`
  margin-top: 15px;
  margin-left: 5px;
  width: 22px;
  height: 22px;
  animation: ${rotate360} 1s linear infinite;

  &.cv {
    margin-top: 0;
    width: 18px;
    height: 18px;
  }

  @media ${themes.primary.media.maxMobile} {
    &.cv {
      margin-top: 0;
      width: 16px;
      height: 16px;
    }
  }
`;
