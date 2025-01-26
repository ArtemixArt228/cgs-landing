import styled from "styled-components";
import themes from "../../../../utils/themes";

export const AdminSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.menuElement};
  font-family: ${themes.primary.font.family.namu};
  margin: 0 0 10px 0;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;
`;
export const SubmitButtonWrapper = styled.div`
  display: flex;
  width: fit-content;
  column-gap: 30px;
`;

export const Message = styled.span`
  color: ${themes.primary.colors.errorText};
`;

export const Counter = styled.span`
  &.error {
    color: ${themes.primary.colors.errorText};
  }
`;

export const Text = styled.div`
  margin-top: -15px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  &.blog {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const BlogCancelButton = styled.button`
  max-width: 226px;
  height: 56px;
  width: 100%;
  background-color: ${themes.primary.colors.portfolioHover};
  border: 2px solid ${themes.primary.colors.primary};
  font-family: ${themes.primary.font.family.namu};
  font-size: 1.5em;
  cursor: pointer;
`;

export const BlogButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 37px 0;
`;

export const AdminBlogGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: 0.65fr 1.2fr 1.1fr;
`;

export const ArticleInputsWrapper = styled.div``;

export const DraftButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 2px solid ${themes.primary.colors.primary};
  width: 226px;
  height: 56px;
  font-size: 18px;
  font-family: inherit;
`;

export const PodcastWrapper = styled.div`
  margin-bottom: 4em;
`;

export const AdminBlocksContent = styled.div`
  margin-left: 2.5em;
  margin-right: 3.75em;
  font-family: ${themes.primary.font.family.namu};
`;

export const AdminBlogErrorMessage = styled.div`
  color: ${themes.primary.colors.errorText};
`;

export const ExtraMargin = styled.div`
  margin-top: 10px;
`;

export const TagContainer = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

export const MetaBlockWrapper = styled.div`
  background: linear-gradient(
    61.63deg,
    ${themes.primary.colors.mainGradientColor1} 0%,
    ${themes.primary.colors.mainGradientColor2} 100%
  );
  border: 2px solid ${themes.primary.colors.primary};
`;
