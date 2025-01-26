import styled from "styled-components";
import themes from "../../../../utils/themes";
import { Field } from "formik";

export const FormField = styled(Field)`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid black;
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  color: black;
  padding: 0 0 0 12px;
  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${themes.primary.colors.careersPlaceholder};
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: 0 0 0 18px;
    font-size: 20px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 0 0 0 22px;
  }

  @media ${themes.primary.media.minTablet} {
    font-size: 0.875rem;
    padding: 0 0 0 12.5px;
  }

  @media ${themes.primary.media.maxLowestScreenMobile} {
    font-size: 0.75rem;
  }
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 76px;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    height: 101.5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 64px;
  }
`;
