import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceBlockchainContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { IBlockchainService } from "../../../../types/Admin/Response.types";

import { adminBlockchainService } from "../../../../services/services/AdminServiceBlockchainPage";

const AdminServiceBlockchainContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceBlockchainPage],
    () => adminBlockchainService.getBlockchainDevelopmentPage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceBlockchainPage],
    async (data: IBlockchainService) => {
      return await toast.promise(
        adminBlockchainService.updateBlockchainDevelopmentPage(data),
        {
          pending: "Pending update",
          success: "Blockchain updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: IBlockchainService) => {
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
        <ServiceBlockchainContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceBlockchainContent;
