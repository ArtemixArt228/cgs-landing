import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import Careers from "../../components/Careers";
import { queryKeys } from "../../consts/queryKeys";
import { adminCareersService } from "../../services/adminCareersPage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IDataCareersResponse } from "../../types/Admin/Response.types";
import { IQueryResult } from "../../types/Admin/Admin.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getCareerPage], () =>
    adminCareersService.getCareersPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const CarrersPage: NextPage = () => {
  const { data, isLoading }: IQueryResult<IDataCareersResponse> = useQuery(
    [queryKeys.getCareerPage],
    () => adminCareersService.getCareersPage()
  );
  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <PageLayout isLoading={isLoading} dataDefined={!!data}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {data && <Careers data={data} />}
    </PageLayout>
  );
};

export default CarrersPage;
