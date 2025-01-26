import React, { useState } from "react";
import Image from "next/image";
import { useCollapse } from "react-collapsed";

import ArrowDown from "./SvgRateCard/ArrowDown";
import RateCardServiceInfo from "./RateCardServiceInfo";

import { IService } from "../../types/Admin/AdminRateCard.types";
import {
  RateCardImageTitleWrapper,
  RateCardServiceDropDown,
  RateCardServiceName,
} from "../../styles/RateCard.styled";

const RateCardAccordion = ({ service }: { service: IService }) => {
  const [isActive, setIsActive] = useState(false);

  const { getToggleProps, getCollapseProps } = useCollapse({
    duration: 100,
    easing: "linear",
    isExpanded: isActive,
    collapsedHeight: 0,
  });

  const handleActive = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <>
      <RateCardServiceDropDown
        isActive={isActive}
        {...getToggleProps({ onClick: handleActive })}
      >
        <RateCardImageTitleWrapper>
          <Image
            src={service?.image?.url}
            height="51px"
            width="51px"
            objectFit="contain"
            alt="service image"
            priority
          />
          <RateCardServiceName>{service.name}</RateCardServiceName>
        </RateCardImageTitleWrapper>
        <ArrowDown />
      </RateCardServiceDropDown>
      <div {...getCollapseProps()}>
        <RateCardServiceInfo levels={service.levels} />
      </div>
    </>
  );
};

export default RateCardAccordion;
