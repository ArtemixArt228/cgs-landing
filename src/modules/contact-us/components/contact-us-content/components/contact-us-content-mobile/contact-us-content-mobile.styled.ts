import styled from "styled-components";
import themes from "../../../../../../utils/themes";

export const MobileModalLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${themes.primary.colors.chatContainerBgc};
  z-index: 9999999;
  justify-content: center;
  align-items: flex-start;
  &.talk-to-expert-page {
    position: unset;
    z-index: unset;
  }
  @media ${themes.primary.media.maxBreakpoint1100} {
    min-height: calc(100vh - 335px);
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    min-height: calc(100vh - 247px);
  }
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px 26px 16px 16px;
  height: 74px;

  @media ${themes.primary.media.onlyTablet} {
    height: 128px;
    padding: 40px;
  }
  &.talk-to-expert-page {
    display: none;
  }
`;

export const Step = styled.div`
  width: 100%;
  background-color: #e5e3e1;
  padding: 24px 16px;

  @media ${themes.primary.media.onlyTablet} {
    padding: 40px;
  }
`;

export const StepContent = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 36px;

  &.talk-to-expert-page {
    margin-top: 32px;

    @media ${themes.primary.media.onlyTablet} {
      margin-top: 32px;
    }
  }
`;

export const StepDescription = styled.div`
  font-size: 16px;
  font-family: ${themes.primary.font.family.namu};
  line-height: 26px;
  margin-top: 10px;
  &.talk-to-expert-page {
    margin-top: 8px;
  }
`;

export const StepName = styled.span`
  font-size: 20px;
  font-family: ${themes.primary.font.family.namu};
  line-height: 28px;
`;

export const StepNumber = styled.span`
  font-size: 20px;
  font-family: ${themes.primary.font.family.namu};
  color: #5869dd;
`;

export const InfoHeader = styled.span`
  font-size: 24px;
  line-height: 32.4px;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;

  @media ${themes.primary.media.onlyTablet} {
    font-size: 32px;
  }
  &.talk-to-expert-page {
    & p {
      margin: 0;
      line-height: unset;
    }
    font-size: 24px;
    line-height: 32.4px;
    @media ${themes.primary.media.onlyTablet} {
      font-size: 32px;
      line-height: 40px;
    }
  }
`;

export const Content = styled.div<{
  isCancelModalOpen?: boolean;
}>`
  width: 100%;
  height: 100%;
  //min-height: 100vh;
  overflow: auto;
  padding-bottom: 74px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: ${({ isCancelModalOpen }) =>
    isCancelModalOpen ? "space-between" : "unset"};

  @media ${themes.primary.media.onlyTablet} {
    padding-bottom: 128px;
  }
  @media ${themes.primary.media.maxBreakpoint1100} {
    min-height: calc(100vh - 335px);
  }
  @media ${themes.primary.media.estiomationFormWidth} {
    min-height: calc(100vh - 247px);
  }
  &.talk-to-expert-page {
    padding-bottom: 0;
    @media ${themes.primary.media.onlyTablet} {
      padding-bottom: 0;
    }
  }
`;

export const ContactEmail = styled.span<{ stepNumber: number }>`
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  color: #535557;
  padding-top: 37px;
  margin-top: auto;
  line-height: 26px;

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 5px;
    padding-top: 60px;
  }

  &.email {
    margin-top: 0;
    margin-bottom: 32px;
    padding-top: ${({ stepNumber }) => (stepNumber == 2 ? "1px" : "37px")};

    padding-left: 16px;
    padding-right: 16px;
    @media ${themes.primary.media.onlyTablet} {
      padding-left: 0;
      padding-right: 0;
    }
  }

  &.policy {
    display: block;
    padding-top: 0;
  }
  &.talk-to-expert-page {
    &.email {
      margin-bottom: ${({ stepNumber }) =>
        stepNumber !== 2 ? "32px" : "24px"};
      padding-top: ${({ stepNumber }) => (stepNumber == 2 ? "1px" : "16px")};
      margin-top: ${({ stepNumber }) => (stepNumber == 0 ? "0" : "32px")};
      padding-left: 16px;
      padding-right: 16px;
      text-align: ${({ stepNumber }) => (stepNumber == 0 ? "left" : "center")};
      @media ${themes.primary.media.onlyTablet} {
        padding-left: 0;
        padding-right: 0;
        margin-bottom: 41px;
        margin-top: ${({ stepNumber }) =>
          stepNumber == 0 ? "0" : stepNumber == 1 ? "16px" : "32px"};
        padding-top: ${({ stepNumber }) => (stepNumber == 2 ? "1px" : "0")};
      }
    }
  }
`;

export const Policy = styled.div<{
  isCancelModalOpen?: boolean;
}>`
  width: 100%;
  padding: 24px 16px 32px 16px;
  background-color: #e5e3e1;
  text-align: center;

  @media ${themes.primary.media.onlyTablet} {
    padding: 24px 16px 32px 16px;
  }
  &.talk-to-expert-page {
    margin-top: ${({ isCancelModalOpen }) =>
      isCancelModalOpen ? "unset" : "auto"};
  }
`;

export const EmailLink = styled.a`
  font-size: 16px;
  color: #5869dd;
  cursor: pointer;

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
  }
`;

export const FooterWrapper = styled.div`
  &.talk-to-expert-page {
    display: none;
  }
`;
