import React from "react";

import * as Styled from "./PricingBlock.styled";
import * as GeneralStyles from "../../../styles/Services.styled";
import { IPricingBlock } from "../../../types/Admin/AdminServices.types";
import { ActionButton } from "../../ActionButton/ActionButton";

interface IProps {
  data?: IPricingBlock;
  className?: string;
}
const PricingBlock: React.FC<IProps> = ({ data }) => {
  return (
    <GeneralStyles.SectionWrapper className="pricing">
      <Styled.PricingBlockWrapper>
        <Styled.PricingSide className="left">
          <Styled.PricingTitle>{data?.title}</Styled.PricingTitle>
          <Styled.PricingDescription
            dangerouslySetInnerHTML={{ __html: data?.text || `<p></p>` }}
          />
          <Styled.PricingBtnContainer>
            <ActionButton
              buttonText={data?.buttonText}
              className="services-pricing"
            />
          </Styled.PricingBtnContainer>
        </Styled.PricingSide>
        <Styled.PricingSide className="right">
          <img src={data?.image?.url || ""} alt={"Pricing image"} />
        </Styled.PricingSide>
      </Styled.PricingBlockWrapper>
    </GeneralStyles.SectionWrapper>
  );
};

export default PricingBlock;
