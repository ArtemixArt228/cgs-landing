import styled from "styled-components";
import themes from "../utils/themes";

export const SupportWrapper = styled.div`
  font-family: "Gilroy" !important;

  div {
    ::-webkit-scrollbar {
      width: 0.65rem;
      background: transparent;
    }

    ::-webkit-scrollbar-track {
      background: ${themes.primary.colors.secondary};
    }
  }

  div:hover {
    ::-webkit-scrollbar {
      width: 0.65rem;
    }

    ::-webkit-scrollbar-track {
      background: ${themes.primary.colors.secondary};
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${themes.primary.colors.chatMessageBgc};
      border-radius: 10px;
      border: 3px solid ${themes.primary.colors.secondary};
    }
  }

  .ce-message-list {
    height: calc((100% - 85px) - 75px) !important;
  }

  .ce-attachment-input {
    display: none !important;
  }

  .ce-message-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 1rem;
  }

  .ce-chat-feed {
    display: flex;
    flex-direction: column;
  }

  .ce-chat-card-subtitle-html {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap;
  }

  #ce-send-message-button {
    bottom: 0 !important;
  }

  #msg-textarea {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    top: 0 !important;
  }
`;

export const SupportChatHeaderWrapper = styled.div`
  margin-left: 0px;
  margin-right: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.92);
  padding: 18px 0px;
  overflow-x: hidden;
`;

export const SupportChatHeader = styled.div`
  font-family: ${themes.primary.font.family.namu};
  font-size: 18px;
  font-weight: 900;
  color: ${themes.primary.colors.darkBlue};
`;

export const ChatListHeader = styled(SupportChatHeader)`
  padding: 20px 10px;
  font-size: 26px;
  font-weight: 900;
`;

export const SupportChatDesc = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  color: ${themes.primary.colors.darkBlue};
  line-height: 16px;
`;
