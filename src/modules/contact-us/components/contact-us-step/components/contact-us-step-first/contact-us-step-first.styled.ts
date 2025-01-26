import { Field, Form } from "formik";
import styled, { keyframes } from "styled-components";
import themes from "../../../../../../utils/themes";

export const FormWrapper = styled(Form)`
  width: 100%;

  @media ${themes.primary.media.maxBreakpoint1100} {
    margin-top: 14px;
  }

  @media ${themes.primary.media.maxMobile} {
    padding: 16px;
    margin-top: 16px;
  }
  @media ${themes.primary.media.onlyTablet} {
    padding: 40px;
    padding-top: 15px;
  }
  &.talk-to-expert-page {
    @media ${themes.primary.media.maxBreakpoint1100} {
      margin-top: 14px;
    }

    @media ${themes.primary.media.maxMobile} {
      padding: 16px;
      margin-top: 4px;
    }
    @media ${themes.primary.media.onlyTablet} {
      padding: 4px 40px 32px;
      margin-top: 22px;
    }
    @media ${themes.primary.media.min1440} {
      padding: 16px 0 0;
      margin-top: 0;
    }
  }
`;

export const FieldHeader = styled.div`
  font-size: 16px;
  width: 80%;
  margin-right: auto;
  font-family: ${themes.primary.font.family.namu};
  margin-bottom: 8px;

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 16px;
    margin-bottom: 11px;
  }

  @media ${themes.primary.media.onlyTablet} {
    font-size: 18px;
    margin-bottom: 12px;
  }
  &.talk-to-expert-page {
    font-size: 16px;
    line-height: 24px;
    width: 80%;
    margin-right: auto;
    font-family: ${themes.primary.font.family.namu};
    margin-bottom: 8px;

    @media ${themes.primary.media.maxBreakpoint1100} {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 12px;
    }

    @media ${themes.primary.media.min1440} {
      font-size: 16px;
      line-height: 24px;
    }

    @media ${themes.primary.media.onlyTablet} {
      font-size: 18px;
      margin-bottom: 12px;
    }
  }
`;

export const NameAndEmailContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  width: 100%;
  @media ${themes.primary.media.maxBreakpoint1100} {
    flex-direction: column;
    gap: 0;
  }
`;

export const LabelAndInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`;

export const HeroSectionFormFieldContainer = styled.div<{
  error?: boolean;
}>`
  width: 100%;
  position: relative;
  height: 42px;
  margin-bottom: 17px;

  padding: 4px;
  border: ${({ error }) =>
    error
      ? `1.5px solid ${themes.primary.colors.adminRed}`
      : `1.5px solid ${themes.primary.colors.black}`};
  border-radius: 14px;

  & .input-phone-container {
    height: 100%;
    width: 100%;
    font-family: ${themes.primary.font.family.namu};
  }

  & .input-phone {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    font-family: ${themes.primary.font.family.namu};
    font-size: 14px;
    font-weight: ${themes.primary.font.weight.medium};
    line-height: 155%;
    outline: none;
    padding-left: 60px;

    @media ${themes.primary.media.onlyTablet} {
      font-size: 16px;
    }
  }

  & .country-phone-flag {
    border: none;
    background: transparent;
    padding-left: 11px;
    cursor: default;

    &.open {
      background: transparent;
    }

    & .selected-flag {
      scale: 1.5;

      &:hover,
      &:active,
      &:focus,
      &.open {
        background: transparent;
      }
    }
  }

  & .input-phone-dropdown {
    background: ${themes.primary.colors.grey};
    border-radius: 5px;
    width: 315px;

    & .search {
      background: ${themes.primary.colors.grey};
      border-bottom: 1px solid ${themes.primary.colors.blogDarkText};

      & .search-box {
        border: 1px solid ${themes.primary.colors.primary};
        font-family: ${themes.primary.font.family.namu};
        background: transparent;
        width: 85%;
      }
    }

    /* width */
    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  @media ${themes.primary.media.maxBreakpoint1100} {
    height: 55px;
    margin-bottom: 26px;
  }

  @media ${themes.primary.media.onlyTablet} {
    height: 60px;
  }

  &.talk-to-expert-page {
    height: 46px;
    border-radius: 12px;
    margin-bottom: 20px;

    @media ${themes.primary.media.maxBreakpoint1100} {
      height: 52px;
      margin-bottom: 24px;
    }

    @media ${themes.primary.media.min1440} {
      height: 46px;
      margin-bottom: 16px;
    }

    @media ${themes.primary.media.onlyTablet} {
      height: 60px;
    }
  }
`;

