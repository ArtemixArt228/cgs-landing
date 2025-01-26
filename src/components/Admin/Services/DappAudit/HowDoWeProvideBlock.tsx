import React from "react";
import { useFormikContext } from "formik";

import AdminBlockDropDown from "../../Global/AdminBlockDropDown";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import HowDoWeProvideBlockItem from "./HowDoWeProvideBlockItem";

import {
  AdminHeaderPhotoWrapper,
  AdminSubTitle,
} from "../../../../styles/AdminPage";
import {
  HowDoWeProvideInputsWrapper,
  HowDoWeProvideSubtitleWrapper,
  HowDoWeProvideWrapper,
} from "../../../../styles/DappAuditService/AdminDappAudit.styled";
import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IServiceDappAudit } from "../../../../types/Admin/Response.types";

import ButtonArrow from "../../../../utils/ButtonArrow";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunction";

const HowDoWeProvideBlock = () => {
  const { values, handleSubmit, handleChange } =
    useFormikContext<IServiceDappAudit>();
  const handleClick = () => handleSubmit();
  const deleteImageFunction = useDeleteImageFunction(
    values.howDoWeProvideBlock
  );
  const uploadImageFunction = useUploadImageFunction(
    values.howDoWeProvideBlock
  );
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <AdminBlockDropDown title="How do we provide it?">
      <SubHeaderWithInput
        inputValue={values.howDoWeProvideBlock.subtitle}
        onChangeFunction={handleChange}
        name="howDoWeProvideBlock.subtitle"
        placeholder="Title"
        inputStyle={{ maxWidth: "350px" }}
      />
      <HowDoWeProvideWrapper>
        <HowDoWeProvideSubtitleWrapper>
          <HowDoWeProvideInputsWrapper>
            <HowDoWeProvideBlockItem
              item={values.howDoWeProvideBlock.textBlock[0]}
              idx={0}
            />
          </HowDoWeProvideInputsWrapper>
          <HowDoWeProvideInputsWrapper>
            {values.howDoWeProvideBlock.textBlock.slice(1).map((item, idx) => (
              <HowDoWeProvideBlockItem item={item} idx={idx + 1} key={idx} />
            ))}
          </HowDoWeProvideInputsWrapper>
        </HowDoWeProvideSubtitleWrapper>

        <AdminHeaderPhotoWrapper>
          <AdminSubTitle>Banner</AdminSubTitle>
          <PhotoBlockDashed
            style={{ marginRight: 0, width: "235px", maxHeight: "249px" }}
            photo={values.howDoWeProvideBlock.image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </AdminHeaderPhotoWrapper>
      </HowDoWeProvideWrapper>
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "2.33em", marginBottom: "2.78em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminBlockDropDown>
  );
};

export default HowDoWeProvideBlock;
