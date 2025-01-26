import React from "react";
import { useFormikContext } from "formik";
import * as Styled from "../../../styles/AdminPage";
import { IDataVacancyResponse } from "../../../types/Admin/Response.types";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import PointsTextBlock from "./PointsTextBlock";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import TitleBlock from "./TitleBlock";
import AdminCarousel from "../Global/AdminImageCarousel";
import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../../../consts/queryKeys";
import { adminCareersService } from "../../../services/adminCareersPage";

interface IImageBlock {
  image: { url: string };
  title?: string;
}

interface ITextVacancyBlock {
  name: string;
  dark?: boolean;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
}

const TextVacancyBlock = ({ name, dark, page, setPage }: ITextVacancyBlock) => {
  const { values, handleChange } = useFormikContext<IDataVacancyResponse>();
  let imageBlock: IImageBlock,
    pointsBlockArr,
    titleTextBlock,
    bottomTextBlock,
    bottomPhotoText;
  if (name === "info") {
    imageBlock = values.info[page!].worker;
    pointsBlockArr = values.info[page!].points;
    titleTextBlock = values.info[page!].text;
    bottomTextBlock = values.info[page!].text2;
    bottomPhotoText = values.info[page!].worker.title;
  } else {
    imageBlock = values.offer;
    pointsBlockArr = values.offer.points;
    titleTextBlock = { title: values.offer.title };
    bottomTextBlock = values.offer.text;
  }
  const { data } = useQuery([queryKeys.GetCareersPage], () =>
    adminCareersService.getCareersPage()
  );
  const tickets = data?.tickets;
  const headerName = tickets?.filter((i) => i.id === values.info[page!]?.id)[0]
    ?.vacancy;

  const deleteImageFunction = useDeleteImageFunction();
  const uploadImageFunction = useUploadImageFunction(imageBlock);

  const handleUpload = (image: IImageBlock) => uploadImageFunction(image);
  const handleDelete = async (imageBlock: IImageBlock) =>
    (await deleteImageFunction)(imageBlock);

  return (
    <Styled.AdminPaddedBlock theme={dark ? "dark" : undefined}>
      <Styled.AdminHalfGrid>
        <Styled.AdminBlockWrapper>
          {name === "info" && (
            <>
              <Styled.AdminSubTitle>Ticket: {headerName}</Styled.AdminSubTitle>
              <br />
            </>
          )}
          <Styled.AdminSubTitle>Text</Styled.AdminSubTitle>
          <TitleBlock
            page={page!}
            titleTextBlock={titleTextBlock}
            name={name}
            handleChange={handleChange}
          />
          <Styled.AdminSubTitle>Points</Styled.AdminSubTitle>
          <PointsTextBlock
            page={page!}
            state={pointsBlockArr}
            name={name}
            onChangeFunction={handleChange}
          />

          <SubHeaderWithInput
            header="Text"
            onChangeFunction={handleChange}
            inputValue={bottomTextBlock.title}
            name={`${name}${name === "info" ? `.${page}` : ""}.${
              name === "info" ? "text2." : "text."
            }title`}
            minRows={4}
          />
        </Styled.AdminBlockWrapper>

        <Styled.AdminBlockWrapper>
          <div>
            <PhotoBlockDashed
              photo={imageBlock.image?.url ? imageBlock.image : null}
              deleteFlag={true}
              uploadFunction={handleUpload}
              deleteFunction={() => handleDelete(imageBlock)}
            />
            {(name === "info" || bottomPhotoText) && (
              <Styled.AdminInput
                name={`${name}.${page}.worker.title`}
                value={bottomPhotoText}
                onChange={handleChange}
              />
            )}
            {name === "info" && (
              <AdminCarousel
                page={page!}
                setPage={setPage!}
                length={values.info.length}
              />
            )}
          </div>
          <br />
        </Styled.AdminBlockWrapper>
      </Styled.AdminHalfGrid>
    </Styled.AdminPaddedBlock>
  );
};

export default TextVacancyBlock;
