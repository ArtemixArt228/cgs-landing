import React from "react";

import * as Styled from "./testimonials-icons-links.styled";
import { icons } from "../../../../../consts";

interface IProps {
  linkedin?: string;
  tiktok?: string;
}
export const TestimonialsIconLinks = ({ linkedin, tiktok }: IProps) => {
  return (
    <Styled.IconsContainer>
      {tiktok && (
        <a href={tiktok} target="_blank" rel="noopener noreferrer">
          <Styled.IconImage
            onClick={(e) => {
              e.stopPropagation();
            }}
            src={icons[5].src}
          />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <Styled.IconImage
            onClick={(e) => {
              e.stopPropagation();
            }}
            src={icons[4].src}
          />
        </a>
      )}
    </Styled.IconsContainer>
  );
};
