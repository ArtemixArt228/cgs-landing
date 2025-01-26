import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";
import MarioBlock from "./MarioBlock";

import * as Styled from "../../styles/OngoingSupport/ProvidesBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceSupport } from "../../types/Admin/Response.types";
import { IServicesClassnameProps } from "../../types/Services.types";

const ProvidesBlock = ({ className }: IServicesClassnameProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
  ])?.providesBlock;

  return (
    <Styled.Container className={className}>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <MobileInfiniteText title={data?.subtitle}></MobileInfiniteText>
      <MarioBlock data={data?.textSubBlock} />
    </Styled.Container>
  );
};

export default ProvidesBlock;
