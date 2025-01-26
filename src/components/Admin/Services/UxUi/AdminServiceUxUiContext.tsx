import React from "react";
import { Formik } from "formik";
import { useQuery, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceUxUiContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";
import { IUxUiInterface } from "../../../../types/Admin/Response.types";
import { adminUxUiService } from "../../../../services/services/AdminServiceUxUiPage";

const AdminServiceUxUiContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceUxUiPage],
    () => adminUxUiService.getUxUiServicePage()
  );

  const { mutateAsync: updateUxUiPage } = useMutation(
    [queryKeys.updateServiceUxUiPage],
    async (data: IUxUiInterface) => {
      return await toast.promise(adminUxUiService.updateUxUiServicePage(data), {
        pending: "Pending update",
        success: "UxUi updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IUxUiInterface) => {
    document.body.style.cursor = "wait";
    await updateUxUiPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <>
        <ServiceUxUiContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong.
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceUxUiContent;
