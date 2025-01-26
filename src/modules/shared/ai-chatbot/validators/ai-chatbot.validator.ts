import * as yup from "yup";

export const AIChatMessageSchema = yup.object({
  text: yup
    .string()
    .trim()
    .max(1024, "Message can't be more than $1 symbols")
    .required("Please, type your question"),
});
