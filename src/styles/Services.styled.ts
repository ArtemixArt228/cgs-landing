import styled from "styled-components";
import themes from "../utils/themes";
import { IIcon, ISlide } from "../types/Decoration.types";

export const BlockHeader = styled.h3`
  font-weight: 900;
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  @media ${themes.primary.media.maxMobile} {
    font-size: 32px;
    line-height: 135%;
    text-align: left;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    line-height: 56px;
    &.upcoming-products {
      padding-right: 5em;
    }
    &.how-to-startup {
      line-height: 42.88px;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 40px;
    line-height: 140%;
    &.ai-chatbot-page {
      line-height: 120%;
    }
    &.upcoming-products {
      padding-right: 0;
    }
  }
  @media ${themes.primary.media.min1440} {
    font-size: 40px;
    line-height: 140%;
    &.how-to-startup {
      letter-spacing: -0.2px;
      line-height: 120%;
    }
    &.ai-chatbot-page {
      line-height: 120%;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
    line-height: 155%;
    &.our-services {
      line-height: 160%;
    }
    &.how-to-startup,
    &.ai-chatbot-page {
      line-height: 64px;
      letter-spacing: -0.27px;
    }
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 2.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    &.pricing {
      gap: 0;
    }
  }

  @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
      .max1440} {
    &.pricing {
      gap: 32px;
    }
  }
  @media ${themes.primary.media.min1440} {
    &.tech {
      margin: 0 -52px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    &.pricing {
      gap: 3em;
    }
    &.tech {
      margin: 0 -68px;
    }
  }
`;

export const Container = styled.section`
  margin-top: 140px;
  margin-bottom: 138px;

  &.mobileAudit {
    margin-top: 8rem;
    margin-bottom: 10.2em;
  }

  &.cloudSolutions {
    margin-top: 45px;
  }

  &.mobileDev {
    margin-top: 7.3em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.mobileAudit {
      margin-top: 14.5rem;
      margin-bottom: 9em;
    }

    &.cloudSolutions {
      margin-top: 90px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 35px;
    margin-bottom: 60px;

    &.mobileAudit {
      margin-top: 26px;
      margin-bottom: 108px;
    }

    &.mobileDev {
      margin-top: -22.5px;
      margin-bottom: 9em;
    }

    &.cloudSolutions {
      margin-top: 122.5px;
      margin-bottom: 90px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &.mobileDev {
      margin-bottom: 5.6em;
    }

    &.mobileAudit {
      margin-top: 0.3em;
      margin-bottom: 5em;
    }

    &.cloudSolutions {
      margin-top: 35px;
      margin-bottom: 60px;
    }
  }
`;

export const ContentLayout = styled.div`
  display: grid;
  margin-top: 29px;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 42.5px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    grid-template-columns: repeat(1, minmax(300px, 1fr));
  }

  @media ${themes.primary.media.maxMobile} {
    margin-top: 40px;

    &.cloudSolutions {
      margin-top: 75px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 15px;

    &.cloudSolutions {
      margin-top: 15px;
    }
  }
`;

export const WorthTitleContainer = styled.div`
  font-size: ${themes.primary.font.size.secondary};
  letter-spacing: 0.05em;
  display: flex;
  flex-direction: column;
  column-gap: 11px;
  align-items: center;
  font-weight: ${themes.primary.font.weight.heavy};
  -webkit-text-stroke: 0.2px black;

  p {
    font-size: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    p {
      font-size: 22px;
      margin-block: 16px;
    }
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    column-gap: 0;
  }
`;

