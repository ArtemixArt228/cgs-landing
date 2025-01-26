import styled from "styled-components";
import themes from "../../../../utils/themes";

export const PortfolioProjectsWrapper = styled.div``;

export const PortfolioFilterWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #8f8e93;
  text-align: start;
  margin-top: 50px;
  margin-right: 0;
  font-size: 18px;
  padding-bottom: 50px;

  @media ${themes.primary.media.minBreakpoint1100} {
    margin-right: 20px;
    font-size: 16px;
    padding-bottom: 0;
  }
`;

export const YouReachedTheEnd = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 20px;
  color: #8f8e93;

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
  }
`;

export const PortfolioSearchWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  line-height: 120%;
  display: flex;
  flex-direction: column;
  color: #8f8e93;
  margin-top: 0;
  padding-top: 21px;
  font-size: 16px;
  line-height: 120%;
  padding-top: 12px;

  & .sorry-message {
    margin-bottom: 20px;
  }

  & .sorry-recommendations {
    line-height: 29px;
  }

  & ul {
    margin-top: 10px;
    margin-bottom: 13px;
    gap: 10px;
  }

  @media ${themes.primary.media.maxMobile} {
  }
  @media ${themes.primary.media.min768Mobile} {
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    font-size: 18px;
    & .sorry-message {
      margin-bottom: 18px;

      & .category-name {
        text-transform: capitalize;
      }
    }

    & .search-word {
      color: black;
      word-break: break-all;
    }

    & ul {
      display: flex;
      flex-direction: column;
      padding-left: 28px;
      margin: 8px 0 0 0;
      gap: 6px;
    }
  }
  @media ${themes.primary.media.minPCFullHD} {
    font-size: 24px;
  }
`;

export const PortfolioTemplateBlock = styled.div`
  height: 1920px;

  @media ${themes.primary.media.maxMobile} {
    height: 2200px;
  }
`;

export const PaginationWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${themes.primary.media.maxMobile} {
    margin-top: 24px;
    margin-bottom: 30px;
  }
  @media ${themes.primary.media.min768Mobile} {
    margin-bottom: 52px;
    margin-top: 32px;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    margin-bottom: 0;
    margin-top: 32px;
  }
  @media ${themes.primary.media.minPCFullHD} {
    margin-top: 42.67px;
  }
`;
