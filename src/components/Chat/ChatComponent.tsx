import React, { useEffect, useRef, useState } from "react";
import {
  IChatUserInfo,
  IUserDataFormValues,
} from "../../types/SupportChat.types";
import ChatMessagesComponent from "./ChatMessagesComponent";
import { storeKeys } from "../../consts";

import * as Styled from "../../styles/Chat/ChatComponent.styled";
import logo from "/public/Header/logo/CGS-team-logo.svg";
import close from "../../../public/blackCross.svg";
import dragIcon from "../../../public/dragIcon.svg";
import { useWindowDimension } from "../../hooks/useWindowDimension";
import Image from "next/image";
import { useMediaQuery } from "@mui/system";
import { useFormik } from "formik";
import { ChatMessageSchema } from "../../validations/ChatValidation";
import { useChat } from "../../hooks/useChat";
import { AiAssistant } from "../../modules/shared/ai-chatbot/components";

interface IChatComponentProps {
  isChatOpen: boolean;
  isFooterVisible: boolean;
  openChatTime: string;
  setNewMessageAmount: React.Dispatch<React.SetStateAction<number>>;
  handleClose: () => void;
}

const ChatComponent = ({
  isChatOpen,
  openChatTime,
  setNewMessageAmount,
  handleClose,
  isFooterVisible,
}: IChatComponentProps) => {
  const [userEmail, setUserEmail] = useState<string>("");
  const [sentEmailTime, setSentEmailTime] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [sentNameTime, setSentNameTime] = useState<string>("");
  const [chatUserInfo, setChatUserInfo] = useState<IChatUserInfo | null>(null);
  const [isGreetingMeesageShow, setIsGreetingMessageShow] =
    useState<boolean>(false);
  const [drag, setDrag] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { height } = useWindowDimension();

  const { handleSubmitMessage, handleReadLastMessage } = useChat(
    {
      chatId: chatUserInfo?.chatId,
      projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
      username: chatUserInfo?.userName,
      secret: chatUserInfo?.userName,
    },
    false
  );

  const formik = useFormik<IUserDataFormValues>({
    initialValues: {
      email: "",
      name: "",
      text: "",
      honeypot: "",
      files: [],
    },
    validationSchema: ChatMessageSchema,
    onSubmit: async (values, actions) => {
      if (values.honeypot) {
        return; // Do not proceed with submission
      }

      await handleSubmitMessage(values.text, values.files, actions);
    },
  });

  useEffect(() => {
    const chatUserData = localStorage.getItem(storeKeys.chatUserData);
    setChatUserInfo(chatUserData ? JSON.parse(chatUserData) : chatUserData);
    setUserEmail(chatUserData ? JSON.parse(chatUserData).email : "");
    setUserName(chatUserData ? JSON.parse(chatUserData).firstName : "");
  }, []);

  const dragStartHandler = (e: React.DragEvent) => {
    e.preventDefault();
    if (chatUserInfo && userName && userEmail) {
      setDrag(true);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (chatUserInfo && userName && userEmail) {
      setDrag(true);
    }
  };
  const dragLeaveHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const relatedTarget = e.relatedTarget as Node | null;
    if (!e.currentTarget.contains(relatedTarget)) {
      setDrag(false);
    }
  };

  const onDropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    if (!chatUserInfo || !userName || !userEmail) {
      return;
    }
    const dropedFiles = e.dataTransfer.files
      ? Array.from(e.dataTransfer.files)
      : [];
    const previousFilesLength = formik.values.files.length || 0;
    if (formik.values.files.length + previousFilesLength <= 3) {
      formik.setFieldValue("files", [...formik.values.files, ...dropedFiles]);
    }

    setDrag(false);
  };
  return (
    <Styled.ChatContainer
      onDragStart={dragStartHandler}
      onDragLeave={dragLeaveHandler}
      onDragOver={handleDragOver}
      onDrop={onDropHandler}
      windowHeight={height}
      isChatOpen={isChatOpen}
      isFooterVisible={isFooterVisible}
    >
      {drag && (
        <Styled.DragContainer>
          <Styled.DragImageWrapper>
            <Image src={dragIcon} alt={"Drag Icon"} layout={"fill"} />
          </Styled.DragImageWrapper>
          <Styled.DrageTitle>Drag a file</Styled.DrageTitle>
          <Styled.DragDescription>
            to include it to a conversation
          </Styled.DragDescription>
        </Styled.DragContainer>
      )}
      {isMobile && (
        <Styled.MobileHeader>
          <a href={"/"}>
            <Styled.HeaderInfo>
              <Image src={logo} alt="Cgs" />
            </Styled.HeaderInfo>
          </a>
          <Image
            src={close}
            style={{ cursor: "pointer" }}
            onClick={handleClose}
            alt="Close"
          />
        </Styled.MobileHeader>
      )}
      <AiAssistant mode="icon-based" handleClose={handleClose} />
    </Styled.ChatContainer>
  );
};

export default ChatComponent;