export const WorthCardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: 80px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  padding-inline: 16px;

  p {
    font-family: ${themes.primary.font.family.namu};
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 24px;
    line-height: 160%;
    letter-spacing: 0.05em;
    color: ${themes.primary.colors.primary};
  }

  &.mobileDev p {
    font-size: 2em;
  }
  &.cloudSolutions p,
  &.mobileAudit p,
  &.dappAudit p {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 107px;
    padding: 22px;
    gap: 22px;

    &.cloudSolutions p {
      font-size: 1.4em;
    }

    &.dappAudit p {
      font-size: 1.67em;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 16px;

    &.cloudSolutions p,
    &.mobileAudit p,
    &.mobileDev p,
    &.dappAudit p,
    p {
      font-size: 24px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    height: 72px;
    gap: 8px;

    &.cloudSolutions p,
    &.mobileAudit p,
    &.mobileDev p,
    &.dappAudit p,
    p {
      font-size: 18px;
    }
  }
`;

export const WorthCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${themes.primary.colors.portfolioBg};
`;

export const WorthText = styled.p`
  padding: 29px 21px;
  margin: 0;
  border-top: 3px solid black;
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 160%;

  &.mobileDev {
    font-size: 1.5em;
  }
  &.cloudSolutions,
  &.mobileAudit,
  &.dappAudit {
    font-size: 1.15em;
  }

  @media ${themes.primary.media.minPC} {
    padding: 38px 28px;

    &.mobileAudit {
      font-size: 1.07em;
      padding: 38px 32px;
    }

    &.dappAudit {
      font-size: 1.25em;
    }

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxLaptop} {
    &.mobileAudit {
      padding: 29px 16px;
    }
  }

  @media (max-width: 1260px) {
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    padding: 32px;
    font-size: 20px;
    max-width: 100%;

    &.mobileAudit,
    &.mobileDev,
    &.dappAudit,
    &.cloudSolutions {
      font-size: 18px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin: 0;
    padding: 13px 15px;
    font-size: 16px;
    max-width: 100%;

    &.cloudSolutions,
    &.mobileAudit,
    &.mobileDev,
    &.dappAudit {
      font-size: 16px;
    }
    &.mobileAudit {
      line-height: 160%;
    }
  }

  @media (max-width: 370px) {
    &.mobileAudit {
      font-size: 14px;
    }
  }
`;

export const ShadowContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: -1;
  margin: 8px 0 0 8px;
  border: 1px solid ${themes.primary.colors.black};
`;

export const BlackShadow = styled.div`
  height: 80px;
  width: 100%;
  background: ${themes.primary.colors.black};
  outline: 1px solid ${themes.primary.colors.black};

  @media ${themes.primary.media.maxMobile} {
    height: 72px;
  }
`;

export const WorthBlock = styled.div<ISlide>`
  position: relative;
  padding-top: 102px;
  height: 245px;
  border: 1px solid black;

  &.cloudSolutions {
    height: 260px;
  }

  @media ${themes.primary.media.minPC} {
    height: 260px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 325px;

    &.mobileAudit {
      height: 349px;
    }

    &.cloudSolutions {
      height: 345px;
    }
  }

  @media (min-width: 2200px) {
    height: 335px;
  }

  @media ${themes.primary.media.maxLaptop} {
    height: 265px;

    &.mobileAudit {
      height: 260px;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    &.mobileAudit {
      height: 190px;
    }
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    &.mobileAudit {
      height: 220px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    height: 217.5px;
    padding: 65px;

    &.mobileAudit {
      height: 231px;
    }

    &.cloudSolutions {
      height: 202px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    height: 197.5px;
    &.mobileAudit {
      height: 209px;
    }
  }
`;

export const Icon = styled.img<IIcon>`
  display: flex;

  @media ${themes.primary.media.minPCFullHD} {
    width: 63px;
    height: 63px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 45px;
    height: 45px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 40px;
    height: 40px;
  }
`;

export const WhoNeedContainer = styled.div`
  padding: 30px;
  min-height: 275px;
  background: linear-gradient(
    90deg,
    ${themes.primary.colors.gradientColor1RateCard} 0%,
    ${themes.primary.colors.gradientColor2RateCard} 100%
  );
  margin-bottom: 70px;
  display: flex;
  gap: 97px;
  align-items: center;

  @media ${themes.primary.media.minPCFullHD} {
    padding: 40px;
    min-height: 365px;
    align-items: flex-start;
    gap: 87px;
    margin-bottom: 100px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    background: transparent;
    flex-direction: column;
    gap: 32px;
    padding: 0 20px 60px;
    align-items: flex-start;
    border-bottom: 1px solid ${themes.primary.colors.headerBorder};
    margin-inline: -20px;
    margin-bottom: 0px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    gap: 20px;
  }
`;

export const WhoNeedAppsBlocks = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-width: auto;

  @media ${themes.primary.media.minLaptop} {
    min-width: 477px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    min-width: 680px;
  }
`;

export const WhoNeedSubText = styled.div`
  max-width: 477px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid ${themes.primary.colors.borderRateCard};
  font-size: ${themes.primary.font.size.oneAndHalf};
  line-height: 160%;

  @media ${themes.primary.media.minPCFullHD} {
    max-width: 635px;
    margin-top: 27.5px;
    padding-top: 25px;

    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1rem;
    margin-top: 1em;
    & br {
      display: none;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    border-top: none;
    font-size: 18px;
    max-width: none;

    padding: 0;
    margin-top: 0.6em;
    margin-bottom: -3px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 16px;
    margin-top: 0;
  }
`;

export const WhoNeedAppsBlockImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 25px;
    padding-top: 57.5px;
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 20px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    margin-top: 6px;
    gap: 12px;
  }
`;

export const WhoNeedAppsBlockImageCard = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0.417em 1.42em;
  height: 53px;
  border: 1px solid ${themes.primary.colors.primary};

  span {
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    font-size: 1.5em;
    line-height: 160%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 70px;
    padding: 16px 20px;

    img {
      height: 37px !important;
      width: 37px !important;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    height: 53px;
    padding: 12px 15px;

    span {
      font-size: 18px;
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    height: 48px;
    padding: 5px 13px;

    span {
      font-size: 16px;
    }
  }
`;
