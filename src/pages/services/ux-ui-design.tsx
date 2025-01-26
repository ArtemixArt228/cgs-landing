import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";
import parse from "html-react-parser";

import HeadBlock from "../../components/UxUiService/HeadBlockUxUi";
import WhatDoWeDoBlock from "../../components/UxUiService/WhatDoWeDoBlock";
import DesignBlock from "../../components/UxUiService/DesignBlock";
import EssentialBlock from "../../components/UxUiService/EsentialBlock";
import {
  TeamMembers,
  OtherServices,
} from "../../components/ServisesComponents";
import FooterBlock from "../../components/UxUiService/FooterBlockUxUi";
import DynamicShowCase from "../../components/DynamicShowCase";

import * as Styled from "../../styles/UxUiService/Layout.styled";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminUxUiService } from "../../services/services/AdminServiceUxUiPage";
import { adminGlobalService } from "../../services/adminHomePage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IUxUiInterface } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceUxUiPage], () =>
    adminUxUiService.getUxUiServicePage()
  );

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const UxUiDesign = () => {
  const { data, isLoading }: IQueryResult<IUxUiInterface> = useQuery(
    [queryKeys.getServiceUxUiPage],
    async () => await adminUxUiService.getUxUiServicePage()
  );

  const { customHead, metaDescription, metaTitle } = data?.meta ?? {};
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>

      <PageLayout isLoading={isLoading} dataDefined={!!data}>
        <>
          {data && (
            <PageArticle>
              <Layout>
                <Styled.Layout>
                  <HeadBlock />
                  <WhatDoWeDoBlock />
                  <EssentialBlock />
                  <DesignBlock withoutShowcase={data.projects.length === 0} />
                </Styled.Layout>
              </Layout>
              <DynamicShowCase projects={data.projects} />
              <Styled.LayoutLocal>
                <Styled.TeamMembersAlign>
                  <TeamMembers teamMembers={data.teamMembers} />
                </Styled.TeamMembersAlign>
                <OtherServices
                  className={"uxUi"}
                  otherServices={data.otherServices}
                />
                <Styled.Layout>
                  <FooterBlock />
                </Styled.Layout>
              </Styled.LayoutLocal>
            </PageArticle>
          )}
        </>
      </PageLayout>
    </>
  );
};

export default UxUiDesign;
