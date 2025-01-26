import * as yup from "yup";

export const AdminAuthValidation = () => {
  return yup.object({
    username: yup.string().required("Enter username"),
    password: yup.string().required("Enter password"),
  });
};
