import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../../../../../../components/Admin/Global/SubHeaderWithInput";
import AdminBlockDropDown from "../../../../../../../components/Admin/Global/AdminBlockDropDown";

import * as Styled from "./dev-projects-info.styled";

import { CvData } from "../../../../../types";

import { AdminCvValidation } from "../../../../validators";
import { ProjectInfo } from "./components";
import { ProjectAchievements } from "./components/project-achievements";
import { ProjectTechnologies } from "./components/project-technologies";

export const DevProjectsInfo = ({ isSuccess }: { isSuccess: boolean }) => {
  const { values, handleChange, errors, setValues } =
    useFormikContext<CvData>();

  const handleAddProject = () => {
    setValues((prevState) => ({
      ...prevState,
      projects: {
        ...prevState.projects,
        project: [
          ...prevState.projects.project,
          {
            projectName: "",
            role: "",
            date: "",
            summary: "",
            achievements: [""],
            links: [{ text: "", url: "" }],
            technology: [],
          },
        ],
      },
    }));
  };

  const handleDeleteProject = (index: number) => {
    setValues((prevState) => ({
      ...prevState,
      projects: {
        ...prevState.projects,
        project: prevState.projects.project.filter((_, i) => i !== index),
      },
    }));
  };

  return (
    <AdminBlockDropDown isSuccess={isSuccess} title="4 BLOCK (PROJECTS)">
      <Styled.FieldsWrapper>
        <SubHeaderWithInput
          iserror={!!errors.projects?.title && !values.projects.title}
          inputValue={values.projects?.title}
          onChangeFunction={handleChange}
          header="Title"
          name="projects.title"
          schema={AdminCvValidation}
        />
        <div>
          {values?.projects?.project.map((project, idx) => (
            <div key={idx}>
              <Styled.ProjectWrapper>
                <Styled.ProjectNumberWrapper>
                  <Styled.ProjectNumber>#{idx + 1}</Styled.ProjectNumber>
                  {idx !== 0 ? (
                    <div
                      style={{ color: "red", fontSize: 14 }}
                      onClick={() => handleDeleteProject(idx)}
                    >
                      delete project
                    </div>
                  ) : null}
                </Styled.ProjectNumberWrapper>
                <Styled.ProjectInfo>
                  <ProjectInfo project={project} idx={idx} />
                  <Styled.LastProjectInfoBlock>
                    <ProjectAchievements idx={idx} />
                    <ProjectTechnologies
                      idx={idx}
                      isSuccess={isSuccess}
                      project={project}
                    />
                  </Styled.LastProjectInfoBlock>
                </Styled.ProjectInfo>
              </Styled.ProjectWrapper>
            </div>
          ))}
        </div>
        <Styled.AddProjectBtn type="button" onClick={() => handleAddProject()}>
          ADD PROJECT +
        </Styled.AddProjectBtn>
      </Styled.FieldsWrapper>
    </AdminBlockDropDown>
  );
};
