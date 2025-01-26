import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import Head from "next/head";
import parse from "html-react-parser";

import HeadBlock from "../../components/DappAuditService/HeadBlockDapp";
import HowDoProvideBlock from "../../components/DappAuditService/HowDoProvideBlock";
import DynamicShowCase from "../../components/DynamicShowCase";
import FooterBlock from "../../components/DappAuditService/FooterBlockDapp";
import PerksOfCoopComponent from "../../components/ServisesComponents/PerksOfCoopComponent";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";
import FigureOutBlock from "../../components/DappAuditService/FigureOutBlock";

import { Layout } from "../../styles/Layout.styled";
import * as Styled from "../../styles/DappAuditService/Common.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminGlobalService } from "../../services/adminHomePage";
import { adminDappAuditService } from "../../services/services/adminServicesDappAuditPage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IServiceDappAudit } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceDappAuditPage], () =>
    adminDappAuditService.getDappAuditServicePage()
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

const DappAuditPage: NextPage = () => {
  const { data, isLoading }: IQueryResult<IServiceDappAudit> = useQuery(
    [queryKeys.getServiceAiPage],
    async () => await adminDappAuditService.getDappAuditServicePage()
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
            <>
              <Layout>
                <Styled.Layout>
                  <HeadBlock />
                  <FigureOutBlock />
                  {data ? (
                    <PerksOfCoopComponent
                      className="dappAudit"
                      data={data.worthBlock}
                    />
                  ) : null}
                  <HowDoProvideBlock />
                </Styled.Layout>
              </Layout>
              <DynamicShowCase projects={data.projects} />
              <Layout>
                <div style={{ marginTop: "-10px" }}>
                  <TeamMembers
                    className={"dappAuditTeam"}
                    teamMembers={data.teamMembers}
                  />
                  <Styled.Layout>
                    <FooterBlock />
                  </Styled.Layout>
                </div>
              </Layout>
            </>
          )}
        </>
      </PageLayout>
    </>
  );
};

export default DappAuditPage;
