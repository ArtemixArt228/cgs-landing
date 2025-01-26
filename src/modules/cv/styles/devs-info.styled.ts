import styled from "styled-components";
import themes from "../../../utils/themes";

export const Layout = styled.article`
  width: 100%;
  margin: 0 auto;
  padding-inline: 20px;
  overflow: hidden;
  font-family: ${themes.primary.font.family.namu};

  @media ${themes.primary.media.minMobile} {
    padding-inline: 51px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding-inline: 3.55vw;
  }
`;

export const CvTitle = styled.div`
  text-transform: uppercase;
  font-size: 6.166666em;
  line-height: normal;
  font-style: normal;
  font-weight: ${themes.primary.font.weight.heavy};
  margin-top: 77px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 92px;
    margin-top: 96px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 32px;
    margin-top: 8px;
  }
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 52px;

  @media ${themes.primary.media.minPCFullHD} {
    column-gap: 65px;
  }

  @media screen and ${themes.primary.media.maxMobile} {
    grid-template-columns: 1fr;
  }
`;

export const AdminUnauthorizedModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: ${themes.primary.colors.secondary};
  font-size: ${themes.primary.font.size.tertiary};
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const PortfolioSearchWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  display: flex;
  flex-direction: column;
  color: #8f8e93;
  margin-bottom: 134px;
  margin-top: 0;
  padding-top: 21px;

  & .sorry-message {
    margin-bottom: 18px;
  }

  & .search-word {
    color: black;
  }

  &.cv {
    @media ${themes.primary.media.minPCFullHD} {
      font-size: 22px;
    }

    @media screen and ${themes.primary.media.maxMobile} {
      font-size: 16px;
      line-height: 120%;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    margin: 8px 0 0 0;
    gap: 6px;
  }

  @media screen and ${themes.primary.media.maxTabletPortrait} {
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
  }
`;
