import React from "react";
import { getIn, useFormikContext } from "formik";

import * as Styled from "../../../../../styles/AdminPage";

import useDeleteImageFunction from "../../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../../hooks/useUploadImageFunction";

import { IImage } from "../../../../../types/Admin/Admin.types";
import { IPortfolioReview } from "../../../../../types/Admin/AdminPortfolio.types";
import PhotoBlockDashedHorizontal from "../../../../../components/Admin/Global/PhotoBlockdashedHorizontal";

export const GlobalImageInputs = () => {
  const { values, touched, errors } = useFormikContext<IPortfolioReview>();

  const deleteFunctionBanner = useDeleteImageFunction(
    values.imageBanner,
    "",
    false,
    "imageBanner.image"
  );
  const uploadFunctionBanner = useUploadImageFunction(
    values.imageBanner,
    "",
    false,
    "imageBanner.image"
  );
  const deleteFunctionProjectBanner = useDeleteImageFunction(
    values.imageProjectBanner,
    "",
    false,
    "imageProjectBanner.image"
  );
  const uploadFunctionProjectBanner = useUploadImageFunction(
    values.imageProjectBanner,
    "",
    false,
    "imageProjectBanner.image"
  );

  const deleteFuncBanner = async () => (await deleteFunctionBanner)();
  const uploadFuncBanner = (image: IImage) => uploadFunctionBanner(image);

  const deleteFuncProjectBanner = async () =>
    (await deleteFunctionProjectBanner)();
  const uploadFuncProjectBanner = (image: IImage) =>
    uploadFunctionProjectBanner(image);

  return (
    <Styled.AdminPortfolioImage>
      <Styled.AdminPortfolioImageContainer>
        <Styled.AdminPortfolioImageText>
          <h2>
            Banner <span>(General page)</span>
          </h2>
        </Styled.AdminPortfolioImageText>
        {getIn(errors, "imageBanner.image.url") &&
          getIn(touched, "imageBanner.image.url") && <Styled.ImageErrorBox />}
        <PhotoBlockDashedHorizontal
          emptyHeader="Click to drop new image here"
          photo={
            values.imageBanner.image?.url ? values.imageBanner.image : null
          }
          deleteFunction={deleteFuncBanner}
          uploadFunction={uploadFuncBanner}
        />
      </Styled.AdminPortfolioImageContainer>
      <Styled.AdminPortfolioImageContainer>
        <Styled.AdminPortfolioImageText>
          <h2>
            Project banner <span>(Case page)</span>
          </h2>
        </Styled.AdminPortfolioImageText>
        {getIn(errors, "imageProjectBanner.image.url") &&
          getIn(touched, "imageProjectBanner.image.url") && (
            <Styled.ImageErrorBox />
          )}
        <PhotoBlockDashedHorizontal
          emptyHeader="Click to drop new image here"
          photo={
            values.imageProjectBanner.image?.url
              ? values.imageProjectBanner.image
              : null
          }
          deleteFunction={deleteFuncProjectBanner}
          uploadFunction={uploadFuncProjectBanner}
        />
      </Styled.AdminPortfolioImageContainer>
    </Styled.AdminPortfolioImage>
  );
};
