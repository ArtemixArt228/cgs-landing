import * as yup from "yup";

const phoneRegExp =
  /^\+?(\d{1,4}[-.\s]?)?(\(?\d{1,3}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}[-.\s]?\d{3,9}$/;

export const ContactFormSchema = yup.object({
  name: yup
    .string()
    .required("How should we call you?")
    .trim()
    .matches(/^[a-zA-Z ]+$/, "Invalid name")
    .min(1, "Please fill empty fields")
    .max(150, "You're over the limit"),
  email: yup
    .string()
    .email("Email has to fit email@domain.com")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Enter your email"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  description: yup.string().max(300).required(),
  files: yup
    .array()
    .of(yup.mixed())
    .test("file-count", "You can upload at most 3 files", (value) => {
      if (!value) return true;
      return value.length <= 3;
    }),
});
