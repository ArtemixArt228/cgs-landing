import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { useQuery, dehydrate, QueryClient } from "@tanstack/react-query";

import { ContactUsContent } from "../../modules/contact-us/components";

import { queryKeys } from "../../consts/queryKeys";
import { adminGlobalService } from "../../services/adminHomePage";
import { adminContactUsService } from "../../services/adminContactUsPage";
import PageLayout from "../../components/PageLayout/PageLayout";
import { NextPage } from "next";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IContactUsPageData } from "../../types/Admin/AdminContactUs.types";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getContactUsPage], () =>
    adminContactUsService.getContactUsPage()
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

const ContactUsPage: NextPage = () => {
  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { data, isLoading }: IQueryResult<IContactUsPageData> = useQuery(
    [queryKeys.getContactUsPage],
    () => adminContactUsService.getContactUsPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <PageLayout isLoading={isLoading} dataDefined={!!data}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {data && <ContactUsContent data={data} />}
    </PageLayout>
  );
};

export default ContactUsPage;
