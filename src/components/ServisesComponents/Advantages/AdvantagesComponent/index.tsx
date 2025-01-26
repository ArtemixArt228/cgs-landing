import React, { useRef } from "react";

import * as Styled from "./advantages.styled";

import { IAdvantagesServicesComponent } from "../../../../types/ServicesComponent.types";

import { useOnScreen } from "../../../../hooks/useOnScreen";

import circle from "../../../../../public/Advantages/circle.svg";
import smallCircle from "../../../../../public/Advantages/smallCircle.svg";
import { useMediaQuery } from "@mui/material";

interface IAdvantagesProps {
  advantages?: IAdvantagesServicesComponent;
  className?: string;
}

const Advantages = ({ advantages, className }: IAdvantagesProps) => {
  const elRef = useRef<HTMLDivElement>(null);
  const isScrolled = useOnScreen(elRef, true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const advantagesCount =
    advantages?.content?.filter(
      (item) => item.subtitle.trim() !== "" && item.text.trim() !== ""
    ).length || 0;

  const numbers = Array.from({ length: advantagesCount }, (_, idx) => {
    const number = (idx + 1).toString().padStart(2, "0");
    return number;
  });

  const combinedArray = numbers.map((number, idx) => ({
    number,
    ...advantages?.content[idx],
  }));

  return (
    <Styled.Wrapper className={className}>
      <Styled.Title>{advantages?.title}</Styled.Title>
      {isMobile ? (
        <Styled.MobileContent ref={elRef}>
          {combinedArray.map((item, idx) => (
            <Styled.AdvantagesItem key={idx}>
              <Styled.NumberMobileItem>
                <Styled.MobileNumber
                  className={idx === combinedArray.length - 1 ? "last" : ""}
                >
                  {item.number}
                </Styled.MobileNumber>
                <Styled.Circle src={circle.src} alt="Yellow Circle" />
                <Styled.SmallCircle
                  src={smallCircle.src}
                  alt="Dot"
                  className={
                    item.text && item.text.length < 38
                      ? "oneLine"
                      : idx === combinedArray.length - 1
                      ? "last"
                      : undefined
                  }
                />
              </Styled.NumberMobileItem>
              <Styled.TextMobileItem
                ind={idx}
                className={isScrolled ? "scrolled" : undefined}
              >
                <Styled.Subtitle>{item.subtitle}</Styled.Subtitle>
                <Styled.Text>{item.text}</Styled.Text>
              </Styled.TextMobileItem>
            </Styled.AdvantagesItem>
          ))}
        </Styled.MobileContent>
      ) : (
        <Styled.Content>
          <Styled.Numbers>
            {numbers.map((number, idx) => (
              <Styled.NumberItems
                key={idx}
                ind={idx}
                className={isScrolled ? "scrolled" : undefined}
              >
                <p>{number}</p>
                <Styled.ImageWrapper>
                  {idx === numbers.length - 1 ? (
                    <>
                      <Styled.BlockContainer>
                        <img src={circle.src} alt="Yellow Circle" />
                        <Styled.AfterBlock />
                        <img src={smallCircle.src} alt="Dot" />
                      </Styled.BlockContainer>
                      <Styled.BeforeBlock isFirst={true} />
                    </>
                  ) : (
                    <>
                      <Styled.BlockContainer>
                        <img src={circle.src} alt="Yellow Circle" />
                        <Styled.AfterBlock />
                        <img src={smallCircle.src} alt="Dot" />
                        <Styled.BeforeBlock isFirst={false} />
                      </Styled.BlockContainer>
                    </>
                  )}
                </Styled.ImageWrapper>
              </Styled.NumberItems>
            ))}
          </Styled.Numbers>
          <Styled.TextContent ref={elRef}>
            {advantages?.content
              ?.filter(
                (item) => item.subtitle.trim() !== "" && item.text.trim() !== ""
              )
              .map(({ subtitle, text }, idx) => (
                <Styled.ContentItems
                  key={idx}
                  ind={idx}
                  className={isScrolled ? "scrolled" : undefined}
                >
                  <Styled.Subtitle>{subtitle}</Styled.Subtitle>
                  <Styled.Text>{text}</Styled.Text>
                </Styled.ContentItems>
              ))}
          </Styled.TextContent>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};

export default Advantages;
