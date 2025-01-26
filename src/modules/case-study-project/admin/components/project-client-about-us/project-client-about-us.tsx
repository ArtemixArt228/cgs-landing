import React, { useMemo, useState } from "react";
import * as Styled from "../../../../../styles/AdminPage";
import { Field, getIn, useFormikContext } from "formik";
import blackStar from "/public/blackStar.svg";
import whiteStar from "/public/whiteStar.svg";
import Image from "next/future/image";
import useUploadImageFunction from "../../../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../../../hooks/useDeleteImageFunction";
import { Gender } from "../../../../../consts";
import PhotoBlockDashedHorizontal from "../../../../../components/Admin/Global/PhotoBlockdashedHorizontal";
import { useFieldValidation } from "../../../../../hooks/useFieldValidation";
import { IImage } from "../../../../../types/Admin/Admin.types";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import { AdminPortfolioValidation } from "../../../../../validations/AdminPortfolioValidator";

export const WhatClientSayAboutUs = () => {
  const { values, errors, touched, handleChange, setFieldValue } =
    useFormikContext<IPortfolioReview>();

  const handleBlur = useFieldValidation(
    AdminPortfolioValidation(
      !!values.aiSolutionsToAchieveGoal.includeBlock,
      !!values.designOverview?.includeBlock
    )
  );

  const deleteFunction = useDeleteImageFunction(
    values.clientAboutUs.clientImage,
    "",
    false,
    "clientAboutUs.clientImage.image"
  );
  const uploadFunction = useUploadImageFunction(
    values.clientAboutUs.clientImage,
    "",
    false,
    "clientAboutUs.clientImage.image"
  );

  const [currStars, setCurrStars] = useState(values.clientAboutUs.stars);

  const starsArray = useMemo(() => new Array(5).fill(1), []);

  const deleteFunc = async () => (await deleteFunction)();
  const uploadFunc = (image: IImage) => uploadFunction(image);

  return (
    <Styled.FieldsWrapper>
      <Styled.ConceptWrapper>
        <div>
          <Styled.AdminPortfolioImageContainer>
            <Styled.AdminPortfolioImageText>
              <h2>Preview image</h2>
            </Styled.AdminPortfolioImageText>
            {!!errors?.clientAboutUs?.clientImage?.image && (
              <Styled.ImageErrorBox />
            )}
            <PhotoBlockDashedHorizontal
              emptyHeader="Click to drop new image here"
              photo={
                values.clientAboutUs.clientImage.image?.url
                  ? values.clientAboutUs.clientImage.image
                  : null
              }
              deleteFunction={deleteFunc}
              uploadFunction={uploadFunc}
            />
          </Styled.AdminPortfolioImageContainer>

          <Styled.StarsWrapper>
            {starsArray.map((_, idx) => (
              <Image
                key={idx}
                onMouseEnter={() => setCurrStars(idx + 1)}
                onMouseOut={() => setCurrStars(values.clientAboutUs.stars)}
                onClick={() => setFieldValue("clientAboutUs.stars", idx + 1)}
                src={idx + 1 > currStars ? whiteStar : blackStar}
                alt={"star"}
                width={30}
                height={30}
              />
            ))}
          </Styled.StarsWrapper>

          <Styled.FlexContainer style={{ padding: "15px" }}>
            <Styled.FlexContainer style={{ gap: "8px" }}>
              <Field
                value={Gender.Man}
                iserror={
                  !!errors.clientAboutUs?.gender &&
                  touched.clientAboutUs?.gender
                }
                name={"clientAboutUs.gender"}
                type="radio"
                style={{ width: "19px", height: "19px" }}
              />
              <label
                style={{ textTransform: "capitalize" }}
                htmlFor="clientAboutUs.gender"
              >
                {Gender.Man}
              </label>
            </Styled.FlexContainer>
            <Styled.FlexContainer style={{ gap: "8px" }}>
              <Field
                value={Gender.Woman}
                iserror={
                  !!errors.clientAboutUs?.gender &&
                  touched.clientAboutUs?.gender
                }
                name={"clientAboutUs.gender"}
                type="radio"
                style={{ width: "19px", height: "19px" }}
              />
              <label style={{ textTransform: "capitalize" }}>
                {Gender.Woman}
              </label>
            </Styled.FlexContainer>
          </Styled.FlexContainer>
        </div>
        <Styled.ClientFieldsWrapper>
          <h2 style={{ margin: "0 0 10px 0" }}>Information</h2>
          <Styled.AdminField
            placeholder={"Name"}
            value={values.clientAboutUs.name}
            iserror={
              !!errors.clientAboutUs?.name && touched.clientAboutUs?.name
            }
            onChange={handleChange}
            name={"clientAboutUs.name"}
            style={{ width: "100%" }}
            onBlur={handleBlur}
          />
          <Styled.AdminField
            placeholder={"Company"}
            value={values.clientAboutUs.company}
            onChange={handleChange}
            name={"clientAboutUs.company"}
            iserror={
              !!errors.clientAboutUs?.company && touched.clientAboutUs?.company
            }
            style={{ width: "100%" }}
            onBlur={handleBlur}
          />
          <Styled.AdminField
            placeholder={"Video URL"}
            value={values.clientAboutUs.video.image?.url}
            onChange={handleChange}
            iserror={
              !!getIn(errors, "clientAboutUs.video.image.url") &&
              touched.clientAboutUs?.video?.image
            }
            name={"clientAboutUs.video.image.url"}
            style={{ width: "100%" }}
            onBlur={handleBlur}
          />
          <Styled.AdminField
            placeholder={"Portfolio link"}
            value={values.clientAboutUs.portfolioLink}
            onChange={handleChange}
            name={"clientAboutUs.portfolioLink"}
            iserror={
              !!errors.clientAboutUs?.portfolioLink &&
              touched.clientAboutUs?.portfolioLink
            }
            style={{ width: "100%" }}
            onBlur={handleBlur}
          />
          <Styled.AdminField
            placeholder={"LinkedIn link"}
            value={values.clientAboutUs.linkedin}
            onChange={handleChange}
            name={"clientAboutUs.linkedin"}
            iserror={
              !!errors.clientAboutUs?.linkedin &&
              touched.clientAboutUs?.linkedin
            }
            style={{ width: "100%" }}
            onBlur={handleBlur}
          />
          <Styled.AdminInput
            placeholder={"Text"}
            value={values.clientAboutUs.text}
            name={"clientAboutUs.text"}
            style={{ height: 96, width: "100%" }}
            onChange={handleChange}
            maxLength={410}
            iserror={
              !!errors.clientAboutUs?.text && touched.clientAboutUs?.text
            }
            onBlur={handleBlur}
          />
          <Styled.BottomText className="portfolio-admin-description">
            <Styled.TextCounter>
              {values.clientAboutUs.text.length}/410
            </Styled.TextCounter>
          </Styled.BottomText>
        </Styled.ClientFieldsWrapper>
      </Styled.ConceptWrapper>
    </Styled.FieldsWrapper>
  );
};
