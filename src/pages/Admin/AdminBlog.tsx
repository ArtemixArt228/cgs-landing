import React from "react";
import { useQuery } from "@tanstack/react-query";

import AdminSidebar from "../../components/Admin/SideBar/AdminSidebar";
import AdminHeader from "../../components/Admin/Header/AdminHeader";
import { BlogContentManager } from "../../modules/blog/admin";

import * as Styled from "../../styles/AdminPage";

import { validTokenGlobal } from "../../services/validToken";

import { queryKeys } from "../../consts/queryKeys";

const AdminBlog = () => {
  const { data } = useQuery([queryKeys.validToken], () =>
    validTokenGlobal.validToken()
  );

  return data ? (
    <>
      <AdminHeader />
      <Styled.AdminWrapper>
        <AdminSidebar />
        <BlogContentManager />
      </Styled.AdminWrapper>
    </>
  ) : (
    <Styled.AdminUnauthorizedModal>
      Something went wrong :(
    </Styled.AdminUnauthorizedModal>
  );
};

export default AdminBlog;
