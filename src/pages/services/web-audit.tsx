import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";

import HeadBlock from "../../components/WebAuditService/HeadBlockWebAudit";
import { Layout, PageArticle } from "../../styles/Layout.styled";
import WhatIsAuditBlock from "../../components/WebAuditService/WhatIsAuditBlock";
import WhichProblemBlock from "../../components/WebAuditService/WhichProblemBlock";
import TypesOfAuditBlock from "../../components/WebAuditService/TypesOfAuditBlock";
import HowToDoBlock from "../../components/WebAuditService/HowToDoBlock";
import FooterBlock from "../../components/WebAuditService/FooterBlockWebAudit";
import DynamicShowCase from "../../components/DynamicShowCase";
import { TeamMembers } from "../../components/ServisesComponents";

import * as Styled from "../../styles/WebService/Layout";
import {
  ShowcaseLayoutIgnore,
  ShowcaseWithoutDataSpacing,
} from "../../styles/WebAuditService/ShowcaseLayoutIgnore.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminGlobalService } from "../../services/adminHomePage";
import { adminWebAuditService } from "../../services/services/adminServiceWebAuditPage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IServiceWebAudit } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceWebAuditPage], () =>
    adminWebAuditService.getWebAuditServicePage()
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

const WebAuditPage: NextPage = () => {
  const { data, isLoading }: IQueryResult<IServiceWebAudit> = useQuery(
    [queryKeys.getServiceWebAuditPage],
    () => adminWebAuditService.getWebAuditServicePage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

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
                </Styled.Layout>
                <WhatIsAuditBlock />
                <WhichProblemBlock />
                <TypesOfAuditBlock />
                <TeamMembers
                  className="webAudit"
                  teamMembers={data.teamMembers}
                />
                {data.projects ? (
                  <ShowcaseLayoutIgnore>
                    <DynamicShowCase projects={data.projects} />
                  </ShowcaseLayoutIgnore>
                ) : (
                  <ShowcaseWithoutDataSpacing />
                )}
                <HowToDoBlock />
                <FooterBlock />
              </Layout>
            </PageArticle>
          )}
        </>
      </PageLayout>
    </>
  );
};

export default WebAuditPage;
