import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/MobileAuditService/FooterBlock.styled";

import { IServiceMobileAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const FooterBlockMobileAudit = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
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
            className={"mobileAudit"}
          />
        )}
      </Styled.ContentWrapper>
      {data && (
        <Styled.ImageWrapper>
          <Image
            src={data?.image?.url}
            alt="footer image img"
            layout="fill"
            objectFit="contain"
          />
        </Styled.ImageWrapper>
      )}
    </Styled.Container>
  );
};

export default FooterBlockMobileAudit;
