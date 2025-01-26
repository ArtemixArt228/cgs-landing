import React, { useMemo } from "react";
import { getIn, useFormikContext } from "formik";
import * as yup from "yup";

import * as Styled from "../../../../../styles/AdminPage";
import SubHeaderWithInput from "../../../../../components/Admin/Global/SubHeaderWithInput";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";

export const DiscoverTheAppInAction = () => {
  const { values, touched, handleChange, errors } =
    useFormikContext<IPortfolioReview>();

  const isNotValid = useMemo(() => {
    const err = errors as yup.ValidationError;
    if (err.inner) {
      return err.inner.some((e) => e.type === "discover-validation");
    }

    return false;
  }, [errors]);

  return (
    <Styled.FieldsWrapper>
      <SubHeaderWithInput
        header="Discover the app in action description"
        iserror={
          (!!errors.discoverInAction?.description || isNotValid) &&
          touched.discoverInAction?.description
        }
        placeholder="Add description"
        inputValue={values.discoverInAction.description}
        onChangeFunction={handleChange}
        name="discoverInAction.description"
        maxLength={300}
      />
      <Styled.BottomText className="portfolio-admin-description">
        <Styled.TextCounter>
          {values.discoverInAction.description.length}/300
        </Styled.TextCounter>
      </Styled.BottomText>
      <SubHeaderWithInput
        header="Video URL(YouTube)"
        iserror={
          (!!getIn(errors, `discoverInAction.actionImage.image.url`) ||
            isNotValid) &&
          touched.discoverInAction?.actionImage?.image?.url
        }
        placeholder="Video URL"
        inputValue={values.discoverInAction.actionImage.image.url}
        onChangeFunction={handleChange}
        name="discoverInAction.actionImage.image.url"
        maxLength={300}
      />
    </Styled.FieldsWrapper>
  );
};
