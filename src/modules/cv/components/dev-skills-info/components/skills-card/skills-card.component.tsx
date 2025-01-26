import React from "react";

import { handleRandomOffset } from "../../../../../../utils/getRandomAnimationOffset";

import * as Styled from "./skills-card.styled";

import crystal from "public/CV/crystal.svg";
import cube from "public/CV/cube.svg";
import cylinder from "public/CV/safari-cylinder.svg";

const svg = [crystal, cube, cylinder];
const svgName = ["crystal", "cube", "cylinder"];

interface ISkillCardProps {
  subtitle: string;
  stack: string[];
  idx: number;
}

export const SkillCard = ({ subtitle, stack, idx }: ISkillCardProps) => {
  return (
    <Styled.InfoCard className="cv-skills-section">
      <Styled.TitleWrap className="title-wrap">
        <Styled.Icon
          src={svg[idx]?.src}
          alt={svgName[idx]}
          xOffset={handleRandomOffset()}
        />
        <Styled.Title>{subtitle}</Styled.Title>
      </Styled.TitleWrap>
      <Styled.SkillsList className="skills-list">
        {stack.map((e, idx) => (
          <Styled.SkillsItem key={idx}>
            <Styled.SkillsItemText>{e}</Styled.SkillsItemText>
          </Styled.SkillsItem>
        ))}
      </Styled.SkillsList>
    </Styled.InfoCard>
  );
};
