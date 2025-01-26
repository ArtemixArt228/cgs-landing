import axios from "axios";

import {
  IChatUser,
  IChatUserResponse,
  IChat,
  IChatResponse,
  IChatReadMessage,
  IChatReadMessageResponse,
} from "../../types/SupportChat.types";
import { IHttpConfig } from "../../types/Admin";

import { HttpService } from "../http.service";
import { ChatObject, MessageObject } from "react-chat-engine-advanced";

export class SupportChatService {
  constructor(private httpService: HttpService) {}
  public getOrCreateUser(data: IChatUser, config: IHttpConfig) {
    return this.httpService.put<IChatUserResponse, IChatUser>(
      "users/",
      data,
      config
    );
  }

  public getOrCreateChat(data: IChat, config: IHttpConfig) {
    return this.httpService.put<IChatResponse, IChat>("chats/", data, config);
  }

  public updateUserInfo(
    id: number,
    data: Partial<IChatUser>,
    config: IHttpConfig
  ) {
    return this.httpService.patch<IChatUserResponse, Partial<IChatUser>>(
      `users/${id}/`,
      data,
      config
    );
  }

  public deleteChat(id: number, config: IHttpConfig) {
    return this.httpService.delete<ChatObject>(`chats/${id}/`, config);
  }

  public getMessages(
    chatId: number | string,
    messageCount = 50,
    config: IHttpConfig
  ) {
    return this.httpService.get<MessageObject[]>(
      `chats/${chatId}/messages/latest/${messageCount}/`,
      config
    );
  }

  public sendMessage(
    chatId: number | string,
    data: Partial<MessageObject>,
    config: IHttpConfig
  ) {
    return this.httpService.post(`chats/${chatId}/messages/`, data, config);
  }

  public readMessage(
    chatId: number,
    data: IChatReadMessage,
    config: IHttpConfig
  ) {
    return this.httpService.patch<IChatReadMessageResponse, IChatReadMessage>(
      `chats/${chatId}/people/`,
      data,
      config
    );
  }
}

const httpService = new HttpService(axios, "https://api.chatengine.io");
export const supportChatService = new SupportChatService(httpService);
