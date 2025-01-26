import React from "react";
import * as Styled from "./FileUpload.styled";
import FileUploadedItem from "./FileUploadedItem";

interface IProps {
  files?: File[];
  onFileDelete: (index: number) => void;
  className?: string;
}
const FilesContainer: React.FC<IProps> = ({
  files = [],
  onFileDelete,
  className = "",
}) => {
  return (
    <Styled.Container className={className}>
      {files.map((file, idx) => (
        <FileUploadedItem
          key={file.name + idx}
          title={file.name}
          onFileDelete={() => onFileDelete(idx)}
          className={className}
        />
      ))}
    </Styled.Container>
  );
};

export default FilesContainer;
