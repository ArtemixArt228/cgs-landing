import React, { useState } from "react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import { useMutation } from "@tanstack/react-query";

import AuthSubmitButton from "./AuthButton";
import AdminAuthFormInput from "./AdminAuthFormInput";

import * as Styled from "../../styles/AdminAuth";

import { IAdmin, IRes } from "../../types/Admin/Admin.types";

import { AdminAuthValidation } from "../../validations/AdminAuthValidation";
import { authService } from "../../services/login";
import { initAdmin, storeKeys } from "../../consts";
import { queryKeys } from "../../consts/queryKeys";

const AdminAuthForm = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const { mutateAsync } = useMutation<any, IAdmin, any, IRes>(
    [queryKeys.AdminAuth],
    (values: IAdmin) => authService.adminAuth(values)
  );

  const onSubmit = async (values: IAdmin, resetForm: VoidFunction) => {
    try {
      setErrorMessage("");
      const resp: IRes = await mutateAsync(values);
      localStorage.setItem(storeKeys.token, resp.accessToken);
      router.push("AdminPage");
    } catch (err) {
      setErrorMessage("Wrong username or password");
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={initAdmin}
      validationSchema={AdminAuthValidation}
      onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
    >
      {(fprops) => {
        return (
          <Styled.AuthFormBlock>
            <AdminAuthFormInput
              name="username"
              label="username"
              handleChange={fprops.handleChange}
              type="text"
              placeholder="Username"
              labelName="Username:"
            />
            <AdminAuthFormInput
              name="password"
              label="password"
              handleChange={fprops.handleChange}
              type="password"
              placeholder="Password"
              labelName="Password:"
              className="password"
            />
            <Styled.AuthFormError>{errorMessage}</Styled.AuthFormError>
            <AuthSubmitButton />
          </Styled.AuthFormBlock>
        );
      }}
    </Formik>
  );
};

export default AdminAuthForm;
