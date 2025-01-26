import React from "react";
import { getIn, useFormikContext } from "formik";

import { DeleteIcon } from "../../../../../../../../shared/icons/components";
import SubHeaderWithInput from "../../../../../../../../../components/Admin/Global/SubHeaderWithInput";
import { MonthRangePicker } from "../month-picker.component";

import * as Styled from "../../dev-projects-info.styled";

import { AdminCvValidation } from "../../../../../../validators";
import { CvData, CvProject } from "../../../../../../../types";
import { useFieldValidation } from "../../../../../../../../../hooks/useFieldValidation";

interface IProjectInfoProps {
  project: CvProject;
  idx: number;
}

export const ProjectInfo = ({ project, idx }: IProjectInfoProps) => {
  const { values, handleChange, errors, setValues } =
    useFormikContext<CvData>();

  const handleAddLink = (idx: number) => {
    setValues((prevState) => {
      const updatedProject = [...prevState.projects.project];

      updatedProject[idx] = {
        ...updatedProject[idx],
        links: [...(updatedProject[idx].links || []), { text: "", url: "" }],
      };

      return {
        ...prevState,
        projects: {
          ...prevState.projects,
          project: updatedProject,
        },
      };
    });
  };

  const handleDeleteLink = (idx: number, linkIdx: number) => {
    setValues((prevState) => {
      const updatedProject = prevState.projects.project.map(
        (project, projectIdx) => {
          if (projectIdx === idx) {
            return {
              ...project,
              links: project.links?.filter((_, index) => index !== linkIdx),
            };
          } else {
            return project;
          }
        }
      );

      return {
        ...prevState,
        projects: {
          ...prevState.projects,
          project: updatedProject,
        },
      };
    });
  };

  const handleBlur = useFieldValidation(AdminCvValidation);

  return (
    <div>
      <Styled.FirstProjectInfoBlock>
        <div>
          <SubHeaderWithInput
            iserror={!!getIn(errors, `projects.project[${idx}].projectName`)}
            inputValue={project.projectName}
            onChangeFunction={handleChange}
            header="Project name"
            name={`projects.project[${idx}].projectName`}
            placeholder="NAME"
            schema={AdminCvValidation}
          />
        </div>
        <div>
          <SubHeaderWithInput
            iserror={!!getIn(errors, `projects.project[${idx}].role`)}
            inputValue={project.role}
            onChangeFunction={handleChange}
            header="Role"
            name={`projects.project[${idx}].role`}
            placeholder="Role (ex.: Role: Full-stack developer)"
            schema={AdminCvValidation}
          />
        </div>
        <div>
          <SubHeaderWithInput
            onChangeFunction={handleChange}
            iserror={!!getIn(errors, `projects.project[${idx}].date`)}
            inputStyle={{ pointerEvents: "none" }}
            inputValue={project.date}
            header="Date"
            name={`projects.project[${idx}].date`}
            height="75px !important"
            schema={AdminCvValidation}
          />
          <MonthRangePicker idx={idx} maxDate={new Date()} />
        </div>
      </Styled.FirstProjectInfoBlock>
      <div style={{ marginBottom: "14px" }}>
        <Styled.AdminCategoryAddBlockWrapper
          onClick={() => handleAddLink(idx)}
          className="cvAchievement"
        >
          <Styled.AdminCategoryAddBlockBtn type="button">
            {"[ +add link ]"}
          </Styled.AdminCategoryAddBlockBtn>
        </Styled.AdminCategoryAddBlockWrapper>
        {values?.projects?.project[idx]?.links?.map((link, linkIdx) => (
          <div key={linkIdx}>
            <Styled.LinkGrid key={linkIdx}>
              <div>
                <h2>Link URL</h2>
                <Styled.AdminCategoryNameInput
                  iserror={
                    !!getIn(
                      errors,
                      `projects.project[${idx}].links[${linkIdx}].url`
                    )
                  }
                  value={link.url}
                  onChange={handleChange}
                  name={`projects.project[${idx}].links[${linkIdx}].url`}
                  className="cvLinks"
                  placeholder="Type or paste URL"
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <h2>Link Text</h2>
                <Styled.AdminCategoryNameInput
                  iserror={
                    !!getIn(
                      errors,
                      `projects.project[${idx}].links[${linkIdx}].text`
                    )
                  }
                  value={link.text}
                  onChange={handleChange}
                  name={`projects.project[${idx}].links[${linkIdx}].text`}
                  className="cvLinks"
                  placeholder="ex.: Android"
                  onBlur={handleBlur}
                />
              </div>
              <Styled.LinkDeleteContainer>
                <Styled.AdminCategoryDeleteBlockWrapper
                  onClick={() => handleDeleteLink(idx, linkIdx)}
                  className="cvAchievement"
                >
                  {linkIdx > 0 && <DeleteIcon />}
                </Styled.AdminCategoryDeleteBlockWrapper>
              </Styled.LinkDeleteContainer>
            </Styled.LinkGrid>
          </div>
        ))}
      </div>
      <SubHeaderWithInput
        iserror={!!getIn(errors, `projects.project[${idx}].summary`)}
        inputValue={project.summary}
        onChangeFunction={handleChange}
        header="Summary"
        name={`projects.project[${idx}].summary`}
        placeholder="Text"
        maxLength={370}
        schema={AdminCvValidation}
      />
      <Styled.BottomText className="portfolio-admin-description">
        <Styled.TextCounter>{project.summary.length}/370</Styled.TextCounter>
      </Styled.BottomText>
    </div>
  );
};
