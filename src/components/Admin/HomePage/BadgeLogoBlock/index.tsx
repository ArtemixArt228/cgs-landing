import React from "react";
import { useFormikContext } from "formik";

import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import * as Styled from "../../../../styles/AdminPage";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";

import { IImage } from "../../../../types/Admin/Admin.types";
import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

import removeLink from "../../../../../public/linkIcon.svg";

const BadgeLogoBlock = () => {
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

  const {
    values: { BadgesBlock: data },
    handleChange,
  } = useFormikContext<IHomePageResponse>();

  const clearInput = (index: number) => {
    handleChange({
      target: {
        name: `BadgesBlock.badges[${index}].link`,
        value: "",
      },
    });
  };

  return (
    <Styled.AdminFreeServicesWrapper>
      <Styled.AdminSubTitle>Badges</Styled.AdminSubTitle>
      <Styled.AdminFreeServicesContent>
        {data.badges.map((elem, idx) => (
          <Styled.AdminFreeServicesCard key={idx}>
            <PhotoBlockDashed
              style={{
                marginTop: "1.5em",
                marginBottom: "1.59em",
                width: "100%",
                maxHeight: "190px",
              }}
              imageStyle={{ height: "87px" }}
              className="tech"
              deleteFunction={deleteFunc(
                elem,
                `BadgesBlock.badges[${idx}].image`
              )}
              uploadFunction={uploadFunc(`BadgesBlock.badges[${idx}].image`)}
              photo={elem.image}
              deleteFlag={true}
            />
            <Styled.AdminInput
              value={elem.link}
              onChange={handleChange}
              name={`BadgesBlock.badges[${idx}].link`}
              style={{
                marginBottom: "0",
              }}
              className="badgesInput"
            />
            <Styled.AdminRemoveLinkImage
              src={removeLink.src}
              onClick={() => clearInput(idx)}
            />
          </Styled.AdminFreeServicesCard>
        ))}
      </Styled.AdminFreeServicesContent>
    </Styled.AdminFreeServicesWrapper>
  );
};

export default BadgeLogoBlock;
