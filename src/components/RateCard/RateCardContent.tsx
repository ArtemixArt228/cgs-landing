import React from "react";

import RateCardAccordion from "./RateCardAcordion";

import { IService } from "../../types/Admin/AdminRateCard.types";

import { RateCardContentContainer } from "../../styles/RateCard.styled";

const RateCardContent = ({ services }: { services: IService[] }) => {
  return (
    <RateCardContentContainer>
      {services.map((service, idx) => (
        <div className="serviceWrapper" key={`${service.name}${idx}`}>
          <RateCardAccordion service={service} />
        </div>
      ))}
    </RateCardContentContainer>
  );
};

export default RateCardContent;
