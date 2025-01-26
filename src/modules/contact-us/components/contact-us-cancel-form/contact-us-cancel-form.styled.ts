import styled from "styled-components";
import themes from "../../../../utils/themes";

export const CancelContainer = styled.div`
  @media ${themes.primary.media.maxBreakpoint1100} {
    display: flex;
    flex-direction: column;
    padding: 11px;
  }
  @media ${themes.primary.media.onlyTablet} {
    padding: 40px;
    padding-top: 25px;
  }

  &.talk-to-expert-page {
    @media ${themes.primary.media.maxBreakpoint1100} {
      padding: 16px 16px 24px;
    }
    @media ${themes.primary.media.onlyTablet} {
      padding: 40px;
      padding-top: 25px;
    }
  }
`;

export const ContinueWrapper = styled.div`
  max-width: 343px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 24px;
  @media ${themes.primary.media.maxBreakpoint1100} {
    max-width: 100%;
    margin-top: auto;
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.maxBreakpoint1100} {
      max-width: 100%;
      margin-top: auto;
      padding: 16px 16px 24px;
    }
    @media ${themes.primary.media.min1440} {
      margin-top: 32px;
    }
    @media ${themes.primary.media.onlyTablet} {
      padding: 40px;
      padding-top: 25px;
    }
  }
`;

export const InfoModalHeader = styled.div`
  font-size: 26px;
  line-height: 32px;
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  text-align: center;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 26px;
    justify-content: center;
  }

  @media ${themes.primary.media.max767Mobile} {
    font-size: 18px;
    line-height: 26px;
    justify-content: flex-start;
  }

  @media ${themes.primary.media.onlyTablet} {
    justify-content: flex-start;
    margin-bottom: 25px;
  }
  &.talk-to-expert-page {
    margin-bottom: 32px;
    & p {
      margin: 0;
      line-height: unset;
    }
    @media ${themes.primary.media.max767Mobile} {
      letter-spacing: 0.3px;
      margin-bottom: 16px;
    }
    @media ${themes.primary.media.onlyTablet} {
      margin-bottom: 24px;
    }
  }
`;

export const IKnowWrapper = styled.div`
  border: 2px dashed ${themes.primary.colors.vodka};
  padding: 16px 14px 14px 14px;
  font-size: 16px;
  line-height: 24px;
  color: ${themes.primary.colors.blogArticleText};
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  border-radius: 16px;
  display: flex;
  gap: 8px;

  & .text {
    & p {
      margin: 0;
      line-height: unset;
      & a {
        color: ${themes.primary.colors.infiniteTextGradientColor2};
      }
    }
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.maxBreakpoint1100} {
      margin-bottom: 32px;
    }
  }
`;
