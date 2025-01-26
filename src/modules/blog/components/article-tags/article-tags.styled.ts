import styled from "styled-components";
import themes from "../../../../utils/themes";

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TagItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  height: 43px;
  color: white;
  border-radius: 46px;
  background-color: ${themes.primary.colors.darkBlue};
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: ${themes.primary.colors.tagBg};
    cursor: pointer;
  }

  @media ${themes.primary.media.min4K} {
    height: 56px;
  }
`;

export const DetailsText = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: ${themes.primary.font.size.mainBlogAuthor};
  line-height: 1.42;

  @media screen and ${themes.primary.media.min768Mobile} {
    font-size: ${themes.primary.font.size.secondaryArticleAuthor};
    line-height: 1.5;
  }

  @media ${themes.primary.media.min4K} {
    font-size: 20px;
  }
`;
