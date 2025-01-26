import styled from "styled-components";
import themes from "../../../../utils/themes";

import { Field } from "formik";

export const SubscribeBlockContainer = styled.div<{
  isSubscribeSuccess?: boolean;
}>`
  background-color: ${themes.primary.colors.caseStudyTagGradientDark};
  background-image: url("/BlogDecorations/subscribe-background.svg");
  overflow: hidden;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 16px;

  @media ${themes.primary.media.max767Mobile} {
    height: ${({ isSubscribeSuccess }) =>
      isSubscribeSuccess ? "669px" : "578px"};
  }

  @media ${themes.primary.media.min768Mobile} {
    height: 776px;
    padding-top: 57px;
    justify-content: center;
    align-items: center;
  }

  @media screen and ${themes.primary.media.min1440} {
    align-items: unset;
    background-size: cover;
    height: 498px;
    border: 1px solid ${themes.primary.colors.celeste};
    padding-top: 0;
  }

  @media screen and ${themes.primary.media.min4K} {
    height: 664px;
    border-radius: 10px;
  }
`;

export const SubscribeBlockWrapper = styled.div<{
  isSubscribeSuccess?: boolean;
}>`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media screen and ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: ${({ isSubscribeSuccess }) =>
      isSubscribeSuccess ? "flex-end" : "space-between"};
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    max-width: 704px;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: unset;
  }

  @media screen and ${themes.primary.media.min1440} {
    max-width: 100%;
    flex-direction: row;
    justify-content: center;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    justify-content: center;
  }
`;

export const SubscribeBlockImage = styled.div<{
  isSubscribeSuccess?: boolean;
}>`
  position: relative;
  display: flex;

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
    height: 254px;
    width: 100%;
    img {
      inset: unset !important;
      height: 284px !important;
      width: 375px !important;
    }
  }

  @media ${themes.primary.media.min768Mobile} {
    justify-content: flex-end;
    width: 687px;
    height: 100%;
    img {
      inset: unset !important;
      height: ${({ isSubscribeSuccess }) =>
        isSubscribeSuccess ? "705.4px" : "706.9px"} !important;
      width: ${({ isSubscribeSuccess }) =>
        isSubscribeSuccess ? "732.5px" : "780px"} !important;
      bottom: ${({ isSubscribeSuccess }) =>
        isSubscribeSuccess ? "7.5px" : "34px"} !important;
      right: ${({ isSubscribeSuccess }) =>
        isSubscribeSuccess ? "-18px" : "-35px"} !important;
    }
  }

  @media ${themes.primary.media.min1440} {
    width: 962px;
    img {
      height: 582px !important;
      width: 1116px !important;
      right: -52px !important;
      bottom: -41px !important;
    }
  }

  @media ${themes.primary.media.min4K} {
    width: 1302px;
    img {
      width: 1486px !important;
      height: 775px !important;
      right: -61px !important;
      bottom: -58px !important;
    }
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    width: 1212px;
    img {
      right: -157px !important;
    }
  }
`;

export const SubscribeBlockFormWrapper = styled.form`
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;

  @media ${themes.primary.media.maxMobile} {
    margin: 0 0 20px;
    gap: 24px;
    max-width: 279px;
  }

  @media ${themes.primary.media.min768Mobile} {
    max-width: 100%;
    width: 279px;
    margin: 0 0 0 43px;
    gap: 32px;
  }

  @media ${themes.primary.media.onlyLaptopL} {
    width: 279px;
    margin-left: 78px;
  }

  @media ${themes.primary.media.min4K} {
    width: 372px;
    margin-left: 98px;
    gap: 42px;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    margin-left: 0;
  }
`;

export const SubscribeBlockTitleAndDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    gap: 9px;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 16px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 22px;
  }
`;

export const SubscribeBlockTextAndInputOrButton = styled(
  SubscribeBlockTitleAndDescriptionContainer
)`
  gap: 12px;

  @media ${themes.primary.media.maxMobile} {
    gap: 12px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 16px;
  }
`;

export const SubscribeBlockInputAndButtonWrapper = styled(
  SubscribeBlockTitleAndDescriptionContainer
)`
  gap: 24px;

  @media ${themes.primary.media.maxMobile} {
    gap: 24px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 32px;
  }
`;

export const SubscribeBlockTitle = styled.h3`
  color: ${themes.primary.colors.darkBlue};
  margin: 0;

  @media screen and ${themes.primary.media.maxMobile} {
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.1px;
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.2px;
  }

  @media screen and ${themes.primary.media.min4K} {
    font-size: 40px;
    line-height: 54px;
    letter-spacing: -0.27px;
  }
