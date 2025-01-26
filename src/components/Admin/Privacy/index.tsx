import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";
import { adminPrivacyService } from "../../../services/adminPolicyPage";
import { IPrivacyPage } from "../../../types/Admin/Response.types";
import PrivacyContentBlock from "./PrivacyContentBlock";

const AdminServiceWebAuditContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getPrivacyPage],
    () => adminPrivacyService.getPolicyPage()
  );

  const { mutateAsync: updatePrivacyPage } = useMutation(
    [queryKeys.updatePrivacyPage],
    async (data: IPrivacyPage) => {
      return await toast.promise(adminPrivacyService.updatePolicyPage(data), {
        pending: "Pending update",
        success: "Policy page updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IPrivacyPage) => {
    document.body.style.cursor = "wait";
    await updatePrivacyPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <>
        <PrivacyContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceWebAuditContent;
