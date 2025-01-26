import React, { ChangeEvent } from "react";
import { getIn, useFormikContext } from "formik";
import * as Styled from "../../../../../styles/AdminPage";
import * as Styles from "../../../../cv/admin/styles/cv-admin-page.styled";
import * as StyledPortfolio from "../../../../../styles/AdminPortfolio";
import {
  IAiSolutionsToAchieveGoalItem,
  IFeature,
  IPortfolioReview,
} from "../../../../../types/Admin/AdminPortfolio.types";
import PhotoBlockDashedHorizontal from "../../../../../components/Admin/Global/PhotoBlockdashedHorizontal";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import DropdownFeatures from "./project-dropdown-features";
import { featureItemValues } from "../../../../../consts";
import useDeleteImageFunction from "../../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../../hooks/useUploadImageFunction";

interface IProps {
  fieldName: string;
  isFeaturesBlock: boolean;
}

export const FeaturesOrAISolutions = ({
  fieldName,
  isFeaturesBlock,
}: IProps) => {
  const { values, touched, handleChange, errors, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  const features: IFeature[] | IAiSolutionsToAchieveGoalItem[] =
    getIn(values, fieldName) || [];
  const isAddButtonDisabled = isFeaturesBlock
    ? features.length >= 6
    : features.length >= 5;

  const clearAiSolutionsConnectedFeatures = () => {
    values.aiSolutionsToAchieveGoal.solutions.forEach((item, index) => {
      setFieldValue(
        `aiSolutionsToAchieveGoal.solutions[${index}].featureTitle`,
        ""
      );
    });
  };
  const handleDeleteProblem = function handleDeleteProblem(
    deleteIndex: number
  ): void {
    const filtered = features.filter((_, index) => index !== deleteIndex);
    setFieldValue(fieldName, [...filtered]);
    if (isFeaturesBlock) {
      clearAiSolutionsConnectedFeatures();
    }
  };

  function handleAddProblem(): void {
    setFieldValue(fieldName, [...features, { ...featureItemValues }]);
  }
  const uploadImageFunction = useUploadImageFunction(
    undefined,
    undefined,
    false
  );
  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const deleteFunc = (i: number) => async () =>
    (await deleteImageFunction)(
      features[i].featureImage,
      `${fieldName}[${i}].featureImage.image.url`
    );

  const uploadFunc = (i: number) => (image: unknown) =>
    uploadImageFunction(
      image,
      undefined,
      `${fieldName}[${i}].featureImage.image`
    );
  const handleChangeFeatureTitle = (
    idx: number,
    e?: string | ChangeEvent<HTMLInputElement>
  ) => {
    if (e && typeof e !== "string") {
      setFieldValue(`${fieldName}[${idx}].title`, e.target.value);
    } else {
      setFieldValue(`${fieldName}[${idx}].title`, e ?? "");
    }
    clearAiSolutionsConnectedFeatures();
  };
  return (
    <Styled.FieldsWrapper>
      {!isFeaturesBlock && (
        <div>
          <Styled.AdminFlexRow gap="16px" style={{ marginBottom: "2em" }}>
            <Styled.AdminCheckboxField
              iserror={
                !!errors.aiSolutionsToAchieveGoal?.includeBlock &&
                touched.aiSolutionsToAchieveGoal?.includeBlock
              }
              checked={values.aiSolutionsToAchieveGoal?.includeBlock}
              type="checkbox"
              id="Include Block"
              name="aiSolutionsToAchieveGoal.includeBlock"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const { checked } = e.target;
                setFieldValue("aiSolutionsToAchieveGoal.includeBlock", checked);
              }}
            />
            <label
              htmlFor="Include Block"
              style={{ margin: "6px", fontSize: "20px" }}
            >
              Include Block
            </label>
          </Styled.AdminFlexRow>
          <SubHeaderWithInput
            header="Block title"
            iserror={
              !!errors.aiSolutionsToAchieveGoal?.title &&
              touched.aiSolutionsToAchieveGoal?.title
            }
            placeholder="Block title"
            inputValue={values.aiSolutionsToAchieveGoal?.title}
            onChangeFunction={handleChange}
            name="aiSolutionsToAchieveGoal.title"
            maxLength={300}
          />
        </div>
      )}
      {features.map((_, idx) => (
        <div key={idx}>
          <StyledPortfolio.ProjectWrapper>
            <StyledPortfolio.ProjectNumberWrapper>
              <StyledPortfolio.ProjectNumber>
                #{idx + 1}
              </StyledPortfolio.ProjectNumber>
              {(isFeaturesBlock && features.length > 0) || !isFeaturesBlock ? (
                <StyledPortfolio.DeleteButton
                  onClick={() => handleDeleteProblem(idx)}
                >
                  delete
                </StyledPortfolio.DeleteButton>
              ) : null}
            </StyledPortfolio.ProjectNumberWrapper>
            <StyledPortfolio.ProblemSolutionContainer>
              <Styled.AdminPortfolioImageContainer>
                <Styled.AdminPortfolioImageText>
                  <h2>Photo</h2>
                </Styled.AdminPortfolioImageText>
                {getIn(
                  errors,
                  `${fieldName}[${idx}].featureImage.image.url`
                ) && <Styled.ImageErrorBox />}
                <PhotoBlockDashedHorizontal
                  emptyHeader="Click to drop new image here"
                  photo={
                    features[idx].featureImage.image?.url
                      ? features[idx].featureImage.image
                      : null
                  }
                  deleteFunction={deleteFunc(idx)}
                  uploadFunction={uploadFunc(idx)}
                />
              </Styled.AdminPortfolioImageContainer>
              <StyledPortfolio.FlexColumnInputContainer>
                <SubHeaderWithInput
                  header="Title"
                  iserror={
                    !!getIn(errors, `${fieldName}[${idx}].title`) &&
                    !!getIn(touched, `${fieldName}[${idx}].title`)
                  }
                  placeholder="Name"
                  inputValue={features[idx].title}
                  onChangeFunction={
                    isFeaturesBlock
                      ? (e) => handleChangeFeatureTitle(idx, e)
                      : handleChange
                  }
                  name={`${fieldName}[${idx}].title`}
                />
                <SubHeaderWithInput
                  header="Description"
                  minRows={4}
                  placeholder="Add description"
                  inputValue={features[idx].description}
                  maxLength={!isFeaturesBlock ? 89 : undefined}
                  onChangeFunction={handleChange}
                  name={`${fieldName}[${idx}].description`}
                  iserror={
                    !!getIn(errors, `${fieldName}[${idx}].description`) &&
                    !!getIn(touched, `${fieldName}[${idx}].description`)
                  }
                />
                <Styled.BottomText className="services">
                  <Styled.TextCounter>
                    {features[idx].description.length}{" "}
                    {!isFeaturesBlock && "/ 89"}
                  </Styled.TextCounter>
                </Styled.BottomText>
                {!isFeaturesBlock && (
                  <StyledPortfolio.FlexColumnInputContainer gap="0">
                    <Styled.AdminSubTitle size="18px" textAlign="left">
                      Feature modal connected <br />
                      <span style={{ color: "#5869DD", fontSize: "16px" }}>
                        &#40;Check Block 7: Features we implemented and add
                        cards there&#41;
                      </span>
                    </Styled.AdminSubTitle>
                    <DropdownFeatures
                      iserror={
                        !!getIn(errors, `${fieldName}[${idx}].featureTitle`) &&
                        !!getIn(touched, `${fieldName}[${idx}].featureTitle`)
                      }
                      itemIndex={idx}
                    />
                  </StyledPortfolio.FlexColumnInputContainer>
                )}
              </StyledPortfolio.FlexColumnInputContainer>
            </StyledPortfolio.ProblemSolutionContainer>
          </StyledPortfolio.ProjectWrapper>
        </div>
      ))}
      <StyledPortfolio.AddBtn
        type="button"
        onClick={handleAddProblem}
        disabled={isAddButtonDisabled}
      >
        ADD
        <span className="plus">+</span>
      </StyledPortfolio.AddBtn>
    </Styled.FieldsWrapper>
  );
};
