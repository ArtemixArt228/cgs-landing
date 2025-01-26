import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import {
  Container,
  ContentContainer,
  Image,
} from "../../styles/DbService/HeadBlock.styled";

import { IServiceDb } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const HeadBlockDb = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDb>([
    queryKeys.getServiceDbPage,
  ])?.headerBlock;

  const lastIndex = data!.title.lastIndexOf("|");
  const title =
    data?.title.substr(0, lastIndex) + data!.title.substring(lastIndex + 1);

  return (
    <Container>
      <ContentContainer>
        {data && (
          <HeaderTextBlockServices
            title={title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className={"server"}
          />
        )}
      </ContentContainer>
      <Image src={data?.image.url} alt="hero image" />
    </Container>
  );
};

export default HeadBlockDb;
