import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/CloudService/FooterBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { ICloudService } from "../../types/Admin/Response.types";

const FooterBlockCloud = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.Content>
        {data && (
          <FooterTextBlockServices
            title={data.subtitle}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className={"cloud"}
          />
        )}
      </Styled.Content>
      <Styled.Image src={data?.image?.url} alt="Footer Cloud Service image" />
    </Styled.Container>
  );
};

export default FooterBlockCloud;
