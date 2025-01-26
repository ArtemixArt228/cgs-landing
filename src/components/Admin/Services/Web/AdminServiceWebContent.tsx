import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceWebContentBlock from "./";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminWebService } from "../../../../services/services/adminServicesWebPage";
import { IServicePage } from "../../../../types/Admin/AdminServices.types";
import { AiServicePageDefaultValues } from "../../../../consts/services";
import { initializeMissingProps } from "../../../../utils/initializeMissingProps";

const AdminServiceWebContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceWebPage],
    () => adminWebService.getWebServicePage()
  );
  const { mutateAsync: updateWebServices } = useMutation(
    [queryKeys.updateServiceWebPage],
    async (data: IServicePage) => {
      const response = await toast.promise(
        adminWebService.updateWebServicePage(data),
        {
          pending: "Pending update",
          success: "Web services updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
      return response;
    }
  );

  const submitForm = async (values: IServicePage) => {
    document.body.style.cursor = "wait";
    await updateWebServices(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  const getInitialValues = initializeMissingProps(data!, {
    ...AiServicePageDefaultValues,
  });

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <>
      <Formik initialValues={getInitialValues} onSubmit={submitForm}>
        <ServiceWebContentBlock />
      </Formik>
      <CustomToast />
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceWebContent;
