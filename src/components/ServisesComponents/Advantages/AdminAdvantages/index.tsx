import React from "react";
import { useFormikContext } from "formik";

import {
  AdminInput,
  AdminSubTitle,
  AdminQuarterGrid,
  AdminHalfGrid,
} from "../../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";

import { IAdvantagesServicesComponent } from "../../../../types/ServicesComponent.types";

interface IAdvantagesProps {
  advantages: IAdvantagesServicesComponent;
}

const Advantages = <T extends IAdvantagesProps>() => {
  const { values, handleChange, handleSubmit } = useFormikContext<T>();

  const { title, content } = values.advantages ?? {
    title: "",
    content: [{ subtitle: "", text: "" }],
  };

  const handleClick = () => handleSubmit();

  return (
    <>
      <AdminSubTitle>Subtitle</AdminSubTitle>
      <AdminHalfGrid>
        <AdminInput
          name="advantages.title"
          value={title}
          onChange={handleChange}
        />
      </AdminHalfGrid>
      <AdminQuarterGrid>
        {content.map((el, idx) => (
          <div key={idx}>
            <AdminSubTitle>Subtitle</AdminSubTitle>
            <AdminInput
              name={`advantages.content[${idx}].subtitle`}
              value={el.subtitle}
              onChange={handleChange}
            />
            <AdminSubTitle>Text</AdminSubTitle>
            <AdminInput
              name={`advantages.content[${idx}].text`}
              value={el.text}
              onChange={handleChange}
            />
          </div>
        ))}
      </AdminQuarterGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "2.33em", marginBottom: "2.78em" }}
        onClick={() => handleClick()}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </>
  );
};

export default Advantages;
