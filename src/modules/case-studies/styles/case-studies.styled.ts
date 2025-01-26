import styled from "styled-components";
import themes from "../../../utils/themes";
import { arrowOne, arrowTwo } from "../../../styles/HomePage/General.styled";

export interface IPortfolioInfoProps {
  readonly isInfoCont?: boolean;
  readonly isProjectLink?: boolean;
}
export interface IPortfolioProjectLink {
  readonly isProjectLink: boolean;
}

export const ConceptContainer = styled.div`
  width: 100%;
`;

export const FeaturesDescription = styled.div`
  color: #000;
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${themes.primary.media.maxMobile} {
    line-height: 25.6px;
    font-size: 16px;
    gap: 16px;
  }

  @media ${themes.primary.media.min768Mobile} {
    line-height: 32px;
    font-size: 20px;
    &.problems-and-solutions,
    &.concept-completion {
      gap: 8px;
    }
  }

  @media ${themes.primary.media.onlyLaptopL} {
    line-height: 32px;
    font-size: 20px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    line-height: 38.4px;
    font-size: 24px;
  }
`;

export const FeaturesText = styled.div`
  position: relative;
  color: #000;
  font-family: ${themes.primary.font.family.namu};
  font-style: normal;
  font-weight: 900;
  text-transform: uppercase;
  @media ${themes.primary.media.maxMobile} {
    line-height: 32.16px;
    font-size: 24px;
  }
  @media ${themes.primary.media.min768Mobile} {
    line-height: 54.4px;
    font-size: 34px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    width: 70%;
    line-height: 54.4px;
    font-size: 34px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 70%;
    line-height: 70.4px;
    font-size: 44px;
  }
`;

export const PortfolioProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media ${themes.primary.media.maxMobile} {
    gap: 24px;
    &.see-more-projects {
      gap: 16px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 32px;
    &.see-more-projects {
      gap: 32px;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
    &.see-more-projects {
      gap: 40px;
    }
  }
`;

export const ProjectsContainerHeaderLink = styled.div<IPortfolioInfoProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 130%;
  color: ${({ isInfoCont }) =>
    isInfoCont
      ? themes.primary.colors.blogBackground
      : themes.primary.colors.primary};
  margin: 0;
  cursor: ${({ isProjectLink }) => isProjectLink && "pointer"};
  pointer-events: ${({ isProjectLink }) => (isProjectLink ? "unset" : "none")};

  p,
  span {
    margin: 0;
    font-size: 18px;
    line-height: 23.4px;
  }

  a {
    margin: 0;
    font-size: 18px;
    line-height: 23.4px;
  }

  span {
    color: ${themes.primary.colors.comment};
  }

  & path {
    transition: ${({ isProjectLink }) =>
      isProjectLink && "transform 1s ease-in-out"};
    opacity: ${({ isProjectLink }) => (!isProjectLink ? 0.3 : 1)};
  }
  & path:nth-child(1) {
    transform: translate(-36px, 36px);
  }
  &:hover {
    & path:nth-child(1) {
      animation: ${arrowOne} 1s ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${arrowTwo} 1s ease-in-out;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 12px;
    gap: 4px;

    a,
    p,
    span {
      font-size: 12px;
      line-height: 15.6px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 18px;
    line-height: 23.4px;
    gap: 4px;

    a,
    p,
    span {
      font-size: 18px;
      line-height: 23.4px;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 16px;
    gap: 6px;

    a,
    p,
    span {
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media ${themes.primary.media.min1440} {
    font-size: 18px;
    line-height: 23.4px;
    gap: 4px;

    a,
    p,
    span {
      font-size: 18px;
      line-height: 23.4px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 12px;
    p,
    span {
      margin: 0;
      font-size: 24px;
      line-height: 31.2px;
    }
  }
`;

export const ProjectHeaderLinkContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${themes.primary.media.maxMobile} {
    justify-content: flex-start;
    &.see-more-projects {
      gap: 8px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    justify-content: flex-end;
    &.see-more-projects {
      gap: 16px;
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 8px;
    flex-wrap: wrap;
  }
  @media ${themes.primary.media.min1440} {
    gap: 16px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 21.33px;
    &.see-more-projects {
      gap: 20px;
    }
  }
  &.case-study-project {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: flex-start;
    @media ${themes.primary.media.minPCFullHD} {
      gap: 20px;
    }
  }
`;

export const ProjectHeaderLinkWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  gap: 15px;
`;

export const ProjectsContainerArrowContainer = styled.div<IPortfolioProjectLink>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isProjectLink }) =>
    !isProjectLink ? "#f1eece" : themes.primary.colors.portfolioHover};
  border: ${({ isProjectLink }) =>
    !isProjectLink
      ? `1px solid #a9a8a6`
      : `1px solid ${themes.primary.colors.primary}`};

  border-radius: 50%;
  overflow: hidden;
  transition: background 0.3s, border 0.3s;
  margin: 2px;

  @media ${themes.primary.media.maxMobile} {
    width: 22px;
    height: 22px;
  }
  @media ${themes.primary.media.min768Mobile} {
    width: 32px;
    height: 32px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 24px;
    height: 24px;
  }
  @media ${themes.primary.media.min1440} {
    width: 32px;
    height: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    width: 40px;
    height: 40px;
  }
`;

export const PortfolioTechText = styled.div`
  color: white;
  font-size: 12px;
  line-height: 14px;
  font-family: ${themes.primary.font.family.namu};
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: pre-wrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${themes.primary.media.maxMobile} {
    font-size: 8px;
    line-height: 10px;
  }
  @media ${themes.primary.media.min768Mobile} {
    font-size: 12px;
    line-height: 14px;
  }
`;
export const ImppactAndContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 32px;
  }
  @media ${themes.primary.media.onlyLaptopL} {
    gap: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 40px;
  }
`;
interface IPortfolioPageWrapper {
  flexDirection?: string;
}
export const PortfolioPageWrapper = styled.div<IPortfolioPageWrapper>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.flexDirection ?? "row"};
  justify-content: space-between;

  &.project-overview-wrapper {
    position: relative;
  }

  @media ${themes.primary.media.maxMobile} {
    &.ai-solutions-block {
      gap: 16px;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    &.ai-solutions-block {
      justify-content: center;
      align-items: center;
    }
  }
  @media ${themes.primary.media.onlyLaptopL} {
  }
  @media ${themes.primary.media.minPCFullHD} {
  }
`;
