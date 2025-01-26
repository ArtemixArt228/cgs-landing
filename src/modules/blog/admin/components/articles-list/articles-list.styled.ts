import themes from "../../../../../utils/themes";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4em;
`;

export const AdminBlocksContent = styled.div`
  margin-left: 2.5em;
  margin-right: 3.75em;
  font-family: ${themes.primary.font.family.namu};
`;

export const EmptyArticles = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: center;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.articleTagDescription};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DeleteButton = styled.div`
  cursor: pointer;
  font-family: ${themes.primary.font.family.gilroy};
  font-weight: ${themes.primary.font.weight.medium};
  font-size: ${themes.primary.font.size.aboutUsCardText};
  color: ${themes.primary.colors.deleteButton};
`;
