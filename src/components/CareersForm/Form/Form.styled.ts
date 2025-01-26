import styled, { keyframes } from "styled-components";
import { FormikProvider, Field } from "formik";
import themes from "../../../utils/themes";

interface ICVProps {
  active: boolean;
}

interface ILabelOptions {
  inCvInput: boolean;
  cvlink: boolean;
}

interface IFormField extends ITitle {
  isEmpty: boolean;
}

interface ITitle {
  isCvIn: boolean;
}

interface ISpinner {
  isLoading: boolean;
}

interface ISentButton {
  isDisabled: boolean;
}

interface IFillAllFields {
  toDisplay: boolean;
}

interface IEnableGlare {
  enabled: boolean;
}

export const FormFieldContainer = styled.div`
  width: 100%;
  height: 74px;
  position: relative;

  @media ${themes.primary.media.minPCFullHD} {
    height: 101.5px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 64px;
  }
`;

export const FormField = styled(Field)<IFormField>`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1px solid black;

  font-family: ${themes.primary.font.family.namu};

  font-size: 16px;
  padding: 0 0 0 12px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${themes.primary.colors.careersPlaceholder};
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
    padding: 0 0 0 19px;
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 16px;
    padding: 0 0 0 23px;
  }

  @media ${themes.primary.media.minTablet} {
    font-size: 14px;
    padding: 0 0 0 12.5px;
  }
`;

const opacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

export const Form = styled.form`
  border: 1.6px solid ${themes.primary.colors.primary};
`;

export const SubmitButton = styled.div`
  width: 100%;
  text-align: center;
`;

export const BottomText = styled.p`
  line-height: 1.625rem;
  font-family: ${themes.primary.font.family.gilroy};
  font-style: normal;
`;
export const FormProvider = styled(FormikProvider)``;

export const FileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.188rem;
  margin-bottom: 0;
  height: 2.8em;
  @media ${themes.primary.media.maxLaptop} {
    height: auto;
    flex-direction: column;
    align-items: center;
  }
  @media ${themes.primary.media.maxTabletLandScape} {
    flex-direction: column;
    align-items: center;
  }
  @media ${themes.primary.media.maxMobile} {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-around;
  }
  @media ${themes.primary.media.minTablet} {
    flex-direction: column;
    align-items: center;
  }
`;

export const FileLoad = styled.p`
  animation: ${opacity} 2.5s forwards;
`;

export const FileInputWrapper = styled.div<ICVProps>`
  position: relative;
  text-align: center;
  height: 2.8em;
  font-size: 0.75em;
  color: #bdbdbd;
  display: ${({ active }) => (active ? "none;" : "block;")};
  line-height: 1.7;
  background: none;
  animation: ${opacity} 2s;
  width: 20.375rem;
  padding: 1.438rem 2.75rem;
  background: white;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.05);
`;

export const InputFile = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
`;

export const InputFileLabel = styled.label`
  width: 100%;
  color: black;
  font-size: ${themes.primary.font.size.buttonText};
  font-weight: ${themes.primary.font.weight.light};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  position: absolute;
  top: 9px;
  align-items: center;
`;

export const FileButton = styled.span`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const FileText = styled.span`
  line-height: 1;
  margin-top: 1px;
  margin-left: 5px;
  color: #3c95f9;
  font-weight: ${themes.primary.font.weight.extraBold};
`;

export const FileImg = styled.img`
  margin-top: 4px;
`;

export const SentMessage = styled.div`
  transform: translateY(2rem);
  font-weight: ${themes.primary.font.weight.bold};
  color: ${themes.primary.colors.lightBlue};
  @media ${themes.primary.media.maxLaptop} {
    transform: none;
  }
`;

export const ErrorMessage = styled.p`
  color: ${themes.primary.colors.errorText};
  text-align: center;
  font-size: ${themes.primary.font.size.linkText};
  font-weight: ${themes.primary.font.weight.bold};
`;

export const FormSentButton = styled.button<ISentButton>`
  width: 280px;
  height: 56px;
  border: 2px solid ${themes.primary.colors.primary};
  cursor: pointer;
  background: ${themes.primary.colors.blogBackground};

  span {
    color: ${({ isDisabled }) => (isDisabled ? "grey" : "black")};
  }

  @media ${themes.primary.media.minPCFullHD} {
    width: 370px;
    height: 75px;
  }

  @media ${themes.primary.media.maxMobile} {
    border: 1.48px solid ${themes.primary.colors.primary};
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 198px;
    height: 49px;
  }
`;

export const FormSentFillText = styled.span<IFillAllFields>`
  display: ${({ toDisplay }) => (toDisplay ? "inline-block" : "none")};
  color: grey;
  font-weight: ${themes.primary.font.weight.normal};
  font-family: ${themes.primary.font.family.namu};
  font-size: 12px;
  position: absolute;
  bottom: 0;
  margin-bottom: 6px;
  text-align: center;

  @media ${themes.primary.media.minPCFullHD} {
    margin-bottom: 12px;
  }
`;

export const FormSentWrap = styled.span`
  color: grey;
  margin: 0;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 0.875rem;
  }
`;

export const FormSentText = styled.span`
  margin: 0;
  color: ${themes.primary.colors.primary};

  &:first-letter {
    text-transform: capitalize;
  }

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 20px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 0.875rem;
  }
