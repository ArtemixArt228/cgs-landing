import styled from "styled-components";
import themes from "../../utils/themes";

export const FileUploadButton = styled.button`
  display: flex;
  position: absolute;
  z-index: 1;
  right: 0;
  top: 12px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 3px;
  margin-right: 12px;
  background: none;
  img {
    width: 15px !important;
    height: 15px !important;
    @media ${themes.primary.media.min4K} {
      width: 20px !important;
      height: 20px !important;
    }
  }
  &:hover {
    background-color: ${themes.primary.colors.dropdownHover};
  }
  &:focus {
    outline: none;
    background-color: transparent;
  }

  &.talk-to-expert-page:first-of-type {
    img {
      width: 20px !important;
      height: 20px !important;
      @media ${themes.primary.media.min4K} {
        width: 20px !important;
        height: 20px !important;
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;
  scrollbar-width: none;
  max-width: 100%;
  white-space: nowrap;
  gap: 8px;
  scrollbar-width: thin;
  opacity: 1;
  transition: opacity 0.3s ease-out, max-height 0.3s ease-out;
  padding: 7px 35px 0 15px;
  &.hidden {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    padding: 0;
  }
  @media ${themes.primary.media.minBreakpoint1100} {
    width: 431px;
  }
  @media ${themes.primary.media.min1440} {
    width: calc(
      clamp(
        431px,
        431px + (100vw - 1440px) * ((565 - 431) / (1920 - 1440)),
        565px
      )
    );
  }
  @media ${themes.primary.media.min4K} {
    width: calc(
      clamp(
        565px,
        565px + (100vw - 1920px) * ((800 - 565) / (2560 - 1920)),
        800px
      )
    );
    &.chat-input {
      padding: 13px 52px 0 16px;
    }
    &.hidden {
      padding: 0;
    }
  }
`;
export const FileDataAndDeleteButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 1;
  min-width: 0;
  box-sizing: border-box;
  overflow: hidden;
  gap: 12px;
  border: 1px solid ${themes.primary.colors.greyAdminServices};
  border-radius: 11px;
  padding: 8px;
  background: linear-gradient(
    353.75deg,
    #f1efed -1.56%,
    rgba(221, 221, 221, 0.22) 52.39%,
    #f1efed 127.64%
  );
  &.chat-sent-file {
    min-width: 30%;
    max-width: 100%;
    padding: 0;
    &:hover {
      background-color: ${themes.primary.colors.dropdownHover};
    }
  }
`;

export const ImageAndText = styled.div`
  display: flex;
  flex-shrink: 1;
  gap: 6px;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  align-items: center;
`;

export const FileIcon = styled.div`
  position: relative;
  width: 14px;
  height: 18px;
  flex-shrink: 0;
`;
export const FileName = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-weight: ${themes.primary.font.weight.heavy};
  flex-shrink: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 900;
  @media ${themes.primary.media.maxLaptopL} {
    font-size: 12px;
    line-height: 16px;
  }
  @media ${themes.primary.media.min4K} {
    font-size: 14px;
    line-height: 20px;
  }

  &.chat-sent-file {
    font-size: 14px;
  }
  &.chat-input {
    font-size: 14px;
    @media ${themes.primary.media.min4K} {
      font-size: 18px;
      line-height: 147%;
    }
  }
`;

export const CloseButton = styled.button`
  flex-shrink: 0;
  background-color: ${themes.primary.colors.dropdownHover};
  position: relative;
  border: none;
  border-radius: 3px;
  padding: 3px;

  width: 16px;
  height: 16px;
  span {
    width: 6px !important;
    height: 6px !important;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${themes.primary.colors.jetBlack};
    color: ${themes.primary.colors.grey};
    img {
      filter: brightness(0) invert(1);
    }
  }
  &.chat-input {
    span {
      width: 6px !important;
      height: 6px !important;
    }
    @media ${themes.primary.media.min4K} {
      span {
        width: 9px !important;
        height: 9px !important;
      }
    }
  }
`;
export const ErrorMessage = styled.div`
  font-size: 10px;
  line-height: 16px;
  color: ${themes.primary.colors.adminRed};
  padding: 0 15px;
`;
