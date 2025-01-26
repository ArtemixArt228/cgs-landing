import Image from "next/image";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import { Wrapper, Subtitle } from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/FigureOutBlock.styled";

import { IServiceDappAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import { SplitBrackets } from "../../utils/splitBrackets";

const FigureOutBlock = () => {
  const queryClient = useQueryClient();
  const figureOutBlockData = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.figureOutBlock;

  return (
    <Wrapper>
      <Subtitle className="mobileDissapear dappAudit">
        {figureOutBlockData?.subtitle}
      </Subtitle>
      <MobileInfiniteText title={figureOutBlockData?.subtitle} />
      <Styled.ContentWrapper>
        {figureOutBlockData && (
          <Styled.ImageWrapper>
            <Image
              src={figureOutBlockData.image.url}
              alt="figure out terms upper image"
              layout="fill"
              objectFit="contain"
            />
          </Styled.ImageWrapper>
        )}
        <Styled.TextWrapper>
          {figureOutBlockData?.textBlock.map((text, index) => (
            <Styled.Text key={`${index}${text.length}`}>
              <SplitBrackets text={text} />
            </Styled.Text>
          ))}
        </Styled.TextWrapper>
      </Styled.ContentWrapper>
    </Wrapper>
  );
};

export default FigureOutBlock;
