import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import AuditBox from "./AuditBox";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceMobileAudit } from "../../types/Admin/Response.types";

const HowDoWeAuditBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.howDoWeAudit;

  return (
    <Styled.Container>
      <Styled.Title>{data?.subtitle}</Styled.Title>
      {data && <MobileInfiniteText title={data.subtitle} />}
      <Styled.Description>{data?.description}</Styled.Description>
      <Styled.ListContainer>
        {data && (
          <>
            <AuditBox
              className="mobileAudit"
              data={data.points.slice(0, data.points.length / 2)}
            />
            <AuditBox
              className="mobileAudit"
              data={data.points.slice(data.points.length / 2)}
            />
          </>
        )}
      </Styled.ListContainer>
      <Styled.MobileListContainer>
        {data && <AuditBox className="mobileAudit" data={data.points} />}
      </Styled.MobileListContainer>
    </Styled.Container>
  );
};

export default HowDoWeAuditBlock;
