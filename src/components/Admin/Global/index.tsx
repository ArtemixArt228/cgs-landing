import React from "react";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";

import AdminHomepageForm from "./AdminHomepageForm";
import { CustomToast } from "../CustomToast";

import "react-toastify/dist/ReactToastify.css";
import * as Styled from "../../../styles/AdminPage";

import { adminGlobalService } from "../../../services/adminHomePage";

import { queryKeys } from "../../../consts/queryKeys";

import { IHomePageResponse } from "../../../types/Admin/AdminHomePage.types";

interface IMainProps {
  data: IHomePageResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const AdminMainContent = () => {
  const { data, isLoading, refetch }: IMainProps = useQuery(
    [queryKeys.GetFullPage],
    () => adminGlobalService.getFullPage()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.PutHomePageData],
    async (data: IHomePageResponse) => {
      return await toast.promise(adminGlobalService.updateFullPage(data), {
        pending: "Pending update",
        success: "Data updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IHomePageResponse) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <>
      <Formik
        initialValues={data!}
        onSubmit={submitForm}
        validateOnChange={false}
        enableReinitialize={false}
      >
        <AdminHomepageForm />
      </Formik>
      <CustomToast />
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminMainContent;
