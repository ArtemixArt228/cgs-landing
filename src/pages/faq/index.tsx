import React from "react";
import parse from "html-react-parser";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Head from "next/head";

import Faq from "../../components/Faq/FAQPage/FAQPage";

import { queryKeys } from "../../consts/queryKeys";
import { adminFaqService } from "../../services/adminFaqPage";
import PageLayout from "../../components/PageLayout/PageLayout";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFaqPage], () =>
    adminFaqService.getFaqPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const FaqPage = () => {
  const { data, isLoading } = useQuery([queryKeys.getFaqPage], () =>
    adminFaqService.getFaqPage()
  );

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  return (
    <PageLayout isLoading={isLoading} dataDefined={!!data}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {data?.questions && <Faq questions={data.questions} />}
    </PageLayout>
  );
};

export default FaqPage;
