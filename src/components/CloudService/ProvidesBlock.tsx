import React, { useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";

import { MobileInfiniteText } from "../MobileInfiniteText/MobileInfiniteText";

import * as Styled from "../../styles/CloudService/Provides.styled";
import { Subtitle } from "../../styles/CloudService/Layout";

import { queryKeys } from "../../consts/queryKeys";

import { ICloudService } from "../../types/Admin/Response.types";
import { IServicesClassnameProps } from "../../types/Services.types";

import { SplitBrackets } from "../../utils/splitBrackets";

import { useOnScreen } from "../../hooks/useOnScreen";

import cloudProvidesBgi from "../../../public/CloudServicePage/cloudProvidesBgi.svg";
import cloudProvidesMobile from "../../../public/CloudServicePage/cloud-provides-mobile-new.svg";

const ProvidesBlock = ({ className }: IServicesClassnameProps) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<ICloudService>([
    queryKeys.getServiceCloudPage,
  ])?.providesBlock;

  const { subtitle, ...blocks } = { ...data };

  const elRef = useRef<HTMLDivElement>(null);

  const isScrolled = useOnScreen(elRef, true);

  return (
    <Styled.Container className={className}>
      <Subtitle>{subtitle}</Subtitle>
      <MobileInfiniteText withoutMargin title={subtitle} />
      <Styled.BGImage src={cloudProvidesBgi.src} alt="Scheme" />
      <Styled.BGImageMobile src={cloudProvidesMobile.src} alt="Scheme" />
      <Styled.BlockWrapper ref={elRef}>
        {Object.values(blocks).map((el, index) => (
          <Styled.Block
            key={index}
            ind={index}
            className={isScrolled ? "scrolled" : undefined}
          >
            <Styled.Title>
              <SplitBrackets text={el.subtitle} />
            </Styled.Title>
            <Styled.Description>{parse(el.text)}</Styled.Description>
          </Styled.Block>
        ))}
      </Styled.BlockWrapper>
    </Styled.Container>
  );
};

export default ProvidesBlock;
