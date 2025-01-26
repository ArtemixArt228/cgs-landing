import styled from "styled-components";
import themes from "../../../utils/themes";

export const Title = styled.h1`
  font-size: 26px;
  font-weight: ${themes.primary.font.weight.heavy};
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.blogDarkText};
  margin: 0;
  width: 100%;
  line-height: 1.2;

  @media screen and ${themes.primary.media.min768Mobile} {
    font-size: 40px;
    line-height: 1.1;
  }

  @media screen and ${themes.primary.media.min1440} {
    font-size: 52px;
    line-height: 1.14;
  }

  @media ${themes.primary.media.min4K} {
    font-size: 60px;
  }
`;

export const ArticleHeaderContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 32px;
  }

  @media screen and ${themes.primary.media.minLaptop} {
    gap: 32px;
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and ${themes.primary.media.min1440} {
    gap: 54px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 72px;
  }
`;

export const ArticleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 20px;
  }

  @media ${themes.primary.media.min1440} {
    gap: 16px;
    width: 540px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 20px;
    width: 720px;
  }
`;

export const LinksAndTagsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 16px;
  }
  @media ${themes.primary.media.min1440} {
    gap: 24px;
  }
  @media ${themes.primary.media.min4K} {
    gap: 40px;
  }
`;

export const ArticleHeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${themes.primary.media.min1440} {
    gap: 24px;
  }
  @media ${themes.primary.media.min4K} {
    gap: 20px;
  }
`;

export const TitleAuthorWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${themes.primary.media.min768Mobile} {
    gap: 24px;
  }
  @media ${themes.primary.media.min4K} {
    gap: 32px;
  }
`;

export const Background = styled.div`
  position: relative;
  background-color: ${themes.primary.colors.blogBackground};
`;

export const PageWrapper = styled.div`
  position: relative;
  margin: 0;
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  a {
    color: ${themes.primary.colors.darkBlue};
    text-decoration: none;

    ul {
      text-decoration: none;
    }
  }
  li {
    margin-bottom: 10px;
    margin-left: 0;

    &.content-list-item {
      margin-bottom: 0;
    }

    @media ${themes.primary.media.min4K} {
      margin-bottom: 16px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0 12px;
  }

  ul li {
    position: relative;
    padding-left: 18px;

    &.content-list-item {
      padding-left: 0;
    }
  }

  ul li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    height: 9px;
    width: 9px;
    background-size: 9px 9px;
    background-image: url("/Star.png");
    background-repeat: no-repeat;
  }

  @media ${themes.primary.media.min768Mobile} {
    gap: 40px;
  }

  @media ${themes.primary.media.min1440} {
    padding: 32px 0 0;
    gap: 64px;
    max-width: 1110px;
  }

  @media screen and ${themes.primary.media.min4K} {
    max-width: 1480px;

    ul {
      list-style-type: none;
      padding: 0 16px;
    }

    ul li {
      position: relative;
      padding-left: 24px;
    }

    ul li::before {
      top: 9px;
      width: 12px;
      height: 12px;
      background-size: 12px 12px;
    }
  }
`;

export const BannerImageContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin: 0;
  overflow: hidden;
  border-radius: 11px;
  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    height: calc(
      clamp(204px, 204px + (100vw - 375px) * ((408 - 204) / (768 - 375)), 408px)
    );
  }

  @media ${themes.primary.media.min768Mobile} {
    width: 688px;
    height: 408px;
  }

  @media ${themes.primary.media.min1440} {
    width: 516px;
    height: 306px;
  }

  @media ${themes.primary.media.min4K} {
    width: 688px;
    height: 408px;
  }
`;

export const BannerImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${themes.primary.media.minLaptop} {
    width: unset;
  }
`;

export const DescriptionWrapper = styled.div`
  @media ${themes.primary.media.min1440} {
    display: flex;
    gap: 40px;
  }

  @media ${themes.primary.media.min4K} {
    gap: 54px;
  }
`;

export const Cont = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 32px 16px 92px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 1.2em;
  }

  @media ${themes.primary.media.min768Mobile} {
    padding: 32px 35px 120px;
    gap: 40px;
  }

  @media screen and ${themes.primary.media.min1440} {
    flex-direction: column;
    padding: 0 52px 80px;
    gap: 60px;
  }

  @media screen and ${themes.primary.media.min4K} {
    flex-direction: column;
    padding: 0 68px 100px;
    gap: 80px;
  }
`;

export const LineDivider = styled.div`
  height: 2px;
  background-color: ${themes.primary.colors.cloud};
`;

export const Breadcrumbs = styled.div`
  font-family: ${themes.primary.font.family.namu};
  margin: 10px 16px 0;
  font-size: ${themes.primary.font.size.smallestBlogTitle};
  line-height: 1.42;
  color: #8f8e93;

  & a {
    color: #8f8e93;
    text-decoration: none;

    &:hover {
      color: black;
    }
  }

  & span {
    color: #8f8e93;
  }

  & span:last-child {
    color: black;
  }

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  @media ${themes.primary.media.min768Mobile} {
    margin: 40px 35px 0;
  }

  @media ${themes.primary.media.minPCFullHD} {
    margin: 8px 0 0 52px;
  }

  @media ${themes.primary.media.min4K} {
    font-size: ${themes.primary.font.size.articleContentText};
    margin: 8px 0 0 68px;
  }
`;

export const BreadcrumbSeparator = styled.span`
  margin: 0 8px;
  color: #bbb;

  @media ${themes.primary.media.minPCFullHD} {
    margin: 0 10px;
  }
`;
