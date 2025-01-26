import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

import { FooterTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/WebAuditService/ProfessionalAuditBlock.style";

import { IServiceWebAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import AuditTimeText from "../../../public/WebAuditServicePage/AuditTimeText.svg";
import AuditTimeCommon from "../../../public/WebAuditServicePage/AuditTimeCommon.svg";

const FooterBlockWebAudit = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.footerBlock;

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <div>
          {data && (
            <FooterTextBlockServices
              title={data.title}
              text={data.text}
              btnText={data.button}
              btnLink={data.buttonLink}
              className={"biggerFontSize fullWidth webAudit"}
            />
          )}
        </div>
        <Styled.ImageWrapper>
          <Image
            src={AuditTimeCommon}
            alt="types of grid image"
            layout="fill"
            objectFit="contain"
          />
          <Styled.HoveredImageContainer>
            {[...Array(2)].map((_, i) => (
              <Styled.HoveredImage key={i} delay={i}>
                <Image
                  src={AuditTimeText}
                  alt="types of grid image"
                  layout="fill"
                  objectFit="contain"
                />
              </Styled.HoveredImage>
            ))}
          </Styled.HoveredImageContainer>
        </Styled.ImageWrapper>
      </Styled.Content>
    </Styled.Wrapper>
  );
};

export default FooterBlockWebAudit;
