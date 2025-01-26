import React, { ChangeEvent, useRef } from "react";
import { TextareaAutosize } from "@mui/material";
import { FormikProps } from "formik";
import PaperClip from "/public/FileUploadContactForm/paperclip.svg";
import AddLink from "/public/add-link.svg";

import * as Styled from "../../../styles/Chat/ChatInputForm.styled";
import Image from "next/image";
import FilesContainer from "../../FileUpload/FilesContainer";
import { ButtonArrow } from "../../../modules/shared/ai-chatbot/components/btn-arrow.component";
import { IAdminMessageFormValues } from "../../../types/SupportChat.types";
interface IMessageFormComponentProps {
  messageFormController: FormikProps<IAdminMessageFormValues>;
  isAdminPanel?: boolean;
  handleOpenLinkModal?: () => void;
}

const MessageFormComponent = ({
  messageFormController: formik,
  isAdminPanel = false,
  handleOpenLinkModal,
}: IMessageFormComponentProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.shiftKey) {
      event.preventDefault();
      formik.setFieldValue("text", formik.values.text + "\n");
    }
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formik.handleSubmit();
    }
  };

  const handleSelectFilesClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
    event.currentTarget.blur();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files ? Array.from(e.target.files) : [];
    const previousFilesLength = formik.values.files.length || 0;
    if (uploadedFiles.length + previousFilesLength <= 3) {
      formik.setFieldValue("files", [...formik.values.files, ...uploadedFiles]);
    } else {
      formik.setFieldError("files", "You can upload at most 3 files");
    }
    e.target.value = "";
  };

  const handleFileDelete = (index: number) => {
    formik.setFieldValue(
      "files",
      formik.values.files.filter((_, i) => i !== index)
    );
  };
  return (
    <Styled.MessageFormWrapper>
      <Styled.InputAndErrorWrapper>
        <Styled.MessageForm onSubmit={formik.handleSubmit} autoComplete="off">
          <Styled.InputWrapper
            className="message-input"
            hasError={!!formik.errors.text}
          >
            <FilesContainer
              files={formik.values.files}
              onFileDelete={handleFileDelete}
              className={formik.values.files.length ? "" : "hidden"}
            />
            <input
              type="file"
              name="files"
              id="file-input"
              multiple
              onChange={handleFileChange}
              style={{ display: "none" }}
              ref={inputRef}
              accept="image/*, .docx, .doc, .pdf, .txt, .csv"
            />
            <Styled.ButtonsContainer>
              <Styled.AdminButton
                type="button"
                aria-label="Attach files"
                title="Attach files"
                onClick={handleSelectFilesClick}
              >
                <Image src={PaperClip} alt={"File upload"} />
              </Styled.AdminButton>

              {isAdminPanel && (
                <Styled.AdminButton
                  type="button"
                  aria-label="Add Link"
                  title="Add Link"
                  onClick={handleOpenLinkModal}
                  className="link"
                >
                  <Image src={AddLink} alt={"Add link"} />
                </Styled.AdminButton>
              )}
            </Styled.ButtonsContainer>
            <TextareaAutosize
              maxRows={formik.values.files.length ? 2.5 : 4.5}
              style={{
                width: "100%",
                border: "none",
                backgroundColor: "transparent",
                borderRadius: 0,
                fontSize: 14,
                overflow: "auto",
              }}
              minRows={isAdminPanel ? 2.5 : 1}
              name="text"
              placeholder={
                formik.values.files.length ? "" : "Write a message..."
              }
              value={formik.values.text}
              onChange={formik.handleChange}
              onBlur={() => formik.setFieldTouched("text", false)}
              onKeyDown={handleKeyDown}
              className="message-input"
            />
          </Styled.InputWrapper>
          <Styled.SubmitIconButton type="submit">
            <ButtonArrow />
          </Styled.SubmitIconButton>
        </Styled.MessageForm>
        {formik.touched.text && formik.errors.text ? (
          <Styled.InputError>{formik.errors.text}</Styled.InputError>
        ) : (
          formik.errors.files?.[0] && (
            <Styled.InputError>
              {formik.errors.files.toString()}
            </Styled.InputError>
          )
        )}
      </Styled.InputAndErrorWrapper>
    </Styled.MessageFormWrapper>
  );
};

export default MessageFormComponent;