`;

export const FormSentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 111px;
  flex-direction: column;
  position: relative;

  background: linear-gradient(
    75.6deg,
    ${themes.primary.colors.infiniteTextGradientColor1} -9.39%,
    ${themes.primary.colors.infiniteTextGradientColor2} 110.45%
  );

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    font-size: 16px;
    font-weight: ${themes.primary.font.weight.heavy};
    font-family: ${themes.primary.font.family.namu};
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 144px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    height: 101px;
  }
`;

export const Shadow = styled.div<IEnableGlare>`
  display: ${({ enabled }) => (enabled ? "inline-block" : "none")};
  width: 104%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    180deg,
    rgba(241, 239, 237, 0.8) 100%,
    rgba(241, 239, 237, 0) 114.26%
  );
  position: absolute;
`;

export const PositionSelect = styled.div<IEnableGlare>`
  height: 75px;
  width: 100%;

  div {
    z-index: ${({ enabled }) => (enabled ? "2" : "1")};

    width: 100%;
    height: 100%;

    position: relative;

    button {
      border: none !important;
      border-bottom: 1px solid black !important;
      display: flex;
      align-items: center;
      padding: 0 18px 0 12px;
      height: 100%;
      width: 100%;
      position: relative;

      &:hover {
        border-bottom: 1px solid black !important;
        border-right: none !important;
      }

      &.open {
        box-shadow: 13px 0px 0px 0px black;

        border-bottom: none !important;
        border-right: 1px solid black !important;
        transition: none;
      }

      img {
        position: absolute;
        width: 12.6px;
        height: 7px;
        aspect-ratio: 1 / 1;
        right: 0;
        margin: 8px 21px 0 0;
      }
    }
  }

  div:nth-child(2) {
    height: auto;

    &:last-child {
      div:last-child {
        color: ${themes.primary.colors.darkBlue};
      }

      border-bottom: 10px solid black;
      border-right: 1px solid black !important;
      box-shadow: 13px 0px 0px 0px black;
      border-left: none;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    height: 101.5px;

    div {
      button {
        padding: 0 17px;
        font-size: 20px;
      }
    }
  }

  @media ${themes.primary.media.maxMobile} {
    div {
      button {
        padding: 0 22px;
        font-size: 16px;
      }
    }
  }

  @media ${themes.primary.media.minTablet} {
    height: 65px;

    div {
      button {
        padding: 0 13px;
        font-size: 14px;
      }
    }
  }
`;

export const DropCv = styled.input`
  height: 100%;
  width: 77px;
  border-left: 1px solid black;
  position: absolute;
  right: 0;

  display: none;
`;

export const Cvfield = styled.div<IFormField>`
  height: 100%;
  width: 100%;
  position: relative;

  display: ${({ isCvIn }) => (isCvIn ? "none" : "inline-block")};

  input {
    color: ${({ isEmpty }) =>
      isEmpty ? themes.primary.colors.darkBlue : "black"};

    &::placeholder {
      color: ${({ isEmpty }) =>
        isEmpty ? themes.primary.colors.darkBlue : "gray"};
    }
  }
`;

export const Label = styled.label<ILabelOptions>`
  display: ${({ inCvInput, cvlink }) =>
    inCvInput || cvlink ? "none" : "inline-block"};
  height: 100%;
  width: 79px;
  border-left: 1px solid black;
  position: absolute;
  right: 0;
  color: gray;
  cursor: pointer;

  @media ${themes.primary.media.minPCFullHD} {
    width: 100px;
  }

  @media ${themes.primary.media.maxMobile} {
    width: 75px;
  }

  @media ${themes.primary.media.minTablet} {
    width: 57px;
  }
`;

export const LabelTitle = styled.span`
  margin: 0 0 0 10%;
  font-size: 12px;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 16px;
    margin: 0 0 0 12%;
  }

  @media ${themes.primary.media.minTablet} {
    font-size: 10px;
  }
`;

export const Clip = styled.img`
  margin-block: 15px 5px;
  display: flex;
  margin-left: 35%;
  width: 25px;
  height: 25px;

  @media ${themes.primary.media.minPCFullHD} {
    width: 32px;
    height: 32px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  @media ${themes.primary.media.minTablet} {
    width: 17px;
    height: 17px;
    margin-bottom: 5px;
  }
`;

export const LabelWithClipContainer = styled.span<ISpinner>`
  display: ${({ isLoading }) => (isLoading ? "none" : "block")};
`;

export const TitleContainer = styled.div<ITitle>`
  width: 100%;
  height: 100%;
  display: ${({ isCvIn }) => (isCvIn ? "flex" : "none")};
  position: absolute;
  border-bottom: 1px solid black;
  align-items: center;
`;

export const Title = styled.span`
  color: ${themes.primary.colors.darkBlue};
  margin-left: 15px;
`;

export const DeleteCv = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 10px;
  margin-top: 2px;
  cursor: pointer;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.span<ISpinner>`
  width: 100%;
  height: 100%;

  justify-content: center;
  align-items: center;

  animation: ${rotate360} 1s linear infinite;

  display: ${({ isLoading }) => (isLoading ? "flex" : "none")};
`;
