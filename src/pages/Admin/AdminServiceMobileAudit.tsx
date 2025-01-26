import React from "react";

import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminServiceMobileAuditContent from "../../components/Admin/Services/MobileAudit/AdminServiceMobileAuditContent";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

import * as Styled from "../../styles/AdminPage";

import { useQuery } from "@tanstack/react-query";

import { queryKeys } from "../../consts/queryKeys";

import { validTokenGlobal } from "../../services/validToken";

const AdminServiceMobileAudit = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminServiceMobileAuditContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceMobileAudit;
