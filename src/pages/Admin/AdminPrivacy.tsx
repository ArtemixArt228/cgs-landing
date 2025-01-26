import React from "react";
import { useQuery } from "@tanstack/react-query";
import AdminPrivacyMainContent from "../../components/Admin/Privacy";
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
        <AdminPrivacyMainContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Somethimg went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminHomePage;
