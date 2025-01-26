import React from "react";
import { useQuery } from "@tanstack/react-query";
import AdminMainContent from "../../components/Admin/Global";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import * as Styled from "../../styles/AdminPage";

const AdminHomePage = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminMainContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminHomePage;
