import styled from "styled-components";
import themes from "../../../utils/themes";

export const AiChatbotPage = styled.div``;

export const ChatPreview = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px 11px 53px 0;

  @media ${themes.primary.media.min768Mobile} {
    padding: 40px 18px 40px 0;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    padding: 52px 62px 0 66px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 42px 98px 18px 77px;
  }
`;

export const AiChatbotPageHeader = styled.div`
  font-size: 26px;
  line-height: 1.35;
  text-transform: uppercase;

  p {
    margin: 0;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    line-height: 1.34;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 52px;
    line-height: 1.42;
    letter-spacing: -0.3px;
    margin-bottom: 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 0;
    font-size: 60px;
    line-height: 1.64;
    letter-spacing: -0.4px;
  }
`;

export const AiChatbotPageTitle = styled.div`
  font-size: 24px;
  line-height: 1.24;
  text-transform: uppercase;
  p {
    margin: 0;
  }

  @media ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    line-height: 1.75;
    letter-spacing: -0.2px;

    &.impl-process-title {
      position: relative;
      display: flex;
      flex-direction: column;
      line-height: 1.25;
    }
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    &.security-privacy-title {
      letter-spacing: -0.2px;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 40px;
    line-height: 1.2;

    &.security-privacy-title {
      letter-spacing: -0.2px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 48px;
    line-height: 64px;
    letter-spacing: -0.27px;
  }
`;
export const AiChatbotHeroWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  @media ${themes.primary.media.min768Mobile} {
    gap: 20px;
  }

  @media ${themes.primary.media.min1440} {
    gap: 0;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 24px;
  }
`;

export const AiChatbotPageText = styled.div`
  font-size: 16px;
  line-height: 1.62;

  &.best-features-text {
    line-height: 1.5;
  }

  &.security-privacy-card-text {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.1px;
  }

  &.implementation-process-card-descr {
    font-size: 14px;
  }

  &.domain-impl-text {
    font-size: 14px;
    line-height: 22.4px;
  }

  @media ${themes.primary.media.min768Mobile} {
    font-size: 20px;

    &.best-features-text {
      font-size: 18px;
    }

    &.security-privacy-card-text {
      font-size: 14px;
      line-height: 24px;
    }

    &.domain-impl-text {
      font-size: 18px;
      line-height: 1.5;
    }

    &.implementation-process-card-descr {
      font-size: 14px;
      line-height: 1.6;
    }
    &.ai-chatbot-text {
      font-size: 18px;
      line-height: 28.8px;
    }
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 24px;
    &.ai-chatbot-text {
      text-align: center;
      padding: 0 88px;
      font-size: 20px;
      line-height: 32px;
    }
    &.domain-impl-text {
      font-size: 16px;
      line-height: 1.5;
    }
    &.implementation-process-card-descr {
      font-size: 16px;
      line-height: 1.6;
    }
    &.best-features-text {
      font-size: 16px;
      min-height: 144px;
    }
  }
  @media ${themes.primary.media.min1440} {
    font-size: 24px;

    &.ai-chatbot-text {
      padding: 0 133px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    line-height: 1.6;
    &.best-features-text {
      font-size: 20px;
      line-height: 32px;
    }
    &.ai-chatbot-text {
      font-size: 24px;
      line-height: 38.4px;
      padding: 0 177px;
    }
    &.security-privacy-card-text {
      letter-spacing: 0.13px;
      font-size: 20px;
      line-height: 1.6;
    }
    &.domain-impl-text {
      font-size: 20px;
      line-height: 1.6;
    }
    &.implementation-process-card-descr {
      font-size: 20px;
      line-height: 1.6;
      & span {
        width: 25px !important;
        height: 19px !important;
      }
    }
  }
`;
export const CardsWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: stretch;
  justify-content: center;

  &.security-privacy-cards {
    gap: 16px;
  }

  &.domain-implementation-cards {
    gap: 16px;
  }

  &.implementation-process-cards-wrapper {
    gap: 16px;
  }

  @media ${themes.primary.media.min768Mobile} {
    &.security-privacy-cards {
      gap: 32px;
    }

    &.domain-implementation-cards {
      gap: 32px;
    }
    &.implementation-process-cards-wrapper {
      gap: 16px;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    &.security-privacy-cards {
      flex-direction: row;
      flex-wrap: wrap;
      & > div {
        flex: 0 0 calc(50% - 17px);
      }
    }

    &.domain-implementation-cards {
      flex-direction: row;
      flex-wrap: wrap;
      & > div {
        flex: 1 0 calc(50% - 17px);
      }
    }

    &.implementation-process-cards-wrapper {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 16px;
      & > div {
        flex: 0 1 calc(50% - 9px);
      }
    }
  }
  @media ${themes.primary.media.min1440} {
    &.domain-implementation-cards {
      & > div {
        flex: 1 0 calc(33% - 17px);
      }
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
    &.security-privacy-cards {
      gap: 42.67px;
      & > div {
        flex: 0 0 calc(50% - 23px);
      }
    }
    &.domain-implementation-cards {
      gap: 42.67px;
      & > div {
        flex: 1 0 calc(33% - 23px);
      }
    }
    &.implementation-process-cards-wrapper {
      gap: 21.33px;
      & > div {
        flex: 0 1 calc(50% - 23px);
      }
    }
  }
`;
export const HeaderAndCardsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 32px;
  }
  @media ${themes.primary.media.minLaptop} {
    &.security-privacy-cards {
      gap: 56px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
    &.security-privacy-cards {
      gap: 74.67px;
    }
    &.domain-implementation-cards {
      gap: 42.67px;
    }
    &.implementation-process-cards-wrapper {
      gap: 42px;
    }
  }
`;
export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  @media ${themes.primary.media.minBreakpoint1100} {
    & > div {
      flex: 1 0 calc(50% - 17px);
    }
  }
  @media ${themes.primary.media.min1440} {
    & > div {
      flex: 1 0 calc(33% - 17px);
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 42.67px;
  }
`;

export const CardItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  width: 100%;
  padding: 36px;
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  border-radius: 32px;
  border: 1px solid ${themes.primary.colors.testimonialBorder};
  overflow: hidden;

  &.security-privacy-card {
    gap: 20px;
    padding: 25px 16px;
    border-radius: 16px;
    align-items: center;
  }

  &.domain-implementation-card {
    position: relative;
    gap: 8px;
    padding: 20px 20px 60px;
    border-radius: 16px;
    &:hover {
      border: 1px solid ${themes.primary.colors.darkBlue};
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
      .domain-implementation-divider {
        background-color: ${themes.primary.colors.darkBlue};
      }
      .domain-icon-arrow {
        color: ${themes.primary.colors.darkBlue};
      }
    }
  }

  &.implementation-process-card {
    gap: 14px;
    padding: 16px;
    border-radius: 12px;
    transition: all 1000ms ease-in-out;
    &.current {
      border-color: #5869dd;
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
    }
  }

  &.benefits-card-wrap {
    padding: 20px;
    justify-content: space-between;
    gap: 36px;
  }

  @media ${themes.primary.media.min768Mobile} {
    width: 100%;

    &.benefits-card-wrap {
      padding: 36px;
      justify-content: space-between;
      min-height: 410px;
    }

    &.security-privacy-card {
      flex-direction: row-reverse;
      gap: 24px;
      justify-content: space-between;
      padding: 20px;
    }

    &.domain-implementation-card {
      padding: 32px 20px 82px;
      gap: 16px;
      min-height: 321px;
    }

    &.implementation-process-card {
      flex-direction: row;
      gap: 40px;
      padding: 16px;
    }
  }

  @media ${themes.primary.media.min1440} {
    &.benefits-card-wrap {
      padding: 36px;
      min-height: 495px;
      &.cards1 {
        width: 100%;
      }
      &.cards2 {
        flex: 1 1 40%;
      }

      &.cards3 {
        flex: 1 1 30%;
      }
    }

    &.domain-implementation-card {
      width: 425px;
      height: 346px;
      min-height: unset;
      &.cards1 {
        width: 100%;
      }
      &.cards2,
      &.cards4 {
        flex: 1 1 40%;
      }

      &.cards3,
      &.cards5,
      &.cards6 {
        flex: 1 1 30%;
      }
    }

    &.security-privacy-card {
      height: unset;
    }

    &.implementation-process-card {
      padding: 16px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    &.benefits-card-wrap {
      min-height: 595px;
      border-radius: 42px;
      padding: 48px;
      gap: 48px;
    }
    &.security-privacy-card {
      padding: 26.67px;
    }
    &.domain-implementation-card {
      padding: 42.67px 26.67px;
      height: 461px;
      gap: 21.33px;
    }
    &.implementation-process-card {
      height: 217.33px;
      flex: 0 1 calc(50% - 11px);
      padding: 24px 16px;
      gap: 50px;
    }
  }
`;

export const CardTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 24px;
  line-height: 1.25;
  text-transform: uppercase;

  &.security-privacy-card-title {
    text-transform: none;
    letter-spacing: 0.1px;
    color: ${themes.primary.colors.darkBlue};
  }

  &.benefits-card-title {
    color: ${themes.primary.colors.darkBlue};
    p {
      margin: 0;
    }
  }

  &.implementation-process-card-title {
    text-transform: none;
    letter-spacing: 0.1px;
    color: ${themes.primary.colors.comment};
    transition: color 300ms ease-in-out;

    &.current {
      color: ${themes.primary.colors.darkBlue};
    }
  }

  @media ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    letter-spacing: -0.1px;

    &.security-privacy-card-title {
      font-size: 22px;
      line-height: 32px;
      letter-spacing: -1px;
    }

    &.implementation-process-card-title {
      font-size: 22px;
      line-height: 32px;
      letter-spacing: -1px;
    }
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    &.security-privacy-card-title {
      font-size: 26px;
      line-height: 32px;
      letter-spacing: -1px;
    }
    &.benefits-card-title {
      font-size: 32px;
      line-height: 1.25;
      letter-spacing: -0.2px;
    }
    &.implementation-process-card-title {
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -1px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    &.benefits-card-title {
      font-size: 40px;
      line-height: 1.33;
      letter-spacing: -0.13px;
      padding-right: 0;
    }
    &.security-privacy-card-title {
      font-size: 32px;
      line-height: 1.33;
      letter-spacing: -1.33px;
    }
    &.implementation-process-card-title {
      font-size: 32px;
      line-height: 1.33;
      letter-spacing: -1.33px;
    }
  }
`;

export const BenefitCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  @media ${themes.primary.media.minPCFullHD} {
    gap: 21.33px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themes.primary.colors.dropdownHover};
  border: 1px solid ${themes.primary.colors.borderRateCard};
  border-radius: 20px;
  width: 100%;
  height: 159px;
  @media ${themes.primary.media.minBreakpoint1100} {
    height: 187px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    border: 1.33px solid ${themes.primary.colors.borderRateCard};
    border-radius: 26.66px;
    height: 249px;
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  width: 111px;
  height: 111px;
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 139px;
    height: 139px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 185px;
    height: 185px;
  }
`;

export const SecurityPrivacyCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding: 0 0 60px;
`;

export const ImageThumb = styled.div`
  position: relative;
  width: 100%;
  height: 148px;
  &.implementation-process-card {
    height: 130px;
    border-radius: 8px;
    .hover-image {
      opacity: 0;
    }
    &.current .hover-image {
      opacity: 1;
    }
    background-color: ${themes.primary.colors.lightGreyBorder};
    &.current {
      background-color: ${themes.primary.colors.darkBlue};
    }
  }

  @media ${themes.primary.media.min768Mobile} {
    &.security-img-thumb {
      width: 149px;
      height: 141px;
      margin-top: 10px;
      margin-right: 10px;
    }

    &.implementation-process-card {
      transition: background-color 1s ease-in-out;
      width: 130px;
      height: 130px;
      overflow: hidden;
      .hover-image {
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }
      & span {
        top: 23px !important;
        scale: 1.1 !important;
      }
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    &.security-img-thumb {
      width: 199px;
      height: 188px;
      & span {
        bottom: -40px !important;
        left: -17px !important;
      }
    }
    &.implementation-process-card {
      width: 173px;
      height: 173px;
    }
  }
`;

export const SecurityPrivacyTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 12px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 16px;
    width: 559px;
  }
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  &.implementation-process-card-info {
    gap: 12px;
  }

  @media ${themes.primary.media.min768Mobile} {
    &.implementation-process-card-info {
      height: 100%;
      gap: 12px;
      justify-content: space-between;
    }

    &.security-privacy-card {
      flex: 1;
    }
  }
  @media ${themes.primary.media.min1440} {
    &.implementation-process-card-info {
      height: 100%;
      gap: 0;
      justify-content: space-between;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 32px;
  }
`;

export const SecurityPrivacyTextAndImage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  @media ${themes.primary.media.min768Mobile} {
    gap: 37px;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media ${themes.primary.media.minPCFullHD} {
  }
`;
export const SecurityPrivacyCardTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const DomainImplTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const DomainImplTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  letter-spacing: -0.2px;

  @media ${themes.primary.media.min768Mobile} {
    font-size: 22px;
    line-height: 1.6;
    letter-spacing: 1.2px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 32px;
    line-height: 51.2px;
    letter-spacing: 1.5px;
  }
`;

export const IconArrowThumb = styled.div`
  position: absolute;
  bottom: 20px;
  right: 24px;
  & svg {
    width: 18px;
    height: 18px;
  }
  @media ${themes.primary.media.min768Mobile} {
    right: 29px;
    bottom: 23px;
  }
  @media ${themes.primary.media.min1440} {
    right: 31px;
    bottom: 29px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    right: 36px;
    bottom: 36px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const TextArrowWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  &.benefits-title {
    display: flex;
    align-items: baseline;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    &.benefits-title {
      display: flex;
      justify-content: center;
      width: 100%;
      padding: 0 20px;
      gap: 42px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.benefits-title {
      gap: 62.67px;
      padding: 0 48px;
    }
    &.implementation-process-card-info {
      gap: 32px;
      & span {
        width: 25px !important;
        height: 19px !important;
      }
    }
  }
`;

export const DomainImage = styled.div`
  position: relative;
  width: 74px;
  height: 74px;
  @media ${themes.primary.media.minPCFullHD} {
    width: 99px;
    height: 99px;
  }
`;
export const BenefitArrow = styled.div`
  position: relative;
  width: 16px;
  height: 22px;

  @media ${themes.primary.media.min1440} {
    width: 20px;
    height: 28px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 27px;
    height: 37px;
  }
`;
export const ImageDividerWrap = styled.div`
  width: 100%;
  @media ${themes.primary.media.min768Mobile} {
    width: unset;
    display: flex;
    gap: 15px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 24px;
  }
`;

export const SecurityPrivacyTitleWrap = styled.div`
  @media ${themes.primary.media.minBreakpoint1000} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span {
      width: 314px !important;
    }
  }
  @media ${themes.primary.media.min1440} {
    & span {
      width: 412px !important;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    & span {
      width: 512px !important;
      height: 26.4px !important;
      scale: 1.1;
    }
  }
`;

export const LineDivider = styled.div`
  height: 2px;
  background-color: ${themes.primary.colors.cloud};

  &.domain-implementation-divider {
    width: 100%;
    height: 1px;
  }

  &.implementation-divider {
    width: 1px;
    height: 123px;
    background-color: ${themes.primary.colors.testimonialBorder};
    transition: background-color 300ms ease-in-out;

    &.current {
      background-color: ${themes.primary.colors.dividerHover};
    }
    @media ${themes.primary.media.minPCFullHD} {
      height: 164px;
    }
  }
`;
