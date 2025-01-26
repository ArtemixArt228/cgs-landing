import styled from "styled-components";
import themes from "../../../../utils/themes";

export const PersonalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 53px;
  @media ${themes.primary.media.minMobile} {
    margin-top: 100px;
  }

  @media ${themes.primary.media.maxLaptop} {
    height: 341px;
    gap: 1vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 336px;
    gap: 28px;
    margin-top: 140px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 550px;
    margin-top: 8px;
  }
`;

export const PersonalContainerHeader = styled.div`
  display: flex;
  margin-left: 166px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 1237px) {
    gap: 0;
    justify-content: space-between;
  }

  @media (max-width: 1050px) {
    margin-left: 0;
    align-items: center;
    gap: 16px;
  }

  @media (min-width: 1051px) {
    flex-direction: row;
    align-items: center;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 13em;
    margin-left: 230px;
  }
`;

export const NamePosition = styled.div`
  min-width: 45vw;

  @media (max-width: 1075px) {
    margin-top: 17px;
    margin-bottom: 0;
  }

  @media ${themes.primary.media.minTabletPortraitToMaxTabletLandScape} {
    margin-top: 85px;
    margin-bottom: 9px;
  }

  @media ${themes.primary.media.minLaptop} {
    margin-bottom: auto;
    padding-top: 87px;
    margin-top: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-top: 121px;
  }
`;

export const Role = styled.h2`
  font-family: ${themes.primary.font.family.namu};
  font-size: 22px;
  line-height: normal;
  text-transform: uppercase;
  margin: 8px 0 0 0;
  color: ${themes.primary.colors.darkBlue};

  @media (min-width: 769px) {
    line-height: 160%;
    font-size: 26px;
    letter-spacing: 1px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 35px;
    letter-spacing: 2px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 6px;
  }
`;

export const Name = styled.h1`
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  position: relative;
  z-index: 6;
  line-height: 120%;
  text-transform: uppercase;
  margin: 0;

  &::before {
    position: absolute;
    top: 23px;
    left: -38px;
    content: "";
    display: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #f0efed;
    border: 1px solid #000;
    box-shadow: 9px 3px 0 0 #000;
  }

  @media (min-width: 769px) {
    font-size: 56px;
    letter-spacing: 3px;

    &::before {
      display: block;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 75px;
    letter-spacing: 4px;

    &::before {
      width: 21px;
      height: 21px;
      left: -56px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    padding-top: 0;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 215px;
  height: 215px;
  z-index: 5;
  margin-left: 18%;
  margin-top: 16px;

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;
    margin-top: 0;
  }

  @media ${themes.primary.media.minMobile} {
    max-width: 260px;
    max-height: 260px;
    min-width: 215px;
    min-height: 215px;
    width: 17.75vw;
    height: 17.75vw;
    margin-left: 0;
    margin-top: 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 340px;
    max-height: 340px;
    width: 340px;
    height: 340px;
    margin-right: 57px;
  }
`;

export const ImageBlockWrapper = styled.div`
  display: flex;
  width: 34%;
  justify-content: center;

  @media ${themes.primary.media.maxMobile} {
    width: 215px;
    height: 215px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 97.6%;
  height: 97.6%;
  object-position: top left;

  @media ${themes.primary.media.minMobile} {
    width: 98%;
    height: 98%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 98%;
    height: 98%;
  }
`;

export const ImageBackground = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 97.6%;
  height: 97.6%;
  border: 2px solid ${themes.primary.colors.black};
  background-image: linear-gradient(
    180deg,
    ${themes.primary.colors.blogBackground},
    ${themes.primary.colors.blogBackground} 50%,
    black 50%,
    black 100%
  );

  @media ${themes.primary.media.minMobile} {
  }

  @media ${themes.primary.media.minPCFullHD} {
  }
`;

export const AvatarFrame = styled.div`
  position: absolute;
  width: 650px;
  height: 450px;
  left: -129px;
  bottom: -96px;
  z-index: 0;

  @media (max-width: 1440px) {
    width: calc(
      clamp(
        540px,
        540px + (100vw - 1200px) * ((650 - 540) / (1440 - 1200)),
        650px
      )
    );
    height: calc(
      clamp(
        405px,
        405px + (100vw - 1200px) * ((450 - 405) / (1440 - 1200)),
        450px
      )
    );
    left: calc(-107px + (100vw - 1200px) * (-22 / 240));
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    height: 405px;
    width: 540px;
    left: -107px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 600px;
    width: 860px;
    left: -171px;
    bottom: -129px;
  }
`;

export const Summary = styled.div`
  position: absolute;
  top: 280px;
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  line-height: 1.6;
  margin: 0 0 0 32px;
  color: ${themes.primary.colors.primary};

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: -25px;
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #f0efed;
    border: 1px solid #000;
    box-shadow: 7px 2px 0 0 #000;
    z-index: 1;
  }

  @media (min-width: 1051px) {
    font-size: 18px;
    max-width: 720px;
    margin-left: 22.8em;

    &::before {
      top: 4px;
      left: -38px;
      width: 16px;
      height: 16px;
      box-shadow: 9px 3px 0 0 #000;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 63%;
    max-width: 1070px;
    margin-top: 92px;
    font-size: 24px;

    &::before {
      width: 21px;
      height: 21px;
      left: -50px;
    }
  }

  @media (max-width: 1051px) {
    position: relative;
    top: 16px;
    line-height: 27px;
  }
`;

export const BgImageContainer = styled.div`
  position: absolute;
  bottom: -125px;
  width: 376px;
  height: 297px;
  left: -20px;

  @media (min-width: 1051px) {
    width: 485px;
    height: 210px;
    left: -79px;
    top: 118px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 615px;
    height: 280px;
    left: -89px;
    top: 155px;
  }

  @media (max-width: 1051px) {
    bottom: 0;
    top: -42.5px;
    left: -52.5px;
  }
`;
