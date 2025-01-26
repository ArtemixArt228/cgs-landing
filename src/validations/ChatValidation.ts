import * as yup from "yup";

export const ChatEmailSchema = yup.object({
  email: yup
    .string()
    .email("Email has to fit example email@domain.com")
    .min(6, "Email should be at least 6 characters long")
    .max(320, "Email should be 320 characters at most")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/,
      "Email must contain at least 2 chars after @ and after dot"
    )
    .required("Email is required"),
});

export const ChatNameSchema = yup.object({
  name: yup
    .string()
    .min(3, "Name should be at least 3 characters long")
    .max(70, "Name should be 70 characters at most")
    .required("Enter your name please"),
});

export const ChatMessageSchema = yup.object({
  text: yup
    .string()
    .trim()
    .max(1024, "Message can't be more than 1024 symbols")
    .when("files", {
      is: (files: File[]) => files && files.length > 0,
      then: yup
        .string()
        .trim()
        .max(1024, "Message can't be more than 1024 symbols"),
      otherwise: yup
        .string()
        .trim()
        .max(1024, "Message can't be more than 1024 symbols")
        .required("Message or files are required"),
    }),
  files: yup.array().max(3, "You can upload at most 3 files"),
});
