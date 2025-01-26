import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/BlockchainService/HeadBlock.styled";

import { queryKeys } from "../../consts/queryKeys";
import { noiseImages } from "../../consts/cryptoTV";
import { cryptoTVImages } from "../../consts/cryptoTV";

import { IBlockchainService } from "../../types/Admin/Response.types";

import TV from "../../../public/BlockchainServicePage/HeadImage/TV.svg";

const HeadBlockBlockchain = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IBlockchainService>([
    queryKeys.getServiceBlockchainPage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        {data && (
          <HeaderTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className={"blockchain extraTopMargin"}
          />
        )}
      </Styled.Content>
      <Styled.Image>
        <Styled.ImageTV src={TV.src} alt="Old TV" />
        {noiseImages.map((noise) => (
          <Styled.ImageCrypto
            key={noise}
            src={noise}
            alt="Grey Square"
            className="noise"
          />
        ))}
        {cryptoTVImages.map((image, idx) => (
          <Styled.ImageCrypto
            imgIdx={idx}
            key={image}
            src={image}
            alt="TV image"
            className="tv-image"
          />
        ))}
      </Styled.Image>
    </Styled.Container>
  );
};

export default HeadBlockBlockchain;
