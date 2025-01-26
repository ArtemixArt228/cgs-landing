import React from "react";

import { Project } from "./components";

import * as Styled from "./dev-projects-info.styled";

import { CvData } from "../../types";

interface IDevProjectsInfoProps {
  data?: CvData;
}

export const DevProjectsInfo = ({ data }: IDevProjectsInfoProps) => {
  const projects = data?.projects;
  return (
    <Styled.SectionContainer className="cv-projects-container">
      <Styled.Title>{projects?.title}</Styled.Title>
      {projects?.project.map((e, idx) => (
        <Project {...e} idx={idx} key={idx} />
      ))}
    </Styled.SectionContainer>
  );
};
