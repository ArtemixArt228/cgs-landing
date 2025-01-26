import styled from "styled-components";
import themes from "../../../../utils/themes";
import {
  IPortfolioInfoProps,
  ProjectsContainerArrowContainer,
} from "../../styles";

interface IProjectsContainerHeaderTitle {
  lightTheme?: boolean;
}
export const ProjectsContainerHeaderTitle = styled.div<IProjectsContainerHeaderTitle>`
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    color: ${({ lightTheme }) =>
      lightTheme
        ? themes.primary.colors.primary
        : themes.primary.colors.blogBackground};
    overflow: hidden;
    white-space: pre-wrap;
  }

  @media screen and ${themes.primary.media.maxMobile} {
    h4 {
      font-size: 16px;
      line-height: 20.8px;
    }
  }

  @media screen and ${themes.primary.media.min768Mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    justify-content: space-between;
    h4 {
      font-size: 32px;
      line-height: 41.6px;
    }

    &.see-more-projects {
      h4 {
        font-size: 30px;
        line-height: 39px;
      }
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    h4 {
      font-size: 26px;
      line-height: 30px;
    }
  }
  @media ${themes.primary.media.min1440} {
    h4 {
      font-size: 30px;
      line-height: 39px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    h4 {
      font-size: 32px;
      line-height: 41.6px;
    }
    &.see-more-projects {
      h4 {
        font-size: 40.12px;
        line-height: 52.16px;
      }
    }
  }
`;
export const ProjectsContainerHeaderSubtitle = styled.div<IProjectsContainerHeaderTitle>`
  p {
    margin: 0;
    color: ${themes.primary.colors.comment};
    background: ${({ lightTheme }) =>
      !lightTheme
        ? `linear-gradient(
      90deg,
      ${themes.primary.colors.portfolioGradient1} 0%,
      ${themes.primary.colors.portfolioGradient2} 100%
    )`
        : themes.primary.colors.comment};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media ${themes.primary.media.maxMobile} {
    p {
      font-size: 12px;
      line-height: 15.6px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    p {
      font-size: 18px;
      line-height: 23.4px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    p {
      font-size: 24px;
      line-height: 31.2px;
    }
    &.see-more-projects {
      p {
        font-size: 24.07px;
        line-height: 31.3px;
      }
    }
  }
`;
export const ProjectsContainerHeader = styled.div<IProjectsContainerHeaderTitle>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-between;
  position: relative;
  border-bottom: ${({ lightTheme }) =>
    lightTheme
      ? `1px solid ${themes.primary.colors.borderRateCard}`
      : `1px solid ${themes.primary.colors.jetBlack}`};

  @media ${themes.primary.media.maxMobile} {
    padding: 10px;
  }

  @media ${themes.primary.media.min768Mobile} {
    padding: 16px 20px;
    flex-direction: row;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 10px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 21.33px 26.67px;
    &.see-more-projects {
      padding: 24px;
    }
  }
`;

export const ProjectsContainerInfoBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 20px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 160%;
  color: ${themes.primary.colors.blogBackground};
  text-transform: uppercase;
  padding: 4px 19px 6px;
  border: 1px solid ${themes.primary.colors.blogBackground};
  border-radius: 10px;
  max-width: fit-content;
  cursor: pointer;
  outline: none;
  transition: 1s ease-in-out;

  & > svg {
    position: absolute;
    width: 102%;
    height: 107.5%;
    top: -1.5px;
    fill: none;
    stroke-width: 4px;
    stroke-dasharray: 50 480;
    stroke-dashoffset: 50;
    transition: 1s ease-in-out;
    stroke: #30302f;
    border-radius: 10px;
  }

  &:hover > svg {
    stroke-dashoffset: 50 !important;
  }

  @media ${themes.primary.media.maxMobile} {
    border-radius: 6px;
    font-size: 12px;
    line-height: 160%;
    padding: 4px 12px 6px;
    margin: 0 10px;

    & > svg {
      height: 106%;
      stroke-width: 6px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    border-radius: 6px;
    font-size: 16px;
    line-height: 25.6px;
    padding: 0 16px 0 20px;
    margin: 0 20px;
    height: 38px;

    & > svg {
      height: 100%;
      stroke-width: 6px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    border-radius: 6px;
    font-size: 20px;
    line-height: 32px;
    padding: 0 22px 0 28px;
    margin: 0 20px;
    height: 48px;

    & > svg {
      height: 100%;
      stroke-width: 6px;
    }
  }
`;
export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 6px;
  align-items: center;
  @media ${themes.primary.media.min768Mobile} {
    gap: 16px;
  }
