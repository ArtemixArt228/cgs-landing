import { useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import * as Styled from "../../../../styles/AiService/AdminPage";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import AddIcon from "../../AddIcon";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import { AIServiceItemInit } from "../../../../consts/services";

const BlockServices = () => {
  const { values, handleChange, handleSubmit, setFieldValue } =
    useFormikContext<IServiceAi>();
  const handleClick = () => handleSubmit();

  const handleAddItem = () => {
    setFieldValue("servicesBlock.services", [
      ...values.servicesBlock?.services,
      { ...AIServiceItemInit },
    ]);
  };

  const handleDeleteItem = (deleteIndex: number) => {
    const filtered = values.servicesBlock?.services.filter(
      (_, index) => index !== deleteIndex
    );
    setFieldValue("servicesBlock.services", [...filtered]);
  };

  return (
    <AdminPaddedBlock className="services">
      <SubHeaderWithInput
        inputValue={values.servicesBlock?.title}
        onChangeFunction={handleChange}
        header="Title"
        name="servicesBlock.title"
        placeholder="Title"
        width="633px"
      />
      {values.servicesBlock?.services.map((item, index) => (
        <Styled.ServiceItemWrapper key={item._id ?? index}>
          <Styled.FlexWrapper key={index}>
            <SubHeaderWithInput
              inputValue={values.servicesBlock?.services[index].subtitle}
              onChangeFunction={handleChange}
              header={`#${index + 1} Title`}
              name={`servicesBlock.services[${index}].subtitle`}
              placeholder="Service title"
              width="360px"
            />
            <Styled.FieldWrapper>
              <SubHeaderWithInput
                inputValue={values.servicesBlock?.services[index].text}
                onChangeFunction={handleChange}
                header={`Text`}
                name={`servicesBlock.services[${index}].text`}
                placeholder="Service text"
                width="360px"
                maxLength={215}
              />
              <div style={{ marginLeft: "auto" }}>
                {values.servicesBlock.services[index].text.length}/215
              </div>
            </Styled.FieldWrapper>
            <AddIcon
              imageValue={values.servicesBlock?.services[index].icon}
              nestedImageName={`servicesBlock.services[${index}].icon.image`}
              className="author services"
            />
          </Styled.FlexWrapper>
          <Styled.DeleteBtn onClick={() => handleDeleteItem(index)}>
            delete
          </Styled.DeleteBtn>
        </Styled.ServiceItemWrapper>
      ))}
      <Styled.AddBtn onClick={handleAddItem}>+ Add new</Styled.AddBtn>

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
    </AdminPaddedBlock>
  );
};

export default BlockServices;
