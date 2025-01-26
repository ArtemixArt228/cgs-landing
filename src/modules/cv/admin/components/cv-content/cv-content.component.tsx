import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { Formik } from "formik";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CustomToast } from "../../../../../components/Admin/CustomToast";
import { CvContentBlock } from "../cv-content-manager";

import * as Styled from "./cv-content.styled";

import { cvAdminService } from "../../services";

import { ICvPageData, ICvResponse } from "../../../types";

import { queryKeys } from "../../../../../consts/queryKeys";

export const AdminCVsContent = () => {
  const { data, isLoading, refetch }: ICvResponse = useQuery(
    [queryKeys.getCvPage],
    () => cvAdminService.getCvPage()
  );

  const { mutateAsync: updateCvPage } = useMutation(
    [queryKeys.updateCvPage],
    async (data: ICvPageData) => {
      return await toast.promise(cvAdminService.updateCvPage(data), {
        pending: "Pending update",
        success: "CVs page updated successfully",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: ICvPageData) => {
    document.body.style.cursor = "wait";
    await updateCvPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data} onSubmit={submitForm} validateOnChange={false}>
      <>
        <CvContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};
