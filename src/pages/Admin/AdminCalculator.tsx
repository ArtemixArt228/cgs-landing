import React from "react";
import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import { queryKeys } from "../../consts/queryKeys";
import { validTokenGlobal } from "../../services/validToken";
import { useQuery } from "@tanstack/react-query";

import * as Styled from "../../styles/AdminPage";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import AdminCalculatorContent from "../../components/Admin/Calculator";

const AdminCalculator = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );
  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <AdminCalculatorContent />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminCalculator;
