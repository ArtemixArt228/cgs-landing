import styled from "styled-components";
import themes from "../../../../../../../../../utils/themes";

export const AdminFourthBlockFlexTag = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

export const AdminPageFourthTechTagWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  input {
    /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;

    /* creating a custom design */
    border-radius: 0;
    border: 1px solid ${themes.primary.colors.comment};
    width: 19px;
    height: 19px;
    margin: 0;
    background: transparent;
    outline: none;
    cursor: pointer;
    position: relative;

    &::before {
      content: "";
      width: 19px;
      height: 19px;
      position: absolute;
    }

    &:checked {
      ::before {
        background-color: ${themes.primary.colors.primary};
        background-image: url("/adminMarker.svg");
        background-repeat: no-repeat;
        background-position: center;
      }
    }
  }
`;

export const AdminPageFourthTechTag = styled.div`
  padding: 3px 8px;
  display: flex;
  gap: 6px;
  align-items: center;
  background-color: ${themes.primary.colors.darkBlue};
  color: ${themes.primary.colors.secondary};
  span {
    cursor: pointer;
  }
`;
