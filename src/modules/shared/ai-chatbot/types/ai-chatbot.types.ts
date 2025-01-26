export interface IMessage {
  id: string;
  message: string;
  isUserMessage: boolean;
  sentAt: number;
}

export interface IUserMessage {
  threadId: string;
  message: string;
}
