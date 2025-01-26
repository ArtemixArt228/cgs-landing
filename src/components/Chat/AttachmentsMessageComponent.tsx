import React from "react";
import { MessageObject } from "react-chat-engine-advanced";

import * as Styled from "../../styles/Chat/ChatMessagesComponent.styled";

import { imageExtensionPattern } from "../../consts";
import { ICustomFile } from "../../types/SupportChat.types";
import FileUploadedItem from "../FileUpload/FileUploadedItem";

interface IUserMessageComponentProps {
  message: MessageObject;
  attachments?: ICustomFile[];
  isReceivedMessage: boolean;
}

const AttachmentsMessageComponent = ({
  attachments = [],
  isReceivedMessage,
}: IUserMessageComponentProps) => {
  const handleDragStart = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Styled.FilesMessages isReceivedMessage={isReceivedMessage}>
      {attachments.map((file, index) => {
        const isImage = imageExtensionPattern.test(file.name);
        if (isImage)
          return (
            <Styled.UserMessageAttachment
              key={file.name + index}
              className="image-container"
              onDragStart={handleDragStart}
            >
              <a href={file.url} target="_blank" rel="noopener noreferrer">
                <img src={file.url} alt={file.name} className="chat-image" />
              </a>
            </Styled.UserMessageAttachment>
          );
        else
          return (
            <FileUploadedItem
              key={file.name}
              title={file.name}
              url={file.url}
              className="chat-sent-file"
            />
          );
      })}
    </Styled.FilesMessages>
  );
};

export default AttachmentsMessageComponent;
