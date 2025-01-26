import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

import * as Styled from "./OurServicesBlock.styled";
import * as StyledGeneral from "../../../styles/Services.styled";
import { MobileInfiniteText } from "../../MobileInfiniteText/MobileInfiniteText";
import DesktopAnimation from "./DesktopAnimation";
import MobileAnimation from "../../Common/ConceptToCompletionBlock/Mobile";
import BlockRectangles from "../../TitleWithRects/BlockRectangles";
import { IOurServicesSectionProps } from "../../../types/Services.types";
interface IProps {
  data?: IOurServicesSectionProps;
  className?: string;
}
const OurServicesBlock: React.FC<IProps> = ({ data }) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const isTablet = useMediaQuery("(max-width:1099px)");
  const [current, setCurrent] = useState(0);

  return (
    <Styled.ContainerWrapper>
      {!isTablet && (
        <Styled.TitleWrapper>
          <BlockRectangles className="services" />
          <StyledGeneral.BlockHeader className="our-services">
            {data?.title}
          </StyledGeneral.BlockHeader>
        </Styled.TitleWrapper>
      )}
      {isMobile && (
        <MobileInfiniteText title={data?.title} className="services block" />
      )}
      {!isMobile && isTablet && (
        <Styled.BlockHeader>{data?.title}</Styled.BlockHeader>
      )}
      <Styled.FailCausesContainer>
        {!isTablet ? (
          <DesktopAnimation
            current={current}
            setCurrent={setCurrent}
            items={data?.services}
            withIndex={false}
          />
        ) : (
          <MobileAnimation
            items={data?.services}
            current={current}
            setCurrent={setCurrent}
            withIndex={false}
            className="services"
          />
        )}
      </Styled.FailCausesContainer>
    </Styled.ContainerWrapper>
  );
};

export default OurServicesBlock;
