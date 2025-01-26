import { Field, Form } from "formik";
import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { errorColorAnimation } from "../Animations.styled";
import checkboxBg from "../../../public/Calculator/checkbox.svg";
import checkboxSign from "../../../public/Calculator/checkboxSign.svg";
import checkBoxBgActive from "../../../public/Calculator/checkBoxBgActive.svg";

export const InputWrapper = styled.div`
  width: 80%;

  &.withMarginBottom {
    margin-bottom: 50px;
  }
`;

export const TransparentTextEditorWrapper = styled.div`
  background-color: transparent;

  & .se-toolbar {
    outline: 0 !important;
    background-color: ${themes.primary.colors.blogBackground} !important;
    border-block: 1px solid ${themes.primary.colors.comment};
    height: 33px !important;

    &.se-toolbar-shadow {
      height: 0 !important;
    }

    & .se-btn-tray {
      padding: 0;
      height: 100%;
    }
    & .se-btn-module-border {
      border: 0;
      border-radius: 0;
      margin: 0;
      height: 100%;
    }

    & .se-menu-list {
      height: 100%;

      & li {
        height: 100%;
      }
    }

    & .se-btn {
      padding-inline: 5px;
      height: 100%;
      border-radius: 0;
      border-right: 1.58px solid ${themes.primary.colors.comment} !important;
      margin: 0 !important;
    }
  }

  & .sun-editor {
    background-color: transparent;
    border: 1px solid ${themes.primary.colors.comment};
    border-top: 0;

    & .txt {
      font-family: ${themes.primary.font.family.namu};
    }

    & p {
      margin: 0;
    }
  }

  & .se-wrapper-inner {
    min-height: 0 !important;
  }

  & .se-btn-list {
    padding-left: 6px;
    font-size: 12px;
    font-family: ${themes.primary.font.family.namu};
    line-height: 132%;
    min-height: 20px;
  }

  & .se-submenu {
    background-color: ${themes.primary.colors.blogBackground};
    box-shadow: none;
    border-radius: 0;
    border: 1px solid ${themes.primary.colors.comment};
  }

  & .se-list-format {
    min-width: 52px !important;
  }

  & .sun-editor-editable {
    background-color: transparent;
    font-size: 16px;
    font-family: ${themes.primary.font.family.openSans} !important;
    color: ${themes.primary.colors.primary} !important;
  }

  & .__se__t-upper {
    text-transform: uppercase;
  }

  & .__se__t-lower {
    text-transform: lowercase;
  }

  & .__se__t-first-letter-capitalize {
    display: block;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  & .__se__t-heavy {
    font-weight: ${themes.primary.font.weight.heavy};
  }

  & .__se__t-extra-bold {
    font-weight: ${themes.primary.font.weight.extraBold};
  }

  & .__se__t-bold {
    font-weight: ${themes.primary.font.weight.bold};
  }

  & .__se__t-semi-bold {
    font-weight: ${themes.primary.font.weight.semiBold};
  }

  & .__se__t-medium {
    font-weight: ${themes.primary.font.weight.medium};
  }

  & .__se__t-normal {
    font-weight: ${themes.primary.font.weight.normal};
  }
  & .__se__t-light {
    font-weight: ${themes.primary.font.weight.light};
  }
`;

export const TextEditorTextContainer = styled(TransparentTextEditorWrapper)`
  & .sun-editor-editable {
    padding: 8px 12px;
  }

  &.radio .sun-editor-editable p {
    position: relative;
    display: inline-block;

    &::before {
      display: inline-block;
      content: " ";
      margin-right: 8px;
      -ms-transform: translateY(10%);
      transform: translateY(10%);
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid ${themes.primary.colors.primary};
    }
  }

  &.checkbox .sun-editor-editable p {
    position: relative;
    display: inline-block;
    &::before {
      content: " ";
      display: inline-block;
      margin-right: 8px;
      width: 16px;
      height: 16px;
      -ms-transform: translateY(10%);
      transform: translateY(10%);
      border: 1px solid ${themes.primary.colors.primary};
    }
  }
`;

export const AddButton = styled.button`
  cursor: pointer;
  width: 58px;
  height: 56px;
  color: ${themes.primary.colors.blogBackground};
  background-color: ${themes.primary.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  line-height: 42px;
  border: 0;
  margin-right: 14px;

  &.disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }

  &.tieup {
    background-color: ${themes.primary.colors.darkBlue};
  }
`;

