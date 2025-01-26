import React, { memo } from "react";
import { FieldArray, useFormikContext } from "formik";

import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminFooterLinks from "./AdminFooterLinks";
import AdminSocialMediaIcon from "./AdminSocialMediaIcon";

import * as Styled from "../../../styles/AdminPage";
import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";

import useDeleteImageFunction from "../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../hooks/useUploadImageFunctionRefactored";

import { IImage } from "../../../types/Admin/Admin.types";
import { IHomePageResponse } from "../../../types/Admin/AdminHomePage.types";

const AdminFooterBlock = () => {
  const { values, handleChange, handleSubmit } =
    useFormikContext<IHomePageResponse>();

  const handleClick = () => handleSubmit();

  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);

  const deleteFunc =
    (imageValue: IImage, nestedImageName: string) => async () =>
      (await deleteImageFunction)(imageValue, nestedImageName);

  const uploadFunc = (nestedName: string) => (image: unknown) =>
    uploadImageFunction(image, nestedName);

  return (
    <div>
      <div>
        <Styled.AdminHalfGrid>
          <SubHeaderWithInput
            header="Email address"
            name="FooterBlock.email"
            inputValue={values.FooterBlock.email}
            onChangeFunction={handleChange}
          />
          <SubHeaderWithInput
            header="Email address 2"
            name="FooterBlock.hrEmail"
            inputValue={values.FooterBlock.hrEmail}
            onChangeFunction={handleChange}
          />
        </Styled.AdminHalfGrid>
        <FieldArray name="FooterBlock.links">
          {() => (
            <AdminFooterLinks
              state={values.FooterBlock.links}
              onChangeFunction={handleChange}
            />
          )}
        </FieldArray>
      </div>
      <Styled.AdminCardsGrid className="footer" style={{ marginTop: "2em" }}>
        {values.FooterBlock.images.map((i, ind) => (
          <AdminSocialMediaIcon
            image={i}
            key={`MediaIcon${ind}`}
            number={ind + 1}
            uploadFunction={uploadFunc(`FooterBlock.images[${ind}].image`)}
            deleteFunction={deleteFunc(
              values.FooterBlock.images[ind],
              `FooterBlock.images[${ind}].image`
            )}
          />
        ))}
      </Styled.AdminCardsGrid>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ margin: "2em 0" }}
        onClick={handleClick}
      >
        Save changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </div>
  );
};

export default memo(AdminFooterBlock);
