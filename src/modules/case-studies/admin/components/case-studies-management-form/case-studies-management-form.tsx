import { Formik } from "formik";
import React from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AdminPortfolioContentBlock } from "..";
import { adminPortfolioService } from "../../../../../services/adminPortfolioPage";
import { CustomToast } from "../../../../../components/Admin/CustomToast";

import { queryKeys } from "../../../../../consts/queryKeys";
import * as Styled from "../../../../../styles/AdminPage";
import {
  IPortfolioPageData,
  IPortfolioResponse,
} from "../../../../../types/Admin/AdminPortfolio.types";

export const PortfolioPage = () => {
  const { data, isLoading, refetch }: IPortfolioResponse = useQuery(
    [queryKeys.getPortfolioPage],
    () => adminPortfolioService.getPageData()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.updatePortfolioPage],
    async (data: IPortfolioPageData) => {
      return await toast.promise(adminPortfolioService.updatePageData(data), {
        pending: "Pending update",
        success: "Data updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IPortfolioPageData) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik
      enableReinitialize
      key="globalPortfolioForm"
      initialValues={data!}
      onSubmit={submitForm}
      validateOnChange={false}
    >
      <>
        <AdminPortfolioContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};