export const MinusButton = styled.button`
  cursor: pointer;
  width: 58px;
  height: 56px;
  background-color: ${themes.primary.colors.blogBackground};
  color: ${themes.primary.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  border: 2px dashed ${themes.primary.colors.primary};
`;

export const ButtonsText = styled.div`
  font-size: 16px;
  line-height: 132%;
  margin-left: 22px;
`;

export const ButtonsRowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 14px;
`;

export const SubStepContentContainer = styled.div`
  margin-top: 30px;
`;

export const StepSubTitle = styled.h3`
  font-size: 22px;
  line-height: 132%;
  color: ${themes.primary.colors.darkBlue};
  margin-bottom: 10px;
`;

export const SubStepSubtitle = styled.p`
  margin: 0 0 12px 0;
  font-size: 16px;
  line-height: 132%;
`;

export const InputsWrapper = styled(Form)``;

export const TieUpShadowWrapper = styled.div`
  position: absolute;
  box-sizing: content-box;
  top: 0;
  width: 19.5px;
  height: 18.4px;
  border-radius: 50%;
  border: 1.5px solid ${themes.primary.colors.primary};
  background: linear-gradient(
    150deg,
    ${themes.primary.colors.darkBlue},
    ${themes.primary.colors.darkBlue} 43%,
    ${themes.primary.colors.primary} 43%
  );
