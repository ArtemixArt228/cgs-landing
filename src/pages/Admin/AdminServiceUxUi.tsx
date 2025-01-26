import React from "react";
import { useQuery } from "@tanstack/react-query";

import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminServiceUxUiContent from "../../components/Admin/Services/UxUi/AdminServiceUxUiContext";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

import * as Styled from "../../styles/AdminPage";

import { queryKeys } from "../../consts/queryKeys";

import { validTokenGlobal } from "../../services/validToken";

const AdminUxUi = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminServiceUxUiContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong...
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminUxUi;
