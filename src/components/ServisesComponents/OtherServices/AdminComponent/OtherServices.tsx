import React from "react";
import { useFormikContext, FieldArray } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import SubHeaderWithInput from "../../../Admin/Global/SubHeaderWithInput";
import PhotoBlockAddRemove from "../../../Admin/Global/PhotoBlockAddRemove";

import {
  AddButton,
  ButtonsContainer,
  DeleteButton,
} from "../../../Admin/FAQ/adminFaq.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styled from "../../../../styles/AdminPage";
import * as Styles from "./OtherServices.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IOtherServicesComponent } from "../../../../types/ServicesComponent.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";

interface IOtherService {
  otherServices: IOtherServicesComponent;
}

interface IOtherServiceProps {
  queryKey: string;
}

const OtherServices = ({ queryKey }: IOtherServiceProps) => {
  const queryClient = useQueryClient();
  const { values, handleChange, handleSubmit } =
    useFormikContext<IOtherService>();

  const handleClick = () => handleSubmit();

  const { title, text, services } = values.otherServices ?? {
    title: "",
    text: "",
    services: [
      {
        link: "",
        imageColor: { image: { url: "" } },
        imageGrayscale: { image: { url: "" } },
      },
    ],
  };

  const uploadImageFunction = useUploadImageFunction();
  const deleteImageFunction = useDeleteImageFunction();

  const uploadWithIndex = (
    index: number,
    imageType: "imageColor" | "imageGrayscale"
  ) => {
    const uploadFunc = (image: IImage) =>
      uploadImageFunction(
        image,
        imageType === "imageColor"
          ? values.otherServices?.services[index].imageColor
          : values.otherServices?.services[index].imageGrayscale
      );
    return uploadFunc;
  };

  const deleteWithIndex = (
    index: number,
    imageType: "imageColor" | "imageGrayscale"
  ) => {
    const deleteFunc = async () =>
      (await deleteImageFunction)(
        imageType === "imageColor"
          ? values.otherServices?.services[index].imageColor
          : values.otherServices?.services[index].imageGrayscale
      );
    return deleteFunc;
  };

  const addService = (index: number) => {
    values.otherServices?.services.splice(index + 1, 0, {
      link: "",
      imageColor: { image: null },
      imageGrayscale: { image: null },
    });
    handleSubmit();
    queryClient.invalidateQueries([queryKey]);
  };

  const deleteService = (index: number) => {
    values.otherServices?.services.splice(index, 1);
    handleSubmit();
    queryClient.invalidateQueries([queryKey]);
  };

  return (
    <Styles.ContentWrapper>
      <Styled.ContentWrapper>
        <SubHeaderWithInput
          width="48%"
          placeholder="Other services subtitle"
          header="Subtitle"
          inputValue={title}
          onChangeFunction={handleChange}
          name="otherServices.title"
        />
        <SubHeaderWithInput
          width="48%"
          placeholder="Other services text"
          header="Text"
          inputValue={text}
          onChangeFunction={handleChange}
          name="otherServices.text"
          minRows={4}
        />
        <FieldArray name="messenger">
          {() => (
            <Styles.ServicesList>
              {services.map((service, index) => (
                <div style={{ width: "48%" }} key={index}>
                  <Styled.AdminSubTitle>{`Service ${
                    index + 1
                  }`}</Styled.AdminSubTitle>
                  <Styles.ServiceItem>
                    <Styles.ImageBlock>
                      <PhotoBlockAddRemove
                        style={{ width: "256px", height: "256px" }}
                        imageStyle={{ height: "150px", width: "150px" }}
                        photo={service.imageColor.image}
                        header="add color image"
                        deleteFlag={true}
                        uploadFunction={uploadWithIndex(index, "imageColor")}
                        deleteFunction={deleteWithIndex(index, "imageColor")}
                      />
                      <PhotoBlockAddRemove
                        style={{ width: "256px", height: "256px" }}
                        imageStyle={{ height: "150px", width: "150px" }}
                        photo={service.imageGrayscale.image}
                        header="add grayscale image"
                        deleteFlag={true}
                        uploadFunction={uploadWithIndex(
                          index,
                          "imageGrayscale"
                        )}
                        deleteFunction={deleteWithIndex(
                          index,
                          "imageGrayscale"
                        )}
                      />
                    </Styles.ImageBlock>
                    <Styles.MessengerTextlItem>
                      <Styled.AdminInput
                        placeholder="Add link"
                        onChange={handleChange}
                        name={`otherServices.services[${index}].link`}
                        value={service.link}
                        className="withBottomButtons"
                      />
                      <ButtonsContainer className="about">
                        <AddButton onClick={() => addService(index)}>
                          [ + add next ]
                        </AddButton>

                        {services.length > 1 && (
                          <DeleteButton onClick={() => deleteService(index)}>
                            delete point
                          </DeleteButton>
                        )}
                      </ButtonsContainer>
                    </Styles.MessengerTextlItem>
                  </Styles.ServiceItem>
                </div>
              ))}
            </Styles.ServicesList>
          )}
        </FieldArray>
      </Styled.ContentWrapper>
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

export default OtherServices;
