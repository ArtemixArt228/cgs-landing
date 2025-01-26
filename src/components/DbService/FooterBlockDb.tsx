import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/DbService/FooterBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceDb } from "../../types/Admin/Response.types";

const FooterBlockDb = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.TextContent>
        {data && (
          <FooterTextBlockServices
            title={data.subtitle}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className="fullWidth server"
          />
        )}
      </Styled.TextContent>
      <Styled.Image src={data?.image?.url} alt="Footer image" />
    </Styled.Container>
  );
};

export default FooterBlockDb;
