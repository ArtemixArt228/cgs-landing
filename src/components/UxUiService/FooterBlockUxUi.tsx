import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/UxUiService/FooterBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IUxUiInterface } from "../../types/Admin/Response.types";

const FooterBlockUxUi = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IUxUiInterface>([
    queryKeys.getServiceUxUiPage,
  ])?.footerBlock;

  return (
    <Styled.Container>
      <Styled.ContentWrapper>
        {data && (
          <FooterTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className={"fullWidth uxUi"}
          />
        )}
      </Styled.ContentWrapper>
      <Styled.ImageWrapper>
        <Image
          src={data!.image.url}
          alt="Footer UxUi image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.ImageWrapper>
    </Styled.Container>
  );
};

export default FooterBlockUxUi;
