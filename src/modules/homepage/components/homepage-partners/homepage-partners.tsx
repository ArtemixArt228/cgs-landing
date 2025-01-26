import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

import * as Styled from "./homepage-partners.styled";

import { queryKeys } from "../../../../consts/queryKeys";
import params from "../../../../mock/MobilePartnersSwiperParams";
import Image from "next/image";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

export const Partners = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.LogosBlock;

  return (
    <Styled.Wrapper>
      <Swiper {...params}>
        {data?.images?.map((img, idx) => (
          <SwiperSlide key={idx}>
            <Styled.PartnerImageWrapper>
              <Image
                src={img.url}
                alt="partner logo"
                layout="fill"
                objectFit="scale-down"
              />
            </Styled.PartnerImageWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Wrapper>
  );
};
