import styled from "styled-components";
import themes from "../../../../utils/themes";
import { FeaturesDescription } from "../../../case-studies/styles";

export const ProblemSolutionBlockContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  gap: 5px;
  border-radius: 16px;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  background: linear-gradient(
    353.75deg,
    ${themes.primary.colors.grey} -1.56%,
    ${themes.primary.colors.caseStudyTagGradientDark} 52.39%,
    ${themes.primary.colors.grey} 127.64%
  );
  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
    align-items: center;
    gap: 8px;
    height: 528px;
    & > span {
      width: 343px !important;
      height: 292px !important;
    }
    &.ai-card {
      background-image: url(/Portfolio/problem-solution/problem-solution-background-mobile.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    & > span {
      width: 360px !important;
      height: 316px !important;
    }
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    height: 316px;

    &.ai-card {
      background-image: url(/Portfolio/problem-solution/problem-solution-background.png);
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    justify-content: flex-start;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 420px;
    & > span {
      width: 480px !important;
      height: 420px !important;
    }
  }
`;
export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media ${themes.primary.media.maxMobile} {
    min-width: 343px;
    width: 343px;
    height: 292px;
  }
  @media ${themes.primary.media.min768Mobile} {
    min-width: 360px;
    width: 360px;
    height: 316px;
  }
  @media ${themes.primary.media.minBreakpoint1000} {
    min-width: calc(
      clamp(
        230px,
        230px + (100vw - 1100px) * ((360 - 230) / (1440 - 1100)),
        360px
      )
    );
    width: calc(
      clamp(
        230px,
        230px + (100vw - 1100px) * ((360 - 230) / (1440 - 1100)),
        360px
      )
    );
    height: 100%;
    display: flex;
  }
  @media ${themes.primary.media.minPCFullHD} {
    min-width: 480px;
    width: 480px;
    height: 420px;
  }
`;
export const ProblemSolutionTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
  justify-content: start;
  padding: 40px 20px 40px 0;
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    padding: 20px 20px 0 20px;
    align-items: flex-start;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: unset;
    padding: 0;
    margin: 34px 28px 40px -7px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 100%;
    margin: 33px 24px 40px -7px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 0;
    margin: 48px 35px 48px -7px;
  }
`;

export const ProblemTitleAndArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  @media ${themes.primary.media.min768Mobile} {
    gap: 30px;
  }
`;

export const ProblemTitle = styled.div`
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  color: ${themes.primary.colors.darkBlue};
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: baseline;
  font-size: 20px;
  line-height: 28px;
  &.ai-card {
    color: ${themes.primary.colors.grey};
  }
  @media ${themes.primary.media.min768Mobile} {
  }
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 32px;
    font-size: 24px;
  }
`;
export const AiTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.grey};
  background: linear-gradient(
    12.27deg,
    rgba(241, 239, 237, 0.2) 17.05%,
    rgba(221, 221, 221, 0.044) 47.66%,
    rgba(241, 239, 237, 0.2) 90.36%
  );
  border-radius: 32px;
  border: 1px solid #f1efed33;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    padding: 6px 14px 6px 10px;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 6px 24px 6px 24px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    padding: 6px 10px 6px 10px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 8px 18px 8px 13px;
    gap: 8px;
  }
  &.modal {
    color: ${themes.primary.colors.darkBlue};
    background: linear-gradient(360deg, #cacde9 0%, #e4e4ee 100%);
    width: unset;
    border: 1px solid ${themes.primary.colors.vodka};
    @media ${themes.primary.media.min768Mobile} {
      padding: 6px 14px 6px 10px;
    }
    @media ${themes.primary.media.minBreakpoint1100} {
      padding: 6px 10px 6px 10px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      padding: 8px 18px 8px 7px;
    }
  }
`;

export const Icon = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  @media ${themes.primary.media.minPCFullHD} {
    width: 26.75px;
    height: 26.75px;
    &.modal {
      width: 24px;
      height: 24px;
    }
  }
`;

export const ProblemSubtitle = styled.div`
  font-size: 14px;
  line-height: 120%;
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 18px;
    &.modal {
      font-size: 20px;
    }
  }
`;

export const ProblemArrow = styled.div`
  color: ${themes.primary.colors.darkBlue};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  & svg {
    width: 23px;
    height: 23px;
  }
  &.ai-card {
    color: ${themes.primary.colors.grey};
  }
  @media ${themes.primary.media.maxMobile} {
    & svg {
      width: 15px;
      height: 16px;
      margin-top: 10px;
      margin-right: 10px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-top: 10px;
    margin-right: 12px;
    & svg {
      width: 18px;
      height: 18px;
      margin: 0;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-right: 10px;
    & svg {
      width: 16px;
      height: 16px;
      margin: 0;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-right: 9px;
    & svg {
      width: 22px;
      height: 22px;
      margin: 0;
    }
  }
`;
export const SolutionText = styled(FeaturesDescription)`
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  background: inherit;
  line-height: 24px;
  font-size: 16px;
  word-wrap: normal;
  &.ai-card {
    color: ${themes.primary.colors.dropdownHover};

    & .solution {
      color: ${themes.primary.colors.dropdownHover};
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 32px;
    font-size: 20px;
    -webkit-line-clamp: 9;
  }
  & .solution {
    font-size: 14px;
    color: ${themes.primary.colors.mutedBlueGrey};
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 18px;
    }
  }
`;
export const SolutionLearnMore = styled.span`
  display: inline-block;
  padding-left: 5px;
  line-height: 24px;
  font-size: 16px;
  text-decoration: underline;
  color: ${themes.primary.colors.darkBlue};
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  &.ai-card {
    color: ${themes.primary.colors.grey};
  }
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 32px;
    font-size: 20px;
  }
`;

export const ProblemsAndSolutionsMainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  column-gap: 32px;

  &.heroSection {
    align-items: center;
  }

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column;
  }
  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 40px;
  }
`;

export const BlocksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: start;
  width: 100%;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 32px;
    width: 50%;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
  }
`;
