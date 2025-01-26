import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";

import * as Styled from "../../../styles/AdminPage";
import {
  MainContainer,
  CareersContainer,
  Title,
  SubTitle,
  TitleTextArea,
  ContactFormContainer,
  FormContainer,
  FormInput,
  CvContainer,
  CvInput,
  ImageContainer,
} from "../../../styles/AdminCareersPage";
import { IDataCareersResponse } from "../../../types/Admin/Response.types";

const CareersContactForm = () => {
  const { values, handleChange } = useFormikContext<IDataCareersResponse>();

  const { CV, image, text, ...otheForm } = values.form;
  const uploadImageFunction = useUploadImageFunction(values.form);
  const deleteImageFunction = useDeleteImageFunction(values.form);

  return (
    <Styled.AdminPaddedBlock theme="dark">
      <MainContainer>
        <CareersContainer>
          <SubTitle>Subtitle</SubTitle>
          <TitleTextArea
            name="subtitle2"
            value={values.subtitle2}
            placeholder={values.subtitle2}
            onChange={handleChange}
          />
          <Title>Contact form</Title>
          <ContactFormContainer>
            <FormContainer>
              {Object.entries(otheForm).map((el, idx) => (
                <FormInput
                  key={idx}
                  type="text"
                  name={`form.${el[0]}`}
                  value={el[1]}
                  onChange={handleChange}
                />
              ))}

              <CvContainer>
                {Object.entries(CV).map((el, idx) => (
                  <CvInput
                    key={idx}
                    type="text"
                    name={`form.CV.${el[0]}`}
                    value={el[1]}
                    onChange={handleChange}
                  />
                ))}
              </CvContainer>
            </FormContainer>
          </ContactFormContainer>
        </CareersContainer>

        <ImageContainer>
          <PhotoBlockDashed
            photo={image}
            deleteFlag={true}
            uploadFunction={uploadImageFunction}
            deleteFunction={async () => (await deleteImageFunction)()}
          />
        </ImageContainer>
      </MainContainer>
    </Styled.AdminPaddedBlock>
  );
};

export default CareersContactForm;
