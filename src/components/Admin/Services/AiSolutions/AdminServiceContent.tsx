import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ServiceAiContentBlock from ".";
import { CustomToast } from "../../CustomToast";

import * as Styled from "../../../../styles/AdminPage";

import { IServiceAi } from "../../../../types/Admin/AdminServices.types";

import { queryKeys } from "../../../../consts/queryKeys";

import { adminAiService } from "../../../../services/services/AdminServiceAiSolution";
import { initializeMissingProps } from "../../../../utils/initializeMissingProps";
import { AiServicePageDefaultValues } from "../../../../consts/services";

const AdminServiceContent = () => {
  const { data, isLoading, refetch } = useQuery(
    [queryKeys.getServiceAiPage],
    () => adminAiService.getAiServicePage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateServiceAiPage],
    async (data: IServiceAi) => {
      return await toast.promise(adminAiService.updateAiServicePage(data), {
        pending: "Pending update",
        success: "AI solutions updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IServiceAi) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  const getInitialValues = initializeMissingProps(
    data!,
    AiServicePageDefaultValues
  );

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={getInitialValues} onSubmit={submitForm}>
      <>
        <ServiceAiContentBlock />
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
