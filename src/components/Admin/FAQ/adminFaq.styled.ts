import styled from "styled-components";
import themes from "../../../utils/themes";

export const AddButton = styled.div`
  color: ${themes.primary.colors.adminBlue};
  cursor: pointer;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.inter};
  font-weight: ${themes.primary.font.weight.semiBold};
`;

export const DeleteButton = styled.div`
  color: ${themes.primary.colors.adminRed};
  cursor: pointer;
  font-size: ${themes.primary.font.size.vistaco};
  font-family: ${themes.primary.font.family.inter};
  font-weight: ${themes.primary.font.weight.semiBold};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  &.about {
    margin-bottom: ${themes.primary.spacing.septenary};
  }
`;

export const QuestionContainer = styled.div`
  margin-bottom: 50px;
  max-width: 80vw;
  width: 100%;
`;

export const QuestionTitleContainer = styled.div`
  max-width: 70%;
`;

export const ContentWrapper = styled.div`
  display: grid;

  &.image {
    gap: 50px;
    grid-template-columns: 65% 30%;
  }
`;

export const PhotoContainer = styled.div`
  margin: 50px 0;
`;
