import styled from "styled-components";
import themes from "../../../utils/themes";

interface IIsOpen {
  isOpen: boolean;
  isImage?: boolean;
}

export const QuestionImage = styled.img`
  height: 100%;
  width: 37%;

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 70%;
    margin-bottom: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin-bottom: 40px;
    margin-top: 20px;
  }

  @media ${themes.primary.media.minTablet} {
    margin-top: 0;
  }
`;

export const QuestionContainer = styled.div<IIsOpen>``;

export const QuestionBox = styled.div<IIsOpen>`
  width: 100%;
  position: relative;
  margin-left: 3px;

  &::before,
  &::after {
    content: "";
    top: 0;
    display: block;
    position: absolute;
    width: 100%;
    height: 1.33px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${themes.primary.colors.faqBorder};
    @media ${themes.primary.media.minBreakpoint1100} {
      height: 1px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      height: 1.33px;
    }
  }

  &::after {
    top: 100%;
    display: none;
  }

  &:last-of-type::after {
    display: block;
  }

  ${({ isOpen }) =>
    isOpen &&
    `&::before {
        display: none;
      }

      @media ${themes.primary.media.maxMobile} {
        margin-bottom: 45px;
      }

      @media ${themes.primary.media.maxLowScreenMobile} {
        margin-bottom: 0;
      }`}

  @media (min-width: 1920px) {
    width: 74.55vw;
  }

  @media ${themes.primary.media.minPCFullHD} {
    &.homepage {
      width: 100%;
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    margin-left: 0;

    &::before,
    &::after {
      width: calc(100% - 90px);
    }

    &.homepage {
      &::before,
      &::after {
        width: 100%;
      }
    }

    &:last-of-type::after {
      ${({ isOpen }) => isOpen && `width: 100%;`}
    }
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    &::before,
    &::after {
      width: 100%;
    }
  }

  /* 267px, 221px - height of the decoration item */
  &:last-of-type {
    margin-bottom: ${({ isOpen }) => (isOpen ? "267px" : "calc(267px - 10px)")};

    &.homepage {
      margin-bottom: 0;
    }

    @media ${themes.primary.media.maxPCFullHD} {
      margin-bottom: 196px;
    }

    @media ${themes.primary.media.maxMobile} {
      margin-bottom: ${({ isOpen }) =>
        isOpen ? "221px" : "calc(221px + 90px)"};
    }

    @media ${themes.primary.media.maxLowScreenMobile} {
      margin-bottom: 170px;
    }
  }
`;

export const TogglePlus = styled.span`
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 2;
  font-size: 42px;
  font-weight: ${themes.primary.font.weight.heavy};
  padding-bottom: 5px;
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 24px;

    &.homepage {
      padding: 7px 14px;
      font-size: 24px;
    }
  }
  @media ${themes.primary.media.max1440} {
    font-size: 32px;
    padding-bottom: 0;
    &.homepage {
      line-height: 32px;
    }
  }

  @media ${themes.primary.media.min768Mobile} {
    &.homepage {
      line-height: 40px;
      font-size: 40px;
    }
  }
  @media ${themes.primary.media.min1440} {
    &.homepage {
      padding: 0 10px;
      font-size: 32px;
      line-height: 32px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    &.homepage {
      padding: 0 10px;
      font-size: 42px;
      line-height: 42px;
    }
    &.ai-chatbot-page-faq {
      font-size: 42px;
      line-height: 42px;
    }
  }
`;

export const QuestionTitleContainer = styled.button<IIsOpen>`
  position: relative;
  display: flex;
  width: 100%;
  height: 93px;
  padding: 32px 40px;
  font-size: 24px;
  font-family: ${themes.primary.font.family.namu};
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease, color 0.5s ease;
  color: ${themes.primary.colors.black};
  text-align: left;

  &.homepage {
    &.open {
      background: linear-gradient(
        to left,
        ${themes.primary.colors.homePageGradient2},
        ${themes.primary.colors.homePageGradient1}
      );
      color: ${themes.primary.colors.black};
    }
  }

  &.open {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }

  &:hover {
    color: ${({ isOpen }) => !isOpen && themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxPCFullHD} {
    height: auto;
    padding: 17px 17px 19px 26px;
    font-size: ${themes.primary.font.size.faqQuestion};

    &.homepage {
      padding: 24px 16px;
    }
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    font-size: 1.731em;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    height: 68px;
    align-items: center;
    padding: ${({ isOpen }) => (isOpen ? "0 40px" : "0 53px 0 51px")};

    &.homepage {
      height: 107px;
      padding: 17px 30px 19px 20px;
      gap: 24px;
    }
  }

  @media ${themes.primary.media.max767Mobile} {
    height: 90px;
    padding: 0 20px;
    text-align: left;

    &.homepage {
      height: unset;
      padding: 20px 8px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    &.homepage {
      padding-left: 15px;
      padding-right: 30px;
    }
    &.ai-chatbot-page-faq {
      padding-left: 21px;
      padding-right: 13px;
    }
  }
`;

export const QuestionTitle = styled.span<IIsOpen>`
  line-height: 160%;
  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 22px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 28px;
  }
`;

export const QuestionContentContainer = styled.div<IIsOpen>`
  display: flex;
  font-size: ${themes.primary.font.size.faqAnswer};
  font-family: ${themes.primary.font.family.namu};
  padding: 24px 40px 56px 40px;

  &.homepage {
    padding: 15px;
    font-weight: 900;
    text-align: left;
    @media ${themes.primary.media.maxMobile} {
      font-size: 16px;
      line-height: 25.6px;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 24px;
      line-height: 38.4px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 20px;
      line-height: 32px;
    }
    @media ${themes.primary.media.min1440} {
      font-size: 20px;
      line-height: 32px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 26.67px;
      line-height: 42.67px;
    }
  }

  line-height: 160%;
  column-gap: 15px;
  justify-content: space-between;

  @media ${themes.primary.media.maxPCFullHD} {
    padding: 22px 58px 24px 21px;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column-reverse;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 20px 50px 45px 40px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 18px 20px 24px;
    margin-bottom: 0;
  }
`;

export const QuestionTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  &.homepage {
    p {
      margin: 10px 0;
    }

    span,
    a {
      font-family: ${themes.primary.font.family.namu};
      font-size: inherit;
      font-weight: 900;
      line-height: inherit;
    }

    a {
      position: relative;
      display: inline-block;
    }

    a::after {
      position: absolute;
      left: 0;
      bottom: 0;
      display: block;
      height: 1px;
      width: 100%;
      background-color: ${themes.primary.colors.darkBlue};
      opacity: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: opacity 0.35s, transform 0.35s;
      content: "";
    }

    a:hover::after {
      opacity: 1;
      transform: scaleX(1);
    }
  }

  & span,
  & li {
    color: ${themes.primary.colors.darkGrey} !important;

    @media ${themes.primary.media.maxMobile} {
      font-size: 16px !important;
    }
    @media ${themes.primary.media.min768Mobile} {
      font-size: 18px !important;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 20px !important;
    }
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 24px !important;
    }
  }
`;
