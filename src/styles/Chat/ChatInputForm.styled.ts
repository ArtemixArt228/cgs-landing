import styled, { css } from "styled-components";
import themes from "../../utils/themes";
import { prevChatArrowOne, prevChatArrowTwo } from "../Animations.styled";

export const InputError = styled.p`
  font-family: ${themes.primary.font.family.namu};
  color: ${themes.primary.colors.validationErrorText};
  font-size: 11px;
  margin: 0;
  @media ${themes.primary.media.min4K} {
    font-size: 13px;
  }
`;

const FieldSample = css`
  width: 100%;
  border: 1px solid ${themes.primary.colors.greyAdminServices};
  border-radius: 16.5px;
  padding: 5px 13px;

  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.normal};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.02em;
  color: ${themes.primary.colors.primary};

  background: ${themes.primary.colors.blogBackground};

  ::placeholder {
    font-weight: ${themes.primary.font.weight.normal};
  }

  :focus {
    outline: none;
  }
  @media ${themes.primary.media.minPCFullHD} {
    padding: 13px 48px 13px 16px;
  }
`;

export const LinkModal = styled.div`
  &.overlay {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .inputGroup {
    margin-bottom: 15px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  .submitButton {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 10px;
    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  .closeButton {
    padding: 10px 20px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 6px;
`;
export const MessageFormWrapper = styled.div`
  background: rgba(143, 142, 147, 0.07);
  width: 100%;
  padding: 16px 12px 16px 16px;
  max-height: 141px;
  @media ${themes.primary.media.min768Mobile} {
    border-top: 1px solid ${themes.primary.colors.primary};
    padding: 16px;
  }
  @media ${themes.primary.media.min4K} {
    border-top: 1.5px solid ${themes.primary.colors.primary};
    max-height: 187px;
    padding: 20px;
    border-radius: 0 0 21.18px 21.18px;
  }
`;

export const FileUploadButton = styled.button`
  display: flex;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 6px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 3px;
  margin-right: 8px;
  background: none;
  &.link {
    top: 31px;
  }
  img {
    width: 20px !important;
    height: 20px !important;
  }
  &:hover {
    background-color: ${themes.primary.colors.dropdownHover};
  }
  &:focus {
    outline: none;
    background-color: transparent;
  }
  @media ${themes.primary.media.min4K} {
    right: 12px;
    top: 10px;
    img {
      width: 26px !important;
      height: 26px !important;
    }
  }
`;

export const AdminButton = styled.button`
  display: flex;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 3px;
  margin-right: 8px;
  background: none;
  &.link {
    top: 31px;
  }
  img {
    width: 20px !important;
    height: 20px !important;
  }
  &:hover {
    background-color: ${themes.primary.colors.dropdownHover};
  }
  &:focus {
    outline: none;
    background-color: transparent;
  }
  @media ${themes.primary.media.min4K} {
    right: 12px;
    top: 10px;
    img {
      width: 26px !important;
      height: 26px !important;
    }
  }
`;
export const InputWrapper = styled.div<{ hasError?: boolean }>`
  width: 100%;
  position: relative;
  background-color: ${themes.primary.colors.grey};
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid ${themes.primary.colors.greyAdminServices};

  &.message-input {
    max-height: 109px;
  }

  &:focus-within {
    border: ${(props) =>
      props.hasError
        ? `1px solid ${themes.primary.colors.adminRed}`
        : `1px solid ${themes.primary.colors.greyAdminServices}`};
  }
  @media ${themes.primary.media.min4K} {
    border-radius: 20px;
    &.message-input {
      max-height: 144px;
    }
  }
`;

export const InputAndErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;

export const MessageForm = styled.form`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 10px;
  label {
    padding-bottom: 5px;
  }

  textarea {
    ${FieldSample};
    width: 93%;
    padding-right: 37px;
    resize: none;
    overflow: hidden scroll;
    overscroll-behavior: contain;
    font-size: 14px;
    line-height: 22px;
    height: 33px;
    scrollbar-width: thin;

    @media (min-width: 1024px) {
      ::-webkit-scrollbar {
        width: 0;
      }
    }

    @media ${themes.primary.media.min4K} {
      gap: 12px;
    }
  }
`;

export const SubmitIconButton = styled.button`
  display: block;
  padding: 0;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.portfolioHover};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  svg {
    width: 8px;
    height: 9px;
  }

  & path {
    transition: transform 0.5s ease-in-out;
  }
  & path:nth-child(1) {
    transform: translateY(36px);
  }
  &:hover {
    & path:nth-child(1) {
      animation: ${prevChatArrowOne} 1s 1 forwards ease-in-out;
    }
    & path:nth-child(2) {
      animation: ${prevChatArrowTwo} 1s 1 forwards ease-in-out;
    }
  }
  @media ${themes.primary.media.min4K} {
    border: 1.5px solid ${themes.primary.colors.primary};
    width: 42px;
    height: 42px;
    svg {
      width: 11px;
      height: 11px;
    }
  }
`;