`;

export const TieUpInput = styled(Field)`
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  z-index: 2;
  font-family: ${themes.primary.font.family.openSans};

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px ${themes.primary.colors.blogBackground} inset !important;
    -webkit-box-shadow: 0 0 0 30px ${themes.primary.colors.blogBackground} inset !important;
  }

  outline: none;

  &:checked ~ label {
    color: ${themes.primary.colors.darkBlue};

    & span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  &.warn-text {
    color: red;

    &.warn-text::placeholder {
      color: red;
    }
  }

  &.admin-radio {
    background-color: ${themes.primary.colors.blogBackground};
    margin: 0;
    min-width: 15px;
    max-width: 15px;
    height: 15px;
    border: 1px solid ${themes.primary.colors.primary};
    transform: translateY(15%);
    border-radius: 50%;
    display: grid;
    place-content: center;

    &::before {
      content: "";
      min-width: 15px;
      max-width: 15px;
      height: 15px;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${themes.primary.colors.primary};
      background-color: ${themes.primary.colors.primary};
    }
    &:checked::before {
      transform: scale(1);
    }
  }

  &.admin-checkbox {
    min-width: 16px;
    max-width: 16px;
    height: 16px;
    border: 1px solid ${themes.primary.colors.primary};
    background-color: transparent;
    position: relative;
    border-radius: 0;

    &::before {
      content: " ";
      top: 0;
      bottom: 2px;
      left: 0.5px;
      right: 0;
      margin: auto;
      width: 4px;
      height: 8px;
      position: absolute;
      border-width: 0 3px 3px 0;
      border-color: ${themes.primary.colors.primary};
      transition: 120ms transform ease-in-out;
      transform: rotate(45deg);
      border-style: solid;
    }

    &:checked::before {
      transform: rotate(45deg) scale(1);
    }

    &:not(:checked):before {
      transform: rotate(45deg) scale(0);
    }
  }

  &.radio {
    margin-right: 8px;
    background-color: ${themes.primary.colors.blogBackground};
    margin: 0;
    min-width: 19px;
    width: 19px;
    height: 20px;
    border: 1.5px solid ${themes.primary.colors.primary};
    border-radius: 50%;
    display: grid;
    place-content: center;
    position: relative;

    &::before {
      content: "";
      min-width: 10px;
      max-width: 10px;
      height: 10px;
      border-radius: 50%;
      transform: scale(0);
      transition: 120ms transform ease-in-out;
      border: 1.5px solid ${themes.primary.colors.primary};
      background: linear-gradient(
        90deg,
        ${themes.primary.colors.mainGradientColor1} 0%,
        ${themes.primary.colors.mainGradientColor2} 100%
      );
    }

    &:hover {
      border-color: ${themes.primary.colors.darkBlue};

      & + div {
        border-color: ${themes.primary.colors.darkBlue};
        background: ${themes.primary.colors.darkBlue};
      }
    }

    &:checked {
      &::before {
        transform: scale(1) translateY(-0.5px);
      }
    }
  }

  &.checkbox {
    margin: 0;
    min-width: 26px;
    max-width: 26px;
    height: 26px;
    background: url(${checkboxBg.src});
    background-size: contain;
    background-repeat: no-repeat;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: -2px;
      left: 4px;
      width: 25px;
      height: 19.2px;
      background: url(${checkboxSign.src});
      background-size: contain;
      background-repeat: no-repeat;
      transition: transform 0.3s;
      transform: scale(0);
    }

    &:hover {
      background-image: url(${checkBoxBgActive.src});
    }

    &:checked {
      &::before {
        transform: scale(1);
      }
    }
  }

  &.email {
    width: 98%;
    background-color: transparent;
    border: 0;
    outline: none;
    font-size: 1.125em;

    &.invalid {
      animation: ${errorColorAnimation} 1.5s ease-in-out;
    }
    &::placeholder {
      color: ${themes.primary.colors.calculatorEmailPlaceholder};
    }
  }

  @media ${themes.primary.media.minPC} {
    &.radio {
      &:checked::before {
        transform: scale(1) translateY(0.3px);
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    &.radio {
      &:checked::before {
        transform: scale(1);
      }
    }

    &.email {
      width: 96%;
    }
  }
`;

export const TieUpLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
  display: flex;
  transition: 0.15s;
  position: relative;

  &.admin {
    margin-left: 8px;
  }

  & > span {
    margin-left: 12px;
    display: flex;
    align-items: center;
    ${css`
      &:has(> div) {
        margin-top: 1px;
      }
    `}
  }

  ${css`
    &:has(> input:checked) {
      color: ${themes.primary.colors.darkBlue} !important;

      & span {
        color: ${themes.primary.colors.darkBlue} !important;
      }
    }
  `}
  & p {
    margin: 0;
  }

  &.active,
  &:hover {
    cursor: pointer;
    color: ${themes.primary.colors.darkBlue} !important;

    & span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 17px;

    & > span {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &.checkbox > span {
      ${css`
        &:has(> div) {
          margin-top: 6px;
        }
      `};
    }
  }
`;

export const OptionWrapper = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 16px;
  width: 100%;

  @media ${themes.primary.media.maxMobile} {
    margin-bottom: 20px;
  }
`;

export const DropDownContainer = styled.div`
  margin-top: 29px;
`;

export const DropDownHeader = styled.div`
  width: 106px;
  height: 31px;
  font-size: 16px;
  line-height: 19px;
  border: 0.2px solid ${themes.primary.colors.primary};
  background-color: ${themes.primary.colors.blogBackground};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: ${themes.primary.colors.adminInputBorder};
  }

  & svg {
    transition: transform 0.3s;
  }

  &.open svg {
    transform: rotate(180deg);
  }
`;

export const HiddenContent = styled.div`
  display: none;
  position: absolute;
  z-index: 3;

  &.open {
    display: block;
  }
`;

export const DropdownStepItem = styled(DropDownHeader)``;

export const ChooseTitle = styled.h2`
  text-transform: uppercase;
  font-size: 1.666em;
  line-height: 99%;
  margin-bottom: 0.6em;
`;

export const ChooseButton = styled.button`
  font-size: 1.666em;
  line-height: 160%;
  font-family: ${themes.primary.font.family.namu};
  padding: 0.55em 4.25em;
  text-transform: uppercase;
  cursor: pointer;

  &.active {
    background: linear-gradient(
      61.63deg,
      ${themes.primary.colors.mainGradientColor1} 0%,
      ${themes.primary.colors.mainGradientColor2} 100%
    );
    border: 2px solid ${themes.primary.colors.primary};
  }

  &.disabled {
    background: ${themes.primary.colors.calculatorButtonBg};
    border: 2px solid ${themes.primary.colors.calculatorButtonBorderBg};
    color: ${themes.primary.colors.comment};
  }
`;

export const ChooseButtonsWrapper = styled.div`
  display: flex;
  column-gap: 3.666em;
  margin-bottom: 4.1666em;
`;

export const TieUpContainer = styled.div``;

export const TypeFieldWrapper = styled.div`
  display: flex;

  column-gap: 16px;
`;

export const AdminCalculatorTypeInput = styled(Field)`
  width: 274px;
  height: 56px;
  padding-inline: 17px;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  background-color: ${themes.primary.colors.blogBackground};
  outline: none;
  font-family: ${themes.primary.font.family.namu};
  font-size: 14px;

  &::placeholder {
    color: ${themes.primary.colors.adminInputBorder};
    letter-spacing: 0.03em;
  }
`;

export const CalculatorAdminAddTypeWrapper = styled.div`
  margin-bottom: 2.666em;
`;

export const CalculatorTypeGrid = styled.div`
  max-width: 1104px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 18px;
`;

export const CalculatorRateComponentWrapper = styled.div``;

export const CalculatorPriceField = styled(Field)`
  padding-inline: 14px;
  height: 56px;
  background-color: transparent;
  outline: none;
  border: 1px solid ${themes.primary.colors.adminInputBorder};
  font-size: 1.333em;
  font-family: ${themes.primary.font.family.namu};
  width: 100%;
  position: relative;

  &::placeholder {
    color: ${themes.primary.colors.comment};
  }
`;

export const CalculatorPriceDeleteBtn = styled.div`
  margin-top: 4px;
  font-size: 14px;
  color: ${themes.primary.colors.adminRed};
  cursor: pointer;
`;

export const CalculatorRateFieldWrapper = styled.div`
  display: inline-block;
  position: relative;

  &::after {
    content: "USD";
    font-size: 1.3em;
    position: absolute;
    top: 18px;
    right: 0.9em;
    transition: all 0.05s ease-in-out;
  }

  &:hover::after,
  &:focus-within::after {
    right: 2.3em;
  }
`;

export const CalculatorTypeSelectHeaderWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid ${themes.primary.colors.comment};
  max-width: 52px;
  cursor: pointer;

  & svg {
    transition: transform 0.15s;
  }

  &.open {
    border-bottom-width: 0;

    & svg {
      transform: rotate(180deg);
    }
  }
`;

export const CalculatorTypeSelectHeaderImageWrapper = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
`;

export const CalculatorSelectOptionWrapper = styled.div`
  padding: 7.5px 10px;
  cursor: pointer;
  background-color: ${themes.primary.colors.blogBackground};

  &:hover {
    background-color: ${themes.primary.colors.lightGray};
  }

  &:last-child {
    padding-bottom: 12px;
  }
`;

export const CalculatorHiddenContentWrapper = styled.div`
  position: absolute;
  z-index: 10;
  background-color: ${themes.primary.colors.blogBackground};
  border: 1px solid ${themes.primary.colors.comment};
  border-top-width: 0;
  width: 52px;

  &.hidden {
    display: none;
  }

  &.open {
    display: block;
  }
`;

export const CalculatorQuestionInputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-bottom: 60px;
`;

export const OptionInputsWrapper = styled.div`
  margin-block: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const OptionDeleteButton = styled.button`
  font-family: ${themes.primary.font.family.namu};
  font-size: 14px;
  line-height: 132%;
  color: ${themes.primary.colors.adminRed};
  border: 0;
  cursor: pointer;
  padding: 0;
`;

export const OptionInputsRowWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const OptionInput = styled(Field)`
  height: 24px;
  border: 1px solid ${themes.primary.colors.comment};
  background: transparent;
  outline: none;
  font-family: ${themes.primary.font.family.namu};

  &.hours {
    width: 50px;
  }

  &.coef {
    width: 120px;
  }
`;

export const CalculatorTypeSelectWrapper = styled.div`
  height: 24px;
`;

export const CalculatorTypeSelectHeader = styled.div`
  height: 100%;
  width: 97px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 3px;
  border: 1px solid ${themes.primary.colors.comment};
  cursor: pointer;

  & span {
    max-width: 92px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    transition: 0.3s transform;
  }

  &.open {
    svg {
      transform: rotate(180deg);
    }
  }
`;

export const CalculatorTypeSelectContent = styled.div`
  position: absolute;
  display: none;

  &.open {
    display: block;
  }
`;

export const CalculatorMultiplyTypeSelectContent = styled.div`
  position: absolute;
  display: none;
  border: 1px solid ${themes.primary.colors.comment};

  &.open {
    display: block;
  }
`;

export const CalculatorMultiplyTypeSelectOption = styled.div`
  background-color: ${themes.primary.colors.blogBackground};
  padding: 3px 6px;
  display: flex;
  align-items: center;
  & label {
    font-size: 12px;
  }
`;

export const CalculatorTypeSelectOption = styled.div`
  display: flex;
  align-items: center;
  padding-inline: 5px;
  height: 24px;
  border: 1px solid ${themes.primary.colors.comment};
  background-color: ${themes.primary.colors.blogBackground};
  border-bottom: 0;
  cursor: pointer;

  &:hover {
    background-color: ${themes.primary.colors.comment};
  }

  &:last-child {
    border-bottom: 1px solid ${themes.primary.colors.comment};
  }
`;

export const CalculatorAddButton = styled.button`
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  color: ${themes.primary.colors.whatsApp};
  border: 0;
  padding: 0;
  cursor: pointer;
`;

export const CalculatorQuestionWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;
