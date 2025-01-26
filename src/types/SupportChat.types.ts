import { ChatPersonObject } from "react-chat-engine-advanced";

export interface IChatUser {
  username: string;
  secret: string;
  first_name?: string;
  custom_json?: object | string;
  is_online?: boolean;
}

export interface IChatUpd {
  title: string;
}

export interface IUpdatedChatUser {
  data: { username: string; secret: string; first_name?: string };
}

export interface ICurrentMessage {
  text: string;
  sender_username: string;
  custom_json: {
    files: ICustomFile[];
  };
}
export interface IChatNameForm {
  name: string;
}

export interface IChatEmailForm {
  email: string;
}

export interface IChatReadMessage {
  last_read: number;
}

export interface IChatReadMessageResponse {
  id: number;
  admin: IChatUser;
  people: ChatPersonObject[];
  attachments: [];
  last_message: {
    id: number;
    sender: {
      username: string;
      first_name: string;
      last_name: string;
      avatar: null;
      custom_json: string;
      is_online: false;
    };
    created: string;
    attachments: [];
    sender_username: string;
    text: string;
    custom_json: string;
  };
  title: string;
  is_direct_chat: true;
  custom_json: object | string;
  access_key: string;
  is_authenticated: true;
  created: string;
}
export interface IUserDataFormValues {
  text: string;
  files: File[];
  email: string;
  name: string;
  honeypot?: string;
}

export interface IChatUserResponse {
  username: string;
  secret: string;
  id: number;
  first_name: string;
  custom_json?: {
    chatColor?: string;
  };
  is_online?: boolean;
}

export interface IUpdateUserResponse {
  data: {
    username: string;
    secret: string;
    id: number;
  };
}

export interface IChat {
  usernames: string[];
  title: string;
  is_direct_chat: boolean;
}

export interface IChatResponse {
  id: number;
  access_key: string;
}

export interface IChatUserInfo {
  userName: string;
  userSecret: string;
  chatId: string;
  accessKey: string;
  expiredTime: number;
  firstName?: string;
  chatColor?: string;
}

export interface ICustomFile {
  name: string;
  url: string;
  type: string;
  created: string;
}
export interface MessageCustomJSON {
  files: ICustomFile[];
}

export interface IAdminMessageFormValues {
  text: string;
  files: File[];
}
