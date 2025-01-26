import styled from "styled-components";
import themes from "../../../../../../utils/themes";
import Image from "next/image";

export const DesktopModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  &.talk-to-expert-page {
    position: unset;
    background-color: transparent;
    align-items: flex-start;
  }
`;

export const ContentWrapper = styled.div`
  width: 59vw;
  min-height: 660px;
  min-width: 856px;
  background-color: ${themes.primary.colors.grey};
  border: 1px solid black;
  border-radius: 16px;
  display: flex;
  position: relative;

  :before {
    content: "";
    z-index: -2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 10px;
    border-radius: 16px;
    border: 1px solid black;
    background-color: white;
  }
  :after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 75%;
    bottom: -11px;
    left: 10px;
    border-radius: 0 0 16px 16px;
    border: 1px solid black;
    background-color: black;
  }
  &.talk-to-expert-page {
    width: 100%;
    height: 100%;
    max-height: 691px;
    min-height: 664px;
    min-width: 856px;
    :before {
      content: "";
      z-index: -2;
      position: absolute;
      width: 100%;
      height: 97%;
      top: 24px;
      left: 16px;
      border-radius: 16px;
      border: 1px solid black;
      background-color: white;
    }
    :after {
      content: "";
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 66%;
      bottom: -16px;
      left: 16px;
      border-radius: 0 0 16px 12px;
      border: 1px solid black;
      background-color: black;
    }
    @media ${themes.primary.media.min4K} {
      width: 1786px;
    }
  }
`;

export const CancelWrapper = styled.div`
  width: 40vw;
  min-height: 230px;
  min-width: 580px;
  background-color: ${themes.primary.colors.grey};
  border: 1px solid black;
  border-radius: 16px;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 40px;

  :before {
    content: "";
    z-index: -2;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 10px;
    left: 10px;
    border-radius: 16px;
    border: 1px solid black;
    background-color: ${themes.primary.colors.grey};
  }
  :after {
    content: "";
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 70%;
    bottom: -11px;
    left: 10px;
    border-radius: 0 0 16px 16px;
    border: 1px solid black;
    background-color: black;
  }
`;

export const FormBlock = styled.div<{ step: number }>`
  width: 62%;
  min-height: 100%;
  padding: ${({ step }) => (step == 2 ? "30px" : "40px 40px 30px 40px")};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  &.talk-to-expert-page {
    padding: ${({ step }) =>
      step == 1
        ? "24px 48px 24px 48px"
        : step == 0
        ? "24px 48px 24px 48px"
        : "24px 30px"};
    width: 53%;

    @media ${themes.primary.media.maxBreakpoint1000} {
      padding: 57px 30px 30px 30px;
    }
    @media ${themes.primary.media.min4K} {
      width: 54%;
    }
  }
`;

export const ContactEmail = styled.span<{ step: number }>`
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  color: ${themes.primary.colors.blogArticleText};
  margin-top: 25px;

  &.email {
    margin-right: 10px;
  }

  &.talk-to-expert-page {
    font-size: 14px;
    line-height: 22.4px;
    margin-left: -10px;
    margin-right: -10px;
    margin-top: 20px;
    &.email {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: ${({ step }) => (step == 1 ? "-8px" : "0")};
    }

    @media ${themes.primary.media.min1440} {
      margin-left: -18px;
      font-size: 14px;
      line-height: 22.4px;
    }
  }
`;

export const EmailLink = styled.a`
  font-size: 14px;
  color: ${themes.primary.colors.infiniteTextGradientColor2};
  cursor: pointer;

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
  }

  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: ${themes.primary.colors.darkPurple};
  }

  &.talk-to-expert-page {
    font-size: 14px;
    line-height: 22.4px;
    @media ${themes.primary.media.maxBreakpoint1100} {
      font-size: 18px;
      line-height: 28.8px;
    }
  }
`;
export const InfoBlock = styled.div`
  background-color: rgb(223, 220, 218);
  width: 40%;
  min-height: 100%;
  padding: 15px 15px 30px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 0 16px 16px 0;

  &.talk-to-expert-page {
    width: 51%;
    padding: 24px 48px;
    border-left: 1px solid black;
  }
`;

export const InfoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &.talk-to-expert-page {
    align-items: flex-start;
  }
`;

export const CloseButton = styled(Image)`
  cursor: pointer;
`;

export const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 28px;

  &.talk-to-expert-page {
    display: none;
  }
`;

export const InfoTitle = styled.div`
  font-size: 24px;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;

  &.talk-to-expert-page {
    & p {
      margin: 0;
      line-height: unset;
    }
    font-size: 26px;
    line-height: 32px;
  }
`;
