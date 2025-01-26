import React from "react";
import { useRouter } from "next/router";
import {
  dehydrate,
  QueryClient,
  useQuery,
  UseQueryResult,
} from "@tanstack/react-query";

import {
  DevPersonalInfo,
  DevGeneralInfo,
  DevSkillsInfo,
  DevProjectsInfo,
  CTASection,
} from "../../modules/cv/components";
import PageLayout from "../../components/PageLayout/PageLayout";

import * as Styled from "../../modules/cv/styles/cv.styled";

import { cvService } from "../../modules/cv/services";
import { adminGlobalService } from "../../services/adminHomePage";

import { CvData } from "../../modules/cv/types";

import { queryKeys } from "../../consts/queryKeys";

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

const CV = () => {
  const router = useRouter();

  const { cv } = router.query;
  const slug = cv?.slice(-24);

  const { data, isLoading }: UseQueryResult<CvData> = useQuery(
    [queryKeys.getCvById, slug],
    async () => await cvService.getCvById(slug as string),
    { enabled: !!slug }
  );

  useQuery([queryKeys.getFullHomePage], () => adminGlobalService.getFullPage());

  return (
    <PageLayout isLoading={isLoading} dataDefined={!!data}>
      {data && (
        <Styled.CvLayout>
          <DevPersonalInfo data={data} />
          <DevGeneralInfo data={data} />
          <DevSkillsInfo data={data} />
          <DevProjectsInfo data={data} />
          <CTASection name={data.personal.name} />
        </Styled.CvLayout>
      )}
    </PageLayout>
  );
};

export default CV;
