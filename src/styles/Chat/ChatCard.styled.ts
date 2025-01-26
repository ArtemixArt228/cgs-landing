import styled from "styled-components";
import themes from "../../utils/themes";

export const ChatCardContainer = styled.div<{ isActive?: boolean }>`
  font-family: ${themes.primary.font.family.namu};
  font-weight: 900;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ isActive }) =>
    !isActive
      ? `${themes.primary.colors.secondary}`
      : `${themes.primary.colors.chatMessageBgc}`};
  display: flex;
  gap: 5px;
  width: 100%;
  align-items: center;
  cursor: pointer;
  transition: 0.44s;
`;

export const ChatCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  width: 85%;
`;
export const ChatCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const ChatCardAvatar = styled.div`
  border: 2px solid black;
  background-color: ${themes.primary.colors.servicesBackground};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
`;

export const ChatCardTitle = styled.h3`
  font-size: 14px;
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const ChatCardAbout = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ChatCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: #999;
`;
export const ChatCardFooterStatusAndTime = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #999;
  gap: 5px;
`;
export const ChatCardLastMessageText = styled.div`
  font-weight: bolder;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 50%;
`;

export const UnreadMessages = styled.div`
  color: grey;
  font-weight: bold;
`;

export const NewMessageStatus = styled.div`
  background-color: green;
  font-size: 9px;
  padding: 4px 6px;
  border-radius: 15px;
  color: white;
  font-weight: bold;
`;
