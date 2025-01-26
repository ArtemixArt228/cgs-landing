import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Careers from "../Careers";
import CareersContactForm from "../CareersContactForm";
import MetaTagsBlock from "../MetaTagsBlock";
import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";

import { adminCareersService } from "../../../services/adminCareersPage";
import { queryKeys } from "../../../consts/queryKeys";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";

interface IMainProps {
  data: IDataCareersResponse | undefined;
  isLoading: boolean;
  refetch: () => Promise<IMainProps>;
}

const CareersMainContent = () => {
  const [isNewTicket, setIsNewTicket] = useState(false);
  const [ticket, setTicket] = useState(0);

  const { data, isLoading, refetch }: IMainProps = useQuery(
    [queryKeys.GetCareersPage],
    () => adminCareersService.getCareersPage()
  );

  const { mutateAsync } = useMutation(
    [queryKeys.UpdateCareersPage],
    async (data: IDataCareersResponse) => {
      return await toast.promise(adminCareersService.updateCareersPage(data), {
        pending: "Pending update",
        success: "Careers updated successfully 👌",
        error: "Some things went wrong 🤯",
      });
    }
  );

  const submitFunc = async (values: IDataCareersResponse) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data} onSubmit={(values) => submitFunc(values)}>
      {() => {
        return (
          <Styled.AdminContentBlock>
            <Form>
              <Careers
                refetch={refetch}
                isNewTicket={isNewTicket}
                setIsNewTicket={setIsNewTicket}
                ticket={ticket}
                setTicket={setTicket}
              />
              <CareersContactForm />
              <MetaTagsBlock sitemap="careers" />
              <Styled.AdminPaddedBlock>
                <Styled.AdminBigButton type="submit">
                  Submit
                </Styled.AdminBigButton>
              </Styled.AdminPaddedBlock>
            </Form>
            <CustomToast />
          </Styled.AdminContentBlock>
        );
      }}
    </Formik>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default CareersMainContent;
