import styled from "styled-components";
import { FeaturesDescription } from "../../../case-studies/styles";
import themes from "../../../../utils/themes";

export const ProjectOverviewContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    flex-direction: row;
    gap: 56px;
    & > div:first-child {
      width: 30.9%;
    }
    & > div:last-child {
      width: 64.9%;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 72px;
    & > div:first-child {
      width: 550px;
      min-width: 550px;
    }
    & > div:last-child {
      width: unset;
    }
  }
`;

export const ProjectInfoOverview = styled(FeaturesDescription)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  @media ${themes.primary.media.maxMobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 8px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    max-width: unset;
  }
`;

export const ProjectInfoContainer = styled.div`
  background: linear-gradient(
    353.75deg,
    ${themes.primary.colors.grey} -1.56%,
    ${themes.primary.colors.caseStudyTagGradientDark} 52.39%,
    ${themes.primary.colors.grey} 127.64%
  );
  border: 1px solid ${themes.primary.colors.borderRateCard};
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 40px;
  align-items: flex-start;
  justify-content: space-evenly;

  @media ${themes.primary.media.maxMobile} {
    gap: 20px;
    padding: 20px;
    justify-content: flex-start;
    width: 100%;
  }
  @media ${themes.primary.media.min768Mobile} {
    padding: 40px;
    justify-content: space-evenly;
    width: 100%;
    row-gap: 40px;
    column-gap: 24px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    border-radius: 20px;
    padding: 48px;
    column-gap: 32px;
    row-gap: 48px;
  }
`;

export const PlatformsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    gap: 10px;
  }
  @media ${themes.primary.media.min768Mobile} {
    gap: 7px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    gap: 5.33px;
  }
`;

export const ProjectInfoItemContainer = styled.div`
  border-left: 1px solid ${themes.primary.colors.borderRateCard};
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 16px;

  @media ${themes.primary.media.maxMobile} {
    gap: 8px;
    padding-left: 16px;
    &.short {
      flex: 1 1 calc(50% - 20px);
    }
    &.long {
      flex: 1 1 100%;
    }
  }
  @media ${themes.primary.media.min768Mobile} {
    &.short {
      flex: 1 1 calc(50% - 20px);
    }
    &.long {
      flex: 1 1 calc(50% - 20px);
    }
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    gap: 8px;
    padding-left: 16px;
  }
  @media ${themes.primary.media.min1440} {
    gap: 8px;
    padding-left: 16px;
    &.short {
      flex: 1 1 calc(33.333% - 30px);
    }
    &.long {
      flex: 1 1 calc(33.333% - 30px);
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding-left: 21.33px;
    gap: 10px;
  }
`;

export const ProjectInfoItemLabel = styled.div`
  line-height: 18px;
  font-size: 14px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  color: ${themes.primary.colors.mutedBlueGrey};
  white-space: nowrap;
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 24px;
    font-size: 18px;
  }
`;

export const ProjectInfoItemText = styled(ProjectInfoItemLabel)`
  font-size: 20px;
  line-height: 30px;
  color: ${themes.primary.colors.jetBlack};
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 40px;
    font-size: 24px;
  }
`;

interface IProjectInfoItemTextLink {
  isNDA: boolean;
}
export const ProjectInfoItemTextLink = styled.div<IProjectInfoItemTextLink>`
  display: flex;
  align-items: flex-end;
  & .link {
    font-family: ${themes.primary.font.family.namu};
    font-weight: 900;
    font-size: 20px;
    line-height: 21px;
    white-space: nowrap;
    color: ${(props) =>
      props.isNDA
        ? themes.primary.colors.jetBlack
        : themes.primary.colors.darkBlue};
    cursor: ${(props) => (!props.isNDA ? "pointer" : "unset")};
    border-bottom: ${(props) =>
      !props.isNDA ? `1px solid ${themes.primary.colors.darkBlue}` : "none"};

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 24px;
      line-height: 40px;
    }
  }
  & .arrow {
    line-height: 30px;
    color: ${(props) =>
      props.isNDA
        ? themes.primary.colors.jetBlack
        : themes.primary.colors.darkBlue};
    height: 26px;
    width: 30px;
    margin: 0;
    border-bottom: ${(props) =>
      !props.isNDA ? `1px solid ${themes.primary.colors.darkBlue}` : "none"};
    @media ${themes.primary.media.maxMobile} {
    }
    @media ${themes.primary.media.min768Mobile} {
    }
    @media ${themes.primary.media.minBreakpoint1100} {
    }
    @media ${themes.primary.media.minPCFullHD} {
      height: 32px;
      width: 30px;
    }
  }
`;

export const TechnologiesIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${themes.primary.media.minPCFullHD} {
    gap: 10px;
  }
`;

export const TechnologyItemContainer = styled.div`
  display: flex;
  border: 1px solid ${themes.primary.colors.borderRateCard};
  background: linear-gradient(
    353.75deg,
    ${themes.primary.colors.grey} -1.56%,
    ${themes.primary.colors.caseStudyTagGradientDark} 52.39%,
    ${themes.primary.colors.grey} 127.64%
  );
  border-radius: 10px;
  padding: 8px 20px 8px 8px;
  gap: 12px;
  width: 100%;
  align-items: center;
  @media ${themes.primary.media.maxMobile} {
    height: 56px;
  }
  @media ${themes.primary.media.min768Mobile} {
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    height: 56px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    height: 72px;
  }
`;

export const TechnologyImage = styled.div`
  object-fit: contain;
  position: relative;
  width: 56px;
  height: 40px;
  flex-shrink: 0;
  color: black;

  & img {
    filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(0%)
      contrast(100%);
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 72px;
    height: 52px;
  }
`;

export const TechnologyText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  @media ${themes.primary.media.minPCFullHD} {
    line-height: 32px;
    font-size: 20px;
  }
`;
