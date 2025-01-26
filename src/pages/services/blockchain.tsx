import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";

import HeadBlock from "../../components/BlockchainService/HeadBlockBlockchain";
import ServicesBlock from "../../components/BlockchainService/ServicesBlock";
import YourWayBlock from "../../components/BlockchainService/YourWayBlock";
import FooterBlock from "../../components/BlockchainService/FooterBlockBlockchain";
import NeedsAppsBenefitComponent from "../../components/ServisesComponents/NeedsAppsBenefitComponent";
import Advantages from "../../components/ServisesComponents/Advantages/AdvantagesComponent/index";
import DynamicShowCase from "../../components/DynamicShowCase";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";

import * as Styled from "../../styles/BlockchainService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { adminBlockchainService } from "../../services/services/AdminServiceBlockchainPage";
import { adminGlobalService } from "../../services/adminHomePage";

import { queryKeys } from "../../consts/queryKeys";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IBlockchainService } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceBlockchainPage], () =>
    adminBlockchainService.getBlockchainDevelopmentPage()
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

const BlockchainService = () => {
  const { data, isLoading }: IQueryResult<IBlockchainService> = useQuery(
    [queryKeys.getServiceBlockchainPage],
    async () => await adminBlockchainService.getBlockchainDevelopmentPage()
  );

  const { customHead, metaDescription, metaTitle } = { ...data?.meta };

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead!)}
      </Head>

      <PageLayout isLoading={isLoading} dataDefined={!!data}>
        <>
          {data && (
            <PageArticle>
              <Layout>
                <Styled.Layout>
                  <HeadBlock />
                  <ServicesBlock />
                  <YourWayBlock />
                </Styled.Layout>
                <TeamMembers
                  className={"blockchainTeam"}
                  teamMembers={data.teamMembers}
                />
              </Layout>
              <DynamicShowCase projects={data.projects} />
              <Layout>
                <Advantages
                  className={"blockchainAdvantages"}
                  advantages={data.advantages}
                />
                <NeedsAppsBenefitComponent data={data} />
                <Styled.Layout className="mobile-visivble">
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

export default BlockchainService;
