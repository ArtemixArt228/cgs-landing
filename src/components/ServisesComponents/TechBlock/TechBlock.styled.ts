import styled from "styled-components";
import themes from "../../../utils/themes";

export const TechBlockWrapper = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  width: 100%;
  padding: 0;
  margin: 0;

  @media ${themes.primary.media.min1440} {
    background-image: url("/PainBlock/painBlockBG1.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 52px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 100%;
    padding: 0 68px;
  }
`;

export const TechBlockContainerWrapper = styled.div`
  width: 100%;
  border-radius: 16px;
  background: ${themes.primary.colors.grey};
  @media ${themes.primary.media.minPCFullHD} {
    border-radius: 21.33px;
  }
`;

export const TechBlockContainer = styled.div`
  display: flex;
  gap: 5.25em;
  width: 100%;
  border-radius: 16px;
  border: 2px solid ${themes.primary.colors.vodka};
  padding: 42px 52px;
  background: linear-gradient(
      91.14deg,
      rgba(88, 105, 221, 0.07) 4.96%,
      rgba(88, 105, 221, 0.021) 99.17%
    ),
    radial-gradient(
      17.33% 49.28% at 12.35% 23.12%,
      rgba(241, 239, 237, 0.5) 22.72%,
      rgba(241, 239, 237, 0) 100%
    ),
    radial-gradient(
      20.63% 58.66% at 87.12% 56.99%,
      rgba(88, 105, 221, 0.05) 22.72%,
      rgba(88, 105, 221, 0) 100%
    );

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    padding: 60px 52px 60px;
    flex-direction: column;
    gap: 64px;
  }

  @media screen and ${themes.primary.media.max767Mobile} {
    padding: 62px 30px 48px;
    flex-direction: column;
    gap: 64px;
  }

  @media screen and ${themes.primary.media.min1440} {
    gap: 10.5em;
    padding: 32px 52px;
  }
  @media screen and ${themes.primary.media.minPCFullHD} {
    padding: 58px 59.33px 60px 69.33px;
    gap: 244px;
    border-radius: 21px;
  }
`;

export const TextAndImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  span {
    width: 167px !important;
    height: 103px !important;
  }

  gap: 20px;

  h2 {
    font-size: 24px;
    letter-spacing: normal;
    margin: 0;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    line-height: 160%;
    margin: 0;
  }
  @media screen and ${themes.primary.media.min768Mobile} {
    h2 {
      font-size: 32px;
      line-height: 150%;
      letter-spacing: -0.2px;
    }
    p {
      font-size: 20px;
      line-height: 160%;
      margin: 0;
    }
  }
  @media screen and ${themes.primary.media.minBreakpoint1100} {
    h2 {
      font-size: 40px;
      line-height: 120%;
      letter-spacing: -0.2px;
      margin: 0;
    }

    p {
      font-size: 20px;
      line-height: 160%;
      margin: 0;
    }
    max-width: calc(
      clamp(
        477px,
        477px + (100vw - 1440px) * ((636 - 477) / (1920 - 1440)),
        636px
      )
    );
  }
  @media ${themes.primary.media.minPCFullHD} {
    max-width: 562px;
    gap: 26.67px;

    span {
      width: 223px !important;
      height: 137px !important;
    }

    h2 {
      font-size: 48px;
      line-height: 64px;
    }

    p {
      font-size: 24px;
      line-height: 38.4px;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 167px;
  height: 103px;

  @media screen and ${themes.primary.media.maxMobile} {
  }

  @media screen and ${themes.primary.media.min768Mobile} {
  }
  @media screen and ${themes.primary.media.min1440} {
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 223px;
    height: 137px;
  }
`;

export const TechItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 74px 0;

  @media ${themes.primary.media.maxMobile} {
    padding: 0;
    gap: 18px;
    margin: 0;
  }
  @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
      .maxTabletPortrait} {
    padding: 0;
    gap: 20px;
    margin: 0 -12px;
  }

  @media screen and ${themes.primary.media.maxMobilePortrait} {
    gap: 20px;
    flex-direction: column;
  }
  @media ${themes.primary.media.min1440} {
    padding-right: 25px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 26.67px;
    padding: 81px 50px 81px 0;
  }
`;

export const TechItem = styled.div`
  border-radius: 10px;
  background-color: ${themes.primary.colors.grey};
  border: 1px solid ${themes.primary.colors.borderRateCard};
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 13px 9px;
  font-size: 24px;
  line-height: 160%;
  justify-content: center;

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    font-size: 16px;
    flex: 1 1 calc(33% - 20px);
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;
    flex: unset;
    font-size: 16px;
    height: 53px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 16px;
    padding: 13px 8px;
  }
  @media ${themes.primary.media.min1440} {
    flex: 1 1 calc(33% - 1em);
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 22px;
    line-height: 38.4px;
    border-radius: 13.33px;
    padding: 15px 8px;
    flex: 1 1 calc(33% - 1em);
  }
`;
export const Icon = styled.div`
  position: relative;
  @media ${themes.primary.media.maxMobile} {
    width: 30px;
    height: 20px;
    &.python {
      width: 20px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 30px;
    height: 20px;
    &.python {
      width: 20px;
    }
  }
  @media ${themes.primary.media.onlyLaptopL} {
    width: 32px;
    height: 22px;
    &.python {
      width: 22px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 46px;
    height: 32px;
    &.python {
      width: 32px;
    }
  }
`;
