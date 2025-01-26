import Image from "next/image";
import React, { ChangeEvent, useRef } from "react";
import * as Styled from "./FileUpload.styled";
import PaperClip from "/public/FileUploadContactForm/paperclip.svg";
import FilesContainer from "./FilesContainer";
import { useFormikContext } from "formik";
import { IContactModalFormValues } from "../../types/ModalCategory.types";

interface IProps {
  className?: string;
}
const FileUpload = ({ className }: IProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { values, setFieldValue, setFieldError, errors } =
    useFormikContext<IContactModalFormValues>();

  const handleSelectFilesClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
    event.currentTarget.blur();
  };
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    const previousFilesLength = values.files?.length || 0;
    if (files.length + previousFilesLength > 3) {
      setFieldError("files", "You can upload a maximum of 3 files");
    } else {
      setFieldValue("files", [...values.files, ...files]);
    }
    e.target.value = "";
  };
  const handleFileDelete = (index: number) => {
    setFieldValue(
      "files",
      values.files.filter((_, i) => i !== index)
    );
  };
  return (
    <>
      <FilesContainer
        files={values.files}
        onFileDelete={handleFileDelete}
        className={!!values.files.length ? "" : "hidden"}
      />
      {errors.files && (
        <Styled.ErrorMessage>{errors.files.toString()}</Styled.ErrorMessage>
      )}
      <input
        type="file"
        name="file-input"
        id="file-input"
        multiple
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
        accept="image/*, .docx, .doc, .pdf, .txt, .csv"
      />
      <Styled.FileUploadButton
        className={className}
        type="button"
        aria-label="Attach files"
        onClick={handleSelectFilesClick}
      >
        <Image src={PaperClip} alt={"File upload"} />
      </Styled.FileUploadButton>
    </>
  );
};

export default FileUpload;
