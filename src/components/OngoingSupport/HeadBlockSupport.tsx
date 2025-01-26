import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/OngoingSupport/HeadBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceSupport } from "../../types/Admin/Response.types";

const HeadBlockSupport = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
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
            className={"itSupport"}
          />
        )}
      </Styled.Content>
      <Styled.Image src={data?.image.url} alt="Motorcycle helmet" />
    </Styled.Container>
  );
};

export default HeadBlockSupport;
