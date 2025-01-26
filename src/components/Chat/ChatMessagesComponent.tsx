import React, { useEffect, useState } from "react";
import {
  useSingleChatLogic,
  ChatFeed,
  MessageListProps,
  SingleChatSocket,
  ChatPersonObject,
} from "react-chat-engine-advanced";

import MessageListComponent from "./MessageListComponent";

import { storeKeys } from "../../consts";
import {
  IChatUserInfo,
  IUserDataFormValues,
} from "../../types/SupportChat.types";
import { FormikProps } from "formik";
import ChatForm from "./ChatForm";

interface IChatMessagesComponentProps {
  userEmail: string;
  userName: string;
  openChatTime: string;
  sentEmailTime: string;
  sentNameTime: string;
  chatUserInfo: IChatUserInfo | null;
  isGreetingMeesageShow: boolean;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  isChatOpen: boolean;
  chatId: string;
  publicKey: string;
  setSentEmailTime: React.Dispatch<React.SetStateAction<string>>;
  setSentNameTime: React.Dispatch<React.SetStateAction<string>>;
  messageFormController: FormikProps<IUserDataFormValues>;
  handleReadLastMessage: (
    chatId: number,
    people: ChatPersonObject[],
    chatLastMessageId?: number
  ) => void;
}

const ChatMessagesComponent = ({
  userEmail,
  userName,
  openChatTime,
  sentEmailTime,
  setUserName,
  sentNameTime,
  chatUserInfo,
  setNewMessageAmount,
  setChatUserInfo,
  setUserEmail,
  isGreetingMeesageShow,
  setIsGreetingMessageShow,
  messageFormController,
  isChatOpen,
  setSentEmailTime,
  setSentNameTime,
  handleReadLastMessage,
}: IChatMessagesComponentProps) => {
  const [showChat, setShowChat] = useState<boolean>(false);

  const chatProps = useSingleChatLogic(
    String(process.env.NEXT_PUBLIC_PROJECT_ID),
    chatUserInfo?.chatId ?? "",
    chatUserInfo?.accessKey ?? ""
  );

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  useEffect(() => {
    const chatUserData = JSON.parse(
      localStorage.getItem(storeKeys.chatUserData) || "{}"
    );

    chatProps && setIsGreetingMessageShow(true);

    const currentTime = new Date().getTime();
    const lastMessageTime =
      chatProps.chat?.last_message?.created &&
      new Date(chatProps.chat?.last_message?.created).getTime();
    const differenceLastMessageTimeAndNow =
      typeof lastMessageTime == "number"
        ? Math.floor((currentTime - lastMessageTime) / (1000 * 60))
        : 16;
    //more than expriredTime + more than 15 minutes after last message
    if (
      chatUserInfo &&
      currentTime >= chatUserData?.expiredTime &&
      differenceLastMessageTimeAndNow >= 15
    ) {
      setChatUserInfo(null);
      setUserEmail("");
      setUserName("");
      setIsGreetingMessageShow(false);
      localStorage.removeItem(storeKeys.chatUserData);
    }
  }, [
    chatProps,
    chatUserInfo,
    setChatUserInfo,
    setIsGreetingMessageShow,
    setUserEmail,
    setUserName,
  ]);

  if (!showChat) return <div />;

  return (
    <>
      <ChatFeed
        {...(chatUserInfo ? chatProps : {})}
        messages={[...(chatUserInfo ? chatProps.messages : [])]}
        style={{
          background: "#f1efed",
          display: "flex",
          flexDirection: "column",
        }}
        username={chatUserInfo?.userName}
        renderChatHeader={() => <div />}
        renderMessageList={(messageProps: MessageListProps) => {
          return (
            <MessageListComponent
              userEmail={userEmail}
              userName={userName}
              openChatTime={openChatTime}
              sentEmailTime={sentEmailTime}
              sentNameTime={sentNameTime}
              isGreetingMeesageShow={isGreetingMeesageShow}
              messageProps={messageProps}
              setNewMessageAmount={setNewMessageAmount}
              handleReadLastMessage={handleReadLastMessage}
              isShowError={!!messageFormController.errors["text"]}
            />
          );
        }}
        renderMessageForm={() => (
          <ChatForm
            userEmail={userEmail}
            isChatOpen={isChatOpen}
            setUserName={setUserName}
            setSentNameTime={setSentNameTime}
            setChatUserInfo={setChatUserInfo}
            setIsGreetingMessageShow={setIsGreetingMessageShow}
            chatId={chatUserInfo?.chatId ?? ""}
            userName={userName}
            publicKey={process.env.NEXT_PUBLIC_PROJECT_ID || ""}
            setSentEmailTime={setSentEmailTime}
            setUserEmail={setUserEmail}
            messageFormController={messageFormController}
          />
        )}
      />
      {chatUserInfo && <SingleChatSocket {...chatProps} />}
    </>
  );
};

export default ChatMessagesComponent;
