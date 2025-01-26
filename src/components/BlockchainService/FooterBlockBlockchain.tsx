import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/BlockchainService/FooterBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IBlockchainService } from "../../types/Admin/Response.types";

const FooterBlockBlockchain = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      {data && (
        <FooterTextBlockServices
          title={data.subtitle}
          text={data.description}
          btnText={data.button}
          btnLink={data.buttonLink}
          className={"blockchain"}
        />
      )}
      <Styled.Image
        src={data?.image?.url}
        alt="Footer Crypto image"
        loading="lazy"
      />
    </Styled.Container>
  );
};

export default FooterBlockBlockchain;
