import React from "react";
import { useQuery } from "@tanstack/react-query";

import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminServiceCloudContent from "../../components/Admin/Services/Cloud/AdminServiceCloudContent";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

import * as Styled from "../../styles/AdminPage";

import { queryKeys } from "../../consts/queryKeys";

import { validTokenGlobal } from "../../services/validToken";

const AdminServiceCloud = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminServiceCloudContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceCloud;
