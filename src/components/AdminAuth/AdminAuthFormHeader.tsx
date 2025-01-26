import * as Styled from "../../styles/AdminAuth";
import React from "react";
import Logo from "../HeaderNavNew/Logo";

const AdminAuthFormHeader = () => {
  return (
    <Styled.AdminFormHeader>
      <Styled.AdminAuthTeamLogo>
        <Logo />
      </Styled.AdminAuthTeamLogo>
    </Styled.AdminFormHeader>
  );
};

export default AdminAuthFormHeader;
