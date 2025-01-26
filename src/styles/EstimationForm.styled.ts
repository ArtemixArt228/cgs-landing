import styled from "styled-components";
import themes from "../utils/themes";

interface IBlockErrorSplit {
  readonly error?: boolean;
  readonly split?: boolean;
  readonly optional?: boolean;
  readonly borderErrorEmail?: boolean;
  readonly borderErrorUsername?: boolean;
}

interface IButtonModal {
  readonly white?: boolean;
}

interface IWrapperInput {
  type: string;
}

export const AddQuestionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${themes.primary.font.size.projectLink};
  font-family: ${themes.primary.font.family.namu};
  padding: 10px 26px;
  border: 2px dashed ${themes.primary.colors.darkBlue};
  background-color: transparent;
  outline: none;
  border-radius: 0;
  cursor: pointer;
  color: ${themes.primary.colors.darkBlue};
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: ${themes.primary.spacing.septenary};

  &:hover {
    background-color: ${themes.primary.colors.darkBlue};
    color: ${themes.primary.colors.secondary};
  }

  span {
    font-size: 35px;
    margin: 0 10px 0 0;
  }
`;

export const QuestionBlockHeader = styled.h3`
  font-size: ${themes.primary.font.size.headerLinkText};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0 7px 0;
`;

export const QuestionBlock = styled.div`
  width: 100%;
  font-family: ${themes.primary.font.family.namu};
  padding: 20px;
  border: 2px solid ${themes.primary.colors.headerBorder};
  margin-bottom: ${themes.primary.spacing.tertiary};
`;

export const EstimationFormInputHeader = styled.h3`
  font-size: ${themes.primary.font.size.mainBlogDescription};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  margin: 0 0 10px 0;
`;

export const EstimationFormDropDownWrapper = styled.div`
  display: flex;
  align-items: center;
  z-index: 3;
`;

export const AdditinalAttributesBlock = styled.div`
  margin-bottom: 15px;
`;

export const EstimationDeleteQuestion = styled.p`
  color: ${themes.primary.colors.errorText};
  margin: 10px;
  font-size: 16px;
  line-height: 132%;
  cursor: pointer;
`;

export const StyledConditionsForAppearanceBlock = styled.div`
  border: 1px solid ${themes.primary.colors.dropdownBorder};
  padding: 10px;
  margin: 10px 0 5px 0;
`;

export const AddOptionInputWrapper = styled.div<IWrapperInput>`
  margin: 0 0 15px 0;
  border: none;
  margin-left: 11px;

  button {
    background: none;
    border: none;
    color: ${themes.primary.colors.headerBorder};
    position: relative;
    font-size: 16px;
    font-family: ${themes.primary.font.family.namu};

    &::before {
      display: inline-block;
      content: " ";
      margin-right: ${({ type }) => (type === "TEXT" ? 0 : "8px")};
      -ms-transform: translateY(10%);
      transform: translateY(10%);
      width: 13px;
      height: 13px;
      border-radius: ${({ type }) => (type === "RADIO_BUTTON" ? "50%" : 0)};
      border: 1px solid ${themes.primary.colors.primary};
    }
  }

  &::before {
    border: 1px solid ${themes.primary.colors.primary};
  }
`;

export const ContainerEstimationForm = styled.div`
  display: flex;
  justify-content: center;
  margin-block: calc(
      clamp(52px, 52px + (100vw - 1440px) * ((79 - 52) / (1920 - 1440)), 79px)
    )
    calc(
      clamp(
        112px,
        112px + (100vw - 1440px) * ((160 - 112) / (1920 - 1440)),
        160px
      )
    );

  @media ${themes.primary.media.maxMobile} {
    margin-block: 90px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-block: 28px 70px;
  }
`;

export const EstimationFormWrapper = styled.div`
  margin: 0 41px;
  width: calc(
    clamp(
      875px,
      875px + (100vw - 1440px) * ((1167 - 875) / (1920 - 1440)),
      1167px
    )
  );

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    margin: 0 41px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin: 0 20px;
  }
`;

export const EstimationFormElementsWrapper = styled.div`
  display: flex;
  gap: calc(
    clamp(28px, 28px + (100vw - 1440px) * ((40 - 28) / (1920 - 1440)), 40px)
  );
  flex-direction: column;

  @media ${themes.primary.media.maxMobile} {
    gap: 29px;
  }
`;

export const EstimationConditionsForAppearanceHeader = styled.p`
  font-size: 16px;
  line-height: 132%;
