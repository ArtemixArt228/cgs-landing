import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQuery } from "@tanstack/react-query";

import { assistantService } from "../../../../services/ai-assistant";

import { IMessage, IUserMessage } from "../types";

import { queryKeys } from "../../../../consts/queryKeys";
import { storeKeys } from "../../../../consts";

export const useAssistantChat = (initialMessage?: string) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [streamedMessage, setStreamedMessage] = useState("");
  const [chatId, setChatId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { isError, refetch } = useQuery(
    [queryKeys.getAssistantChat],
    () => assistantService.startNewChat(),
    {
      enabled: false,
      onSuccess: (data) => {
        if (data) {
          localStorage.setItem(
            storeKeys.aiChatbotServiceAssistant,
            data.thread_id
          );
          setChatId(data.thread_id);
        }
      },
    }
  );

  // Initialize chat on component mount
  useEffect(() => {
    const thread_id = localStorage.getItem(storeKeys.aiChatbotServiceAssistant);
    if (typeof window !== "undefined" && !thread_id) {
      refetch();
    } else if (thread_id) {
      setChatId(thread_id);
    }
  }, [refetch]);

  // Add an initial message when chat is created
  useEffect(() => {
    if (chatId && initialMessage) {
      setMessages([
        {
          id: uuidv4(),
          message: initialMessage,
          isUserMessage: false,
          sentAt: Date.now(),
        },
      ]);
    }
  }, [chatId, initialMessage]);

  const sendMessage = async (userMessage: string) => {
    // Add a user message to messages
    const userMessageObject: IMessage = {
      id: uuidv4(),
      message: userMessage,
      isUserMessage: true,
      sentAt: Date.now(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessageObject]);

    const data: IUserMessage = {
      threadId: chatId,
      message: userMessage,
    };

    let accumulatedMessage = "";
    await assistantService.streamMessageToChat(
      data,
      (messageChunk) => {
        accumulatedMessage += messageChunk;
        setStreamedMessage(accumulatedMessage);
      },
      () => {
        setIsLoading(true);
      },
      () => {
        if (accumulatedMessage) {
          setMessages((prevMessages) => [
            ...prevMessages,
            {
              id: uuidv4(),
              message: accumulatedMessage,
              isUserMessage: false,
              sentAt: Date.now(),
            },
          ]);
        }
        setStreamedMessage("");
        setIsLoading(false);
      },
      () => {
        setIsLoading(false);
      }
    );
  };

  return {
    messages,
    streamedMessage,
    chatId,
    isLoading,
    isError,
    sendMessage,
  };
};
