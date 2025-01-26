import React, { useState } from "react";
import { getIn, useFormikContext } from "formik";

import { DeleteIcon } from "../../../../../../../../shared/icons/components";

import * as Styled from "../../dev-projects-info.styled";

import { CvData } from "../../../../../../../types";

interface IProjectAchievementsProps {
  idx: number;
}

export const ProjectAchievements = ({ idx }: IProjectAchievementsProps) => {
  const [focusedAchievementIdx, setFocusedAchievementIdx] = useState(-1);

  const { values, handleChange, errors, setValues } =
    useFormikContext<CvData>();

  const handleAddAchievement = (idx: number) => {
    setValues((prevState) => {
      const updatedProject = [...prevState.projects.project];
      updatedProject[idx] = {
        ...updatedProject[idx],
        achievements: [...updatedProject[idx].achievements, ""],
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

  const handleDeleteAchievement = (idx: number, achievementIdx: number) => {
    setValues((prevState) => {
      const updatedProject = prevState.projects.project.map(
        (project, projectIdx) => {
          if (projectIdx === idx) {
            return {
              ...project,
              achievements: project.achievements.filter(
                (_, index) => index !== achievementIdx
              ),
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

  return (
    <div>
      <h2>Achievements</h2>
      {values?.projects?.project[idx]?.achievements?.map(
        (achievement, achievementIdx) => (
          <div key={achievementIdx}>
            <Styled.AchievementsGrid key={achievementIdx}>
              <div>
                <Styled.AdminCategoryNameInput
                  iserror={
                    !!getIn(
                      errors,
                      `projects.project[${idx}].achievements[${achievementIdx}]`
                    )
                  }
                  value={achievement}
                  onChange={handleChange}
                  name={`projects.project[${idx}].achievements[${achievementIdx}]`}
                  className="cvAchievements"
                  placeholder="Add new achievements"
                  onFocus={() => setFocusedAchievementIdx(achievementIdx)}
                  onBlur={() => setFocusedAchievementIdx(-1)}
                  maxLength={94}
                />
                {achievementIdx === focusedAchievementIdx && (
                  <Styled.BottomText className="portfolio-admin-description">
                    <Styled.TextCounter>
                      {achievement.length}/94
                    </Styled.TextCounter>
                  </Styled.BottomText>
                )}
              </div>
              {achievementIdx === 0 ? null : (
                <Styled.AdminCategoryDeleteBlockWrapper
                  onClick={() => handleDeleteAchievement(idx, achievementIdx)}
                  className="cvAchievement"
                >
                  <DeleteIcon />
                </Styled.AdminCategoryDeleteBlockWrapper>
              )}
            </Styled.AchievementsGrid>
            {achievementIdx ===
            values.projects.project[idx].achievements.length - 1 ? (
              <Styled.AdminCategoryAddBlockWrapper
                onClick={() => handleAddAchievement(idx)}
                className="cvAchievement"
              >
                <Styled.AdminCategoryAddBlockBtn type="button">
                  {"[ +add next ]"}
                </Styled.AdminCategoryAddBlockBtn>
              </Styled.AdminCategoryAddBlockWrapper>
            ) : null}
          </div>
        )
      )}
    </div>
  );
};
