import React from "react";
import { useMutation } from "@tanstack/react-query";
import { v4 as uuidv4 } from "uuid";

import { supportChatService } from "../services/supportChat";

import { IHttpConfig } from "../types/Admin";
import {
  IChat,
  IChatEmailForm,
  IChatUser,
  IChatUserInfo,
} from "../types/SupportChat.types";

import { storeKeys } from "../consts";
import { queryKeys } from "../consts/queryKeys";
import setMessageTimeAccordingToCurrentDate from "../utils/setMessageTimeAccordingToCurrentDate";
import getRandomColor from "../utils/generateColor";

interface IGetOrCreateUser {
  data: IChatUser;
  config: IHttpConfig;
}

interface IGetOrCreateChat {
  data: IChat;
  config: IHttpConfig;
}

interface IUseCreateUserChatParams {
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setSentEmailTime: React.Dispatch<React.SetStateAction<string>>;
  setSentNameTime: React.Dispatch<React.SetStateAction<string>>;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUseCreateUserChat {
  handleSubmit: (values: IChatEmailForm) => Promise<void>;
  isLoadingUser: boolean;
  isLoadingChat: boolean;
}

export const useCreateUserChat = ({
  setUserEmail,
  setUserName,
  setSentEmailTime,
  setSentNameTime,
  setChatUserInfo,
  setIsGreetingMessageShow,
}: IUseCreateUserChatParams): IUseCreateUserChat => {
  const { mutateAsync: getOrCreateUser, isLoading: isLoadingUser } =
    useMutation([queryKeys.supportChat], (values: IGetOrCreateUser) =>
      supportChatService.getOrCreateUser(values.data, values.config)
    );

  const { mutateAsync: getOrCreateChat, isLoading: isLoadingChat } =
    useMutation([queryKeys.supportChat], (values: IGetOrCreateChat) =>
      supportChatService.getOrCreateChat(values.data, values.config)
    );

  const handleSubmit = async (values: IChatEmailForm) => {
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY || "";
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";
    const chatAdmin = process.env.NEXT_PUBLIC_CHAT_ADMIN || "";

    let chatHash = localStorage.getItem(storeKeys.chatHash);
    if (!chatHash) {
      localStorage.setItem(storeKeys.chatHash, uuidv4());
      chatHash = localStorage.getItem(storeKeys.chatHash);
    }

    setUserEmail(values.email);

    const userResult = await getOrCreateUser({
      data: {
        username: `${values.email}-${chatHash}`,
        secret: `${values.email}-${chatHash}`,
        custom_json: JSON.stringify({
          chatColor: getRandomColor(),
        }),
      },
      config: {
        headers: { "Private-Key": privateKey },
      },
    });

    if (userResult?.first_name) {
      setUserName(userResult.first_name);
      setSentNameTime(setMessageTimeAccordingToCurrentDate());
    }

    const chatResult = await getOrCreateChat({
      data: {
        usernames: [chatAdmin, `${values.email}-${chatHash}`],
        title: values.email,
        is_direct_chat: true,
      },
      config: {
        headers: {
          "Project-ID": projectId,
          "User-Name": `${values.email}-${chatHash}`,
          "User-Secret": `${values.email}-${chatHash}`,
        },
      },
    });

    const creationDate = new Date();
    const expiredTime =
      creationDate.getTime() +
        Number(process.env.NEXT_PUBLIC_CHAT_EXPIRED_TIME) || 0;

    const chatUserInfo = {
      userName: userResult?.username || "",
      email: values.email,
      userId: userResult?.id || "",
      firstName: userResult?.first_name || "",
      userSecret: userResult?.secret || "",
      chatId: String(chatResult?.id) || "",
      accessKey: chatResult?.access_key || "",
      chatColor:
        typeof userResult?.custom_json == "string" &&
        JSON.parse(userResult?.custom_json).chatColor,
      expiredTime,
    };

    localStorage.setItem(storeKeys.chatUserData, JSON.stringify(chatUserInfo));

    setSentEmailTime(setMessageTimeAccordingToCurrentDate());
    setChatUserInfo(chatUserInfo);

    setIsGreetingMessageShow(true);
  };

  return {
    handleSubmit,
    isLoadingUser,
    isLoadingChat,
  };
};
