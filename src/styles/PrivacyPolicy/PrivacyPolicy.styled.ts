import styled from "styled-components";
import themes from "../../utils/themes";

export const MainContainer = styled.article`
  padding: 105px 22% 0 68px;
  background-color: ${themes.primary.colors.blogBackground};
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  height: 100%;

  @media (max-width: 1440px) {
    padding-top: 77px;
    padding-left: 41px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding-bottom: 90px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding-bottom: 90px;
  }

  ul {
    margin: 0;
    padding: 0 0 0 15px;
    li::marker {
      color: ${themes.primary.colors.blogArticleText} !important;
    }
  }
  p {
    margin: 0;
  }
  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: none;
    u {
      text-decoration: none;
    }
  }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  color: ${themes.primary.colors.darkBlue};
  font-size: calc(
    clamp(64px, 64px + (100vw - 1440px) * ((66 - 64) / (1920 - 1440)), 66px)
  );

  @media ${themes.primary.media.maxMobile} {
    margin: 0;
    padding: 108px 41px 90px 41px;
    font-size: calc(
      clamp(34px, 34px + (100vw - 375px) * ((66 - 34) / (768 - 375)), 66px)
    );
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 16px 0px 0px 20px;
    font-size: 34px;
  }
  @media ${themes.primary.media.minServiceWeb} {
    margin: 0;
  }
  @media ${themes.primary.media.min4K} {
    margin-top: -15px;
  }
`;

export const IntroWrapper = styled.div`
  color: ${themes.primary.colors.blogArticleText};
  font-size: 20px;
  line-height: 163%;
  font-weight: 900;
  margin-block: 54px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  & strong {
    color: ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: calc(
      clamp(16px, 16px + (100vw - 375px) * ((18 - 16) / (768 - 375)), 18px)
    );
    margin: 0px 45px 90px 41px;
    gap: 21px;
    line-height: 160%;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 24px 20px 20px 20px;
    gap: 16px;
    line-height: 163%;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    margin: 32px 0px 28px 0px;
    font-size: calc(
      clamp(16px, 16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)), 20px)
    );
    gap: calc(
      clamp(16px, 16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)), 20px)
    );
  }
  @media ${themes.primary.media.min4K} {
    margin-block: 54px 40px;
    gap: 25px;
    line-height: 159%;
  }
`;

export const QuestionsWrapper = styled.ol`
  padding: 0;
  counter-reset: section;
  list-style-type: none;
  font-size: 20px;
  line-height: 160%;
  margin-bottom: 200px;
  margin-top: 0;
  & ol {
    padding: 0;
    counter-reset: section;
    list-style-type: none;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
    margin-bottom: 0px;
    padding: 0 41px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 0 20px;
  }
  @media ${themes.primary.media.min4K} {
    margin-bottom: 90px;
  }
`;

export const QuesitonItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const QuestionHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${themes.primary.colors.faqBorder};
  border-bottom: 1px solid ${themes.primary.colors.faqBorder};
  font-size: 20px;
  line-height: normal;
  height: calc(
    clamp(73px, 73px + (100vw - 1440px) * ((91 - 73) / (1920 - 1440)), 91px)
  );
  transition: all 0.3s;
  padding: 11px 11px;

  &:hover {
    color: ${themes.primary.colors.darkBlue};
  }

  &.open {
    padding: 22px 25px 22px 24px;
    color: ${themes.primary.colors.secondary};
    background-color: ${themes.primary.colors.darkBlue};
    border-bottom: none;
    @media ${themes.primary.media.maxMobile} {
      width: 100vw;
      height: calc(
        clamp(68px, 68px + (100vw - 768px) * ((80 - 68) / (375 - 768)), 80px)
      );
    }
    @media ${themes.primary.media.minServiceWeb} {
      font-size: 20px;
      height: calc(
        clamp(68px, 68px + (100vw - 1440px) * ((91 - 68) / (1920 - 1440)), 91px)
      );
    }
    @media ${themes.primary.media.min4K} {
      padding: 28px 35px 30px 25px;
    }
  }
  @media ${themes.primary.media.maxMobile} {
    height: calc(
      clamp(68px, 68px + (100vw - 768px) * ((80 - 68) / (375 - 768)), 80px)
    );
    padding: 11px 11px;
  }
  @media ${themes.primary.media.minServiceWeb} {
    padding: 24px 19px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 11px 0px;
  }
`;

export const QuestionButton = styled.span`
  font-family: ${themes.primary.font.family.namu};
  font-size: 32px;
  margin-bottom: 4px;
  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 24px;
  }
`;

export const QuestionListItem = styled.p`
  line-height: 37.75px;

  &:before {
    counter-increment: section;
    content: counters(section, ".") ". ";
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 18px;
  }

  @media ${themes.primary.media.minServiceWeb} {
    font-size: calc(
      clamp(20px, 20px + (100vw - 1440px) * ((24 - 20) / (1920 - 1440)), 24px)
    );
  }
  @media ${themes.primary.media.maxTabletPortrait} {
    line-height: 140%;
  }
`;

export const QuestionHiddenWrapper = styled.div`
  padding: 20px 0;
  display: none;
  color: ${themes.primary.colors.blogArticleText};
  font-style: normal;
  font-weight: 900;
  gap: 16px;
  line-height: 160%;
  & ol {
    display: flex;
    flex-direction: column;
    gap: 16px;

    & li:before {
      counter-increment: section;
      content: counters(section, ".") ". ";
    }

    & ol li:first-child {
      margin-top: 16px;
    }
  }
  & p,
  & li {
    margin-block: 0;
    & ol {
      padding-left: 29px;
    }
  }

  & a {
    text-decoration: underline;
  }

  & strong {
    color: ${themes.primary.colors.primary};
  }

  &.open {
    display: flex;
    flex-direction: column;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 20px 0 90px;
    font-size: 18px;
  }
  @media ${themes.primary.media.maxLowScreenMobile} {
    padding: 18px 0 24px;
    line-height: 163%;
    font-size: 16px;
  }
  @media ${themes.primary.media.minServiceWeb} {
    padding: 0;
    margin: 24px 0px 28px 0px;
    font-size: calc(
      clamp(16px, 16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)), 20px)
    );
    line-height: 160%;
  }
  @media ${themes.primary.media.min4K} {
    margin: 41px 0px 40px 0px;
    gap: 16px;
    line-height: 161%;
    & ol {
      gap: 20px;
    }
  }
`;

export const PrivacyHeader = styled.header``;
