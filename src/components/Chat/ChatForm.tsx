import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FormikProps, useFormik } from "formik";
import Image from "next/image";
import {
  ChatEmailSchema,
  ChatNameSchema,
  ChatMessageSchema,
} from "../../validations/ChatValidation";
import { useCreateUserChat } from "../../hooks/useCreateUserChat";
import { useUpdateUser } from "../../hooks/useUpdateUser";
import * as Styled from "../../styles/Chat/ChatInputForm.styled";
import {
  IChatUserInfo,
  IUserDataFormValues,
} from "../../types/SupportChat.types";
import FilesContainer from "../FileUpload/FilesContainer";
import { TextareaAutosize, useMediaQuery } from "@mui/material";

import PaperClip from "/public/FileUploadContactForm/paperclip.svg";
import { ButtonArrow } from "../../modules/shared/ai-chatbot/components/btn-arrow.component";

interface IChatFormProps {
  userEmail: string;
  isChatOpen: boolean;
  chatId: string;
  userName: string;
  publicKey: string;
  setChatUserInfo: React.Dispatch<React.SetStateAction<IChatUserInfo | null>>;
  setIsGreetingMessageShow: React.Dispatch<React.SetStateAction<boolean>>;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setSentEmailTime: React.Dispatch<React.SetStateAction<string>>;
  setSentNameTime: React.Dispatch<React.SetStateAction<string>>;
  messageFormController: FormikProps<IUserDataFormValues>;
}

const ChatForm = ({
  isChatOpen,
  userName,
  userEmail,
  setChatUserInfo,
  setIsGreetingMessageShow,
  setUserName,
  setUserEmail,
  setSentEmailTime,
  setSentNameTime,
  messageFormController,
}: IChatFormProps) => {
  const isWeb = useMediaQuery("(min-width: 1920px)");
  const [step, setStep] = useState<"email" | "name" | "text">(
    !userEmail ? "email" : !userName ? "name" : "text"
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const newStep = !userEmail ? "email" : !userName ? "name" : "text";
    setStep(newStep);
  }, [userName, userEmail]);
  const { handleSubmit: submitEmail } = useCreateUserChat({
    setUserEmail,
    setChatUserInfo,
    setUserName,
    setSentEmailTime,
    setSentNameTime,
    setIsGreetingMessageShow,
  });

  const { handleSubmit: submitName } = useUpdateUser({
    setUserName,
    setChatUserInfo,
    setSentNameTime,
    setIsGreetingMessageShow,
  });

  const controller = useFormik({
    initialValues: {
      email: "",
      name: "",
      text: "",
      files: [],
      honeypot: "",
    },
    validationSchema:
      step === "email"
        ? ChatEmailSchema
        : step === "name"
        ? ChatNameSchema
        : ChatMessageSchema,
    onSubmit: (values, actions) => {
      if (values.honeypot) {
        return; // Do not proceed with submission
      }

      if (step === "email") {
        submitEmail({ email: values.email });
      } else if (step === "name") {
        submitName({ name: values.name });
      }
      actions.resetForm();
    },
  });

  const formik = step === "text" ? messageFormController : controller;

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

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && event.shiftKey && step !== "text") {
      event.preventDefault();
    } else if (event.key === "Enter" && event.shiftKey && step == "text") {
      event.preventDefault();
      formik.setFieldValue("text", formik.values.text + "\n");
    }
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      formik.handleSubmit();
    }
  };
  return (
    <Styled.MessageFormWrapper>
      <Styled.InputAndErrorWrapper>
        <Styled.MessageForm onSubmit={formik.handleSubmit} autoComplete="off">
          {step === "email" && (
            <Styled.InputWrapper hasError={!!formik.errors.email}>
              <TextareaAutosize
                maxRows={4}
                minRows={1}
                style={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  overflow: "auto",
                  fontSize: isWeb ? 18 : 14,
                  lineHeight: isWeb ? "150%" : "142%",
                }}
                name="email"
                autoFocus={isChatOpen}
                placeholder="Input your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className="email-input"
                onKeyDown={handleKeyDown}
                onBlur={formik.handleBlur}
              />
            </Styled.InputWrapper>
          )}
          {step === "name" && (
            <Styled.InputWrapper hasError={!!formik.errors.name}>
              <TextareaAutosize
                maxRows={4}
                minRows={1}
                style={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  overflow: "auto",
                  fontSize: isWeb ? 18 : 14,
                  lineHeight: isWeb ? "150%" : "142%",
                }}
                name="name"
                autoFocus={isChatOpen}
                placeholder="Input your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="name-input"
                onKeyDown={handleKeyDown}
              />
            </Styled.InputWrapper>
          )}
          {step === "text" && (
            <Styled.InputWrapper
              className="message-input"
              hasError={!!formik.errors.text}
            >
              <FilesContainer
                files={formik.values.files}
                onFileDelete={handleFileDelete}
                className={
                  formik.values.files.length
                    ? "chat-input"
                    : "chat-input hidden"
                }
              />
              <input
                type="file"
                name="file-input"
                id="file-input"
                multiple
                onChange={handleFileChange}
                style={{ display: "none" }}
                ref={inputRef}
                accept="image/*, .docx, .doc, .pdf, .txt, .csv"
              />
              <Styled.FileUploadButton
                type="button"
                aria-label="Attach files"
                onClick={handleSelectFilesClick}
              >
                <Image src={PaperClip} alt={"File upload"} />
              </Styled.FileUploadButton>
              <TextareaAutosize
                maxRows={
                  formik.values.files.length && isWeb
                    ? 2.5
                    : formik.values.files.length && !isWeb
                    ? 2.5
                    : !formik.values.files.length && isWeb
                    ? 4.75
                    : 4.5
                }
                style={{
                  width: "100%",
                  border: "none",
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  overflow: "auto",
                  fontSize: isWeb ? 18 : 14,
                  lineHeight: isWeb ? "150%" : "142%",
                }}
                name="text"
                placeholder="Write a message..."
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
                className="input-f"
              />
            </Styled.InputWrapper>
          )}

          {/* Honeypot hidden field */}
          <input
            type="text"
            name="honeypot"
            style={{ display: "none" }}
            onChange={formik.handleChange}
          />

          <Styled.SubmitIconButton type="submit">
            <ButtonArrow />
          </Styled.SubmitIconButton>
        </Styled.MessageForm>
        {formik.touched[step] && formik.errors[step] && (
          <Styled.InputError>{formik.errors[step]}</Styled.InputError>
        )}
        {formik.errors.files?.[0] && (
          <Styled.InputError>
            {formik.errors.files.toString()}
          </Styled.InputError>
        )}
      </Styled.InputAndErrorWrapper>
    </Styled.MessageFormWrapper>
  );
};

export default ChatForm;
