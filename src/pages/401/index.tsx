import React from "react";
import Router from "next/router";

import * as Styled from "../../styles/SessionEnd.styled";

const SessionEndPage = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>
        Session timeout,
        <br /> please re-login
      </Styled.Title>
      <Styled.Button onClick={() => Router.push("Admin/AdminAuth")}>
        <p>Login</p>
      </Styled.Button>
    </Styled.Wrapper>
  );
};

export default SessionEndPage;
