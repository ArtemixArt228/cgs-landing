import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "@tanstack/react-query";

import * as Styled from "../../styles/AdminPage";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import EstimationFormMainContent from "../../components/Admin/EstimationForm";

const AdminEstimationForm = () => {
  const { data: token } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return token ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <EstimationFormMainContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminEstimationForm;
