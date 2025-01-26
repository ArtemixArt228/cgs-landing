import React from "react";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "../../../../consts/queryKeys";
import useUploadModal from "../../../../hooks/useUploadModal";
import { adminGlobalService } from "../../../../services/adminHomePage";
import * as Styled from "../../../../styles/AdminPage";
import AdminUploadModal from "../../UploadModal";
import { useFormikContext } from "formik";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

export interface ILogosProps {
  state: { images: any[] };
}

const AddLogoFrame = ({ state }: ILogosProps) => {
  const { modal, toggleModal } = useUploadModal();
  const { mutateAsync } = useMutation([queryKeys.uploadImage], (image) =>
    adminGlobalService.uploadImage(image)
  );

  const { setFieldValue } = useFormikContext<IHomePageResponse>();

  const addNewLogo = async (image: any) => {
    state.images.push(await mutateAsync(image));
    setFieldValue("LogosBlock.images", state.images);
  };

  return (
    <Styled.AdminAddLogoBlock>
      {modal ? <AdminUploadModal back={toggleModal} func={addNewLogo} /> : null}
      <Styled.AdminPointer>
        <Styled.AdminSubTitle onClick={toggleModal}>
          + Add Logo
        </Styled.AdminSubTitle>
      </Styled.AdminPointer>
      <Styled.AdminComment>Supports: JPG, PNG</Styled.AdminComment>
    </Styled.AdminAddLogoBlock>
  );
};

export default AddLogoFrame;
