import React from "react";
import { useFormikContext } from "formik";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styles from "../../../styles/AdminAboutUs.styled";
import * as Styled from "../../../styles/AdminPage";
import { IAbout } from "../../../types/Admin/Response.types";

const NumbersBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IAbout>();

  const { years, employees, projects, customers } = values.numbers ?? {
    years: { num: "", text: "" },
    employees: { num: "", text: "" },
    projects: { num: "", text: "" },
    customers: { num: "", text: "" },
  };

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <Styles.Headlines>
        <div>
          <SubHeaderWithInput
            placeholder="numbers of years"
            header="numbers (+)"
            inputValue={years.num}
            onChangeFunction={handleChange}
            name="numbers.years.num"
          />
          <SubHeaderWithInput
            placeholder="numbers description"
            header="text"
            inputValue={years.text}
            onChangeFunction={handleChange}
            name="numbers.years.text"
          />
        </div>
        <div>
          <SubHeaderWithInput
            placeholder="numbers of employees"
            header="numbers (+)"
            inputValue={employees.num}
            onChangeFunction={handleChange}
            name="numbers.employees.num"
          />
          <SubHeaderWithInput
            placeholder="numbers description"
            header="text"
            inputValue={employees.text}
            onChangeFunction={handleChange}
            name="numbers.employees.text"
          />
        </div>
        <div>
          <SubHeaderWithInput
            placeholder="numbers of projects"
            header="numbers (+)"
            inputValue={projects.num}
            onChangeFunction={handleChange}
            name="numbers.projects.num"
          />
          <SubHeaderWithInput
            placeholder="numbers description"
            header="text"
            inputValue={projects.text}
            onChangeFunction={handleChange}
            name="numbers.projects.text"
          />
        </div>
        <div>
          <SubHeaderWithInput
            placeholder="numbers of customers"
            header="numbers (+)"
            inputValue={customers.num}
            onChangeFunction={handleChange}
            name="numbers.customers.num"
          />
          <SubHeaderWithInput
            placeholder="numbers description"
            header="text"
            inputValue={customers.text}
            onChangeFunction={handleChange}
            name="numbers.customers.text"
          />
        </div>
      </Styles.Headlines>
      <div>
        <BlackButton
          size={"1.5em"}
          padding={"1.11em 3em"}
          style={{ marginTop: "1.33em" }}
          onClick={handleClick}
        >
          Save Changes
          <ArrowContainer>
            <ButtonArrow />
          </ArrowContainer>
        </BlackButton>
      </div>
    </Styled.ContentWrapper>
  );
};

export default NumbersBlock;
