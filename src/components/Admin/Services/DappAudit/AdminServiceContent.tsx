import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceDappContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { IServiceDappAudit } from "../../../../types/Admin/Response.types";

import { adminDappAuditService } from "../../../../services/services/adminServicesDappAuditPage";

const AdminServiceContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceDappAuditPage],
    () => adminDappAuditService.getDappAuditServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceDappAuditPage],
    async (data: IServiceDappAudit) => {
      return await toast.promise(
        adminDappAuditService.updateDappAuditServicePage(data),
        {
          pending: "Pending update",
          success: "Dapp audit updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: IServiceDappAudit) => {
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
        <ServiceDappContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceContent;
