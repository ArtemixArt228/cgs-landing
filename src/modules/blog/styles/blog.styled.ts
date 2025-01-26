import styled from "styled-components";
import themes from "../../../utils/themes";

export const BlogContainer = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  font-family: ${themes.primary.font.family.namu};
  padding: 42px 50px;
  @media ${themes.primary.media.min1440} {
    padding: 42px 50px 64px;
    gap: 28px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 55px 68px 96px;
    gap: 32px;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    padding: 55px 68px 91px;
  }

  @media ${themes.primary.media.maxTabletPortrait} {
    padding: 40px 40px 48px;
  }

  @media ${themes.primary.media.maxMobilePortrait} {
    padding: 32px 16px 52px;
  }
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 32px;

  @media ${themes.primary.media.min768Mobile} {
    margin-bottom: 48px;
  }

  @media ${themes.primary.media.min1440} {
    margin-bottom: 35px;
  }

  @media ${themes.primary.media.min4K} {
    margin-bottom: 45px;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    margin-bottom: 92px;
  }
`;

export const BlogHeading = styled.div`
  h1 {
    margin: 0;
    font-weight: ${themes.primary.font.weight.heavy};
    font-size: 24px;
    line-height: 1.35;
    text-transform: uppercase;

    @media screen and ${themes.primary.media.min768Mobile} {
      font-size: 40px;
      line-height: 1.2;
      letter-spacing: -0.2px;
    }

    @media ${themes.primary.media.minPCFullHD} {
      font-size: 52px;
    }
  }
`;

export const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${themes.primary.media.min4K} {
    gap: 32px;
  }
`;

export const BlogCardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));

  @media screen and ${themes.primary.media.minWidth2200} {
    grid-template-columns: repeat(auto-fill, minmax(582px, 1fr));
  }

  @media screen and ${themes.primary.media.min4K} {
    grid-template-columns: repeat(auto-fill, minmax(573px, 1fr));
    gap: 32px;
  }

  @media screen and ${themes.primary.media.maxTabletPortrait} {
    grid-template-columns: repeat(auto-fill, minmax(332px, 1fr));
  }
`;

export const BlogArticlesTemplate = styled.div`
  min-height: 2074px;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 20px;
  }

  @media ${themes.primary.media.min1440} {
    gap: 30px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    gap: 45px;
  }
`;

export const SubscribeBlockContainer = styled.div`
  padding: 0 16px 90px;

  @media ${themes.primary.media.min768Mobile} {
    padding: 40px 40px 80px;
  }

  @media ${themes.primary.media.min1440} {
    padding: 0 60px 55px;
  }

  @media ${themes.primary.media.min4K} {
    padding: 0 65px 76px;
  }

  @media ${themes.primary.media.minPCTwoThousand} {
    padding: 0 68px 90px;
  }
`;

export const BlogSearchWarning = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  line-height: 120%;
  display: flex;
  flex-direction: column;
  color: #8f8e93;
  margin-bottom: 134px;
  margin-top: 0;
  padding-top: 21px;

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
