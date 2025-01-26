import React from "react";
import { useFormikContext } from "formik";

import { DeleteIcon } from "../../../../shared/icons/components";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";

import * as Styled from "./cv-category.styled";

import { ICvPageData } from "../../../types";

const CategoryItem = ({
  category,
  index,
  onDelete,
  onChange,
}: {
  category: string;
  index: number;
  onDelete: (index: number) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <Styled.CategoryWrapper>
    <Styled.AdminNewCategoryInputWrapper>
      <Styled.AdminCategoryNameInput
        value={category}
        onChange={onChange}
        name={`categories.${index}`}
      />
      {index !== 0 && (
        <Styled.AdminCategoryDeleteBlockWrapper onClick={() => onDelete(index)}>
          <DeleteIcon />
        </Styled.AdminCategoryDeleteBlockWrapper>
      )}
    </Styled.AdminNewCategoryInputWrapper>
  </Styled.CategoryWrapper>
);

const AddCategoryButton = ({ onClick }: { onClick: () => void }) => (
  <Styled.AdminCategoryAddBlockWrapper onClick={onClick}>
    <Styled.AdminCategoryAddBlockBtn>
      {"[ +add next ]"}
    </Styled.AdminCategoryAddBlockBtn>
  </Styled.AdminCategoryAddBlockWrapper>
);

export const CvCategory = () => {
  const { values, handleChange, handleSubmit, setValues } =
    useFormikContext<ICvPageData>();

  const handleDeleteItem = (index: number) => {
    setValues((prevState) => ({
      ...prevState,
      categories: prevState.categories.filter((_, i) => i !== index),
    }));
  };

  const handleAddCategory = () => {
    setValues((prevState) => ({
      ...prevState,
      categories: [...prevState.categories, ""],
    }));
  };

  return (
    <Styled.ContentWrapper>
      {values.categories?.map((category, index) => (
        <CategoryItem
          key={index}
          category={category}
          index={index}
          onDelete={handleDeleteItem}
          onChange={handleChange}
        />
      ))}

      <AddCategoryButton onClick={handleAddCategory} />

      <SaveBtn handleClick={handleSubmit} />
    </Styled.ContentWrapper>
  );
};
