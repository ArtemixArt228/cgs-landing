import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import MobileImage from "next/future/image";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../styles/BlockchainService/AboutBlock.styled";

import { queryKeys } from "../../consts/queryKeys";
import { IBlockchainService } from "../../types/Admin/Response.types";

import BlockchainAbout from "../../../public/BlockchainServicePage/BlockchainAbout.svg";
import MobileBlockchainAbout from "../../../public/BlockchainServicePage/MobileBlockchainAbout.svg";

const AboutBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.aboutBlock;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      <MobileInfiniteText title={"Blockchain powers"} />
      <Styled.ImageWrapper>
        <Image src={BlockchainAbout} alt="blockchain about" />
      </Styled.ImageWrapper>
      <Styled.MobileImageWrapper>
        <MobileImage src={MobileBlockchainAbout} alt="blockchain about" />
      </Styled.MobileImageWrapper>
    </Styled.Container>
  );
};

export default AboutBlock;
