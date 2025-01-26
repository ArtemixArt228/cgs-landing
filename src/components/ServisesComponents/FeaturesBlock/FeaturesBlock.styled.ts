import styled from "styled-components";
import themes from "../../../utils/themes";

interface ILearnMoreProps {
  isSecurityPrivacyBlock?: boolean;
}

export const HeaderAndContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0;

  @media ${themes.primary.media.max767Mobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 40px;
    &.ai-chatbot-page {
      gap: 32px;
    }
  }
  @media ${themes.primary.media.onlyLaptopL} {
    gap: 32px;
    &.ai-chatbot-page {
      gap: 32px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 42.67px;
    &.ai-chatbot-page {
      gap: 42.67px;
    }
  }
`;
export const BlockHeader = styled.h3`
  font-size: 40px;
  font-weight: 900;
  line-height: 140%;
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  @media ${themes.primary.media.maxMobile} {
    font-size: 36px;
    text-align: left;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    line-height: 56px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 53.33px;
    line-height: 74.67px;
  }
`;

export const FeatureBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 40px;
    flex-direction: column;
  }
  @media ${themes.primary.media.minTabletLandScape} {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${themes.primary.media.min1440} {
    gap: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
  }
`;

export const FeatureItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  border-radius: 16px;
  font-size: 30px;
  @media ${themes.primary.media.minTabletLandScape} {
    flex: 1 1 45%;
  }
  @media ${themes.primary.media.min1440} {
    flex: 1 1 30%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    border-radius: 21.33px;
  }
`;

export const FeatureItemTextContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid ${themes.primary.colors.borderRateCard};
  padding: 12px 16px 24px 16px;
  color: ${themes.primary.colors.jetBlack};
  font-weight: 900;
  @media ${themes.primary.media.maxMobile} {
    gap: 12px;
    padding: 12px 16px 24px;
    &.ai-chatbot-page {
      gap: 8px;
      padding: 12px 16px 24px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 12px;
  }
  @media ${themes.primary.media.min1440} {
    gap: 14px;
    &.ai-chatbot-page {
      gap: 0;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 18.67px;
    padding: 16px 21.33px 32px 21.33px;
    &.ai-chatbot-page {
      justify-content: center;
    }
  }
`;

export const FeatureTitleAndDescription = styled.div`
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    gap: 10px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 0;
  }
  @media ${themes.primary.media.min1440} {
    gap: 0;
    &.ai-chatbot-page {
      gap: 8px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 0;
    &.ai-chatbot-page {
      gap: 12px;
    }
  }
`;
export const Title = styled.div`
  letter-spacing: 0.05em;
  line-height: 150%;
  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 24px;
    line-height: 38.4px;
    &.ai-chatbot-page {
      font-size: 22px;
      line-height: 160%;
    }
  }
  @media ${themes.primary.media.min1440} {
    line-height: 38px;
  }
  @media ${themes.primary.media.minTabletLandScape} {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 28px;
    line-height: 160%;

    &.ai-chatbot-page {
      font-size: 32px;
      line-height: 160%;
    }
  }
`;

export const Description = styled.div`
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    line-height: 160%;
  }
  &.ai-chatbot-page {
    overflow: auto;
    text-overflow: unset;
    display: block;
    -webkit-line-clamp: unset;

    font-size: 14px;
    line-height: 24px;
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 20px;
      line-height: 160%;
    }
  }
`;

export const SolutionLearnMore = styled.a<ILearnMoreProps>`
  width: auto;
  max-width: max-content;
  display: inline-flex;
  font-weight: 900;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${themes.primary.colors.darkBlue};
  cursor: pointer;
  margin-top: auto;
  transition: color 120ms ease-in-out;
  & svg {
    width: 10px;
    height: 10px;
  }
  &:hover {
    color: ${themes.primary.colors.hoverBlue};
  }
  @media ${themes.primary.media.maxMobile} {
    margin-top: ${(isSecurityPrivacyBlock) =>
      isSecurityPrivacyBlock ? "0" : "4px"};
  }
  @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
      .max1440} {
    margin-top: ${(isSecurityPrivacyBlock) =>
      isSecurityPrivacyBlock ? "0" : "12px"};
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    line-height: 160%;
    margin-top: ${(isSecurityPrivacyBlock) =>
      isSecurityPrivacyBlock ? "0" : "18.67px"};
    & svg {
      width: 12.67px;
      height: 12.67px;
    }
  }
`;

export const FeatureItemImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FeatureItemImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: hidden;
  min-width: 100%;
  width: 100%;
  z-index: -1;
  @media ${themes.primary.media.maxMobile} {
    height: 315px;
  }
  @media ${themes.primary.media.min768Mobile} {
    height: 203px;
  }
  @media ${themes.primary.media.minTabletLandScape} {
    height: calc(
      clamp(
        203px,
        203px + (100vw - 992px) * ((300 - 203) / (1440 - 992)),
        300px
      )
    );
  }
  @media ${themes.primary.media.onlyLaptopL} {
    height: calc(
      clamp(
        203px,
        203px + (100vw - 1440px) * ((271 - 203) / (1920 - 1440)),
        271px
      )
    );
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 271px;
  }

  &.ai-chatbot-page {
    @media ${themes.primary.media.max767Mobile} {
      height: 315px;
    }
    @media ${themes.primary.media.min768Mobile} {
      & span {
        bottom: -132px !important;
        scale: 1.15;
      }
    }
    @media ${themes.primary.media.min1440} {
      & img {
        object-fit: cover !important;
      }
      & span {
        bottom: -125px !important;
        scale: 1;
      }
    }
    @media ${themes.primary.media.minPCFullHD} {
      & span {
        bottom: -175px !important;
      }
    }
  }
`;
