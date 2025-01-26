import { useFileUpload } from "./useFileUpload";
import { ICustomFile } from "../types/SupportChat.types";
import { FormikHelpers } from "formik";
import {
  ChatObject,
  ChatPersonObject,
  MessageObject,
} from "react-chat-engine-advanced";
import { parseFilesInChatMessage } from "../utils/parseFilesInChatMessage";
import { supportChatService } from "../services/supportChat";

export const useChat = (
  chatProps: {
    projectId: string;
    username?: string;
    secret?: string;
    chatId?: number | string;
  },
  isAdmin: boolean
) => {
  const headers = {
    "Public-Key": chatProps?.projectId || "",
    "User-Name": chatProps?.username || "",
    "User-Secret": chatProps?.secret || "",
  };
  const { uploadFile, deleteFile } = useFileUpload({ headers });

  const handleSubmitMessage = async <T>(
    message: string,
    files: File[],
    actions: FormikHelpers<T>
  ) => {
    if (!isAdmin) {
      const chatUserData = JSON.parse(
        localStorage.getItem("chatUserData") || "{}"
      );
      const currentDate = new Date();
      const expiredTime =
        currentDate.getTime() +
          Number(process.env.NEXT_PUBLIC_CHAT_EXPIRED_TIME) || 0;

      localStorage.setItem(
        "chatUserData",
        JSON.stringify({ ...chatUserData, expiredTime })
      );
    }
    const text = message.trim().replace(/\n/g, "<br/>");

    let filesUploaded: ICustomFile[] = [];
    let uploadErrorOccurred = false;

    try {
      filesUploaded = await Promise.all(
        files.map(async (file) => {
          const data = await uploadFile.mutateAsync(file);
          return {
            name: file.name,
            url: data?.url ?? "",
            type: file.type,
            created: new Date().toISOString(),
          };
        })
      );
    } catch (e: unknown) {
      const error = e as { message: string };
      const message = JSON.parse(error.message)["message"] as string;
      if (message) {
        actions.setFieldError("files", message);
      } else {
        actions.setFieldError(
          "files",
          "There was an error while uploading your file"
        );
      }
      uploadErrorOccurred = true;
    }

    if (uploadErrorOccurred || !chatProps.chatId) {
      return;
    }

    supportChatService.sendMessage(
      chatProps.chatId,
      {
        text,
        sender_username: chatProps.username ?? "",
        custom_json: JSON.stringify({
          files: filesUploaded,
        }),
      },
      {
        headers,
      }
    );

    actions.resetForm();
  };

  const handleReadLastMessage = async (
    chatId: number,
    people: ChatPersonObject[],
    chatLastMessageId?: number
  ) => {
    if (
      chatId &&
      chatLastMessageId &&
      chatLastMessageId !==
        people.find((i) => i.person.username === chatProps.username)?.last_read
    ) {
      await supportChatService.readMessage(
        chatId,
        { last_read: chatLastMessageId },
        {
          headers,
        }
      );
    }
  };

  const handleDeleteChat = async (
    chat: ChatObject,
    onSuccessCallback: (chat?: ChatObject | void) => void,
    onFileDeleteError: (err: unknown) => void
  ) => {
    supportChatService
      .getMessages(chat.id, 100, { headers })
      .then(async (messages?: MessageObject[] | void) => {
        const files = messages?.reduce<ICustomFile[]>((acc, item) => {
          const files = parseFilesInChatMessage(item.custom_json);
          return [...acc, ...files];
        }, []);
        if (files && files.length > 0) {
          await Promise.all(
            files.map((f) =>
              deleteFile.mutateAsync(f.url).catch((err) => {
                onFileDeleteError(err);
                return null;
              })
            )
          );
        }
        supportChatService
          .deleteChat(chat.id, {
            headers,
          })
          .then(onSuccessCallback);
      });
  };

  return { handleSubmitMessage, handleReadLastMessage, handleDeleteChat };
};
