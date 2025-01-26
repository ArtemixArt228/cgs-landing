import React from "react";
import Image from "next/image";

import { SkillCard } from "./components";

import * as Styled from "./dev-skills-info.styled";

import { CvData } from "../../types";

import LineBG from "public/CV/03.svg";
import TopLineBG from "public/CV/skills-top-dashed-line.svg";

interface IDevSkillsInfoProps {
  data?: CvData;
}

export const DevSkillsInfo = ({ data }: IDevSkillsInfoProps) => {
  const skills = data?.skills;
  const cardsToShow = skills?.card.filter((e) => e.subtitle !== "") ?? [];

  return (
    <Styled.SkillsContainer>
      <Styled.Title>{skills?.title}</Styled.Title>
      <Styled.TopBgImageContainer>
        <Image
          src={TopLineBG.src}
          alt="dashed line"
          layout="fill"
          objectFit="contain"
        />
      </Styled.TopBgImageContainer>
      <Styled.SkillsCardWrapper className="skills-wrapper">
        {cardsToShow.map((e, idx) => (
          <SkillCard
            subtitle={e.subtitle}
            stack={e.stack}
            key={idx}
            idx={idx}
          />
        ))}
        <Styled.BottomBgImageContainer>
          <Image
            src={LineBG.src}
            alt="dashed line"
            layout="fill"
            objectFit="contain"
          />
        </Styled.BottomBgImageContainer>
      </Styled.SkillsCardWrapper>
    </Styled.SkillsContainer>
  );
};
