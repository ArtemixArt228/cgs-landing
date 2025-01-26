import React from "react";

import NotFoundContent from "../../components/NotFoundPage/NotFoundPage";

import * as NotFoundStyled from "../../styles/Layout.styled";
import PageLayout from "../../components/PageLayout/PageLayout";

const NotFoundPage = () => {
  return (
    <PageLayout hasFooter={false}>
      <NotFoundStyled.Layout>
        <NotFoundContent />
      </NotFoundStyled.Layout>
    </PageLayout>
  );
};

export default NotFoundPage;
