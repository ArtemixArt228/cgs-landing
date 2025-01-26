import React from "react";
import { useMediaQuery } from "@mui/material";
import parse from "html-react-parser";

import * as Styled from "./dev-general-info.styled";

import { CvData } from "../../types";

import circle from "public/Advantages/circle.svg";
import smallCircle from "public/Advantages/smallCircle.svg";
import mobileLine from "public/CV/mobile-line.svg";

interface IInfoSectionProps {
  data?: CvData;
}

interface ContentItemProps {
  subtitle: string;
  text: string;
  isLast: boolean;
  index: number;
}

const parseContentWithLineBreaks = (text: string) =>
  parse(text.replace(/<span/g, "<br /><span"));

const ContentItem = ({ subtitle, text, isLast, index }: ContentItemProps) => (
  <Styled.NumberItems>
    <p>0{index + 1}</p>
    <Styled.SectionWrapper className="cv-point-wrapper">
      <Styled.BlockContainer>
        <img className="yellowCircle" src={circle.src} alt="Yellow Circle" />
        <Styled.AfterBlockWrapper>
          <Styled.AfterBlock
            className={isLast ? "cv-point-long-line long" : "cv-point-line"}
          />
          <img className="dot" src={smallCircle.src} alt="Dot" />
          {!isLast && <Styled.BeforeBlock className="cv-point-line" />}
        </Styled.AfterBlockWrapper>
      </Styled.BlockContainer>
      <Styled.ContentItems className="cv-point-desc">
        <Styled.Subtitle>{subtitle}</Styled.Subtitle>
        <Styled.Text>{parseContentWithLineBreaks(text)}</Styled.Text>
      </Styled.ContentItems>
    </Styled.SectionWrapper>
  </Styled.NumberItems>
);

const DesktopInfoContent = ({ info }: { info: CvData["info"] }) => {
  if (!info || !info.content || info.content.length === 0) return null;

  return (
    <Styled.Content>
      <Styled.Numbers>
        {info.content.map((item, idx) => (
          <ContentItem
            key={idx}
            subtitle={item.subtitle}
            text={item.text}
            isLast={idx === info.content.length - 1}
            index={idx}
          />
        ))}
      </Styled.Numbers>
    </Styled.Content>
  );
};

const MobileInfoContent = ({ info }: { info: CvData["info"] }) => {
  return (
    <Styled.MobileContent>
      {info?.content.map((item, idx) => (
        <Styled.AdvantagesItem key={idx}>
          <Styled.NumberMobileItem>
            <Styled.MobileNumber
              className={info?.content.length - 1 === idx ? "last" : ""}
            >
              0{idx + 1}
            </Styled.MobileNumber>
            <Styled.Circle src={circle.src} alt="Yellow Circle" />
            <Styled.MobileLine src={mobileLine.src} alt="Line" />
            <Styled.SmallCircle
              src={smallCircle.src}
              alt="Dot"
              className={info?.content.length - 1 === idx ? "last" : ""}
            />
          </Styled.NumberMobileItem>
          <Styled.TextMobileItem>
            <Styled.Subtitle>{item.subtitle}</Styled.Subtitle>
            <Styled.Text>{parseContentWithLineBreaks(item.text)}</Styled.Text>
          </Styled.TextMobileItem>
        </Styled.AdvantagesItem>
      ))}
    </Styled.MobileContent>
  );
};

export const DevGeneralInfo = ({ data }: IInfoSectionProps) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  if (!data?.info) return null;

  return (
    <Styled.Wrapper>
      <Styled.Title>{data.info?.title}</Styled.Title>
      {isMobile ? (
        <MobileInfoContent info={data.info} />
      ) : (
        <DesktopInfoContent info={data.info} />
      )}
    </Styled.Wrapper>
  );
};
