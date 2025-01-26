import React from "react";
import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { queryKeys } from "../../../consts/queryKeys";
import ContactUsForm from "./ContactUsForm";
import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";
import { adminContactUsService } from "../../../services/adminContactUsPage";
import {
  IContactUsPageData,
  IContactUsResponse,
} from "../../../types/Admin/AdminContactUs.types";

const AdminContactUsContent = () => {
  const { data, isLoading, refetch }: IContactUsResponse = useQuery(
    [queryKeys.getContactUsPage],
    () => adminContactUsService.getContactUsPage()
  );

  const { mutateAsync: updateContactUsPage } = useMutation(
    [queryKeys.updateContactUsPage],
    async (data: IContactUsPageData) => {
      const response = await toast.promise(
        adminContactUsService.updateContactUsPage(data),
        {
          pending: "Pending update",
          success: "Data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
      return response;
    }
  );

  const submitForm = async (values: IContactUsPageData) => {
    document.body.style.cursor = "wait";
    await updateContactUsPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <>
      <Formik initialValues={data} onSubmit={submitForm}>
        <ContactUsForm />
      </Formik>
      <CustomToast />
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminContactUsContent;
