import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

import AboutUs from "../../components/AboutUsPage/AboutUs";

import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminAboutUsService } from "../../services/adminAboutUsPage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IAbout } from "../../types/Admin/Response.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getAboutUsPage], () =>
    adminAboutUsService.getAboutUsPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const AboutUsPage = () => {
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { data, isLoading }: IQueryResult<IAbout> = useQuery(
    [queryKeys.getAboutUsPage],
    () => adminAboutUsService.getAboutUsPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <PageLayout isLoading={isLoading} dataDefined={!!data}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {data ? <AboutUs data={data} /> : null}
    </PageLayout>
  );
};

export default AboutUsPage;
