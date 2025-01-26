import React from "react";
import { NextPage } from "next";
import parse from "html-react-parser";
import { useQuery, QueryClient, dehydrate } from "@tanstack/react-query";
import Head from "next/head";

import HeadBlock from "../../components/DbService/HeadBlockDb";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminDbService } from "../../services/services/adminServicesDbPage";
import SelectBlock from "../../components/DbService/SelectBlock";
import FeaturesBlock from "../../components/DbService/FeaturesBlock";
import FooterBlock from "../../components/DbService/FooterBlockDb";
import DynamicShowCase from "../../components/DynamicShowCase";
import {
  BonusesComponent,
  OtherServices,
} from "../../components/ServisesComponents";

import * as Styled from "../../styles/DbService/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { queryKeys } from "../../consts/queryKeys";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IServiceDb } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceDbPage], () =>
    adminDbService.getDbServicePage()
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

const DbSolutions: NextPage = () => {
  const { data, isLoading }: IQueryResult<IServiceDb> = useQuery(
    [queryKeys.getServiceDbPage],
    () => adminDbService.getDbServicePage()
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
                  <FeaturesBlock />
                  <SelectBlock
                    className={
                      data.projects.length === 0 ? "withoutServices" : undefined
                    }
                  />
                </Styled.Layout>
              </Layout>
              <Styled.ShowCaseAlign></Styled.ShowCaseAlign>
              <DynamicShowCase projects={data.projects} />
              <Layout>
                <Styled.BonusesAlign>
                  <BonusesComponent bonuses={data.bonuses} />
                </Styled.BonusesAlign>
                <OtherServices otherServices={data.otherServices} />
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

export default DbSolutions;
