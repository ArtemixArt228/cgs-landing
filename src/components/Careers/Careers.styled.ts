import styled from "styled-components";
import themes from "../../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-inline: 51px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minPCFullHD} {
    padding-inline: 68px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-inline: 12px;
    margin-bottom: -8px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-bottom: -80px;
  }
`;

export const CareersContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${themes.primary.colors.careerBackground};
`;

export const Title = styled.header`
  margin-block: calc(
      clamp(
        115px,
        115px + (100vw - 1440px) * ((167 - 115) / (1920 - 1440)),
        167px
      )
    )
    calc(
      clamp(89px, 89px + (100vw - 1440px) * ((120 - 89) / (1920 - 1440)), 120px)
    );
  font-weight: ${themes.primary.font.weight.heavy};
  text-transform: uppercase;
  font-size: calc(
    clamp(74px, 74px + (100vw - 1440px) * ((92 - 74) / (1920 - 1440)), 92px)
  );
  line-height: 120%;

  & .careers {
    min-width: 170px;
  }

  p {
    margin: 0;
  }

  span {
    &.blue {
      color: ${themes.primary.colors.darkBlue};
      height: 6vw;
      display: inline-flex;
      white-space: nowrap;
      min-width: 830px;
      width: 830px;
    }
  }

  @media (max-width: 1920px) {
    width: 100%;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-block: 55px 1px;
    line-height: 80%;
    margin-bottom: 50px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 30px;
    font-size: 56px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 65px 0 40px 55px;

    p {
      line-height: 140%;
    }
    span {
      font-size: 56px;
      line-height: 140%;
      &.blue {
        span {
          font-size: 60px;
        }
      }
    }
  }

  @media (max-width: 725px) {
    font-size: 28px;
    margin: 15px 0 40px 17px;

    span {
      font-size: 28px;
      &.blue {
        font-size: 30px;
        span {
          font-size: 30px;
        }
      }
    }
  }
`;

export const ArrowContainer = styled.div`
  display: inline-block;
  margin: auto;
  height: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
  }
`;

export const TitleArrow = styled.img`
  width: calc(
    clamp(
      175px,
      175px + (100vw - 1440px) * ((233 - 175) / (1920 - 1440)),
      233px
    )
  );
  height: calc(
    clamp(24px, 24px + (100vw - 1440px) * ((32 - 24) / (1920 - 1440)), 32px)
  );
  margin: 0 12px 6% 14px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 230px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    margin-bottom: 4%;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin-bottom: 1%;
    width: 95px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 0;
    margin-left: 25px;
    width: 115px;
    height: 35px;
  }

  @media (max-width: 725px) {
    margin: 0 0 0 10px;
    width: 47px;
    height: 18px;
  }
`;

export const TitleText = styled.span`
  margin: 0;
  color: ${themes.primary.colors.primary};

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 4.8vw;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 4.5vw;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 4.3vw;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    display: inline-block;
    font-size: 1.75rem;
    line-height: 140%;
  }
`;

export const Separator = styled.hr`
  width: calc(100% + 102px);
  height: 1px;
  color: ${themes.primary.colors.primary};
  margin: 0;
`;

export const TitleTextRow = styled.div`
  @media ${themes.primary.media.maxTabletLandScape} {
    display: inline;
  }
`;

export const TicketsWrapper = styled.section`
  position: relative;
  padding-right: 23px;
  left: -7px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 112px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 1820px;
    margin-bottom: 154px;
  }

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 45px;
    margin-top: 7px;
  }

  @media (max-width: 700px) {
    padding-right: 0;
    left: 0;
    margin-top: 0;
    margin-bottom: 47px;
  }
`;

export const TicketsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  gap: 42px;

  @media ${themes.primary.media.maxServiceWeb} {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 700px) {
    gap: 75px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 28px;
  }
`;

export const FormAndImageContainer = styled.section`
  display: flex;
  margin: 45px 0 106px 70px;
  align-self: normal;
  min-height: 446px;
  overflow: hidden;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 76px 0 0 92px;
    min-height: 735px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    margin-left: 50px;
  }
  @media ${themes.primary.media.maxMobile} {
    margin: 0;
  }
`;

export const FormTitle = styled.span`
  font-size: 51px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 132%;
  letter-spacing: 0.0425em;
  color: ${themes.primary.colors.primary};
  align-self: normal;
  margin: 115px 0 0 0;
  text-transform: uppercase;

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 154px;
    font-size: 64px;
    letter-spacing: 3.2px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    margin: 100px auto 40px;
    font-size: 2.63rem;
  }

  @media ${themes.primary.media.maxMobile} {
    letter-spacing: 2px;
    margin: 47px 30px 31px;
    font-size: 40px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-block: 50.5px 20px;
    margin-inline: 8px;
    letter-spacing: 1.05px;
    font-size: 21px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  align-self: normal;
  position: relative;

  @media ${themes.primary.media.maxTabletPortrait} {
    align-items: center;
    flex-direction: column;
  }
`;

export const Form = styled.div`
  position: absolute;
  background-color: ${themes.primary.colors.careerBackground};
  margin-top: 20px;

  @media ${themes.primary.media.maxMobile} {
    max-width: 675px;
    width: 100%;
    margin-left: -13px;
  }

  @media (max-width: 720px) {
    max-width: 575px;
    margin-left: 0px;
  }

  @media ${themes.primary.media.minTablet} {
    max-width: 335px;
    position: relative;
    margin-right: 0;
    margin-left: 0;
  }
`;

export const FormImage = styled.img`
  width: 645px;
  height: 515px;
  margin-left: 37.63vw;
  position: relative;
  top: -48px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 861px;
    height: 700px;
    top: -75px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 435px;

    margin-left: 524px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    width: auto;
    height: auto;
    margin: 69px auto 0;
  }

  @media ${themes.primary.media.maxMobile} {
    position: relative;
    right: -2%;
    width: 130%;
    margin-top: 139px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    right: -4px;
    margin-top: 105px;
    width: 135%;
  }
`;

export const FormContainer3D = styled.div`
  width: 443px;
  height: 415px;
  position: absolute;
  background: black;
  margin-top: 20px;
  margin-left: 15px;
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.minPCFullHD} {
    width: 590px;
    height: 555px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    position: relative;
    width: 453px;
  }

  @media ${themes.primary.media.maxMobile} {
    max-width: 673px;
    width: 100%;
  }

  @media (max-width: 720px) {
    width: 585px;
  }

  @media ${themes.primary.media.minTablet} {
    max-width: 345px;
    position: absolute;
    height: 405px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 361px;
  }
`;

export const TopCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 14px 8px 0;
  border-color: transparent ${themes.primary.colors.grayBack} transparent
    transparent;
  right: 0;
  top: 0;
  position: absolute;
  z-index: 5;
`;

export const BottomCorner = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 5px 13px;
  border-color: transparent transparent ${themes.primary.colors.grayBack}
    transparent;
  position: absolute;
  right: 0;
  bottom: 0;
`;
