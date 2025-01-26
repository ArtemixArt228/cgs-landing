import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceCloudContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { ICloudService } from "../../../../types/Admin/Response.types";

import { adminCloudService } from "../../../../services/services/AdminServicesCloudSolution";

const AdminServiceCloudContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceCloudPage],
    () => adminCloudService.getCloudSolutionPage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceCloudPage],
    async (data: ICloudService) => {
      return await toast.promise(
        adminCloudService.updateCloudSolutionPage(data),
        {
          pending: "Pending update",
          success: "Cloud service updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: ICloudService) => {
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
        <ServiceCloudContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceCloudContent;
