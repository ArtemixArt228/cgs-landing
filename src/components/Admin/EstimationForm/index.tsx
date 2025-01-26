import React from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";

import { CustomToast } from "../CustomToast";
import EstimationFormPage from "./EstimationFormPage";
import EstimationFormTitle from "../../EstimationForm/EstimationFormTitle";

import * as Styled from "../../../styles/AdminPage";
import { IEstimationFormPagesResponse } from "../../../types/Admin/AdminEstimationForm.types";
import { adminEstimationFormService } from "../../../services/adminEstimationForm";
import "react-toastify/dist/ReactToastify.css";

const EstimationFormMainContent = () => {
  const { data, refetch }: IEstimationFormPagesResponse = useQuery(
    [queryKeys.getEstimationFormPage],
    () => adminEstimationFormService.getPages()
  );

  return (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader>Estimation Form</Styled.AdminHeader>
      {data && <EstimationFormTitle title={data?.title} />}
      {data &&
        data.pages.map((el, i) => (
          <EstimationFormPage
            pages={data}
            values={el}
            pageNumber={i + 1}
            key={el._id}
            refetch={refetch}
          />
        ))}
      <CustomToast />
    </Styled.AdminPaddedBlock>
  );
};

export default EstimationFormMainContent;
