import React from "react";
import { useFormikContext, FieldArray } from "formik";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import Teammate from "./Teammate";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styled from "../../../styles/AdminPage";
import { IAbout } from "../../../types/Admin/Response.types";

const TeamBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IAbout>();

  const { title, members } = values.team ?? {
    title: "",
    members: [
      { image: { url: "" }, name: "", position: "", about: "", linkedin: "" },
    ],
  };

  const handleClick = () => handleSubmit();

  return (
    <Styled.ContentWrapper>
      <SubHeaderWithInput
        width="50%"
        placeholder="Team title"
        header="Headline 1"
        inputValue={title}
        onChangeFunction={handleChange}
        name="team.title"
      />
      <FieldArray name="members">
        {() => (
          <div>
            {members.map((member, index) => (
              <Teammate member={member} index={index} key={index} />
            ))}
          </div>
        )}
      </FieldArray>
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

export default TeamBlock;
