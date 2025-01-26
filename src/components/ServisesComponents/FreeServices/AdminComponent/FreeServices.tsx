import React from "react";
import { useFormikContext, FieldArray } from "formik";
import { useQueryClient } from "@tanstack/react-query";

import ButtonArrow from "../../../../utils/ButtonArrow";
import HistoryLink from "../../../Admin/HistoryLink";

import SubHeaderWithInput from "../../../Admin/Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";
import * as Styles from "./FreeServices.styled";
import {
  IFreeServicesComponent,
  IServiceHistory,
} from "../../../../types/ServicesComponent.types";

interface IFreeService {
  freeServices: IFreeServicesComponent;
}

const FreeService = <T extends IFreeService>({
  serviceName = "",
  queryKey = "",
}: IServiceHistory) => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<T>([queryKey])?.freeServices;

  const { values, handleChange, handleSubmit } = useFormikContext<T>();

  const { title, services } = values.freeServices ?? {
    title: "",
    services: [
      {
        subtitle: "",
        text: "",
      },
    ],
  };

  const handleClick = () => handleSubmit();

  return (
    <Styles.ContentWrapper>
      <SubHeaderWithInput
        width="48%"
        placeholder="Free services title"
        header="Title"
        inputValue={title}
        onChangeFunction={handleChange}
        name="freeServices.title"
      />
      <FieldArray name="services">
        {() => (
          <Styles.ServicesList>
            {services.map((item, index) => (
              <Styles.ServiceItem key={index}>
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Subtitle"
                  header={`Service ${index + 1}`}
                  inputValue={item.subtitle}
                  onChangeFunction={handleChange}
                  name={`freeServices.services[${index}].subtitle`}
                />
                <SubHeaderWithInput
                  width="100%"
                  placeholder="Text"
                  inputValue={item.text}
                  onChangeFunction={handleChange}
                  name={`freeServices.services[${index}].text`}
                  minRows={4}
                />
              </Styles.ServiceItem>
            ))}
          </Styles.ServicesList>
        )}
      </FieldArray>
      <div>
        {data?.lastModified && (
          <HistoryLink
            sectionName="Free services"
            lastModified={data?.lastModified}
            link={`/history/${serviceName}/freeServices`}
          />
        )}
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

export default FreeService;
