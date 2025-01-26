import styled, { css } from "styled-components";
import themes from "../../../../../utils/themes";
import {
  prevChatArrowOne,
  prevChatArrowTwo,
} from "../../../../../styles/Animations.styled";

export const MessageFormWrapper = styled.div`
  position: relative;
  background: rgba(143, 142, 147, 0.07);
  width: 100%;
  padding: 16px 12px 16px 16px;
  max-height: 141px;

  @media screen and ${themes.primary.media.min768Mobile} {
    padding: 16px;
    border-top: 1px solid ${themes.primary.colors.primary};
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    border-top: 2px solid ${themes.primary.colors.primary};
    max-height: 187px;
    padding: 20px;
    border-radius: 0 0 22px 22px;
  }
`;

export const InputAndErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
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
    resize: none;
    overflow: hidden scroll;
    overscroll-behavior: contain;
    font-size: 14px;
    line-height: 22px;
    height: 33px;
    scrollbar-width: thin;
    padding: 14px 111px 14px 12px;

    ::-webkit-scrollbar {
      width: 0;
    }

    @media ${themes.primary.media.max767Mobile} {
      padding: 16px 111px 16px 12px;
      letter-spacing: 0.02px;
    }

    @media ${themes.primary.media.minBreakpoint1100} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${themes.primary.media.minPCFullHD} {
      padding: 21px 135px 21px 16px;
      font-size: 20px;
      line-height: 32px;
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

  @media screen and ${themes.primary.media.minPCFullHD} {
    border-radius: 16px;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    border-radius: 22px;

    &.message-input {
      max-height: 144px;
    }
  }
`;

export const SubmitIconButton = styled.button`
  font-family: ${themes.primary.font.family.namu};
  position: absolute;
  cursor: pointer;
  border: 1px solid ${themes.primary.colors.primary};
  background: ${themes.primary.colors.portfolioHover};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${themes.primary.colors.primary};

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

  &:disabled {
    cursor: default;
    border: 1px solid ${themes.primary.colors.darkGrey};
    color: ${themes.primary.colors.darkGrey};
    background: ${themes.primary.colors.greyAdminServices};
    &:hover {
      & path:nth-child(1) {
        animation: unset;
      }
      & path:nth-child(2) {
        animation: unset;
      }
    }
  }

  border-radius: 10px;
  padding: 12px 11px;
  letter-spacing: 0.1px;
  font-size: 14px;
  line-height: 20px;
  height: 32px;
  gap: 10px;
  top: 11px;
  right: 13px;

  svg {
    width: 10px;
    height: 10px;
  }

  @media screen and ${themes.primary.media.maxMobile} {
    letter-spacing: 0.02px;
  }

  @media ${themes.primary.media.min768Mobile} {
    top: 10px;
    right: 13px;
  }

  @media ${themes.primary.media.minBreakpoint1100} {
    top: 12px;
    right: 13px;
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and ${themes.primary.media.minPCFullHD} {
    border-radius: 14px;
    padding: 16px;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.13px;
    height: 42px;
    gap: 14px;
    top: 18px;
    right: 16px;

    svg {
      width: 13px;
      height: 13px;
    }
  }
`;

export const ChatScrollButton = styled.button`
  font-family: ${themes.primary.font.family.namu};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background: ${themes.primary.colors.vodka};
  border: 1px solid ${themes.primary.colors.primary};
  color: ${themes.primary.colors.primary};
  right: 16px;
  top: -48px;
  width: 77px;
  height: 32px;
  border-radius: 16px;
  letter-spacing: 0.3px;
  z-index: 1;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  line-height: 16px;
`;
