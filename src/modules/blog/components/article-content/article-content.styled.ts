import styled from "styled-components";
import themes from "../../../../utils/themes";

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 16px;
  border-top: 2px solid #d0d1c9;
  border-bottom: 2px solid #d0d1c9;
  position: sticky;
  background-color: inherit;
  z-index: 20;
  top: 81px;
  @media ${themes.primary.media.maxBreakpoint1100} {
    top: 86px;
  }
  @media ${themes.primary.media.max767Mobile} {
    top: 81px;
  }

  a {
    color: inherit;
  }

  &.hidden-content {
    display: none;
  }

  @media ${themes.primary.media.min768Mobile} {
    padding: 16px 40px;
  }

  @media screen and ${themes.primary.media.min1440} {
    position: unset;
    min-width: 264px;
    width: 270px;
    height: fit-content;
    padding: 18px 24px;
    border: 2px solid #d0d1c9;
    border-radius: 10px;

    align-items: flex-start;
    position: sticky;
    top: 120px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    top: 125px;
  }
  @media ${themes.primary.media.min4K} {
    padding: 24px 32px;
    min-width: 352px;
    width: 629px;
  }
`;

export const HeadingsContainer = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.smallestBlogTitle};
  line-height: 1.5;

  &.article-content ul {
    padding: 0;
    margin: 0;
    list-style: none none;
  }

  &.article-content ul li::before {
    content: none;
    background-image: none;
  }

  &.article-content a {
    color: inherit;
    &.active {
      color: ${themes.primary.colors.darkBlue};
    }
  }

  & .content-list-item {
    margin: 0;

    a {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1; /* For one line, you might as well use nowrap */
      max-width: 100%; /* Constraint for truncation */
    }
    &.content-group {
      margin-bottom: 12px;
      @media ${themes.primary.media.min4K} {
        margin-bottom: 16px;
      }
    }
  }

  li.content-group > a:first-child {
    margin-bottom: 6px;

    @media ${themes.primary.media.min4K} {
      margin-bottom: 8px;
    }
  }

  @media ${themes.primary.media.min1440} {
    font-size: 12px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: ${themes.primary.font.size.articleContentText};
  }
`;

export const ContentDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContentsText = styled.p`
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-size: ${themes.primary.font.size.articleContentText};
  line-height: 1.25;

  @media ${themes.primary.media.min4K} {
    font-size: ${themes.primary.font.size.secondaryArticleDescription};
  }
`;

export const DropDownContainer = styled.div`
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  margin: 0;
  padding: 0;
  transition: 0.3s ease-in;

  &.open {
    margin: 16px 0 0 0;
    opacity: 1;
    max-height: 500px;
    @media ${themes.primary.media.min768Mobile} {
      margin-top: 24px;
    }
    @media ${themes.primary.media.min1440} {
      margin-top: 12px;
    }
    @media ${themes.primary.media.min4K} {
      margin-top: 16px;
    }
  }
`;