`;

export const EstimationQuestionAdditional = styled.div`
  position: absolute;
  top: 5px;
  right: -35px;
  transition: 0.3s;
  padding-left: 50px;

  @media ${themes.primary.media.maxMobile} {
    right: -12px;
  }
`;

export const EstimationFieldBox = styled.div<IBlockErrorSplit>`
  position: relative;
  background-color: ${({ error }) =>
    error
      ? `${themes.primary.colors.darkBlue}`
      : `${themes.primary.colors.blogBackground}`};
  color: ${({ error }) =>
    error
      ? `${themes.primary.colors.estimationAdminBg}`
      : `${themes.primary.colors.black}`};
  z-index: 1;
  border: ${({ borderErrorEmail, borderErrorUsername }) =>
    borderErrorEmail || borderErrorUsername
      ? `2px solid ${themes.primary.colors.deleteButton}`
      : `2px solid ${themes.primary.colors.black}`};
  padding: calc(
      clamp(
        15px,
        15px + (100vw - 1440px) * ((19.5 - 15) / (1920 - 1440)),
        19.5px
      )
    )
    calc(
      clamp(17px, 17px + (100vw - 1440px) * ((22 - 17) / (1920 - 1440)), 22px)
    );

  @media ${themes.primary.media.maxMobile} {
    border: ${({ borderErrorEmail, borderErrorUsername }) =>
      borderErrorEmail || borderErrorUsername
        ? `1.5px solid ${themes.primary.colors.deleteButton}`
        : `1.5px solid ${themes.primary.colors.black}`};
  }
`;

export const EstimationFieldLabel = styled.p<IBlockErrorSplit>`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: calc(
    clamp(22px, 22px + (100vw - 1440px) * ((28 - 22) / (1920 - 1440)), 28px)
  );
  border-bottom: ${(props) =>
    props.split
      ? props.error
        ? `1px solid ${themes.primary.colors.bottomBorderEstimationForm}`
        : `1px solid ${themes.primary.colors.headerBorder}`
      : "none"};
  line-height: normal;
  padding: ${(props) => (props.split ? "0 0 14px 0" : "0 0 19px 0")};
  margin: ${(props) => (props.split ? "0 0 19px 0" : "0")};

  &.radioField {
    padding: 3px 0 0 0;
    margin-bottom: calc(
      clamp(16px, 16px + (100vw - 1440px) * ((24 - 16) / (1920 - 1440)), 24px)
    );
  }

  @media ${themes.primary.media.minPCFullHD} {
    padding: ${(props) => (props.split ? "0 0 22px 0" : "0 0 27px 0")};
  }

  @media ${themes.primary.media.maxMobile} {
    border-bottom: none;
    padding: 0px;
    margin-bottom: 20px;
    font-size: 22px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 16px;
    margin-bottom: 19px;

    &.radioField {
      margin-bottom: 18px;
    }
  }
`;

export const EstimationFieldOptionCheckbox = styled.label<IBlockErrorSplit>`
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  line-height: normal;
  cursor: pointer;
  padding: 0
    calc(
      clamp(10px, 10px + (100vw - 1440px) * ((14 - 10) / (1920 - 1440)), 14px)
    )
    calc(
      clamp(16px, 16px + (100vw - 1440px) * ((21 - 16) / (1920 - 1440)), 21px)
    );

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 18px;
    padding: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 14px;
    padding: 0;
  }

  p {
    margin: 0;
    span {
      color: ${(props) =>
        props.error &&
        `${themes.primary.colors.bottomBorderEstimationForm} !important`};
    }
  }
`;

export const EstimationFieldOptionRadio = styled.label<IBlockErrorSplit>`
  margin: 0;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  line-height: normal;
  cursor: pointer;

  padding: 0
    calc(
      clamp(10px, 10px + (100vw - 1440px) * ((14 - 10) / (1920 - 1440)), 14px)
    )
    calc(
      clamp(16px, 16px + (100vw - 1440px) * ((21 - 16) / (1920 - 1440)), 21px)
    );

  @media ${themes.primary.media.maxMobile} {
    width: 100%;
    font-size: 18px;
    padding: 0;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 14px;
  }

  p {
    margin: 0;
    span {
      color: ${(props) =>
        props.error &&
        `${themes.primary.colors.bottomBorderEstimationForm} !important`};
    }
  }
