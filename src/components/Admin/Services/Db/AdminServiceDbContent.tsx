import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceDbContentBlock from "./";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { IServiceDb } from "../../../../types/Admin/Response.types";

import { adminDbService } from "../../../../services/services/adminServicesDbPage";

const AdminServiceDbContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceDbPage],
    () => adminDbService.getDbServicePage()
  );
  const { mutateAsync: updateDbPage } = useMutation(
    [queryKeys.updateServiceDbPage],
    async (data: IServiceDb) => {
      return await toast.promise(adminDbService.updateDbServicePage(data), {
        pending: "Pending update",
        success: "DB services updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IServiceDb) => {
    document.body.style.cursor = "wait";
    await updateDbPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={submitForm}>
      <>
        <ServiceDbContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceDbContent;
