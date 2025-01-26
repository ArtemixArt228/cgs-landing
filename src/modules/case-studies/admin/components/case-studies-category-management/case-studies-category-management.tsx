import React, { useState } from "react";
import { useFormikContext } from "formik";

import * as Styled from "../../../../../styles/AdminPage";
import { IPortfolioPageData } from "../../../../../types/Admin/AdminPortfolio.types";
import { DeleteIcon } from "../../../../shared/icons/components";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";

export const AdminCategory = () => {
  const { values, setValues, handleChange, handleSubmit } =
    useFormikContext<IPortfolioPageData>();
  const [isError, setIsError] = useState(false);
  const emptyCategory = {
    name: "",
    description: "",
  };
  const [newCategories, setNewCategories] = useState([emptyCategory]);

  const handleAddItem = () => {
    setNewCategories([emptyCategory, ...newCategories]);
    setIsError(false);
  };

  const handleDeleteItem = (index: number) => {
    setValues((prevState) => ({
      ...prevState,
      categories: prevState.categories.filter((_, i) => i !== index),
    }));
  };

  const handleDeleteNewItem = (index: number) => {
    setNewCategories((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleFieldChange = (index: number, field: string, value: string) => {
    setNewCategories((prev) => {
      const newCategoriesCopy = [...prev];
      newCategoriesCopy[index] = {
        ...newCategoriesCopy[index],
        [field]: value,
      };
      return newCategoriesCopy;
    });
    setIsError(false);
  };

  const submitFunction = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const allCategories = [...newCategories, ...values.categories];

    const hasEmptyCategory = allCategories.some(
      (category, index) => !category.name && index !== 0
    );

    if (hasEmptyCategory) {
      setIsError(true);
      return;
    }

    if (!allCategories[0].name) {
      setValues((prev) => ({
        ...prev,
        categories: allCategories.slice(1),
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        categories: allCategories,
      }));
    }

    setNewCategories([emptyCategory]);
    setIsError(false);

    handleSubmit();
  };

  return (
    <Styled.AdminCategoryBlockWrapper>
      <Styled.AdminCategoryBlock>
        {newCategories.length > 0 &&
          newCategories.map((elem, index) => (
            <Styled.CategoryWrapper key={index}>
              <Styled.AdminNewCategoryInputWrapper>
                <Styled.AdminCategoryNameInput
                  placeholder="Add new category"
                  value={elem.name}
                  name={`categories.${index}.name`}
                  className={isError && index ? "error" : ""}
                  onChange={(e) =>
                    handleFieldChange(index, "name", e.target.value)
                  }
                />
                {index ? (
                  <Styled.AdminCategoryDeleteBlockWrapper
                    onClick={() => handleDeleteNewItem(index)}
                  >
                    <DeleteIcon />
                  </Styled.AdminCategoryDeleteBlockWrapper>
                ) : (
                  <Styled.AdminCategoryAddBlockWrapper onClick={handleAddItem}>
                    <Styled.AdminCategoryAddBlockBtn>
                      {"[ +add next ]"}
                    </Styled.AdminCategoryAddBlockBtn>
                  </Styled.AdminCategoryAddBlockWrapper>
                )}
              </Styled.AdminNewCategoryInputWrapper>
              <Styled.AdminCategoryDescriptionInput
                placeholder="Add description"
                value={elem.description}
                onChange={(e) =>
                  handleFieldChange(index, "description", e.target.value)
                }
                name={`categories.${index}.description`}
              />
            </Styled.CategoryWrapper>
          ))}
        {values.categories.map((item, index) => (
          <Styled.CategoryWrapper key={`category${index}`}>
            <Styled.AdminNewCategoryInputWrapper>
              <Styled.AdminCategoryNameInput
                placeholder="Add new category"
                value={item.name}
                className={isError ? "error" : ""}
                onChange={handleChange}
                name={`categories.${index}.name`}
              />

              <Styled.AdminCategoryDeleteBlockWrapper
                onClick={() => handleDeleteItem(index)}
              >
                <DeleteIcon />
              </Styled.AdminCategoryDeleteBlockWrapper>
            </Styled.AdminNewCategoryInputWrapper>
            <Styled.AdminCategoryDescriptionInput
              placeholder="Add description"
              value={item.description}
              onChange={handleChange}
              name={`categories.${index}.description`}
            />
          </Styled.CategoryWrapper>
        ))}
      </Styled.AdminCategoryBlock>
      <SaveBtn title="Save Changes" handleClick={submitFunction} />
    </Styled.AdminCategoryBlockWrapper>
  );
};
