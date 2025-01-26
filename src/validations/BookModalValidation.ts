import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const BookModalValidation = () => {
  return yup.object({
    name: yup
      .string()
      .required("How should we call you?")
      .trim()
      .matches(/^[a-zA-Z ]+$/, "Invalid name")
      .min(1, "Please fill empty fields")
      .max(150, "You're over the limit"),
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Enter your email"),
    country: yup.string(),
    phone: yup
      .string()
      .matches(phoneRegExp, "Number must be a valid phone number")
      .required("Enter your phone number"),
  });
};
