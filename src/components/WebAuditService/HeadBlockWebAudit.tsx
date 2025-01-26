import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { HeaderTextBlockServices } from "../ServisesComponents";

import * as Styled from "../../styles/WebAuditService/HeadBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceWebAudit } from "../../types/Admin/Response.types";

const HeadBlockWebAudit = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.headerBlock;

  return (
    <Styled.Wrapper>
      <Styled.ContentContainer>
        <Styled.TextContainer>
          {data && (
            <HeaderTextBlockServices
              title={data.title}
              text={data.text}
              btnText={data.button}
              btnLink={data.buttonLink}
              className={"webAudit"}
            />
          )}
        </Styled.TextContainer>
        {data?.image && (
          <Styled.Image src={data?.image.url} alt="web audit hero image" />
        )}
      </Styled.ContentContainer>
    </Styled.Wrapper>
  );
};

export default HeadBlockWebAudit;
