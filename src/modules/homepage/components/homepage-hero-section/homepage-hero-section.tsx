import React, { forwardRef } from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import * as Styled from "./homepage-hero-section.styled";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

import { queryKeys } from "../../../../consts/queryKeys";
import { ActionButton } from "../../../../components/ActionButton/ActionButton";

export const HeroSection = forwardRef<HTMLDivElement>(({}, ref) => {
  const queryClient = useQueryClient();

  const router = useRouter();

  const data = queryClient.getQueryData<IHomePageResponse>([
    queryKeys.getFullHomePage,
  ])?.HeroSectionBlock;

  return (
    <Styled.HeroSectionContainer ref={ref}>
      <Styled.HeroSectionContent>
        {data?.title && (
          <Styled.Title dangerouslySetInnerHTML={{ __html: data?.title }} />
        )}

        {data?.subtitle && (
          <Styled.Text dangerouslySetInnerHTML={{ __html: data?.subtitle }} />
        )}

        <Styled.HeroSectionBtnContainer>
          <ActionButton
            handleAction={() => router.push("/portfolio")}
            buttonText={data?.button}
            className="homepage-hero"
          />
        </Styled.HeroSectionBtnContainer>
      </Styled.HeroSectionContent>
      <Styled.HeroSectionImageWrapper>
        {data?.image?.url && (
          <Styled.HeroSectionImageContainer>
            <Image alt="factory" src={data.image.url} layout="fill" priority />
          </Styled.HeroSectionImageContainer>
        )}
      </Styled.HeroSectionImageWrapper>
    </Styled.HeroSectionContainer>
  );
});

HeroSection.displayName = "HeroSection";
