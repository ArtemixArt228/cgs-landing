import React from "react";
import parse from "html-react-parser";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { useMediaQuery } from "@mui/material";

import HeadBlock from "../../components/OngoingSupport/HeadBlockSupport";
import WorkBlock from "../../components/OngoingSupport/WorkBlock";
import ProvidesBlock from "../../components/OngoingSupport/ProvidesBlock";
import FooterBlock from "../../components/OngoingSupport/FooterBlockSupport";
import DynamicShowCase from "../../components/DynamicShowCase";
import BonusesComponent from "../../components/ServisesComponents/Bonuses/Component/BonusesComponent";
import OtherServices from "../../components/ServisesComponents/OtherServices/Component/OtherServices";
import TeamMembers from "../../components/ServisesComponents/TeamMembers/TeamMembersComponent";

import * as Styled from "../../styles/OngoingSupport/Layout";
import { Layout, PageArticle } from "../../styles/Layout.styled";

import { queryKeys } from "../../consts/queryKeys";

import { adminSupportService } from "../../services/services/adminServiceSupportPage";
import { adminGlobalService } from "../../services/adminHomePage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IServiceSupport } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getServiceSupportPage], () =>
    adminSupportService.getSupportServicePage()
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

const OngoingSupport = () => {
  const is768px = useMediaQuery("(max-width:768px)");

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { data, isLoading }: IQueryResult<IServiceSupport> = useQuery(
    [queryKeys.getServiceSupportPage],
    () => adminSupportService.getSupportServicePage()
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
                  <WorkBlock />
                  <ProvidesBlock
                    className={
                      data.projects.length === 0 ? "withoutShowcase" : undefined
                    }
                  />
                </Styled.Layout>
                <BonusesComponent
                  bonuses={data.bonuses}
                  className="itSupport"
                />
              </Layout>
              <div
                style={{
                  marginBottom: is768px ? "7em" : "-17.1em",
                  marginTop: is768px ? "-1.8em" : "0em",
                }}
              >
                <DynamicShowCase projects={data.projects} />
              </div>
              <Layout className="supportTeam">
                <TeamMembers
                  teamMembers={data.teamMembers}
                  className={"supportTeam"}
                />
                <OtherServices
                  otherServices={data.otherServices}
                  className="itSupport"
                />
                <Styled.Layout>
                  <FooterBlock className="itSupport" />
                </Styled.Layout>
              </Layout>
            </PageArticle>
          )}
        </>
      </PageLayout>
    </>
  );
};

export default OngoingSupport;
