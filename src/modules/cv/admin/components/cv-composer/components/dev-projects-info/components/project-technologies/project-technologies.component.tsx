import React from "react";
import { getIn, useFormikContext } from "formik";

import { CvData, CvProject } from "../../../../../../../types";
import { TechnologyDropdown } from "../technology-dropdown";
import { ITechnology } from "../../../../../../../../../types/Admin/technologies.types";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../../../../../../../consts/queryKeys";
import { technologiesService } from "../../../../../../../../../services/technologies";

interface IProjectTechnologiesProps {
  idx: number;
  isSuccess: boolean;
  project: CvProject;
}

export const ProjectTechnologies = ({
  idx,
  isSuccess,
  project,
}: IProjectTechnologiesProps) => {
  const { data: technologies } = useQuery([queryKeys.getTechnologies], () =>
    technologiesService.getTechnologies()
  );

  const { values, errors, setValues } = useFormikContext<CvData>();

  const handleSelectTechnology = (techIndex: number, projectIdx: number) => {
    if (!technologies || !technologies.technologies[techIndex]) {
      return;
    }

    const selectedTech: ITechnology = technologies.technologies[techIndex];

    const isTechAlreadyAdded = values.projects.project[
      projectIdx
    ].technology.some((tech) => tech.name === selectedTech.name);

    if (!isTechAlreadyAdded) {
      setValues((prevValues) => {
        const updatedProjects = prevValues.projects.project.map(
          (project, idx) => {
            if (idx === projectIdx) {
              return {
                ...project,
                technology: [
                  ...project.technology,
                  { ...selectedTech, main: false },
                ],
              };
            }
            return project;
          }
        );

        return {
          ...prevValues,
          projects: {
            ...prevValues.projects,
            project: updatedProjects,
          },
        };
      });
    }
  };

  const handleDeleteTechnology = (projectIndex: number, techIndex: number) => {
    const projectsCopy = { ...values.projects };
    const currentProjectTechnologies =
      projectsCopy.project[projectIndex]?.technology;

    if (currentProjectTechnologies) {
      const updatedTechnologies = currentProjectTechnologies.filter(
        (tech, index) => index !== techIndex
      );

      projectsCopy.project[projectIndex].technology = updatedTechnologies;

      setValues({ ...values, projects: projectsCopy });
    }
  };

  return (
    <div>
      <h2>Technologies</h2>
      <TechnologyDropdown
        isSuccess={isSuccess}
        iserror={!!getIn(errors, `projects.project[${idx}].technology`)}
        technologies={technologies?.technologies}
        cvTechnologies={project.technology}
        handleSelectTechnology={handleSelectTechnology}
        projectIdx={idx}
        handleDeleteTechnology={handleDeleteTechnology}
      />
    </div>
  );
};