export const HeroSectionFormField = styled(Field)<{
  error: boolean;
}>`
  font-family: ${themes.primary.font.family.namu};
  position: relative;
  width: 100%;
  height: 100%;
  padding-left: 11px;
  border: none;
  background: ${themes.primary.colors.grey};
  border-radius: 10px;
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.medium};
  line-height: 155%;
  outline: none;

  @media ${themes.primary.media.onlyTablet} {
    font-size: 16px;
  }

  &:focus + div {
    opacity: 0;
  }

  &:not(:placeholder-shown) + div {
    opacity: 0;
  }
`;

export const HeroSectionFormFieldLabel = styled.div<{
  left: number;
  hasFiles?: boolean;
}>`
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  position: absolute;
  top: 8px;
  left: ${({ left }) => `${left}px`};
  font-size: 14px;
  color: ${themes.primary.colors.blogArticleText};
  transition: all 0.3s;
  pointer-events: none;
  padding: 4px;

  &.description {
    top: ${({ hasFiles }) => (hasFiles ? "5px" : "10px")};
  }

  @media ${themes.primary.media.maxBreakpoint1100} {
    font-size: 14px;
    top: 16px;
  }

  @media ${themes.primary.media.onlyTablet} {
    font-size: 16px;
  }

  &.talk-to-expert-page {
    top: 11px;

    @media ${themes.primary.media.maxBreakpoint1100} {
      font-size: 14px;
      line-height: 20px;
      top: 10px;
    }

    @media ${themes.primary.media.min1440} {
      font-size: 14px;
      line-height: 20px;
      top: 5px;
    }

    @media ${themes.primary.media.onlyTablet} {
      font-size: 16px;
      line-height: 24px;
      top: 14px;
    }
  }
`;

export const HeroSectionFormFieldArea = styled(Field)<{
  error?: boolean;
  hasFiles?: boolean;
}>`
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  padding: 7px 23px 17px 15px;
  background: ${themes.primary.colors.grey};
  font-size: 14px;
  font-weight: ${themes.primary.font.weight.medium};
  line-height: ${({ hasFiles }) => (hasFiles ? "130%" : "150%")};
  resize: none;
  outline: none;
  border: none;
  border-radius: 10px;
  margin-top: ${({ hasFiles }) => (hasFiles ? "5px" : "10px")};

  @media ${themes.primary.media.onlyTablet} {
    font-size: 16px;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-color: ${themes.primary.colors.gray};
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${themes.primary.colors.transparent};
  }

  &:focus + div {
    opacity: 0;
  }

  &:not(:placeholder-shown) + div {
    opacity: 0;
  }

  &.talk-to-expert-page {
    @media ${themes.primary.media.min1440} {
      font-size: 16px;
    }
  }
`;

export const HeroSectionFormFieldAreaWrapper = styled.label`
  position: absolute;
  border-radius: 10px;
  width: calc(100% - 8px);
  background: ${themes.primary.colors.grey};
  border: none;
`;

export const HeroSectionFormFieldAreaContainer = styled.div<{
  error?: boolean;
  fileError?: boolean;
  hasFiles?: boolean;
}>`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  border: ${({ error }) =>
    error
      ? `1.5px solid ${themes.primary.colors.adminRed}`
      : `1.5px solid ${themes.primary.colors.black}`};
  border-radius: 14px;
  padding: 3px 3px 7px;
  height: ${({ fileError }) => (fileError ? "118px" : "103px")};

  @media ${themes.primary.media.maxBreakpoint1100} {
    margin-bottom: 30px;
  }

  @media ${themes.primary.media.maxMobile} {
    height: 120px;
  }

  @media ${themes.primary.media.min768Mobile} and ${themes.primary.media
      .maxBreakpoint1100} {
    height: 118px;
    margin-bottom: 30px;
  }

  &.talk-to-expert-page {
    height: ${({ fileError }) => (fileError ? "118px" : "116px")};
    margin-bottom: 32px;
    @media ${themes.primary.media.min1440} {
      height: ${({ fileError }) => (fileError ? "127px" : "116px")};
    }
  }
`;

export const dotAppear = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const FormLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 13px;

  div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${themes.primary.colors.secondary};
    margin: 0 4px;
    animation: ${dotAppear} 1.5s infinite;
    opacity: 0;

    &:nth-child(2) {
      animation-delay: 0.5s;
    }

    &:nth-child(3) {
      animation-delay: 1s;
    }
  }
`;
