import React from "react";

import * as Styles from "./ServiceCard.styled";

interface ICardProps {
  idx: number;
  subtitle: string;
  text: string;
  className?: string;
}

export const ServiceCard = ({ idx, subtitle, text, className }: ICardProps) => {
  return (
    <Styles.Card className={className}>
      <Styles.CardContent className="card-content">
        <Styles.CardNumber>{`0${String(idx + 1)}`}</Styles.CardNumber>
        <Styles.CardTitle className={className}>{subtitle}</Styles.CardTitle>
        <Styles.CardText className={className}>{text}</Styles.CardText>
      </Styles.CardContent>
      <Styles.ItemBackground className="background" />
    </Styles.Card>
  );
};
