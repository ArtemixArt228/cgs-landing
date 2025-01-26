import React from "react";
import Head from "next/head";
import parse from "html-react-parser";
import { useRouter } from "next/router";
import {
  dehydrate,
  QueryClient,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import {
  PaginationBar,
  ListItem,
  CvFilter,
  NoResult,
} from "../../modules/cv/components";
import { Loader } from "../../components/Loader";
import PageLayout from "../../components/PageLayout/PageLayout";

import * as Styles from "../../modules/cv/styles/devs-info.styled";

import { cvService } from "../../modules/cv/services";
import { adminGlobalService } from "../../services/adminHomePage";

import { useCvFilters, useCvPagination } from "../../modules/cv/hooks";

import { queryKeys } from "../../consts/queryKeys";

import { ICvDataResponse, ICvResponse } from "../../modules/cv/types";
import { CvsPageSize } from "../../consts";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery([queryKeys.getFullHomePage], () =>
    adminGlobalService.getFullPage()
  );

  await queryClient.prefetchQuery([queryKeys.getCvPage], () =>
    cvService.getCvPage()
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DevsInfo = () => {
  const { data, isLoading }: ICvResponse = useQuery([queryKeys.getCvPage], () =>
    cvService.getCvPage()
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  const { metaTitle, metaDescription, customHead } = { ...data?.meta };

  const router = useRouter();

  const { currentPage, setCurrentPage, scrollFunction } =
    useCvPagination(router);
  const { filters, setFilters } = useCvFilters(router, setCurrentPage);

  const {
    data: cvData,
    isLoading: cvsLoading,
  }: UseQueryResult<ICvDataResponse> = useQuery(
    [queryKeys.getPaginatedAndFilteredCvs, filters, currentPage, CvsPageSize],
    () =>
      cvService.getPaginatedAndFilteredCvs(filters, currentPage, CvsPageSize)
  );

  return (
    <PageLayout isLoading={isLoading && cvsLoading} dataDefined={!!data}>
      <Head>
        <title>{metaTitle || "CV | CGS-team"}</title>
        <meta name="description" content={metaDescription} />
        {customHead && parse(customHead)}
      </Head>
      {data && (
        <Styles.Layout>
          <Styles.CvTitle>{data.title}</Styles.CvTitle>
          <CvFilter
            filters={filters}
            setFilters={setFilters}
            categories={data.categories}
          />
          <Loader isContentLoader={true} active={isLoading || cvsLoading}>
            {cvData?.cvs.length ? (
              <Styles.ListWrapper>
                {cvData?.cvs.map((item, i) => (
                  <ListItem key={i} item={item} i={i} />
                ))}
              </Styles.ListWrapper>
            ) : (
              !cvsLoading && (
                <NoResult search={filters.search} category={filters.category} />
              )
            )}
          </Loader>
          {cvData?.totalPages ? (
            <PaginationBar
              totalPages={cvData.totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              scrollFunction={scrollFunction}
            />
          ) : null}
        </Styles.Layout>
      )}
    </PageLayout>
  );
};

export default DevsInfo;
