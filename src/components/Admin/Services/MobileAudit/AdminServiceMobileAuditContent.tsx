import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceMobileAuditContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminMobileAuditService } from "../../../../services/services/adminServiceMobileAuditPage";

import { IServiceMobileAudit } from "../../../../types/Admin/Response.types";

const AdminServiceMobileAuditContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceMobileAuditPage],
    () => adminMobileAuditService.getMobileAuditServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceMobileAuditPage],
    async (data: IServiceMobileAudit) => {
      return await toast.promise(
        adminMobileAuditService.updateMobileAuditServicePage(data),
        {
          pending: "Pending update",
          success: "Mobile audit updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: IServiceMobileAudit) => {
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
        <ServiceMobileAuditContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceMobileAuditContent;
