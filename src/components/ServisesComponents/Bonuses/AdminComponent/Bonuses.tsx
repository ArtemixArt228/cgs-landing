import React from "react";
import { useFormikContext, FieldArray } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import SubHeaderWithInput from "../../../Admin/Global/SubHeaderWithInput";

import {
  AddButton,
  ButtonsContainer,
  DeleteButton,
} from "../../../Admin/FAQ/adminFaq.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styles from "./Bonuses.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";

import { IBonusesComponent } from "../../../../types/ServicesComponent.types";

interface IBonus {
  bonuses: IBonusesComponent;
}

interface IBonusesProps {
  queryKey: string;
}

const Bonuses = <T extends IBonus>({ queryKey }: IBonusesProps) => {
  const queryClient = useQueryClient();
  const { values, handleChange, handleSubmit } = useFormikContext<T>();

  const { title, bonuses } = values.bonuses ?? {
    title: "",
    bonuses: [
      {
        subtitle: "",
        text: "",
      },
    ],
  };

  const handleClick = () => handleSubmit();

  const addBonus = (index: number) => {
    values.bonuses?.bonuses.splice(index + 1, 0, {
      subtitle: "",
      text: "",
    });
    handleSubmit();
    queryClient.invalidateQueries([queryKey]);
  };

  const deleteBonus = (index: number) => {
    values.bonuses?.bonuses.splice(index, 1);
    handleSubmit();
    queryClient.invalidateQueries([queryKey]);
  };

  return (
    <Styles.ContentWrapper>
      <SubHeaderWithInput
        width="48%"
        placeholder="Bonuses title"
        header="Title"
        inputValue={title}
        onChangeFunction={handleChange}
        name="bonuses.title"
      />
      <FieldArray name="bonuses">
        {() => (
          <Styles.ServicesList>
            {bonuses.map((item, index) => (
              <Styles.ServiceItem key={index}>
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Subtitle"
                  header={`Bonus ${index + 1}`}
                  inputValue={item.subtitle}
                  onChangeFunction={handleChange}
                  name={`bonuses.bonuses[${index}].subtitle`}
                />
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Text"
                  inputValue={item.text}
                  onChangeFunction={handleChange}
                  name={`bonuses.bonuses[${index}].text`}
                  minRows={4}
                />
                <ButtonsContainer className="about">
                  {bonuses.length < 10 && (
                    <AddButton onClick={() => addBonus(index)}>
                      [ + add next ]
                    </AddButton>
                  )}
                  {bonuses.length > 1 && (
                    <DeleteButton onClick={() => deleteBonus(index)}>
                      delete point
                    </DeleteButton>
                  )}
                </ButtonsContainer>
              </Styles.ServiceItem>
            ))}
          </Styles.ServicesList>
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
    </Styles.ContentWrapper>
  );
};

export default Bonuses;
