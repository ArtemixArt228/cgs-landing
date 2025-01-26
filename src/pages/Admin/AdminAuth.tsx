import AdminAuthForm from "../../components/AdminAuth/AuthForm";
import * as Styled from "../../styles/AdminAuth";
import React from "react";
import AdminAuthFormHeader from "../../components/AdminAuth/AdminAuthFormHeader";
import AdminAuthFormTitle from "../../components/AdminAuth/AdminAuthFormTitle";

const AdminPage = () => {
  return (
    <>
      <Styled.AdminAuthPassWrapper>
        <AdminAuthFormHeader />
        <Styled.AdminFormContainer>
          <AdminAuthFormTitle />
          <Styled.AdminAuthPassBlock>
            <AdminAuthForm />
          </Styled.AdminAuthPassBlock>
        </Styled.AdminFormContainer>
      </Styled.AdminAuthPassWrapper>
    </>
  );
};

export default AdminPage;
