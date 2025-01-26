import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../styles/BlockchainService/ServicesBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IBlockchainService } from "../../types/Admin/Response.types";

import { useOnScreen } from "../../hooks/useOnScreen";

const ServicesBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.servicesBlock;

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <Styled.SubTextContainer>
        <Styled.SubTextContent ref={elRef}>
          {data?.textSubBlock.map((el, idx) => (
            <Styled.SubText
              key={idx}
              ind={idx}
              className={isScrolled ? "scrolled" : undefined}
            >
              {el}
            </Styled.SubText>
          ))}
        </Styled.SubTextContent>
      </Styled.SubTextContainer>
      <Styled.DescriptionContainer>
        <MobileInfiniteText title={data?.descriptionSubtitle} />
        <Styled.Image src={data?.image.url} alt="Robot arm" loading="lazy" />
        <Styled.Description>
          <Styled.Subtitle>{data?.descriptionSubtitle}</Styled.Subtitle>
          {data?.text && parse(data?.text)}
        </Styled.Description>
      </Styled.DescriptionContainer>
    </Styled.Container>
  );
};

export default ServicesBlock;
