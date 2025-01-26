import React, { useState } from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../../../../../../components/Admin/Global/SubHeaderWithInput";
import AdminBlockDropDown from "../../../../../../../components/Admin/Global/AdminBlockDropDown";
import { SkillsCard } from "./skills-card.component";

import * as Styled from "./dev-skills-info.styled";

import { CvData } from "../../../../../types";

import { AdminCvValidation } from "../../../../validators";

export const DevSkillsInfo = ({ isSuccess }: { isSuccess: boolean }) => {
  const [isSortActive, setIsSortActive] = useState(false);

  const { values, handleChange, errors } = useFormikContext<CvData>();

  const toggleSortMode = () => setIsSortActive((prev) => !prev);

  return (
    <AdminBlockDropDown isSuccess={isSuccess} title="3 BLOCK (SKILLS)">
      <Styled.FieldsWrapper>
        <SubHeaderWithInput
          iserror={!!errors.skills?.title && !values.skills.title}
          inputValue={values.skills?.title}
          onChangeFunction={handleChange}
          header="Title"
          name="skills.title"
          schema={AdminCvValidation}
        />

        {values?.skills?.card?.map((card, cardIdx) => (
          <SkillsCard
            key={cardIdx}
            card={card}
            cardIdx={cardIdx}
            isSortActive={isSortActive}
          />
        ))}

        <Styled.SortButton onClick={toggleSortMode} isActive={isSortActive}>
          {isSortActive ? "[ Disable sort ]" : "[ Sort ]"}
        </Styled.SortButton>
      </Styled.FieldsWrapper>
    </AdminBlockDropDown>
  );
};
