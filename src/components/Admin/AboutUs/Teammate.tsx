import React from "react";
import { useFormikContext } from "formik";

import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import * as Styles from "../../../styles/AdminAboutUs.styled";
import * as Styled from "../../../styles/AdminPage";
import { IAbout, ITeammate } from "../../../types/Admin/Response.types";
import { IImage } from "../../../types/Admin/Admin.types";

export interface ITeammateProps {
  member: ITeammate;
  index: number;
}

const Teammate = ({ member, index }: ITeammateProps) => {
  const { values, handleChange } = useFormikContext<IAbout>();

  const deleteImageFunction = useDeleteImageFunction(
    values.team.members[index]
  );
  const uploadImageFunction = useUploadImageFunction(
    values.team.members[index]
  );
  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();

  return (
    <Styles.TeamMember key={index}>
      <div>
        <Styled.AdminSubTitle></Styled.AdminSubTitle>
        <PhotoBlockDashed
          style={{ height: "250px" }}
          photo={member.image}
          deleteFlag={true}
          uploadFunction={uploadFunc}
          deleteFunction={deleteFunc}
        />
      </div>
      <div>
        <SubHeaderWithInput
          placeholder="Name"
          inputValue={member.name}
          onChangeFunction={handleChange}
          name={`team.members[${index}].name`}
        />
        <SubHeaderWithInput
          placeholder="About"
          inputValue={member.about}
          onChangeFunction={handleChange}
          name={`team.members[${index}].about`}
          minRows={3}
        />
        <SubHeaderWithInput
          placeholder="LinkedIn link"
          inputValue={member.linkedin}
          onChangeFunction={handleChange}
          name={`team.members[${index}].linkedin`}
        />
      </div>
      <SubHeaderWithInput
        placeholder="Job position"
        inputValue={member.position}
        onChangeFunction={handleChange}
        name={`team.members[${index}].position`}
      />
    </Styles.TeamMember>
  );
};

export default Teammate;
