import React from "react";
import type { NextPage } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { Content } from "../modules/homepage/components";

import { IHomePageResponse } from "../types/Admin/AdminHomePage.types";

import { adminGlobalService } from "../services/adminHomePage";

import { queryKeys } from "../consts/queryKeys";
import PageLayout from "../components/PageLayout/PageLayout";

interface IHomeData {
  data: IHomePageResponse | undefined;
  isLoading: boolean;
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

interface IHomeData {
  data: IHomePageResponse | undefined;
  isLoading: boolean;
}

const Home: NextPage = () => {
  const { data, isLoading }: IHomeData = useQuery(
    [queryKeys.getFullHomePage],
    () => adminGlobalService.getFullPage()
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
        {data && <Content />}
      </PageLayout>
    </>
  );
};

export default Home;
