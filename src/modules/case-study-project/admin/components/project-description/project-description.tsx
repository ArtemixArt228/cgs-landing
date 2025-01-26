import React, { ChangeEvent, useState } from "react";
import { useFormikContext } from "formik";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";

import * as Styled from "../../../../../styles/AdminPage";
import * as StyledPortfolio from "../../../../../styles/AdminPortfolio";
import SortableList, { SortableItem } from "react-easy-sort";
import { AdminFieldInputArea } from "../../../../../components/Admin/Global/AdminTextArea";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import {
  DropdownCountry,
  DropdownIndustry,
} from "../../../../case-studies/admin/components";
interface IBlockProps {
  industries: string[];
}
export const Block1ProjectDescription = ({ industries }: IBlockProps) => {
  const { values, touched, handleChange, errors, setFieldValue, setValues } =
    useFormikContext<IPortfolioReview>();

  const handleDragEnd = (oldIndex: number, newIndex: number) => {
    const arr = values.general.tags.map((item, index) => {
      return {
        item,
        index,
      };
    });

    const srcItem = arr[oldIndex].index;
    const desItem = arr[newIndex].index;
    const srcInd = arr.findIndex((el) => el.index === srcItem);
    const desInd = arr.findIndex((el) => el.index === desItem);

    const swapped = arr.map(({ item }) => item);

    swapped && swapped.splice(desInd, 0, swapped.splice(srcInd, 1)[0]);

    setFieldValue(`general.tags`, swapped);
  };
  const handleDeleteTag = (idx: number) => {
    setValues((prevState) => {
      const tags = prevState.general.tags.filter((_, index) => index !== idx);
      return {
        ...prevState,
        general: {
          ...prevState.general,
          tags,
        },
      };
    });
  };
  const handleAddTag = (tag: string) => {
    setValues((prevState) => {
      const tags = prevState.general.tags.concat(tag);
      return {
        ...prevState,
        general: {
          ...prevState.general,
          tags,
        },
      };
    });
  };

  const [isActive, setIsActive] = useState(false);

  return (
    <Styled.FieldsWrapper>
      <SubHeaderWithInput
        header="Title"
        iserror={!!errors.general?.title && touched.general?.title}
        placeholder="Name"
        inputValue={values.general.title}
        onChangeFunction={handleChange}
        name="general.title"
      />
      <SubHeaderWithInput
        header="About project"
        minRows={4}
        placeholder="About project text"
        inputValue={values.general.aboutProject}
        maxLength={1200}
        onChangeFunction={handleChange}
        name="general.aboutProject"
        iserror={
          !!errors.general?.aboutProject && touched.general?.aboutProject
        }
      />
      <Styled.BottomText className="portfolio-admin-description">
        <Styled.TextCounter>
          {values.general.aboutProject.length}/1200
        </Styled.TextCounter>
      </Styled.BottomText>
      <StyledPortfolio.FlexInputContainer>
        <StyledPortfolio.FlexColumnInputContainer gap={"0"}>
          <Styled.AdminSubTitle textAlign="left">Country</Styled.AdminSubTitle>
          <DropdownCountry
            iserror={!!errors.general?.country && touched.general?.country}
          />
        </StyledPortfolio.FlexColumnInputContainer>
        <StyledPortfolio.FlexColumnInputContainer gap={"0"}>
          <Styled.AdminSubTitle textAlign="left">Industry</Styled.AdminSubTitle>
          <DropdownIndustry
            iserror={!!errors.general?.industry && touched.general?.industry}
            industries={industries}
          />
        </StyledPortfolio.FlexColumnInputContainer>
      </StyledPortfolio.FlexInputContainer>
      <Styled.AdminNDAWrapper>
        <StyledPortfolio.FlexInputContainer3Col>
          <SubHeaderWithInput
            header="WEB link"
            isDisabled={values.general.NDA}
            iserror={!!errors.general?.web_link && touched.general?.web_link}
            placeholder="Type or paste URL"
            inputValue={values.general.web_link}
            onChangeFunction={handleChange}
            name="general.web_link"
          />
          <SubHeaderWithInput
            header="IOS link"
            isDisabled={values.general.NDA}
            iserror={!!errors.general?.ios_link && touched.general?.ios_link}
            placeholder="Type or paste URL"
            inputValue={values.general.ios_link}
            onChangeFunction={handleChange}
            name="general.ios_link"
          />
          <SubHeaderWithInput
            header="ANDROID link"
            isDisabled={values.general.NDA}
            iserror={
              !!errors.general?.android_link && touched.general?.android_link
            }
            placeholder="Type or paste URL"
            inputValue={values.general.android_link}
            onChangeFunction={handleChange}
            name="general.android_link"
          />
        </StyledPortfolio.FlexInputContainer3Col>
        <Styled.AdminNDALinks>
          <p>Links</p>
          <Styled.FlexContainer>
            <Styled.AdminCheckboxField
              iserror={!!errors.general?.NDA && touched.general?.NDA}
              checked={values.general.NDA}
              type="checkbox"
              id="NDA"
              name="general.NDA"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { checked } = e.target;
                setFieldValue("general.NDA", checked);
              }}
            />
            <label htmlFor="NDA">NDA</label>
          </Styled.FlexContainer>
        </Styled.AdminNDALinks>
      </Styled.AdminNDAWrapper>
      <StyledPortfolio.CardWrapper className="portfolioTags">
        <h2>Tags</h2>
        <SortableList
          onSortEnd={(oldIndex, newIndex) => handleDragEnd(oldIndex, newIndex)}
          allowDrag={isActive}
        >
          <Styled.StackWrapper>
            {values?.general.tags.map((tag, index) => (
              <SortableItem key={index}>
                <StyledPortfolio.FlexColumnInputContainer>
                  <AdminFieldInputArea
                    isActive={isActive}
                    value={tag}
                    onChange={handleChange}
                    name={`general.tags[${index}]`}
                    placeholder="Text"
                    className="portfolioTags"
                    iserror={
                      !!errors.general?.tags?.[index] && touched.general?.tags
                    }
                  />
                  {values?.general.tags.length > 1 && (
                    <StyledPortfolio.DeleteStack
                      type="button"
                      onClick={() => handleDeleteTag(index)}
                    >
                      delete
                    </StyledPortfolio.DeleteStack>
                  )}
                </StyledPortfolio.FlexColumnInputContainer>
              </SortableItem>
            ))}
            <Styled.AdminCategoryAddBlockWrapper
              onClick={() => handleAddTag(" ")}
            >
              <Styled.AdminCategoryAddBlockBtn type="button">
                {"[ +add next ]"}
              </Styled.AdminCategoryAddBlockBtn>
            </Styled.AdminCategoryAddBlockWrapper>
          </Styled.StackWrapper>
        </SortableList>
        <Styled.SortButton
          onClick={() => setIsActive((prev) => !prev)}
          isActive={isActive}
        >
          {isActive ? "[ Disable sort ]" : "[ Sort ]"}
        </Styled.SortButton>
      </StyledPortfolio.CardWrapper>
    </Styled.FieldsWrapper>
  );
};
