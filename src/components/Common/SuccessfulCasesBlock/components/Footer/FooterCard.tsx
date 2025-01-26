import React, { FC } from "react";
import Image from "next/future/image";

import * as Styled from "../Card/Card.styled";

import Arrow from "/public/arrow-button.svg";
import Calendar from "/public/calendar.svg";
import { useMediaQuery } from "@mui/material";

interface IProps {
  price?: string;
  title?: string;
  description?: string;
  className?: string;
}

const FooterCard: FC<IProps> = ({ price, title, description, className }) => {
  const isBigScreen = useMediaQuery("(min-width: 1800px)");

  return (
    <Styled.FooterCardWrapper
      target="_blank"
      href="/portfolio"
      rel="noopener noreferrer"
      className={className}
    >
      <Styled.FooterContent>
        <Styled.TitleAndPrice>
          <Styled.FooterText>{title}</Styled.FooterText>
          <Styled.PriceWrapper>
            <span className="highlight-text">{price}</span>
            <span className="highlight-wrapper" />
          </Styled.PriceWrapper>
        </Styled.TitleAndPrice>
        <Styled.ButtonAndDescription>
          <Styled.Description className="bottom">
            <Image
              src={Calendar}
              height={isBigScreen ? 27 : undefined}
              width={isBigScreen ? 27 : undefined}
              alt="Calendar"
            />
            <span>{description}</span>
          </Styled.Description>
          <Styled.Button className="bottom">
            VIEW PORTFOLIO
            <Image style={{ marginLeft: 10 }} src={Arrow} alt="Arrow" />
          </Styled.Button>
        </Styled.ButtonAndDescription>
      </Styled.FooterContent>
    </Styled.FooterCardWrapper>
  );
};

export default FooterCard;
