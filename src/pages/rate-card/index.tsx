import React from "react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import RateHeading from "../../components/RateCard/RateHeading";
import RateCardContent from "../../components/RateCard/RateCardContent";

import { queryKeys } from "../../consts/queryKeys";

import { adminGlobalService } from "../../services/adminHomePage";

import { ContainerRateCardDate } from "../../components/RateCard/index.styled";
import { adminRateCardService } from "../../services/adminRateCard";
import PageLayout from "../../components/PageLayout/PageLayout";
import { IQueryResult } from "../../types/Admin/Admin.types";
import { IRateCard } from "../../types/Admin/AdminRateCard.types";

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

const RateCard = () => {
  const { data, isLoading }: IQueryResult<IRateCard> = useQuery(
    [queryKeys.getRateCardData],
    () => adminRateCardService.getCards()
  );

  return (
    <PageLayout isLoading={isLoading} dataDefined={!!data}>
      {data && (
        <ContainerRateCardDate>
          <RateHeading heading={data.title} />
          <RateCardContent services={data.services} />
        </ContainerRateCardDate>
      )}
    </PageLayout>
  );
};

export default RateCard;
