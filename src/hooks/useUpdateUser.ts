import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../consts/queryKeys";
import { supportChatService } from "../services/supportChat";
import setMessageTimeAccordingToCurrentDate from "../utils/setMessageTimeAccordingToCurrentDate";
import { storeKeys } from "../consts";
import {
  IChatNameForm,
  IChatUser,
  IChatUserInfo,
} from "../types/SupportChat.types";
import { IHttpConfig } from "../types/Admin";

interface IUpdateUser {
  id: number;
  data: IChatUser;
  config: IHttpConfig;
}

interface IUseUserUpdateParams {
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setSentNameTime: React.Dispatch<React.SetStateAction<string>>;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IUseUserUpdate {
  handleSubmit: (values: IChatNameForm) => Promise<void>;
  isLoadingUser: boolean;
}

export const useUpdateUser = ({
  setUserName,
  setSentNameTime,
  setChatUserInfo,
  setIsGreetingMessageShow,
}: IUseUserUpdateParams): IUseUserUpdate => {
  const { mutateAsync: updateUserInfo, isLoading: isLoadingUser } = useMutation(
    [queryKeys.supportChat],
    (values: IUpdateUser) =>
      supportChatService.updateUserInfo(values.id, values.data, values.config)
  );
  const handleSubmit = async (values: IChatNameForm) => {
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY || "";

    const createdUserInfo = JSON.parse(
      localStorage.getItem(storeKeys.chatUserData) || "{}"
    );

    setUserName(values.name);

    const userResult = await updateUserInfo({
      id: createdUserInfo.userId,
      data: {
        username: createdUserInfo.userName,
        secret: createdUserInfo.userSecret,
        first_name: values.name,
        custom_json: createdUserInfo.custom_json,
      },
      config: {
        headers: { "Private-Key": privateKey },
      },
    });

    const creationDate = new Date();
    const expiredTime =
      creationDate.getTime() +
        Number(process.env.NEXT_PUBLIC_CHAT_EXPIRED_TIME) || 0;

    const chatUserInfo = {
      userName: userResult?.username || "",
      email: createdUserInfo?.email || "",
      firstName: userResult?.first_name || "",
      userId: createdUserInfo?.userId || "",
      userSecret: userResult?.secret || "",
      chatId: String(createdUserInfo?.chatId) || "",
      accessKey: createdUserInfo?.accessKey || "",
      chatColor: createdUserInfo?.chatColor,
      expiredTime,
    };

    localStorage.setItem(storeKeys.chatUserData, JSON.stringify(chatUserInfo));

    setSentNameTime(setMessageTimeAccordingToCurrentDate());
    setChatUserInfo(chatUserInfo);

    setIsGreetingMessageShow(true);
  };

  return {
    handleSubmit,
    isLoadingUser,
  };
};