`;

export const ProjectsContainerInfo = styled.div`
  opacity: 0;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  transition: opacity 0.4s;
  border-radius: 8px;
`;

export const ProjectItemContainer = styled.div<IPortfolioInfoProps>`
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  cursor: pointer;
  position: relative;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  border-radius: 10px;
  min-height: 240px;
  flex: 0 0 100%;

  &.see-more-projects {
    min-height: 255px;
  }
  &:hover ${ProjectsContainerInfo} {
    opacity: 1;
    transition: opacity 0.4s;
  }

  &:hover ${ProjectsContainerArrowContainer} {
    background: ${({ isProjectLink }) =>
      !isProjectLink ? "#6a6745" : themes.primary.colors.portfolioHover};
    border: ${({ isProjectLink }) =>
      !isProjectLink
        ? `1.25px solid #181817`
        : `1.25px solid ${themes.primary.colors.primary}`};
  }

  &:hover ${ProjectsContainerInfoBtn} {
    & > svg {
      stroke-dashoffset: -480;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    min-height: 441px;
    flex: 0 0 calc(50% - 16px);

    &:hover ${ProjectsContainerArrowContainer} {
      border: ${({ isProjectLink }) =>
        !isProjectLink
          ? `2.26667px solid #181817`
          : `2.26667px solid ${themes.primary.colors.primary}`};
    }
    &.see-more-projects {
      min-height: 441px;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    min-height: 441px;
    flex: 0 0 calc(50% - 21px);
  }
`;

export const ProjectsContainerInfoText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  line-height: 160%;
  color: ${themes.primary.colors.secondary};
  overflow: hidden;

  p {
    margin: 0;
    width: 100%;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap; /* let the text wrap preserving spaces */
  }
  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 18px;
    padding: 7px 10px 18px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 16px;
    line-height: 25.6px;
    padding: 20px 20px 40px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 18px;
    padding: 20px 32px 33px 20px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
    padding: 24px 42px 46px 27px;
  }
`;

export const ProjectsContainerInfoLower = styled.div`
  cursor: pointer;
`;

export const ProjectsContainerInfoIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 60px;
  gap: 16px;
  @media ${themes.primary.media.maxMobile} {
    margin: 18px 20px 22px;
    height: 40px !important;

    span {
      position: relative !important;
      height: 20px !important;
      width: 30px !important;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    margin: 60px 70px 45px;
    height: 61px !important;

    span {
      position: relative !important;
      height: 35px !important;
      width: 50px !important;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 28px;
    margin: 64px 60px 40px;
    & span {
      height: 35px !important;
      width: 50px !important;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 28px;
    margin: 85px 60px 54px;
    & span {
      height: 45px !important;
      width: 60px !important;
    }
  }
`;

export const PortfolioTechIconTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
`;

export const ProjectsContainerImage = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media ${themes.primary.media.maxMobile} {
    height: calc(
      clamp(180px, 180px + (100vw - 375px) * ((341 - 180) / (768 - 375)), 341px)
    );
  }
  @media ${themes.primary.media.min768Mobile} {
    height: 341px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    height: 341px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 455px;
  }
  & > span {
    margin: 0 auto !important;
    max-width: 652px;
  }
`;
