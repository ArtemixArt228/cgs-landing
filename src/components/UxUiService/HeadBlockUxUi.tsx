import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/UxUiService/HeadBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IUxUiInterface } from "../../types/Admin/Response.types";

const HeadBlockUxUi = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
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
            className={"uxUi"}
          />
        )}
      </Styled.ContentWrapper>
      <Styled.Image src={data?.image.url} alt="Polaroid" />
    </Styled.Container>
  );
};

export default HeadBlockUxUi;
