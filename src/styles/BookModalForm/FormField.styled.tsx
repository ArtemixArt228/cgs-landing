import styled from "styled-components";
import themes from "../../utils/themes";
import { Field } from "formik";
import { TextareaAutosize } from "@mui/material";

export const FormField = styled(Field)`
  height: 68px;
  width: 100%;
  background: none;
  border: none;
  border: 1px solid ${themes.primary.colors.inputGrey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 20px;
  color: ${themes.primary.colors.black};
  padding-inline: 15px;
  border-radius: 0;

  &::placeholder {
    color: ${themes.primary.colors.comment};
  }

  &:focus {
    outline: none;
  }
  &.formikErrors {
    border: 1px solid ${themes.primary.colors.adminRed};
  }

  @media ${themes.primary.media.maxPCFullHD} {
    font-size: 16px;
    height: 54px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;
    height: 44px;
  }
`;

interface MyTextAreaProps {
  maxLength: number;
}

export const DetailsField = styled(TextareaAutosize).attrs<MyTextAreaProps>(
  (props) => ({
    maxLength: props.maxLength,
    maxRows: "3",
  })
)<MyTextAreaProps>`
  height: 54px;
  padding-top: 16px;
  padding-bottom: 16px;
  max-height: 92px;
  width: 100%;
  background: none;
  border: none;
  border: 1px solid ${themes.primary.colors.inputGrey};
  font-family: ${themes.primary.font.family.namu};
  font-size: 16px;
  color: ${themes.primary.colors.black};
  padding-left: 12px;
  border-radius: 0;
  resize: none;
  margin-top: 10px;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${themes.primary.colors.primary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track-piece:end {
    background: transparent;
    margin-bottom: 2px;
  }

  &::-webkit-scrollbar-track-piece:start {
    background: transparent;
    margin-top: 2px;
  }

  scrollbar-color: ${themes.primary.colors.primary} transparent;
  scrollbar-width: thin;

  &::placeholder {
    color: ${themes.primary.colors.comment};
  }

  &:focus {
    outline: none;
  }
  &.formikErrors {
    border: 1px solid ${themes.primary.colors.adminRed};
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;
    height: 44px;
    padding-top: 14px;
    padding-bottom: 14px;
    max-height: 72px;
  }
`;

export const CharCounter = styled.div`
  text-align: right;
  color: ${themes.primary.colors.comment};
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  padding-right: 8px;
  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 10px;
    line-height: 12px;
  }
`;

export const FormFieldLabel = styled.label`
  font-family: ${themes.primary.font.family.namu};
  font-size: 20px;
  color: ${themes.primary.colors.black};

  @media ${themes.primary.media.maxPCFullHD} {
    font-size: 16px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    font-size: 12px;
  }

  span {
    color: ${themes.primary.colors.comment};
  }
`;

export const FormFieldContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 10px;
  height: 88px;

  @media ${themes.primary.media.maxPCFullHD} {
    height: 70px;
    margin-top: 8px;
  }

  @media ${themes.primary.media.estiomationFormWidth} {
    margin-top: 8px;
    height: 60px;
  }

  .react-tel-input {
    height: 68px;
    width: 100%;
    background: none;
    border: 1px solid ${themes.primary.colors.inputGrey};
    font-family: ${themes.primary.font.family.namu};
    font-size: 20px;
    color: ${themes.primary.colors.black};
    border-radius: 0;

    &::placeholder {
      color: ${themes.primary.colors.comment};
    }

    &:focus {
      outline: none;
    }
    &.formikErrors {
      border: 1px solid ${themes.primary.colors.adminRed};
    }

    @media ${themes.primary.media.maxPCFullHD} {
      font-size: 16px;
      height: 54px;
    }

    @media ${themes.primary.media.estiomationFormWidth} {
      font-size: 12px;
      height: 44px;
    }

    .flag-dropdown,
    .selected-flag,
    .flag-dropdown.open .selected-flag {
      background: ${themes.primary.colors.blogBackground};
    }

    .flag-dropdown {
      border: 0;
      border-right: 1px solid ${themes.primary.colors.inputGrey};
    }

    .selected-flag {
      @media ${themes.primary.media.minMobile} {
        width: 45px;
      }

      .flag {
        @media ${themes.primary.media.minMobile} {
          scale: 1.2;
        }
        @media ${themes.primary.media.minPCFullHD} {
          scale: 1.7;
        }
      }
    }

    .form-control {
      height: 100%;
      width: 100%;
      border: none;
      font-size: 20px;
      font-family: ${themes.primary.font.family.namu};
      background: ${themes.primary.colors.blogBackground};

      &::placeholder {
        color: ${themes.primary.colors.comment};
      }

      @media ${themes.primary.media.maxPCFullHD} {
        font-size: 16px;
      }

      @media ${themes.primary.media.estiomationFormWidth} {
        font-size: 12px;
      }

      @media ${themes.primary.media.minMobile} {
        padding-left: 55px;
      }
    }
    .country-list {
      background: ${themes.primary.colors.blogBackground};
      width: 280px;

      .search {
        background-color: ${themes.primary.colors.blogBackground};
        padding: 10px 14px 10px 0;

        .search-box {
          width: 100%;
          background-color: ${themes.primary.colors.blogBackground};
          font-size: 16px;
          font-family: ${themes.primary.font.family.namu};
          border: 1px solid ${themes.primary.colors.inputGrey};

          &::placeholder {
            color: ${themes.primary.colors.comment};
          }

          @media ${themes.primary.media.estiomationFormWidth} {
            font-size: 12px;
          }
        }
      }
    }
  }
`;

export const ErrorField = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 15px;
  color: ${themes.primary.colors.adminRed};
  line-height: normal;
  text-align: right;
  font-weight: ${themes.primary.font.weight.heavy};
  @media ${themes.primary.media.maxPCFullHD} {
    font-size: 12px;
  }
`;
