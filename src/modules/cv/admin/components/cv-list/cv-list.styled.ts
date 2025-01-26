import styled from "styled-components";
import themes from "../../../../../utils/themes";

export const AdminCategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 37px;

  & .admin-cv-dropdown {
    color: black;
    font-size: 16px;
    width: 347px;
    padding: 18px 14px;
    border: 1px solid #8f8e93;
  }
`;

export const DraggableWrapper = styled.div`
  background-color: ${themes.primary.colors.blogBackground};

  margin: 24px 0;
`;

export const AdminSubTitle = styled.h3`
  font-size: ${themes.primary.font.size.oneAndHalf};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
`;
