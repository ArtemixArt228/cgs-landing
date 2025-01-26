import React from "react";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/DappAuditService/Footer.styled";
import { WrapperWithLine } from "../../styles/DappAuditService/Common.styled";

import { IServiceDappAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const FooterBlockDapp = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.footerBlock;

  return (
    <Styled.ContentWrapper>
      <WrapperWithLine />
      <div>
        {data && (
          <FooterTextBlockServices
            title={data.title}
            text={data.text}
            btnText={data.button}
            btnLink={data.buttonLink}
            className="dappAudit"
          />
        )}
      </div>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image?.url}
            alt="dapp audit footer image"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
      )}
    </Styled.ContentWrapper>
  );
};

export default FooterBlockDapp;
