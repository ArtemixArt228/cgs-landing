import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useMultiChatLogic,
  MultiChatWindow,
  MultiChatSocket,
  ChatObject,
  ChatHeaderProps,
  MessageListProps,
} from "react-chat-engine-advanced";
import { useFormik } from "formik";

import * as Styled from "../../styles/AdminSupportChat.styled";
import * as StyledGlobal from "../../styles/AdminPage";
import "suneditor/dist/css/suneditor.min.css";

import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import MessageFormComponent from "../../components/Chat/AdminChat/AdminMessageFormComponent";
import { ChatMessageSchema } from "../../validations/ChatValidation";
import AdminMessageListComponent from "../../components/Chat/AdminChat/AdminMessageListComponent";
import LinkModal from "../../components/Chat/AdminChat/AdminAddLinkModal";
import { IAdminMessageFormValues } from "../../types/SupportChat.types";
import { CustomToast } from "../../components/Admin/CustomToast";
import { useChat } from "../../hooks/useChat";
import CustomChatCard from "../../components/Chat/AdminChat/AminChatCard";
import setMessageTimeAccordingToCurrentDate from "../../utils/setMessageTimeAccordingToCurrentDate";
import { useModal } from "../../hooks/useModal";

const AdminSupportChat = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  const [showChat, setShowChat] = useState<boolean>(false);
  const chatProps = useMultiChatLogic(
    String(process.env.NEXT_PUBLIC_PROJECT_ID),
    String(process.env.NEXT_PUBLIC_CHAT_ADMIN),
    String(process.env.NEXT_PUBLIC_CHAT_ADMIN_SECRET)
  );
  const chatInfo: (ChatObject & { access_key?: string }) | undefined =
    chatProps.chat;

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  }, []);

  const { handleSubmitMessage, handleReadLastMessage, handleDeleteChat } =
    useChat(
      {
        chatId: chatProps.chat?.id,
        projectId: chatProps.projectId,
        username: chatProps.username,
        secret: chatProps.secret,
      },
      true
    );
  const formikMessageFormController = useFormik<IAdminMessageFormValues>({
    initialValues: { text: "", files: [] },
    validationSchema: ChatMessageSchema,
    onSubmit: async (values, actions) => {
      await handleSubmitMessage(values.text, values.files, actions);
    },
    validateOnBlur: true,
    validateOnChange: true,
  });

  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleSubmitLink = (link: string, text: string) => {
    formikMessageFormController.setFieldValue(
      "text",
      formikMessageFormController.values.text + `[${text || link}](${link})`
    );
  };

  const handleDeleteChatClick = async (chat: ChatObject) => {
    await handleDeleteChat(
      chat,
      (deletedChat?: ChatObject | void) => {
        toast.success(
          `Chat ${
            deletedChat && "with " + deletedChat.admin.first_name
          } was successfully deleted!`
        );
      },
      (err: unknown) => {
        const e = err as { message: string };
        const message = JSON.parse(e.message)["message"] as string;
        if (message) {
          formikMessageFormController.setFieldError("files", message);
        } else {
          formikMessageFormController.setFieldError(
            "files",
            "There was an error while deleting your file"
          );
        }
      }
    );
  };

  if (!showChat) return <div />;
  return data ? (
    <Styled.SupportWrapper>
      <MultiChatWindow
        {...chatProps}
        renderMessageForm={() => (
          <MessageFormComponent
            isAdminPanel={true}
            messageFormController={formikMessageFormController}
            handleOpenLinkModal={handleOpenModal}
          />
        )}
        onDeleteChatClick={handleDeleteChatClick}
        renderChatHeader={(props: ChatHeaderProps) => {
          const newDescription =
            props.description && props.description.includes("Active")
              ? `Active ${setMessageTimeAccordingToCurrentDate(
                  props.description.replace("Active", "").trim(),
                  true,
                  true
                )}`
              : props.description;
          return (
            <Styled.SupportChatHeaderWrapper>
              <Styled.SupportChatHeader>
                {chatInfo?.title} / {chatInfo?.admin.first_name}
              </Styled.SupportChatHeader>
              <Styled.SupportChatDesc>{newDescription}</Styled.SupportChatDesc>
            </Styled.SupportChatHeaderWrapper>
          );
        }}
        renderMessageList={(chat: MessageListProps) => {
          return (
            <AdminMessageListComponent
              messageProps={chat}
              chatProps={chatProps}
              handleReadLastMessage={handleReadLastMessage}
              avatarColor={
                typeof chatProps.chat?.admin.custom_json == "string" &&
                JSON.parse(chatProps.chat?.admin.custom_json).chatColor
              }
            />
          );
        }}
        renderChatForm={() => (
          <Styled.ChatListHeader>My Chats</Styled.ChatListHeader>
        )}
        renderPhotosSettings={() => <div></div>}
        chatFeedColumnStyle={{
          overflowY: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
        renderChatCard={(props) => <CustomChatCard {...props} />}
        style={{ height: "100vh" }}
      />

      <MultiChatSocket {...chatProps} />

      <LinkModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitLink}
      />
      <CustomToast />
    </Styled.SupportWrapper>
  ) : (
    <StyledGlobal.AdminUnauthorizedModal>
      Something went wrong :(
    </StyledGlobal.AdminUnauthorizedModal>
  );
};

export default AdminSupportChat;
