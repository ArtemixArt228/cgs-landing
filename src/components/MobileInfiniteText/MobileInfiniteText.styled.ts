import styled from "styled-components";
import themes from "../../utils/themes";

export const MovingText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.bold} !important;
  text-transform: uppercase;
  overflow: hidden;
  margin-left: -10%;
  width: 130%;
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  z-index: -5;
  background: linear-gradient(90deg, #c7ecc0 0%, #89a3d1 130.27%);
  height: calc(
    clamp(56px, 56px + (100vw - 375px) * ((80 - 56) / (768 - 375)), 80px)
  );
  align-items: center;
  background-size: cover;
  font-size: 2.5em;
  line-height: 140%;

  &.case-study {
    background: linear-gradient(
      61.63deg,
      ${themes.primary.colors.portfolioGradient1} 0%,
      ${themes.primary.colors.portfolioGradient2} 100%
    );

    margin-bottom: 0;

    &.read-more-mob-title {
      margin-bottom: 0;
      width: 115%;
    }
  }

  &.services,
  &.homepage {
    background: linear-gradient(
      61.63deg,
      ${themes.primary.colors.infiniteTextColor1} 0%,
      ${themes.primary.colors.infiniteTextColor2} 100%
    );
    margin-bottom: 0;
    margin-top: 0;
  }

  &.rateCard {
    border: none;
    font-size: 24px !important;
    line-height: 56px !important;
    width: inherit;
    margin-left: 0;
    @media ${themes.primary.media.maxMobile} {
      margin-top: 107px;
      font-size: calc(
        clamp(24px, 24px + (100vw - 375px) * ((40 - 24) / (768 - 375)), 40px)
      ) !important;
    }

    @media ${themes.primary.media.minTablet} {
      margin-top: 0;
    }
    @media ${themes.primary.media.maxLowScreenMobile} {
      margin-top: 15px;
    }
  }

  @media ${themes.primary.media.minMobile} {
    display: none;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 25px;
  }
  @media ${themes.primary.media.onlyPC} {
    font-size: 20px;
  }
  @media (min-width: 1800px) {
    font-size: 2em;
  }
  @media (min-width: 1500px) and (max-width: 2000px) {
    font-size: 1.6em;
  }
  @media (min-width: 1300px) and (max-width: 1400px) {
    font-size: 1.5em;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.5em;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: calc(
      clamp(24px, 24px + (100vw - 375px) * ((40 - 24) / (768 - 375)), 40px)
    );
    line-height: 233%;
    margin-bottom: calc(
      clamp(28px, 28px + (100vw - 375px) * ((40 - 28) / (768 - 375)), 40px)
    );

    &.withoutMargin {
      margin-bottom: 0 !important;
    }

    &.mobileAudit {
      margin-bottom: 0 !important;
    }

    &.webDev {
      margin-left: -35%;
      width: 150%;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &.mobileFeedback {
      margin-bottom: 10px;
    }
  }
`;
