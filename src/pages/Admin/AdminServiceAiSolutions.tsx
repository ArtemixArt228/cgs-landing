import React from "react";
import { useQuery } from "@tanstack/react-query";

import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminServiceContent from "../../components/Admin/Services/AiSolutions/AdminServiceContent";
import AdminHeader from "../../components/Admin/Header/AdminHeader";

import * as Styled from "../../styles/AdminPage";

import { queryKeys } from "../../consts/queryKeys";

import { validTokenGlobal } from "../../services/validToken";

const AdminServiceAiSolutions = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminServiceContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminServiceAiSolutions;
