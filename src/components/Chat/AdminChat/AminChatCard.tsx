import React from "react";
import Image from "next/image";
import { ChatCardProps } from "react-chat-engine-advanced";
import * as Styled from "../../../styles/Chat/ChatCard.styled";
import * as StyledAvatar from "../../../styles/Chat/ChatMessagesComponent.styled";
import setMessageTimeAccordingToCurrentDate from "../../../utils/setMessageTimeAccordingToCurrentDate";
import messageRead from "/public/Chat/read-message.svg";
import messageUnread from "/public/Chat/unread-message.svg";
import { parseFilesInChatMessage } from "../../../utils/parseFilesInChatMessage";

const CustomChatCard = (props: ChatCardProps) => {
  const parsedColor =
    typeof props.chat?.admin.custom_json == "string" &&
    JSON.parse(props.chat?.admin.custom_json).chatColor;
  const formattedTime = setMessageTimeAccordingToCurrentDate(
    props.chat?.last_message.created || props.chat?.created
  );
  const messageStatus =
    props.chat?.last_message.id &&
    props.chat?.admin.username != props.chat?.last_message.sender_username
      ? props.chat?.people.length &&
        props.chat?.people.find(
          (i) => i.person.username == props.chat?.admin.username
        )?.last_read === props.chat?.last_message.id
        ? messageRead
        : messageUnread
      : null;
  const haveNewMessage =
    !messageStatus &&
    props.chat?.admin.username == props.chat?.last_message.sender_username &&
    props.chat?.people.find(
      (i) => i.person.username !== props.chat?.admin.username
    )?.last_read !== props.chat?.last_message.id;
  const attachments = parseFilesInChatMessage(
    props.chat?.last_message.custom_json
  );
  const lastMessageText = props.chat?.last_message.text
    ? props.chat?.last_message.text
    : attachments.length
    ? attachments[attachments.length - 1].name
    : "";
  return (
    <Styled.ChatCardContainer onClick={props.onClick} isActive={props.isActive}>
      <StyledAvatar.AvatarWrapper
        style={{
          backgroundColor: parsedColor || "none",
          padding: "5px",
        }}
      >
        <StyledAvatar.AvatarImg src={"/Chat/user.svg"} />
      </StyledAvatar.AvatarWrapper>

      <Styled.ChatCardDetails>
        <Styled.ChatCardHeader title={props.chat?.title}>
          <Styled.ChatCardTitle>{props.title}</Styled.ChatCardTitle>
        </Styled.ChatCardHeader>
        <Styled.ChatCardFooter>
          {props.chat?.last_message.id ? (
            <>
              <Styled.ChatCardLastMessageText>
                {lastMessageText}
              </Styled.ChatCardLastMessageText>
            </>
          ) : (
            <div>
              <i>Newly created chat🎉</i>
            </div>
          )}
          <Styled.ChatCardFooterStatusAndTime>
            {messageStatus && (
              <Image
                src={messageStatus}
                alt="Message status"
                width={15}
                height={15}
              />
            )}
            {haveNewMessage && (
              <Styled.NewMessageStatus>NEW</Styled.NewMessageStatus>
            )}
            <div>{formattedTime}</div>
          </Styled.ChatCardFooterStatusAndTime>
        </Styled.ChatCardFooter>
      </Styled.ChatCardDetails>
    </Styled.ChatCardContainer>
  );
};

export default CustomChatCard;
