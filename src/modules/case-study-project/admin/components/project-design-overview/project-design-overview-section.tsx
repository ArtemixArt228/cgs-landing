import { Field, getIn, useFormikContext } from "formik";
import React from "react";

import * as Styled from "../../../../../styles/AiService/AdminPage";

import AddImage from "../../../../../components/Admin/AddImage";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import { IImage } from "../../../../../types/Admin/Admin.types";
import {
  IDesignOverviewCard,
  IPortfolioReview,
} from "../../../../../types/Admin/AdminPortfolio.types";
import AdminBlockDropDown from "../../../../../components/Admin/Global/AdminBlockDropDown";
interface IProps {
  basePath: "fontSection" | "colorSection" | "accessibilitySection";
  itemToInit: object;
  sectionType: "font" | "color" | "accessibility";
}
export const DesignOverviewSection = ({
  basePath,
  itemToInit,
  sectionType,
}: IProps) => {
  const { values, touched, errors, handleChange, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  const isAddButtonDisabled =
    values.designOverview[basePath]?.cards.length >= 2;

  const handleAddItem = () => {
    setFieldValue(`designOverview.${basePath}.cards`, [
      ...values.designOverview[basePath]?.cards,
      { ...itemToInit },
    ]);
  };

  const handleDeleteItem = (deleteIndex: number) => {
    const cards = values.designOverview[basePath]?.cards;

    if (Array.isArray(cards)) {
      const filtered = (cards as IDesignOverviewCard[]).filter(
        (_, index) => index !== deleteIndex
      );
      setFieldValue(`designOverview.${basePath}.cards`, filtered);
    }
  };
  return (
    <AdminBlockDropDown title={sectionType} style={{ marginLeft: "70px" }}>
      <SubHeaderWithInput
        iserror={
          !!getIn(errors, `designOverview.${basePath}.title`) &&
          !!getIn(touched, `designOverview.${basePath}.title`)
        }
        inputValue={values.designOverview[basePath].title}
        onChangeFunction={handleChange}
        header={`Section Title`}
        name={`${basePath}.title`}
        placeholder="Section Title"
        width="100%"
        containerWidth="100%"
      />
      <SubHeaderWithInput
        iserror={
          !!getIn(errors, `designOverview.${basePath}.description`) &&
          !!getIn(touched, `designOverview.${basePath}.description`)
        }
        inputValue={values.designOverview[basePath].description}
        onChangeFunction={handleChange}
        header={`Section Description`}
        name={`designOverview.${basePath}.description`}
        placeholder="Section Description"
        width="100%"
        containerWidth="100%"
      />
      {values.designOverview[basePath]?.cards.map((item, index) => (
        <Styled.ServiceItemWrapper key={item._id ?? index}>
          <Styled.FlexWrapper key={index}>
            <Styled.FieldWrapper
              style={{ width: "50%", alignItems: "flex-start" }}
            >
              <SubHeaderWithInput
                iserror={
                  !!getIn(
                    errors,
                    `designOverview.${basePath}.cards[${index}].title`
                  ) &&
                  !!getIn(
                    touched,
                    `designOverview.${basePath}.cards[${index}].title`
                  )
                }
                inputValue={values.designOverview[basePath].cards[index].title}
                onChangeFunction={handleChange}
                header={`#${index + 1} Card Title`}
                name={`designOverview.${basePath}.cards[${index}].title`}
                placeholder="Card Title"
                width="100%"
                containerWidth="100%"
              />
              <SubHeaderWithInput
                iserror={
                  !!getIn(
                    errors,
                    `designOverview.${basePath}.cards[${index}].description`
                  ) &&
                  !!getIn(
                    touched,
                    `designOverview.${basePath}.cards[${index}].description`
                  )
                }
                inputValue={
                  values.designOverview[basePath].cards[index].description
                }
                onChangeFunction={handleChange}
                header={`Description`}
                name={`designOverview.${basePath}.cards[${index}].description`}
                placeholder="Description"
                containerWidth="100%"
              />
              <div style={{ marginLeft: "auto" }}>
                {
                  values.designOverview[basePath].cards[index].description
                    .length
                }
                / 120
              </div>
            </Styled.FieldWrapper>
            {sectionType == "accessibility" && (
              <AddImage
                isError={
                  !!getIn(
                    errors,
                    `designOverview.${basePath}.cards[${index}].image`
                  ) &&
                  !!getIn(
                    touched,
                    `designOverview.${basePath}.cards[${index}].image`
                  )
                }
                imageValue={
                  values.designOverview[basePath]?.cards[index] as IImage
                }
                nestedImageName={`designOverview.${basePath}.cards[${index}].image`}
              />
            )}
            {sectionType == "font" && (
              <SubHeaderWithInput
                iserror={
                  !!getIn(
                    errors,
                    `designOverview.${basePath}.cards[${index}].imageText`
                  ) &&
                  !!getIn(
                    touched,
                    `designOverview.${basePath}.cards[${index}].imageText`
                  )
                }
                inputValue={
                  values.designOverview[basePath]?.cards[index].imageText ?? ""
                }
                onChangeFunction={handleChange}
                header="Image text"
                name={`designOverview.${basePath}.cards[${index}].imageText`}
                placeholder="Image text"
                maxLength={120}
              />
            )}
            {sectionType == "color" && (
              <div>
                <label htmlFor="color">Pick a Color:</label>
                <Field
                  type="color"
                  id="color"
                  name={`designOverview.${basePath}.cards[${index}].imageText`}
                />
              </div>
            )}
          </Styled.FlexWrapper>
          <Styled.DeleteBtn
            onClick={() => handleDeleteItem(index)}
            style={{ marginTop: "1.33em" }}
          >
            delete
          </Styled.DeleteBtn>
        </Styled.ServiceItemWrapper>
      ))}
      <Styled.AddBtn onClick={handleAddItem} disabled={isAddButtonDisabled}>
        + Add new
      </Styled.AddBtn>
    </AdminBlockDropDown>
  );
};
