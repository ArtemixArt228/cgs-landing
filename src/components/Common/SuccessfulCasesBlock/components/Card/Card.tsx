import React, { FC } from "react";
import Image from "next/image";

import * as Styled from "./Card.styled";

import Calendar from "/public/calendar.svg";
import Arrow from "/public/arrow-button.svg";

interface IProps {
  price: string;
  title: string;
  description: string;
  logo: string;
  image: string;
  link: string;
}

const Card: FC<IProps> = ({ price, title, description, logo, image, link }) => {
  return (
    <Styled.CardWrapper target="_blank" href={link} rel="noopener noreferrer">
      <Styled.ContentWrapper>
        <Styled.LeftContainer>
          <Styled.TitleAndDescription>
            <Styled.Title>
              <Styled.PriceWrapper>{price}</Styled.PriceWrapper>
              <Styled.Text>{title}</Styled.Text>
            </Styled.Title>
            <Styled.Description>
              <Image src={Calendar} alt="Calendar" width={20} height={20} />
              <span>{description}</span>
            </Styled.Description>
          </Styled.TitleAndDescription>
          <Styled.ButtonContainer>
            <Styled.Button>
              FULL CASE
              <Image src={Arrow} alt="Arrow" />
            </Styled.Button>
            <Styled.Logo>
              <Image src={logo} alt="Logo" layout="fill" objectFit="contain" />
            </Styled.Logo>
          </Styled.ButtonContainer>
        </Styled.LeftContainer>
        <Styled.RightContainer>
          <Image
            style={{ zIndex: 2 }}
            src={image}
            alt="project preview"
            layout="fill"
          />
        </Styled.RightContainer>
      </Styled.ContentWrapper>
    </Styled.CardWrapper>
  );
};

export default Card;
