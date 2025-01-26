import React from "react";
import { useQuery } from "@tanstack/react-query";

import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminServiceWebAuditContent from "../../components/Admin/Services/WebAudit/AdminServiceWebAuditContent";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

import * as Styled from "../../styles/AdminPage";

import { queryKeys } from "../../consts/queryKeys";

import { validTokenGlobal } from "../../services/validToken";

const AdminServiceWebAudit = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminServiceWebAuditContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceWebAudit;
