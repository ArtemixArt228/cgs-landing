import styled from "styled-components";
import themes from "../../../../utils/themes";

export const FirstFormTitle = styled.div`
  font-size: 28px;
  font-family: ${themes.primary.font.family.namu};
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: flex-start;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 24px;
    padding-top: 32px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media ${themes.primary.media.onlyTablet} {
    font-size: 38px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 30px;
  }

  &.talk-to-expert-page {
    font-size: 32px;
    line-height: 56px;
    display: flex;
    justify-content: flex-start;

    @media ${themes.primary.media.maxBreakpoint1100} {
      font-size: 24px;
      line-height: 32.4px;
      padding-top: 32px;
      padding-left: 16px;
      padding-right: 16px;
    }

    @media ${themes.primary.media.min1440} {
      font-size: 32px;
      line-height: 56px;
    }

    @media ${themes.primary.media.onlyTablet} {
      font-size: 38px;
      padding-left: 40px;
      padding-right: 40px;
      padding-top: 24px;
      line-height: 56px;
    }
    & p {
      margin: 0;
      line-height: unset;
      & span {
        font-size: 32px;
        line-height: 56px;

        @media ${themes.primary.media.maxBreakpoint1100} {
          font-size: 24px;
          line-height: 32.4px;
        }

        @media ${themes.primary.media.onlyTablet} {
          font-size: 38px;
          line-height: 56px;
        }
        @media ${themes.primary.media.min1440} {
          font-size: 32px;
        }
      }
    }
  }
`;

export const FirstFormDescription = styled.div<{ step: number }>`
  font-size: 14px;
  line-height: 156%;
  width: 86%;
  margin-right: auto;
  font-family: ${themes.primary.font.family.namu};
  margin-top: 18px;
  margin-bottom: 10px;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;
    width: 90%;
  }

  @media ${themes.primary.media.onlyTablet} {
    font-size: 20px;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 25px;
  }

  &.talk-to-expert-page {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 8px;
    & p {
      margin: 0;
      line-height: unset;
    }

    @media ${themes.primary.media.maxBreakpoint1100} {
      font-size: 16px;
      padding-left: 16px;
      padding-right: 16px;
      line-height: 26px;
      width: 90%;
      margin-top: 12px;
    }

    @media ${themes.primary.media.min1440} {
      font-size: 16px;
      line-height: 24px;
    }

    @media ${themes.primary.media.onlyTablet} {
      font-size: 20px;
      padding-left: 40px;
      padding-right: 40px;
      margin-top: 16px;
    }
  }
`;

export const Step = styled.div<{ isFirst?: boolean; step?: number }>`
  display: flex;
  width: 100%;
  margin-top: 27px;

  &.talk-to-expert-page {
    margin-top: ${({ step, isFirst }) =>
      isFirst && step == 2 ? "46px" : isFirst && step !== 2 ? "37px" : "34px"};
  }
`;
export const Images = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const ImagesContainer = styled.div`
  position: relative;
  width: 44px;
  height: 44px;

  &.talk-to-expert-page {
    width: 60px;
    height: 60px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 0;
  left: 0;
  z-index: 19;

  &.talk-to-expert-page {
    width: 60px;
    height: 60px;
  }
`;

export const ImageWrapperLine = styled.div`
  position: relative;
  width: 44px;
  height: 42px;
  display: flex;
  justify-content: center;
  z-index: 19;

  &.talk-to-expert-page {
    width: 60px;
    height: 60px;
    justify-content: center;
    scale: 1.3;
  }
`;

export const StepTitle = styled.div<{ isActive: boolean }>`
  font-size: 16px;
  font-family: ${themes.primary.font.family.namu};
  color: ${(props) =>
    props.isActive
      ? themes.primary.colors.primary
      : `${themes.primary.colors.greyContactStep}`};

  &.talk-to-expert-page {
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.1px;
  }
`;

export const StepText = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-left: 20px;

  &.talk-to-expert-page {
    margin-left: 24px;
  }
`;

export const StepDescription = styled.span<{ isActive: boolean }>`
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  margin-top: 8px;
  line-height: 150%;
  color: ${(props) =>
    props.isActive
      ? themes.primary.colors.primary
      : `${themes.primary.colors.greyContactStep}`};

  &.talk-to-expert-page {
    font-size: 16px;
    line-height: 25.6px;
    margin-top: 8px;
  }
`;

export const StepNumber = styled.span<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive
      ? `${themes.primary.colors.infiniteTextGradientColor2}`
      : `${themes.primary.colors.greyContactStep}`};
`;
