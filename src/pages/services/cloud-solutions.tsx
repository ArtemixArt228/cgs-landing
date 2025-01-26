import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";

import HeadBlock from "../../components/CloudService/HeadBlockCloud";
import ProvidesBlock from "../../components/CloudService/ProvidesBlock";
import DynamicShowCase from "../../components/DynamicShowCase";
import FooterBlock from "../../components/CloudService/FooterBlockCloud";
import PerksOfCoopComponent from "../../components/ServisesComponents/PerksOfCoopComponent";
import { TeamMembers, FreeService } from "../../components/ServisesComponents";

import * as Styled from "../../styles/CloudService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminCloudService } from "../../services/services/AdminServicesCloudSolution";
import { adminGlobalService } from "../../services/adminHomePage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { ICloudService } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceCloudPage], () =>
    adminCloudService.getCloudSolutionPage()
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

const CloudService = () => {
  const { data, isLoading }: IQueryResult<ICloudService> = useQuery(
    [queryKeys.getServiceCloudPage],
    () => adminCloudService.getCloudSolutionPage()
  );

  const { customHead, metaDescription, metaTitle } = { ...data?.meta };

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
                  <ProvidesBlock
                    className={
                      data.projects.length === 0 ? "withoutShowcase" : undefined
                    }
                  />
                </Styled.Layout>
              </Layout>
              <Styled.ShowCaseAlign>
                <DynamicShowCase projects={data.projects} />
              </Styled.ShowCaseAlign>
              <Layout>
                <Styled.Layout>
                  {data.worthBlock && (
                    <PerksOfCoopComponent
                      className={"cloudSolutions"}
                      data={data.worthBlock}
                    />
                  )}
                </Styled.Layout>
                <Styled.TeamMembersAlign>
                  <TeamMembers teamMembers={data.teamMembers} />
                </Styled.TeamMembersAlign>
                <FreeService
                  className={"cloud"}
                  freeServices={data.freeServices}
                />
                <Styled.Layout>
                  <FooterBlock />
                </Styled.Layout>
              </Layout>
            </PageArticle>
          )}
        </>
      </PageLayout>
    </>
  );
};

export default CloudService;
