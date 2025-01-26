import styled from "styled-components";
import themes from "../../../../utils/themes";

export const ArticleDateContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 24px;
  height: 24px;
  @media ${themes.primary.media.min768Mobile} {
    width: 26px;
    height: 26px;
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 32px;
    height: 32px;
  }
`;
export const ArticleDate = styled.p`
  margin: 0;
  color: ${themes.primary.colors.emperor};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  font-weight: ${themes.primary.font.weight.heavy};
  line-height: 1.5;

  @media screen and ${themes.primary.media.min768Mobile} {
    font-size: ${themes.primary.font.size.articleDate768};
    line-height: 1.44;
  }

  @media ${themes.primary.media.min4K} {
    font-size: ${themes.primary.font.size.semiMediumArticleTitle};
  }
`;
