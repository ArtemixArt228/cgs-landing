import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceWebAuditContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminWebAuditService } from "../../../../services/services/adminServiceWebAuditPage";

import { IServiceWebAudit } from "../../../../types/Admin/Response.types";

const AdminServiceWebAuditContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceWebAuditPage],
    () => adminWebAuditService.getWebAuditServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceWebAuditPage],
    async (data: IServiceWebAudit) => {
      return await toast.promise(
        adminWebAuditService.updateWebAuditServicePage(data),
        {
          pending: "Pending update",
          success: "Web audit updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: IServiceWebAudit) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <>
        <ServiceWebAuditContentBlock />
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
