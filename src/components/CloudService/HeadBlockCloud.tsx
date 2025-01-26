import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/CloudService/HeaderBlock.styled";

import { ICloudService } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const HeadBlockCloud = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.headerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        {data && (
          <HeaderTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className={"cloud"}
          />
        )}
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image.url} alt="" />
    </Styled.Container>
  );
};

export default HeadBlockCloud;
