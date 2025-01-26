import React from "react";
import { useQuery } from "@tanstack/react-query";

import AdminHeader from "../../components/Admin/Header/AdminHeader";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { AdminCVsContent } from "../../modules/cv/admin";

import * as Styled from "../../modules/cv/admin/styles";

import { validTokenGlobal } from "../../services/validToken";

import { queryKeys } from "../../consts/queryKeys";

const AdminCVsPage = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminCVsContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminCVsPage;
