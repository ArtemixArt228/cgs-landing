import React, { useState } from "react";
import * as Styled from "../../../../../styles/AdminPage";
import { getIn, useFormikContext } from "formik";
import Image from "next/future/image";
import montain from "/public/mountain.svg";
import AdminImage from "../../../../../components/Admin/Global/AdminImage";
import AdminUploadModal from "../../../../../components/Admin/UploadModal";
import useDeleteImageFunction from "../../../../../hooks/useDeleteImageFunction";
import { useFieldValidation } from "../../../../../hooks/useFieldValidation";
import useUploadImageFunction from "../../../../../hooks/useUploadImageFunction";
import useUploadModal from "../../../../../hooks/useUploadModal";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import { AdminPortfolioValidation } from "../../../../../validations/AdminPortfolioValidator";

export const ConceptToCompletion = () => {
  const { values, touched, handleChange, errors } =
    useFormikContext<IPortfolioReview>();
  const { modal, toggleModal } = useUploadModal();
  const [currnetIndex, setCurrentIndex] = useState(0);

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
      values.conceptToCompletion.item[i].icon,
      `conceptToCompletion.item[${i}].icon.image.url`
    );

  const uploadFunc = (image: unknown) =>
    uploadImageFunction(
      image,
      undefined,
      `conceptToCompletion.item[${currnetIndex}].icon.image`
    );

  const handleBlur = useFieldValidation(
    AdminPortfolioValidation(
      !!values.aiSolutionsToAchieveGoal.includeBlock,
      !!values.designOverview?.includeBlock
    )
  );

  return (
    <Styled.FieldsWrapper>
      <div style={{ width: "100%" }}>
        <h2 style={{ margin: 0 }}>From concept to completion description</h2>
        <Styled.AdminInput
          placeholder="Add description"
          value={values.conceptToCompletion.description}
          onChange={handleChange}
          maxLength={300}
          name="conceptToCompletion.description"
          style={{ height: "96px", overflow: "inherit", width: "100%" }}
          iserror={
            !!errors.conceptToCompletion?.description &&
            touched.conceptToCompletion?.description
          }
          onBlur={handleBlur}
        />
        <Styled.BottomText className="portfolio-admin-description">
          <Styled.TextCounter>
            {values.conceptToCompletion.description.length}/300
          </Styled.TextCounter>
        </Styled.BottomText>
      </div>
      {modal ? <AdminUploadModal func={uploadFunc} back={toggleModal} /> : null}
      {values.conceptToCompletion.item.map((el, i) => {
        return (
          <Styled.ConceptWrapper key={i}>
            <div>
              {el.icon.image?.url ? (
                <Styled.AuthorPhotoGrid className="author">
                  <Styled.AdminPhotoBlock className="author">
                    <Styled.AdminPhotoGrid
                      className="author"
                      style={{ height: "70px" }}
                    >
                      <AdminImage image={el.icon.image} />
                    </Styled.AdminPhotoGrid>
                  </Styled.AdminPhotoBlock>
                  <Styled.AdminDashedPositionGrid className="author">
                    <Styled.AdminPointer>
                      <Styled.AdminSubTitle
                        onClick={toggleModal}
                        size="1.165em"
                      >
                        Image of Service
                      </Styled.AdminSubTitle>
                    </Styled.AdminPointer>
                    <Styled.AdminDeleteText onClick={deleteFunc(i)}>
                      delete image
                    </Styled.AdminDeleteText>
                  </Styled.AdminDashedPositionGrid>
                </Styled.AuthorPhotoGrid>
              ) : (
                <Styled.AdminPointer>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Styled.AdminPhotoBlock className={"author"}>
                      {getIn(
                        errors,
                        `conceptToCompletion.item[${i}].icon.image.url`
                      ) && <Styled.ImageErrorBox width="77px" height="77px" />}

                      <Styled.AdminDashedPositionGrid>
                        <Image
                          width={41}
                          height={33}
                          src={montain}
                          alt="empty mountain image"
                        />
                      </Styled.AdminDashedPositionGrid>
                    </Styled.AdminPhotoBlock>
                    <Styled.AuthorPhotoTextWrapper>
                      <Styled.AdminPointer>
                        <Styled.AdminSubTitle
                          className="author"
                          onClick={() => {
                            setCurrentIndex(i);
                            toggleModal();
                          }}
                        >
                          Add icon
                        </Styled.AdminSubTitle>
                      </Styled.AdminPointer>
                    </Styled.AuthorPhotoTextWrapper>
                  </div>
                </Styled.AdminPointer>
              )}
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <h2>Subtitle {i + 1}</h2>
                <Styled.AdminField
                  value={el.subtitle}
                  name={`conceptToCompletion.item[${i}].subtitle`}
                  onChange={handleChange}
                  iserror={
                    !!getIn(
                      errors,
                      `conceptToCompletion.item[${i}].subtitle`
                    ) && touched.conceptToCompletion?.item?.[i]?.subtitle
                  }
                  onBlur={handleBlur}
                />
              </div>
              <div style={{ marginLeft: 30, width: "100%" }}>
                <Styled.ConceptFiledWrapper>
                  <h2>Text</h2>
                  <Styled.AdminField
                    placeholder={"Add description"}
                    value={el.text}
                    onChange={handleChange}
                    name={`conceptToCompletion.item[${i}].text`}
                    maxLength={300}
                    iserror={
                      !!getIn(errors, `conceptToCompletion.item[${i}].text`) &&
                      touched.conceptToCompletion?.item?.[i]?.text
                    }
                    style={{ width: "100%" }}
                    onBlur={handleBlur}
                  />
                  <Styled.BottomText className="portfolio-admin-description">
                    <Styled.TextCounter>
                      {el.text.length}/300
                    </Styled.TextCounter>
                  </Styled.BottomText>
                </Styled.ConceptFiledWrapper>
              </div>
            </div>
          </Styled.ConceptWrapper>
        );
      })}
    </Styled.FieldsWrapper>
  );
};
