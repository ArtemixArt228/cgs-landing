import React from "react";

import Card from "../../Common/SuccessfulCasesBlock/components/Card/Card";

import FooterCard from "../../Common/SuccessfulCasesBlock/components/Footer/FooterCard";
import { Button } from "./components/Button/Button";

import * as Styled from "./SuccessCases.styled";
import Header from "../../TitleWithRects/Header";
import { ISuccessCase } from "../../../types/Admin/AdminServices.types";

interface IProps {
  handleOpenModal?: () => void;
  hasBlackButtonWithModal?: boolean;
  hasTitleBackgroundFrame?: boolean;
  className?: string;
  headerClassname?: string;
  data?: {
    title: string;
    footer: {
      amount: string;
      amountDescription: string;
      additionalText: string;
    };
    successCases: ISuccessCase[];
  };
}

const SuccessCases = ({
  hasBlackButtonWithModal = true,
  className = "",
  data,
  headerClassname,
  hasTitleBackgroundFrame,
}: IProps) => {
  return (
    <Styled.SuccessWrapper className={className}>
      <Styled.InfoWrapper className={className}>
        <Header
          className={headerClassname}
          hasBackgroundFrame={hasTitleBackgroundFrame}
          title={data?.title}
          mobileScreen={className == "services" ? 767 : undefined}
        />

        <Styled.CardsWrapper className={className}>
          {data?.successCases?.map((item, index) => (
            <Card
              key={item._id ?? index}
              price={item.amount}
              title={item.amountDescription}
              description={item.additionalText}
              logo={item.logo.image?.url ?? ""}
              image={item.image?.url ?? ""}
              link={item.link}
            />
          ))}
        </Styled.CardsWrapper>
      </Styled.InfoWrapper>
      <FooterCard
        price={data?.footer.amount}
        description={data?.footer.additionalText}
        title={data?.footer.amountDescription}
        className={className}
      />

      {hasBlackButtonWithModal && (
        <Styled.BlackButtonWrapper>
          <Button />
        </Styled.BlackButtonWrapper>
      )}
    </Styled.SuccessWrapper>
  );
};

export default SuccessCases;
