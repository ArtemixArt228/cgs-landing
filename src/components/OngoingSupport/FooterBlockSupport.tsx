import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/OngoingSupport/FooterBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceSupport } from "../../types/Admin/Response.types";

interface IFooterBlockProps {
  className?: string;
}

const FooterBlockSupport = ({ className }: IFooterBlockProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceSupport>([
    queryKeys.getServiceSupportPage,
  ])?.footerBlock;

  return (
    <Styled.Container className={className}>
      {data && (
        <FooterTextBlockServices
          title={data.subtitle}
          text={data.text}
          btnText={data.button}
          btnLink={data.buttonLink}
          className={"itSupport"}
        />
      )}
      <Styled.Image
        className={className}
        src={data?.image?.url}
        alt="Footer Supports image"
      />
    </Styled.Container>
  );
};

export default FooterBlockSupport;
