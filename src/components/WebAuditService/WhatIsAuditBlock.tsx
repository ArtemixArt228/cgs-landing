import { useQueryClient } from "@tanstack/react-query";
import React from "react";

import { SplitBrackets } from "../../utils/splitBrackets";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../styles/WebAuditService/WhatIsAudit.styled";
import { Subtitle } from "../../styles/WebAuditService/WhatIsAudit.styled";

import { IServiceWebAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

const WhatIsAuditBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceWebAudit>([
    queryKeys.getServiceWebAuditPage,
  ])?.whatIsBlock;

  return (
    <Styled.Wrapper>
      <MobileInfiniteText title={data?.subtitle} />
      <Styled.ContentWrapper>
        {data?.image && (
          <Styled.Image src={data?.image.url} alt="what is web audit image" />
        )}
        <Styled.TextWrapper>
          <Subtitle>{data?.subtitle}</Subtitle>
          <SplitBrackets text={data?.text} />
        </Styled.TextWrapper>
      </Styled.ContentWrapper>
    </Styled.Wrapper>
  );
};

export default WhatIsAuditBlock;
