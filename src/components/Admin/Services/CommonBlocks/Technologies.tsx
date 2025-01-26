import { useFormikContext } from "formik";
import React from "react";

import { AdminHalfGrid, AdminPaddedBlock } from "../../../../styles/AdminPage";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import * as Styled from "../../../../styles/AiService/AdminPage";

import {
  ArrowContainer,
  BlackButton,
} from "../../../../styles/HomePage/General.styled";

import ButtonArrow from "../../../../utils/ButtonArrow";
import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";
import AddIcon from "../../AddIcon";
import { IServiceAi } from "../../../../types/Admin/AdminServices.types";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";
import { IImage } from "../../../../types/Admin/Admin.types";

const BlockTechnologies = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IServiceAi>();

  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);
  const deleteFunc = async () =>
    (await deleteImageFunction)(
      values.technologiesBlock,
      "technologiesBlock.image"
    );

  const uploadFunc = (image: IImage) =>
    uploadImageFunction(image, "technologiesBlock.image");
  const handleClick = () => handleSubmit();

  return (
    <AdminPaddedBlock className="services">
      <AdminHalfGrid>
        <div>
          <SubHeaderWithInput
            inputValue={values.technologiesBlock?.title}
            onChangeFunction={handleChange}
            header="Title"
            name="technologiesBlock.title"
            placeholder=""
            width="633px"
          />
          <SubHeaderWithInput
            inputValue={values.technologiesBlock?.text}
            onChangeFunction={handleChange}
            header="Text"
            height="113px"
            name="technologiesBlock.text"
            placeholder=""
            width="633px"
          />
        </div>
        <PhotoBlockDashed
          photo={values.technologiesBlock?.image}
          deleteFunction={deleteFunc}
          uploadFunction={uploadFunc}
          style={{ maxWidth: "364px", maxHeight: "364px" }}
          deleteFlag={true}
        />
      </AdminHalfGrid>
      {values.technologiesBlock?.technologies.map((initialItem, index) => (
        <Styled.FlexWrapper key={index}>
          <SubHeaderWithInput
            inputValue={values.technologiesBlock?.technologies[index].title}
            onChangeFunction={handleChange}
            header={`#${index + 1}`}
            name={`technologiesBlock.technologies[${index}].title`}
            placeholder="Name of technology"
            width="585px"
          />
          <AddIcon
            imageValue={values.technologiesBlock?.technologies[index]}
            nestedImageName={`technologiesBlock.technologies[${index}].image`}
            className="author services"
          />
        </Styled.FlexWrapper>
      ))}
      <BlackButton
        size={"1.5em"}
        padding={"1.11em 3em"}
        style={{ marginTop: "1.33em" }}
        onClick={handleClick}
      >
        Save Changes
        <ArrowContainer>
          <ButtonArrow />
        </ArrowContainer>
      </BlackButton>
    </AdminPaddedBlock>
  );
};

export default BlockTechnologies;
