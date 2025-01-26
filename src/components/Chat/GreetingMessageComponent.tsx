import React from "react";
import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

interface IGreetingMessageComponent {
  userEmail: string;
  userName: string;
  openChatTime: string;
  sentEmailTime: string;
  sentNameTime: string;
  isGreetingMeesageShow?: boolean;
  senderUserName?: string;
}

const GreetingMessageComponent = ({
  senderUserName = "CGS-team bot",
  userEmail,
  userName,
  openChatTime,
  sentEmailTime,
  sentNameTime,
  isGreetingMeesageShow,
}: IGreetingMessageComponent) => {
  return (
    <>
      <Styled.RecievedOrSendMessagesWrapper isReceivedMessage={true}>
        <Styled.AvatarWrapper>
          <Styled.AvatarImg src={"/chatOperatorAvatar.svg"} />
        </Styled.AvatarWrapper>
        <Styled.MessagesWrapper isReceivedMessage={true}>
          <Styled.MessageSender>{senderUserName}</Styled.MessageSender>
          <Styled.MessagesContainer isReceivedMessage={true}>
            <Styled.MessageBox isReceivedMessage={true}>
              Hi there! I’m here to help if you need anything.
            </Styled.MessageBox>
            <Styled.MessageBox isReceivedMessage={true}>
              Please enter your email address to start or continue a
              conversation.
            </Styled.MessageBox>
          </Styled.MessagesContainer>

          <Styled.MessageTime>{openChatTime}</Styled.MessageTime>
        </Styled.MessagesWrapper>
      </Styled.RecievedOrSendMessagesWrapper>

      {userEmail && (
        <>
          <Styled.RecievedOrSendMessagesWrapper isReceivedMessage={false}>
            <Styled.MessagesWrapper isReceivedMessage={false}>
              <Styled.MessagesContainer isReceivedMessage={false}>
                <Styled.MessageBox isReceivedMessage={false}>
                  {userEmail}
                </Styled.MessageBox>
              </Styled.MessagesContainer>
              <Styled.MessageTime>
                {sentEmailTime || openChatTime}
              </Styled.MessageTime>
            </Styled.MessagesWrapper>
          </Styled.RecievedOrSendMessagesWrapper>
          {isGreetingMeesageShow && (
            <Styled.RecievedOrSendMessagesWrapper isReceivedMessage={true}>
              <Styled.AvatarWrapper>
                <Styled.AvatarImg src={"/chatOperatorAvatar.svg"} />
              </Styled.AvatarWrapper>
              <Styled.MessagesWrapper isReceivedMessage={true}>
                <Styled.MessageSender>{senderUserName}</Styled.MessageSender>

                <Styled.MessagesContainer isReceivedMessage={true}>
                  <Styled.MessageBox
                    isReceivedMessage={true}
                    className="msgAnimate"
                  >
                    What should we call you?
                  </Styled.MessageBox>
                </Styled.MessagesContainer>
                <Styled.MessageTime>
                  {sentEmailTime || openChatTime}
                </Styled.MessageTime>
              </Styled.MessagesWrapper>
            </Styled.RecievedOrSendMessagesWrapper>
          )}
        </>
      )}

      {userName && (
        <>
          <Styled.RecievedOrSendMessagesWrapper isReceivedMessage={false}>
            <Styled.MessagesWrapper isReceivedMessage={false}>
              <Styled.MessagesContainer isReceivedMessage={false}>
                <Styled.MessageBox isReceivedMessage={false}>
                  {userName}
                </Styled.MessageBox>
              </Styled.MessagesContainer>
              <Styled.MessageTime>
                {sentNameTime || openChatTime}
              </Styled.MessageTime>
            </Styled.MessagesWrapper>
          </Styled.RecievedOrSendMessagesWrapper>
          {isGreetingMeesageShow && (
            <Styled.RecievedOrSendMessagesWrapper isReceivedMessage={true}>
              <Styled.AvatarWrapper>
                <Styled.AvatarImg src={"/chatOperatorAvatar.svg"} />
              </Styled.AvatarWrapper>
              <Styled.MessagesWrapper isReceivedMessage={true}>
                <Styled.MessageSender>{senderUserName}</Styled.MessageSender>
                <Styled.MessagesContainer isReceivedMessage={true}>
                  <Styled.MessageBox
                    isReceivedMessage={true}
                    className="msgAnimate"
                  >
                    Hi, {userName}, my name is Dan. I’m a business manager at
                    CGS-team. How can I help you?
                  </Styled.MessageBox>
                </Styled.MessagesContainer>
                <Styled.MessageTime>
                  {sentNameTime || openChatTime}
                </Styled.MessageTime>
              </Styled.MessagesWrapper>
            </Styled.RecievedOrSendMessagesWrapper>
          )}
        </>
      )}
    </>
  );
};

export default GreetingMessageComponent;
