import Image from "next/image";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";

import HowToProvideBlockItem from "./HowDoProvideBlockItem";
import HowDoProvideSubItem from "./HowDoProvideSubItem";
import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import {
  Subtitle,
  WrapperWithLine,
} from "../../styles/DappAuditService/Common.styled";
import * as Styled from "../../styles/DappAuditService/HowDoProvideBlock.styled";

import { IServiceDappAudit } from "../../types/Admin/Response.types";

import { queryKeys } from "../../consts/queryKeys";

import HowDoWeProvideBg from "../../../public/DappAuditService/HowDoWeProvideItDapp.svg";

const HowDoProvideBlock = () => {
  const queryClient = useQueryClient();

  const data = queryClient.getQueryData<IServiceDappAudit>([
    queryKeys.getServiceDappAuditPage,
  ])?.howDoWeProvideBlock;

  return (
    <Styled.Wrapper>
      <Styled.SubtitleWrapper>
        <div>
          <MobileInfiniteText title={data?.subtitle} withoutMargin />
          <Subtitle className="mobileDissapear dappAudit">
            {data?.subtitle}
          </Subtitle>
          {data && (
            <HowToProvideBlockItem
              number={1}
              title={data.textBlock[0].title}
              text={data.textBlock[0].text}
            />
          )}
        </div>
        {data && (
          <Styled.ImageWrapper>
            <Image
              src={data?.image.url}
              alt="how to provide img"
              layout="fill"
              objectFit="contain"
            />
          </Styled.ImageWrapper>
        )}
      </Styled.SubtitleWrapper>
      <Styled.BackgroundContainer>
        <Styled.BgImage
          src={HowDoWeProvideBg.src}
          alt="how do we provide bg image"
        />
        <Styled.SubContentWrapper>
          {data?.textBlock[0].subContent.map((item, idx) => (
            <HowDoProvideSubItem
              title={item.title}
              text={item.text}
              key={item.title + idx}
            />
          ))}
        </Styled.SubContentWrapper>
        <WrapperWithLine />
        {data && (
          <Styled.SecondSubtitleContainer>
            <HowToProvideBlockItem
              className={"gapBottom"}
              optional
              number={2}
              title={data.textBlock[1].title}
              text={data.textBlock[1].text}
            />
          </Styled.SecondSubtitleContainer>
        )}
        {data && (
          <Styled.ThirdSubtitleContainer>
            <HowToProvideBlockItem
              className={"gapBottom"}
              number={3}
              title={data.textBlock[2].title}
              text={data.textBlock[2].text}
            />
          </Styled.ThirdSubtitleContainer>
        )}
      </Styled.BackgroundContainer>
    </Styled.Wrapper>
  );
};

export default HowDoProvideBlock;
