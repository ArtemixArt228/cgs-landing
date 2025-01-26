import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and ${themes.primary.media.min768Mobile} {
    flex-direction: row;
  }
`;

export const AuthorImage = styled.img`
  border-radius: 50%;
  overflow: hidden;
  width: 24px;
  height: 24px;

  @media ${themes.primary.media.min4K} {
    width: 32px;
    height: 32px;
  }
`;

export const AuthorInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DetailsText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.mainBlogAuthor};
  line-height: 1.42;

  &.additional-article-info {
    color: ${themes.primary.colors.mutedBlueGrey};
  }
  @media screen and ${themes.primary.media.min768Mobile} {
    font-size: ${themes.primary.font.size.secondaryArticleAuthor};
    line-height: 1.5;
  }

  @media ${themes.primary.media.min4K} {
    font-size: 20px;
  }
`;

export const DotDivider = styled.div`
  background-color: ${themes.primary.colors.mutedBlueGrey};
  width: 4px;
  height: 4px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StatisticWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;
