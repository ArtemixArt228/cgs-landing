import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../styles/MobileAuditService/WhatAppBlock.styled";

import { queryKeys } from "../../consts/queryKeys";

import { IServiceMobileAudit } from "../../types/Admin/Response.types";

import { SplitBrackets } from "../../utils/splitBrackets";

import disk from "../../../public/MobileAuditService/disk.svg";
import window from "../../../public/MobileAuditService/window.svg";
import tree from "../../../public/MobileAuditService/tree.svg";

const WhatAppBlock = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<IServiceMobileAudit>([
    queryKeys.getServiceMobileAuditPage,
  ])?.whatAppBlock;

  const titleIllustration = [disk, tree, window];

  const elRef = useRef<HTMLDivElement>(null);

  return (
    <Styled.Container>
      {data && <MobileInfiniteText title={data.subtitle} className="mobileAudit" />}
      <Styled.ContentLayout ref={elRef}>
        <Styled.Title>{data?.subtitle}</Styled.Title>
        <Styled.HaveContainer>
          {data?.textBlock &&
            Object.values(data.textBlock).map((item, idx) => (
              <Styled.ItemApp key={`${item.subtitle}${idx}`}>
                <Styled.Icon
                  src={titleIllustration[idx].src}
                  alt="worth it title image"
                />
                <h3>{item.subtitle}</h3>
                <p>
                  <SplitBrackets text={item.text} />
                </p>
              </Styled.ItemApp>
            ))}
        </Styled.HaveContainer>
      </Styled.ContentLayout>
    </Styled.Container>
  );
};

export default WhatAppBlock;
