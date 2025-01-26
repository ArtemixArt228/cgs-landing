import styled from "styled-components";
import themes from "../../utils/themes";

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  color: ${themes.primary.colors.darkBlue};
  font-size: 16px;
  line-height: 16px;
  font-weight: 900;
  font-family: ${themes.primary.font.family.namu};
  cursor: pointer;
  width: 100px;
  height: 30px;
  border: 1px solid ${themes.primary.colors.primary};
  padding: 5px;
  margin-top: 10px;
  :hover {
    background-color: ${themes.primary.colors.testimonialBorder};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 30%;
  }
`;
export const AddOrMinusButton = styled.button`
  cursor: pointer;
  width: 58px;
  height: 56px;
  font-weight: 900;
  color: ${themes.primary.colors.jetBlack};
  font-family: ${themes.primary.font.family.namu};
  background-color: ${themes.primary.colors.greyAdminServices};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  line-height: 19.2px;
  border: 1px solid ${themes.primary.colors.greyAdminServices};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &.input-value {
    cursor: default;
    background-color: unset;
  }
`;

export const DeleteBtn = styled(AddBtn)`
  color: ${themes.primary.colors.adminRed};
  border: none;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
  width: unset;
  height: 100%;
  :hover {
    background-color: ${themes.primary.colors.grey};
  }
`;
export const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  border-bottom: 1px solid ${themes.primary.colors.greyAdminServices};
`;

export const FeatureimagesWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: flex-end;
`;

export const ServiceItemWrapper = styled.div`
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FlexWrapper = styled.div`
  display: flex;
  gap: 40px;

  &.pricing {
    margin: 0 auto;
  }
  &.benefits {
    gap: 16px;
    align-items: center;
  }
  &.services-hero {
    & > :nth-child(1) {
      flex: 1 1 35%;
    }
    & > :nth-child(2) {
      flex: 1 1 40%;
    }
    & > :nth-child(3) {
      flex: 1 1 25%;
    }
  }
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  &.success-cases {
    border-bottom: 1px solid ${themes.primary.colors.greyAdminServices};
    padding-bottom: 16px;
  }
`;
