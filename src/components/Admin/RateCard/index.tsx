import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";

import RateCardTitle from "./RateCardTitle";
import { CustomToast } from "../CustomToast";

import * as Styled from "../../../styles/AdminPage";
import "react-toastify/dist/ReactToastify.css";

import { adminRateCardService } from "../../../services/adminRateCard";
import {
  IRateCardResponse,
  IService,
} from "../../../types/Admin/AdminRateCard.types";

import AdminRateCardServiceContent from "./AdminRateCardServiceContent";

const RateCardMainContent = () => {
  const { data, isLoading }: IRateCardResponse = useQuery(
    [queryKeys.getRateCardData],
    () => adminRateCardService.getCards()
  );

  const [services, setServices] = useState<IService[] | null>(null);

  useEffect(() => {
    if (data) setServices(data.services);
  }, [data]);

  return isLoading ? (
    <Styled.AdminUnauthorizedModal>Loading...</Styled.AdminUnauthorizedModal>
  ) : (
    <Styled.AdminPaddedBlock>
      <Styled.AdminHeader className={"rateCard"}>Rate Card</Styled.AdminHeader>
      <RateCardTitle title={data!.title} />
      <AdminRateCardServiceContent
        services={services!}
        setServices={setServices}
      />
      <CustomToast />
    </Styled.AdminPaddedBlock>
  );
};

export default RateCardMainContent;
