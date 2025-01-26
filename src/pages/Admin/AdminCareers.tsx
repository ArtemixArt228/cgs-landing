import React from "react";
import CareersMainContent from "../../components/Admin/Global/CareersMainContent";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "@tanstack/react-query";
import * as Styled from "../../styles/AdminPage";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

const AdminCareersPage = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <CareersMainContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminCareersPage;
