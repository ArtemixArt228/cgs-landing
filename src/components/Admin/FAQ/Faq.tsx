import React from "react";
import { Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FaqContentBlock from "./FaqContentBlock";
import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";
import { queryKeys } from "../../../consts/queryKeys";
import { IFaqData, IFaqResponse } from "../../../types/Admin/AdminFaq.types";
import { adminFaqService } from "../../../services/adminFaqPage";

const Faq = () => {
  const { data, isLoading, refetch }: IFaqResponse = useQuery(
    [queryKeys.getFaqPage],
    () => adminFaqService.getFaqPage()
  );

  const { mutateAsync: updateFaqPage } = useMutation(
    [queryKeys.updateFaqPage],
    async (data: IFaqData) => {
      return await toast.promise(adminFaqService.updateFaqPage(data), {
        pending: "Pending update",
        success: "FAQ data updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitForm = async (values: IFaqData) => {
    document.body.style.cursor = "wait";
    await updateFaqPage(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik key="globalFaqForm" initialValues={data!} onSubmit={submitForm}>
      <>
        <FaqContentBlock />
        <CustomToast />
      </>
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default Faq;