`;

export const SubscribeBlockDescription = styled.p`
  color: ${themes.primary.colors.blogArticleText};
  margin: 0;
  font-size: 16px;
  line-height: 24px;

  @media ${themes.primary.media.maxMobile} {
    letter-spacing: 0.1px;
  }

  @media ${themes.primary.media.min768Mobile} {
    letter-spacing: 0.01px;
  }

  @media screen and ${themes.primary.media.min4K} {
    letter-spacing: 0.13px;
    font-size: 20px;
    line-height: 32px;
  }
`;

export const SubscribeBlockEmailLabel = styled.label`
  color: ${themes.primary.colors.black};
  letter-spacing: 0.1px;
  font-size: 16px;
  line-height: 24px;

  @media screen and ${themes.primary.media.min4K} {
    letter-spacing: 0.13px;
    font-size: 20px;
    line-height: 32px;
  }
`;

export const SubscribeBlockEmailInput = styled(Field)<{ hasError: boolean }>`
  width: 100%;
  background-color: ${themes.primary.colors.grey};
  border: 1px solid
    ${(props) =>
      props.hasError
        ? themes.primary.colors.adminRed
        : themes.primary.colors.primary};
  color: ${themes.primary.colors.black};
  padding: 16px;
  font-size: 16px;
  height: 48px;
  border-radius: 12px;
  &:focus {
    outline: none;
  }

  @media screen and ${themes.primary.media.min4K} {
    border-radius: 16px;
    font-size: 20px;
    border-width: 1.33px;
    height: 64px;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.secondary};
  background-color: ${themes.primary.colors.primary};
  border: 1px solid ${themes.primary.colors.primary};
  cursor: pointer;
  font-weight: ${themes.primary.font.weight.heavy};
  border-radius: 10px;
  transition: all 0.3s ease-in-out;

  font-size: 16px;
  line-height: 24px;
  padding: 11px 30px;
  span {
    width: 16px !important;
    height: 16px !important;
  }

  img {
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out, filter 0.3s;
  }

  &:hover {
    img {
      transform: rotate(-180deg);
    }
  }

  &.headerBtn:hover {
    background-color: unset;
    color: ${themes.primary.colors.primary};
    img {
      filter: invert(100%);
    }
  }
  @media screen and ${themes.primary.media.min4K} {
    font-size: 22px;
    line-height: 32px;
    padding: 15px 40px;
    span {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;
export const SubscribeBlockButton = styled(ActionButton)`
  font-family: ${themes.primary.font.family.namu};
  justify-content: space-between;
  height: 48px;
  font-size: 16px;
  line-height: 24px;
  padding: 8px 30px 8px 24px;

  @media screen and ${themes.primary.media.min4K} {
    height: 64px;
    border-radius: 16px;
    font-size: 20px;
    line-height: 32px;
    padding: 11px 40px 11px 32px;
    img {
      width: 20px !important;
      height: 20px !important;
    }
  }
`;

export const SubscribeBlockBottomText = styled(SubscribeBlockDescription)`
  color: ${themes.primary.colors.mutedBlueGrey};
`;

export const SubscribeBlockThankYouMessageContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  padding: 8px 10px;
  border: 1px solid ${themes.primary.colors.darkBlue};
  background: linear-gradient(0deg, #f1efed, #f1efed),
    linear-gradient(
      91.14deg,
      rgba(88, 105, 221, 0.07) 4.96%,
      rgba(88, 105, 221, 0.021) 99.17%
    ),
    radial-gradient(
        17.33% 49.28% at 12.35% 23.12%,
        rgba(241, 239, 237, 0.5) 22.72%,
        rgba(241, 239, 237, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        20.63% 58.66% at 87.12% 56.99%,
        rgba(88, 105, 221, 0.05) 22.72%,
        rgba(88, 105, 221, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  img {
    width: 10px;
    height: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    gap: 9px;
    max-width: 279px;
    margin-top: -4px;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 8px;
    max-width: 445px;
    margin-top: -16px;
  }

  @media ${themes.primary.media.min1440} {
    margin-top: 0;
    width: auto;
    position: absolute;
    bottom: 22px;
    left: 0;
    white-space: nowrap;
  }

  @media screen and ${themes.primary.media.min4K} {
    gap: 10px;
    border-radius: 16px;
    max-width: 565px;
    padding: 10px 16px;
    border: 1.33px solid ${themes.primary.colors.darkBlue};
    img {
      width: 14px;
      height: 18px;
    }
  }
`;

export const SubscribeBlockThankYouMessageText = styled(
  SubscribeBlockDescription
)`
  color: ${themes.primary.colors.darkBlue};
`;
