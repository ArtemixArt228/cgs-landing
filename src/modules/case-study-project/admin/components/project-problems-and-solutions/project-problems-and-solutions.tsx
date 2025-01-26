import React from "react";
import { getIn, useFormikContext } from "formik";
import {
  IPortfolioReview,
  IProblemAndSolutionItem,
} from "../../../../../types/Admin/AdminPortfolio.types";
import * as Styled from "../../../../../styles/AdminPage";
import * as StyledPortfolio from "../../../../../styles/AdminPortfolio";
import useDeleteImageFunction from "../../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../../hooks/useUploadImageFunction";
import { problemSolutionItemValues } from "../../../../../consts";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import PhotoBlockDashedHorizontal from "../../../../../components/Admin/Global/PhotoBlockdashedHorizontal";
import SortableList, { SortableItem } from "react-easy-sort";

export const Block3ProblemsAndSolutions = () => {
  const { values, touched, handleChange, errors, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  function handleDeleteProblem(deleteIndex: number): void {
    const filtered = values.problemsAndSolutions.problemAndSolution.filter(
      (_, index) => index !== deleteIndex
    );
    setFieldValue("problemsAndSolutions.problemAndSolution", [...filtered]);
  }

  function handleAddProblem(): void {
    setFieldValue("problemsAndSolutions.problemAndSolution", [
      ...values.problemsAndSolutions.problemAndSolution,
      { ...problemSolutionItemValues },
    ]);
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
      values.problemsAndSolutions.problemAndSolution[i].solutionImage,
      `problemsAndSolutions.problemAndSolution[${i}].solutionImage.image.url`
    );

  const uploadFunc = (i: number) => (image: unknown) =>
    uploadImageFunction(
      image,
      undefined,
      `problemsAndSolutions.problemAndSolution[${i}].solutionImage.image`
    );
  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    const swapped: IProblemAndSolutionItem[] = getIn(
      values,
      `problemsAndSolutions.problemAndSolution`
    );
    swapped && swapped.splice(newIndex, 0, swapped.splice(oldIndex, 1)[0]);

    setFieldValue(`problemsAndSolutions.problemAndSolution`, swapped);
  };
  return (
    <Styled.FieldsWrapper>
      <SubHeaderWithInput
        header="Problems & Solutions description"
        iserror={
          !!errors.problemsAndSolutions?.description &&
          touched.problemsAndSolutions?.description
        }
        placeholder="Add description"
        inputValue={values.problemsAndSolutions.description}
        onChangeFunction={handleChange}
        name="problemsAndSolutions.description"
        maxLength={300}
        minRows={4}
      />
      <Styled.BottomText className="portfolio-admin-description">
        <Styled.TextCounter>
          {values.problemsAndSolutions.description.length}/300
        </Styled.TextCounter>
      </Styled.BottomText>
      <SortableList
        onSortEnd={handleDragEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        {values?.problemsAndSolutions?.problemAndSolution.map((_, idx) => (
          <SortableItem key={idx}>
            <div>
              <StyledPortfolio.ProjectWrapper>
                <StyledPortfolio.ProjectNumberWrapper>
                  <StyledPortfolio.ProjectNumber>
                    #{idx + 1}
                  </StyledPortfolio.ProjectNumber>
                  {idx !== 0 ? (
                    <StyledPortfolio.DeleteButton
                      onClick={() => handleDeleteProblem(idx)}
                    >
                      delete problem
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
                      `problemsAndSolutions.problemAndSolution[${idx}].solutionImage.image.url`
                    ) && <Styled.ImageErrorBox />}
                    <PhotoBlockDashedHorizontal
                      emptyHeader="Click to drop new image here"
                      photo={
                        values.problemsAndSolutions.problemAndSolution[idx]
                          .solutionImage.image?.url
                          ? values.problemsAndSolutions.problemAndSolution[idx]
                              .solutionImage.image
                          : null
                      }
                      deleteFunction={deleteFunc(idx)}
                      uploadFunction={uploadFunc(idx)}
                    />
                  </Styled.AdminPortfolioImageContainer>
                  <StyledPortfolio.FlexColumnInputContainer>
                    <SubHeaderWithInput
                      header="Problem title"
                      iserror={
                        !!getIn(
                          errors,
                          `problemsAndSolutions.problemAndSolution[${idx}].problemTitle`
                        ) &&
                        touched.problemsAndSolutions?.problemAndSolution?.[idx]
                          ?.problemTitle
                      }
                      placeholder="Name"
                      inputValue={
                        values.problemsAndSolutions.problemAndSolution[idx]
                          .problemTitle
                      }
                      onChangeFunction={handleChange}
                      name={`problemsAndSolutions.problemAndSolution[${idx}].problemTitle`}
                    />
                    <SubHeaderWithInput
                      header="Problem subtitle"
                      iserror={
                        !!getIn(
                          errors,
                          `problemsAndSolutions.problemAndSolution[${idx}].problemSubtitle`
                        ) &&
                        touched.problemsAndSolutions?.problemAndSolution?.[idx]
                          ?.problemSubtitle
                      }
                      placeholder="AI Solution // Text"
                      inputValue={
                        values.problemsAndSolutions.problemAndSolution[idx]
                          .problemSubtitle
                      }
                      onChangeFunction={handleChange}
                      name={`problemsAndSolutions.problemAndSolution[${idx}].problemSubtitle`}
                    />
                    <SubHeaderWithInput
                      header="Solution description"
                      minRows={4}
                      placeholder="Add description"
                      inputValue={
                        values.problemsAndSolutions.problemAndSolution[idx]
                          .solutionDescription
                      }
                      maxLength={600}
                      onChangeFunction={handleChange}
                      name={`problemsAndSolutions.problemAndSolution[${idx}].solutionDescription`}
                      iserror={
                        !!getIn(
                          errors,
                          `problemsAndSolutions.problemAndSolution[${idx}].solutionDescription`
                        ) &&
                        touched.problemsAndSolutions?.problemAndSolution?.[idx]
                          ?.solutionDescription
                      }
                    />
                    <Styled.BottomText className="portfolio-admin-description">
                      <Styled.TextCounter>
                        {
                          values.problemsAndSolutions.problemAndSolution[idx]
                            .solutionDescription.length
                        }
                        /600
                      </Styled.TextCounter>
                    </Styled.BottomText>
                  </StyledPortfolio.FlexColumnInputContainer>
                </StyledPortfolio.ProblemSolutionContainer>
              </StyledPortfolio.ProjectWrapper>
            </div>
          </SortableItem>
        ))}
      </SortableList>
      <StyledPortfolio.AddBtn
        type="button"
        onClick={() => handleAddProblem()}
        disabled={values.problemsAndSolutions?.problemAndSolution.length >= 6}
      >
        ADD PROBLEM & SOLUTION
        <span className="plus">+</span>
      </StyledPortfolio.AddBtn>
    </Styled.FieldsWrapper>
  );
};
