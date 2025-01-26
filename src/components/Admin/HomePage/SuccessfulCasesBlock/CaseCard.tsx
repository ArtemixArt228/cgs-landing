import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import PhotoBlockDashed from "../../Global/PhotoBlockDashed";

import { AdminCardFlexContainer } from "./styles";

import useDeleteImageFunction from "../../../../hooks/useDeleteImageFunctionRefactored";
import useUploadImageFunction from "../../../../hooks/useUploadImageFunctionRefactored";

import { IImage } from "../../../../types/Admin/Admin.types";
import { ISuccessCase } from "../../../../types/Admin/AdminServices.types";

interface ICaseCardProps {
  card: ISuccessCase;
  index: number;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
}

const CaseCard = ({ card, index, onChangeFunction }: ICaseCardProps) => {
  const deleteImageFunction = useDeleteImageFunction(
    undefined,
    undefined,
    false
  );
  const uploadImageFunction = useUploadImageFunction(undefined, false);

  const deleteFunc = (state: IImage, nestedName: string) => async () =>
    (await deleteImageFunction)(state, nestedName);
  const uploadFunc = (nestedName: string) => (image: unknown) =>
    uploadImageFunction(image, nestedName);

  return (
    <div>
      <AdminCardFlexContainer>
        <SubHeaderWithInput
          width="350px"
          placeholder="Case Card Amount"
          header={`${index + 1} Amount`}
          inputValue={card.amount}
          name={`TheMostSuccessfulCasesBlock.successCases[${index}].amount`}
          onChangeFunction={onChangeFunction}
        />
        <SubHeaderWithInput
          width="350px"
          placeholder="Case Card Description"
          header="Amount description"
          inputValue={card.amountDescription}
          name={`TheMostSuccessfulCasesBlock.successCases[${index}].amountDescription`}
          onChangeFunction={onChangeFunction}
        />
        <SubHeaderWithInput
          width="350px"
          placeholder="Case Card Text"
          header="Additional text"
          inputValue={card.additionalText}
          name={`TheMostSuccessfulCasesBlock.successCases[${index}].additionalText`}
          onChangeFunction={onChangeFunction}
        />
      </AdminCardFlexContainer>
      <AdminCardFlexContainer>
        <AdminCardFlexContainer>
          <PhotoBlockDashed
            style={{
              width: "196px",
              maxHeight: "160px",
            }}
            header="Drop new logo here"
            deleteText="delete icon"
            imageStyle={{ height: "87px" }}
            className="tech"
            deleteFunction={deleteFunc(
              card.logo,
              `TheMostSuccessfulCasesBlock.successCases[${index}].logo.image`
            )}
            uploadFunction={uploadFunc(
              `TheMostSuccessfulCasesBlock.successCases[${index}].logo.image`
            )}
            photo={card.logo.image?.url ? card.logo.image : null}
            deleteFlag={true}
          />
          <PhotoBlockDashed
            style={{
              width: "196px",
              maxHeight: "160px",
            }}
            header="Drop new picture here"
            deleteText="delete icon"
            imageStyle={{ height: "87px" }}
            className="tech"
            deleteFunction={deleteFunc(
              card,
              `TheMostSuccessfulCasesBlock.successCases[${index}].image`
            )}
            uploadFunction={uploadFunc(
              `TheMostSuccessfulCasesBlock.successCases[${index}].image`
            )}
            photo={card.image?.url ? card.image : null}
            deleteFlag={true}
          />
        </AdminCardFlexContainer>
        <SubHeaderWithInput
          width="500px"
          placeholder="Case Card Link"
          header="Link"
          inputValue={card.link}
          name={`TheMostSuccessfulCasesBlock.successCases[${index}].link`}
          onChangeFunction={onChangeFunction}
        />
      </AdminCardFlexContainer>
    </div>
  );
};

export default CaseCard;