`;

export const EstimationTextInput = styled.input<IBlockErrorSplit>`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: calc(
    clamp(18px, 18px + (100vw - 1440px) * ((24 - 18) / (1920 - 1440)), 24px)
  );
  line-height: normal;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  color: ${(props) =>
    props.error
      ? `${themes.primary.colors.secondary}`
      : props.optional
      ? `${themes.primary.colors.darkBlue}`
      : props.borderErrorEmail || props.borderErrorUsername
      ? `${themes.primary.colors.deleteButton}`
      : `${themes.primary.colors.black}`};

  &::placeholder {
    color: ${(props) =>
      props.error && `${themes.primary.colors.bottomBorderEstimationForm}`};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 18px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 14px;
  }
`;

export const EstimationInputFlex = styled.div`
  display: flex;
  align-items: flex-start;

  @media ${themes.primary.media.maxMobile} {
    align-items: center;
    gap: 11px;
  }
`;

export const EstimationInputRadio = styled.input`
  appearance: none;
  margin: 0 0 0 -2px;
  /* Safari support */
  -webkit-appearance: none;
  width: calc(
    clamp(24px, 24px + (100vw - 1440px) * ((29 - 24) / (1920 - 1440)), 29px)
  );
  height: calc(
    clamp(24px, 24px + (100vw - 1440px) * ((27 - 24) / (1920 - 1440)), 27px)
  );
  cursor: pointer;
  flex: 0 0 auto;
  background-image: url("EstimationForm/RadioBtnForm.svg");
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 47.5%;
    left: 43%;
    transform: translate(-50%, -50%);
    display: block;
    border-radius: 50%;
    width: calc(
      clamp(
        7.5px,
        7.5px + (100vw - 1440px) * ((11.5 - 7.5) / (1920 - 1440)),
        11.5px
      )
    );
    height: calc(
      clamp(8px, 8px + (100vw - 1440px) * ((12 - 8) / (1920 - 1440)), 12px)
    );
  }

  &:checked {
    ::after {
      background: linear-gradient(
        90deg,
        ${themes.primary.colors.infiniteTextGradientColor1} 0%,
        ${themes.primary.colors.infiniteTextGradientColor2} 100%
      );
      border: 2px solid ${themes.primary.colors.black};
    }
  }

  &:checked + ${EstimationFieldOptionRadio} {
    color: ${themes.primary.colors.darkBlue};
    span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  @media ${themes.primary.media.maxPCFullHD} {
    &::after {
      content: "";
      top: 45%;
      left: 42%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 22px;
    height: 20px;
    display: grid;
    place-items: center;

    &::after {
      content: "";
      top: 50%;
      left: 43%;
      transform: translate(-50%, -50%);
      width: 7px;
      height: 7px;
    }
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    &::after {
      content: "";
      top: 49%;
      left: 43%;
    }
  }
`;

export const EstimationInputCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  position: relative;
  flex: 0 0 auto;
  width: calc(
    clamp(22px, 22px + (100vw - 1440px) * ((33 - 22) / (1920 - 1440)), 33px)
  );
  height: calc(
    clamp(22px, 22px + (100vw - 1440px) * ((33 - 22) / (1920 - 1440)), 33px)
  );
  cursor: pointer;
  background-image: url("EstimationForm/CheckBtnForm.svg");
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  place-items: center;

  &::before {
    content: "";
    width: calc(
      clamp(26px, 26px + (100vw - 1440px) * ((32 - 26) / (1920 - 1440)), 32px)
    );
    height: calc(
      clamp(21px, 21px + (100vw - 1440px) * ((25 - 21) / (1920 - 1440)), 25px)
    );
    position: absolute;
    left: calc(
      clamp(1px, 1px + (100vw - 1440px) * ((4 - 1) / (1920 - 1440)), 4px)
    );
    top: calc(
      clamp(-5px, -5px + (100vw - 1440px) * ((-5 - 1) / (1920 - 1440)), -1px)
    );
  }

  &:checked {
    ::before {
      background-image: url("/markerEstimation.svg");
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  &:checked + ${EstimationFieldOptionCheckbox} {
    color: ${themes.primary.colors.darkBlue};
    span {
      color: ${themes.primary.colors.darkBlue} !important;
    }
  }

  @media ${themes.primary.media.minPCFullHD} {
    &::before {
      content: "";
      left: 4px;
      top: -1px;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 25px;
    height: 26px;

    &::before {
      content: "";
      left: 1px;
      top: -2px;
    }
  }
`;

export const EstimationTooltipText = styled.span`
  visibility: hidden;
  background-color: ${themes.primary.colors.black};
  color: ${themes.primary.colors.secondary};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 12px;
  line-height: 18px;
  width: 240px;
  height: 85px;
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  top: -95px;
  left: -107px;
  z-index: 1;

  div:nth-child(2) {
    text-decoration: underline;
  }

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  @media ${themes.primary.media.maxTabletLandScape} {
    width: 200px;
    height: 70px;
    left: -177px;
    top: -75px;

    &:after {
      content: "";
      left: 95%;
    }
  }

  @media ${themes.primary.media.maxMobile} {
    width: 200px;
    height: 70px;
    left: -177px;
    top: -75px;

    &:after {
      content: "";
      left: 95%;
    }
  }
`;

export const EstimationTooltip = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${themes.primary.colors.black};
  background-image: url("/questionMark.svg");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover ${EstimationTooltipText} {
    visibility: visible;
  }
`;

export const EstimationImageContainer = styled.div`
  position: absolute;

  @media ${themes.primary.media.maxMobile} {
    display: none;
  }
`;

export const EstimationPaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: calc(
    clamp(16px, 16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)), 20px)
  );
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;

  @media ${themes.primary.media.maxMobile} {
    justify-content: center;
    margin-top: 90px;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    margin-top: 33px;
  }
`;

export const EstimationPaginationPage = styled.div`
  width: calc(
    clamp(26px, 26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)), 35px)
  );
  height: calc(
    clamp(26px, 26px + (100vw - 1440px) * ((35 - 26) / (1920 - 1440)), 35px)
  );
  font-size: calc(
    clamp(16px, 16px + (100vw - 1440px) * ((20 - 16) / (1920 - 1440)), 20px)
  );
  display: grid;
  place-items: center;
  cursor: pointer;

  @media ${themes.primary.media.maxMobile} {
    width: 53px;
    height: 42px;
    font-size: 24px;
    line-height: 127%;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 26px;
    height: 26px;
    font-size: 16px;
  }
`;

export const EstimateNavigation = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: calc(
    clamp(15px, 15px + (100vw - 1440px) * ((31 - 15) / (1920 - 1440)), 31px)
  );

  @media ${themes.primary.media.maxMobile} {
    flex-direction: column-reverse;
    margin-top: 37px;
  }
`;

export const EstimateOptionContainer = styled.div<IBlockErrorSplit>`
  display: grid;
  grid-template-columns: ${(props) => (props.split ? "50% 50%" : "100%")};

  &.radioField > div:last-child > label {
    padding-bottom: 0;
  }

  @media ${themes.primary.media.maxMobile} {
    grid-template-columns: 100%;
    gap: 16px;
  }
`;

export const EstimationButtonHelperText = styled.div`
  background-color: black;
  color: ${themes.primary.colors.secondary};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: calc(
    clamp(12px, 12px + (100vw - 1440px) * ((16 - 12) / (1920 - 1440)), 16px)
  );
  width: calc(
    clamp(
      239px,
      239px + (100vw - 1440px) * ((319 - 239) / (1920 - 1440)),
      319px
    )
  );
  height: calc(
    clamp(83px, 83px + (100vw - 1440px) * ((111 - 83) / (1920 - 1440)), 111px)
  );
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 6px;
  padding: 10px;
  position: absolute;
  top: -95px;
  left: 7px;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
  }

  @media ${themes.primary.media.maxLowScreenMobile} {
    font-size: 10px;
    width: 200px;
    height: 70px;
    left: -2px;
    top: -75px;
  }
`;

export const EstimateModalWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: ${themes.primary.colors.modalWrapperEstimationForm};
  z-index: 100;
  display: grid;
  place-items: center;

  @media ${themes.primary.media.maxMobile} {
    display: block;
    padding-top: 128px;
  }
`;

export const EstimateModalContainer = styled.div`
  position: relative;
  padding: 52px 27px 26px 36px;
  margin: 10px 18px 10px 12px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 24px;
  line-height: 29px;
  max-width: 620px;
  color: ${themes.primary.colors.black};
  background: ${themes.primary.colors.portfolioBg};
  border: 1.5px solid ${themes.primary.colors.black};

  @media ${themes.primary.media.maxMobile} {
    padding-left: 15px;
    font-size: 20px;
  }
`;

export const EstimateModalButton = styled.a<IButtonModal>`
  height: 32px;
  width: 110px;
  display: grid;
  place-items: center;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 14px;
  background: ${(props) =>
    props.white
      ? themes.primary.colors.portfolioBg
      : themes.primary.colors.black};
  border: 2px solid ${themes.primary.colors.black};
  color: ${(props) =>
    props.white
      ? themes.primary.colors.black
      : themes.primary.colors.secondary};
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: 0.03em;

  &:hover {
    background: ${themes.primary.colors.portfolioBg};
    color: ${themes.primary.colors.black};
  }
`;

export const EstimateModalCross = styled.a`
  position: absolute;
  top: 20px;
  right: 18px;
  cursor: pointer;
`;

export const EstimateModalShadowContainer = styled.div`
  position: relative;

  @media ${themes.primary.media.maxMobile} {
    display: grid;
    place-items: center;
  }
`;

export const EstimateModalBlock = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  right: -10px;
  bottom: -10px;
  border: 1.5px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.portfolioBg};
  z-index: -10;
  display: flex;
  align-items: flex-end;

  @media ${themes.primary.media.maxMobile} {
    right: -6px;
    bottom: -4px;
  }
