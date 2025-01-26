import React from "react";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../../../../../../components/Admin/Global/SubHeaderWithInput";
import AdminBlockDropDown from "../../../../../../../components/Admin/Global/AdminBlockDropDown";

import * as Styled from "./dev-personal-info.styled";

import { CvData } from "../../../../../types";

import { AdminCvValidation } from "../../../../validators";

export const DevPersonalInfo = ({ isSuccess }: { isSuccess: boolean }) => {
  const { values, handleChange, errors } = useFormikContext<CvData>();

  return (
    <AdminBlockDropDown isSuccess={isSuccess} title="1 BLOCK (PERSONAL)">
      <Styled.FieldsWrapper>
        <SubHeaderWithInput
          iserror={!!errors.personal?.name && !values.personal.name}
          inputValue={values.personal?.name}
          onChangeFunction={handleChange}
          placeholder="NAME"
          name="personal.name"
          header="Name"
          schema={AdminCvValidation}
        />
        <SubHeaderWithInput
          iserror={!!errors.personal?.summary && !values.personal.summary}
          inputValue={values.personal?.summary}
          onChangeFunction={handleChange}
          placeholder="Text summary"
          name="personal.summary"
          header="Summary"
          maxLength={190}
          schema={AdminCvValidation}
        />
        <Styled.BottomText>
          <Styled.TextCounter>
            {values.personal?.summary.length}/190
          </Styled.TextCounter>
        </Styled.BottomText>
        <SubHeaderWithInput
          iserror={!!errors.personal?.role && !values.personal.role}
          inputValue={values.personal?.role}
          onChangeFunction={handleChange}
          name="personal.role"
          placeholder="ex.: Full-stack developer"
          header="Role"
          maxLength={42}
          schema={AdminCvValidation}
        />
        <Styled.BottomText>
          <Styled.TextCounter>
            {values.personal?.role.length}/42
          </Styled.TextCounter>
        </Styled.BottomText>
      </Styled.FieldsWrapper>
    </AdminBlockDropDown>
  );
};
