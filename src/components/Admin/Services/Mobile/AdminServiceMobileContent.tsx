import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceMobileContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminMobileService } from "../../../../services/services/adminServicesMobilePage";

import { AiServicePageDefaultValues } from "../../../../consts/services";
import { initializeMissingProps } from "../../../../utils/initializeMissingProps";
import { IServicePage } from "../../../../types/Admin/AdminServices.types";

const AdminServiceMobileContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceMobilePage],
    () => adminMobileService.getMobileServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceMobilePage],
    async (data: IServicePage) => {
      return await toast.promise(
        adminMobileService.updateMobileServicePage(data),
        {
          pending: "Pending update",
          success: "Mobile development updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const submitForm = async (values: IServicePage) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  const getInitialValues = initializeMissingProps(data!, {
    ...AiServicePageDefaultValues,
  });
  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={getInitialValues} onSubmit={submitForm}>
      <>
        <ServiceMobileContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceMobileContent;