`;

export const EstimateModalBlackBlock = styled.div`
  height: 50%;
  width: 100%;
  outline: 1.5px solid ${themes.primary.colors.primary};
  background-color: black;
`;

export const EstimateFileAttachInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const EstimateFileAttachInputLabel = styled.label`
  flex: 0 0 auto;
  width: calc(
    clamp(93px, 93px + (100vw - 1440px) * ((124 - 93) / (1920 - 1440)), 124px)
  );
  cursor: pointer;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  background: ${themes.primary.colors.headerBorder};
  border-radius: 6px;
  color: ${themes.primary.colors.secondary};
  padding: 7px 18px 7px 12px;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 12px;
  line-height: 14px;
  transition: 0.3s;

  @media ${themes.primary.media.minPCFullHD} {
    font-size: 16px;
    gap: 5px;
    padding: 9px 18px 10px 12px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  &:hover {
    background: ${themes.primary.colors.darkBlue};
  }
`;

export const EstimateFileType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  background: ${themes.primary.colors.darkBlue};
  border-radius: 5px;
  color: ${themes.primary.colors.secondary};
  text-transform: uppercase;
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 10px;
`;

export const EstimateFileName = styled.p`
  color: ${themes.primary.colors.headerBorder};
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 12px;
  line-height: 14px;
  width: 136px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media ${themes.primary.media.maxLowScreenMobile} {
    width: 180px;
  }
`;

export const EstimateFileCross = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const EstimateFileContainerWithInput = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const HoverBlockEstimation = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${themes.primary.colors.blogBackground};
  right: -10px;
  bottom: -10px;
  border: 2px solid ${themes.primary.colors.primary};
  z-index: 0;
  display: flex;
  align-items: flex-end;
  visibility: hidden;

  @media ${themes.primary.media.maxMobile} {
    border: 1.5px solid ${themes.primary.colors.primary};
    right: -4px;
    bottom: -4px;
  }
`;

export const HoverBlackBlockEstimation = styled.div`
  height: 50%;
  width: 100%;
  outline: 2px solid ${themes.primary.colors.primary};
  background-color: black;
  visibility: hidden;

  @media ${themes.primary.media.maxMobile} {
    outline: 1.5px solid ${themes.primary.colors.primary};
  }
`;

export const HoverContainerEstimation = styled.div`
  position: relative;

  &:hover ${HoverBlackBlockEstimation} {
    visibility: visible;
  }

  &:hover ${HoverBlockEstimation} {
    visibility: visible;
  }

  &:hover ${EstimationQuestionAdditional} {
    right: -43px;
  }

  @media ${themes.primary.media.maxMobile} {
    &:hover ${EstimationQuestionAdditional} {
      right: -12px;
    }
  }
`;

export const ErrorText = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 16px;
  line-height: 19px;
  color: ${themes.primary.colors.headerBorder};
  margin: 5px 0 0 0;

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const EstimationErrorMark = styled.div`
  position: absolute;
  top: 5px;
  right: -35px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${themes.primary.colors.deleteButton};
  background-image: url("/exclamationPoint.svg");
  background-repeat: no-repeat;
  background-position: center;

  @media ${themes.primary.media.maxMobile} {
    right: -12px;
  }
`;

export const EstimationTextOfInput = styled.p`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  font-size: 18px;
  line-height: 22px;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  position: absolute;
  left: 2px;

  a {
    color: ${themes.primary.colors.darkBlue};
  }

  @media ${themes.primary.media.maxMobile} {
    font-size: 14px;
    line-height: 17px;
  }
`;
