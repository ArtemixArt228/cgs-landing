import Image from "next/image";
import React from "react";
import DeleteFileIcon from "/public/FileUploadContactForm/delete-file.svg";
import * as Styled from "./FileUpload.styled";

interface IProps {
  className?: string;
  title: string;
  url?: string;
  onFileDelete?: () => void;
}

const FileUploadedItem: React.FC<IProps> = ({
  title,
  onFileDelete,
  url,
  className = "",
}) => {
  const content = (
    <>
      <Styled.ImageAndText>
        <Styled.FileIcon>
          <Image
            alt={"File icon"}
            src={"/FileUploadContactForm/file-icon.svg"}
            layout="fill"
          />
        </Styled.FileIcon>
        <Styled.FileName className={className}>{title}</Styled.FileName>
      </Styled.ImageAndText>
      {onFileDelete && (
        <Styled.CloseButton
          type="button"
          onClick={onFileDelete}
          aria-label={`Remove ${title}`}
          className={className}
        >
          <Image src={DeleteFileIcon} alt={"File delete"} />
        </Styled.CloseButton>
      )}
    </>
  );
  return (
    <Styled.FileDataAndDeleteButtonContainer
      className={className}
      title={title}
    >
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ overflow: "hidden", padding: "8px", textDecoration: "none" }}
        >
          {content}
        </a>
      ) : (
        content
      )}
    </Styled.FileDataAndDeleteButtonContainer>
  );
};

export default FileUploadedItem;
