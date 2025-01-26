import styled from "styled-components";
import themes from "../../../utils/themes";

export const BlockHeader = styled.h3`
  font-size: 40px;
  font-weight: 900;
  line-height: 140%;
  margin: 0;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.maxMobile} {
    font-size: 36px;
    text-align: left;
    padding: 0;
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    font-size: 40px;
    padding: 0 12px;
  }
  @media ${themes.primary.media.maxMobilePortrait} {
    font-size: 24px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 52px;
  }
`;
export const PricingBlockWrapper = styled.div`
  background: url("/pricing-background.png");
  background-size: cover;
  overflow: hidden;
  display: flex;
  width: 100%;
  border-radius: 16px;
  align-items: center;
  @media ${themes.primary.media.maxBreakpoint1100} {
    flex-direction: column;
  }
`;

export const PricingSide = styled.div`
  width: 50%;
  height: 100%;

  &.left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 113px 8em 113px 68.5px;
  }

  &.right {
    display: flex;
    justify-content: flex-end;
    img {
      max-width: 100%;
    }
  }

  @media ${themes.primary.media.maxBreakpoint1100} {
    width: 100%;

    &.left {
      padding: 96px 10em 7em 5.5em;
    }

    &.right {
      display: flex;
      justify-content: flex-end;
      position: relative;
      top: -33px;
      left: 62px;
      height: 390px;
      img {
        max-width: 100%;
      }
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;

    &.left {
      padding: 48px 32px 8em;
    }

    &.right {
      display: flex;
      justify-content: flex-start;
      max-height: 280px;
      padding-top: -15px;
      scale: 1.24;

      img {
        max-width: 90%;
      }
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.left {
      padding: 7em 9em 7em 5.5em;
    }

    &.right {
      display: flex;
      justify-content: flex-end;

      img {
        min-width: 100%;
      }
    }
  }
`;

export const PricingTitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 16px;
  text-transform: uppercase;

  @media ${themes.primary.media.max767Mobile} {
    font-size: 24px;
    line-height: 30px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    line-height: 48px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 40px;
    line-height: 48px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
    line-height: 64px;
  }
`;

export const PricingDescription = styled.div`
  font-family: ${themes.primary.font.family.namu};
  line-height: 140%;
  margin-bottom: 48px;
  color: #535557;

  p {
    margin: 0;
    padding: 0;
  }
  @media ${themes.primary.media.max767Mobile} {
    font-size: 16px;
    line-height: 26px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
    line-height: 27px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 20px;
    line-height: 30px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 64px;
    font-size: 24px;
    line-height: 38.4px;
  }
`;

export const PricingBtnContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const PricingPackageCardWrapper = styled.div`
  flex: 1;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  display: flex;
  flex-direction: column;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  border-radius: 16px;
`;

export const PricingInfoAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 16px 16px 32px;
  flex-grow: 1;
  justify-content: space-between;
  @media ${themes.primary.media.minPCFullHD} {
    padding: 21.33px 21.33px 42.67px;
    gap: 4.5em;
  }
`;

export const PricingPackageTitle = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  border-bottom: 1px solid ${themes.primary.colors.borderRateCard};
  font-size: 24px;
  line-height: 160%;
  letter-spacing: 1px;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  color: ${themes.primary.colors.jetBlack};
  border-radius: 16px 16px 0 0;

  span {
    width: 28px !important;
    height: 35px !important;
    margin-left: 6px !important;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    gap: 8px;
    span {
      width: 37px !important;
      height: 47px !important;
      margin-left: 8px !important;
    }
  }
`;

export const PricingPackageInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const PriceAndDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${themes.primary.colors.borderRateCard};
  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
    padding-bottom: 16px;
  }
  @media ${themes.primary.media.minTabletLandScape} {
    min-height: 110px;
  }
  @media ${themes.primary.media.min1440} {
    min-height: 110px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    min-height: 139px;
  }
`;

export const Price = styled.div`
  font-size: 26px;
  line-height: 123%;
  color: ${themes.primary.colors.jetBlack};

  span {
    font-size: 16px;
    line-height: 150%;
    color: ${themes.primary.colors.caseStudyImpactCardCountBlock};
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 35px;

    span {
      font-size: 21px;
    }
  }
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 150%;
  color: ${themes.primary.colors.caseStudyImpactCardCountBlock};

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 21px;
  }
`;

export const PricingPackageBenefitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 16px;

  @media ${themes.primary.media.maxTabletPortrait} {
    width: 50%;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    width: 100%;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
  }
`;

export const Benefit = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  @media ${themes.primary.media.minPCFullHD} {
    gap: 8px;
  }
`;
export const Icon = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  min-width: 18px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 24px;
    height: 24px;
    min-width: 24px;
  }
`;
export const BenefitText = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  font-size: 18px;
  line-height: 120%;
  color: ${themes.primary.colors.jetBlack};

  @media ${themes.primary.media.minPCFullHD} {
    gap: 8px;
    font-size: 24px;
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const PackageBtn = styled.button`
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.grey};
  background-color: ${themes.primary.colors.primary};
  border: 1px solid ${themes.primary.colors.primary};
  cursor: pointer;
  padding: 8px 22px;
  font-size: 16px;
  line-height: 160%;
  text-align: center;
  text-transform: uppercase;
  border-radius: 10px;
  font-weight: ${themes.primary.font.weight.heavy};
  left: 0;
  bottom: 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 21.33px;
    padding: 10.67px 29.33px;
    border-radius: 13.33px;
  }
`;
