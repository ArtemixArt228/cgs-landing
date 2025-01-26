import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getIn, useFormikContext } from "formik";

import PhotoBlockDashed from "../../../../../components/Admin/Global/PhotoBlockDashed";
import SaveBtn from "../../../../../components/Admin/Global/SaveBtn";
import {
  CategoryDropdown,
  DevPersonalInfo,
  DevGeneralInfo,
  DevSkillsInfo,
  DevProjectsInfo,
} from "./components";

import useDeleteImageFunction from "../../../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../../../hooks/useUploadImageFunction";

import * as Styled from "./cv-composer.styled";

import { CvData } from "../../../types";
import { IImage } from "../../../../../types/Admin/Admin.types";
import sortCVProjects from "../../utils/sort-cv-projects.util";

interface ICvAddOrEditProps {
  isSuccess: boolean;
  setIsSuccess: Dispatch<SetStateAction<boolean>>;
}

export const CvComposer = ({ isSuccess, setIsSuccess }: ICvAddOrEditProps) => {
  const { values, errors, handleSubmit, setValues, resetForm, initialValues } =
    useFormikContext<CvData>();

  useEffect(() => {
    if (isSuccess) {
      resetForm();
      setValues({ ...initialValues, image: { url: "" } });
      setIsSuccess(false);
      window.scrollTo(0, 200);
    }
  }, [isSuccess]);

  const handleClick = async () => {
    values?.projects?.project?.sort(sortCVProjects);
    handleSubmit();
  };

  const deleteImage = useDeleteImageFunction(values, "", false, "image");
  const uploadImage = useUploadImageFunction(values, "", false, "image");

  const deleteImageFunc = async () => (await deleteImage)();
  const uploadImageFunc = (image: IImage) => uploadImage(image);

  const [keyToReset, setKeyToReset] = useState(0);

  useEffect(() => {
    if (isSuccess) {
      setKeyToReset((prev) => prev + 1);
    }
  }, [isSuccess]);

  return (
    <Styled.AdminCvGrid>
      <div>
        <Styled.AdminImageSubTitle>Photo</Styled.AdminImageSubTitle>
        {!!getIn(errors, "image") && <Styled.ImageErrorBox />}
        <PhotoBlockDashed
          key={keyToReset}
          photo={values.image?.url ? values.image : null}
          deleteFlag={true}
          uploadFunction={uploadImageFunc}
          deleteFunction={deleteImageFunc}
          header="Click to drop new image here"
        />
      </div>
      <div style={{ marginTop: 35, marginBottom: 35 }}>
        <CategoryDropdown />

        <DevPersonalInfo isSuccess={isSuccess} />
        <DevGeneralInfo isSuccess={isSuccess} />
        <DevSkillsInfo isSuccess={isSuccess} />
        <DevProjectsInfo isSuccess={isSuccess} />

        <SaveBtn handleClick={handleClick} />
      </div>
    </Styled.AdminCvGrid>
  );
};
