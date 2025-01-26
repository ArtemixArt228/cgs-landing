import React from "react";
import parse from "html-react-parser";
import {
  dehydrate,
  QueryClient,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { queryKeys } from "../../consts/queryKeys";
import Head from "next/head";

import HeadBlock from "../../components/MobileAuditService/HeadBlockMobileAudit";
import WhatAppBlock from "../../components/MobileAuditService/WhatAppBlock";
import WhatAppIncludeBlock from "../../components/MobileAuditService/WhatAppIncludeBlock";
import DynamicShowCase from "../../components/DynamicShowCase";
import FooterBlock from "../../components/MobileAuditService/FooterBlockMobileAudit";
import HowDoWeAuditBlock from "../../components/MobileAuditService/HowDoWeAuditBlock";
import PerksOfCoopComponent from "../../components/ServisesComponents/PerksOfCoopComponent";

import * as Styled from "../../styles/MobileAuditService/Layout";
import { Layout } from "../../styles/Layout.styled";

import { IServiceMobileAudit } from "../../types/Admin/Response.types";

import { adminMobileAuditService } from "../../services/services/adminServiceMobileAuditPage";
import { adminGlobalService } from "../../services/adminHomePage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceMobileAuditPage], () =>
    adminMobileAuditService.getMobileAuditServicePage()
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

const MobileAuditService = () => {
  const queryClient = useQueryClient();
  const dataAudit = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whenDoYouNeed;

  const { data, isLoading }: IQueryResult<IServiceMobileAudit> = useQuery(
    [queryKeys.getServiceMobileAuditPage],
    () => adminMobileAuditService.getMobileAuditServicePage()
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
            <>
              <Layout>
                <Styled.Layout>
                  <HeadBlock />
                </Styled.Layout>
                <WhatAppBlock />
                <Styled.Layout>
                  <WhatAppIncludeBlock />
                  {dataAudit && (
                    <PerksOfCoopComponent
                      className={"mobileAudit"}
                      data={dataAudit as any}
                    />
                  )}
                </Styled.Layout>
              </Layout>
              <DynamicShowCase projects={data.projects} />
              <Layout>
                <Styled.Layout>
                  <HowDoWeAuditBlock />
                  <FooterBlock />
                </Styled.Layout>
              </Layout>
            </>
          )}
        </>
      </PageLayout>
    </>
  );
};

export default MobileAuditService;
