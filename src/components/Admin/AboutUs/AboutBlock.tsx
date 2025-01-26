import React from "react";
import { useFormikContext } from "formik";

import { ComponentLoader } from "../../Loader";

import useDeleteVideoFuction from "../../../hooks/useDeleteVideoFunction";
import useUploadVideoFunction from "../../../hooks/useUploadVideoFunction";
import useDeleteImageFunction from "../../../hooks/useDeleteImageFunction";
import useUploadImageFunction from "../../../hooks/useUploadImageFunction";
import PhotoBlockDashed from "../Global/PhotoBlockDashed";
import VideoBlockDashed from "../Global/VideoBlockDashed";
import ButtonArrow from "../../../utils/ButtonArrow";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

import {
  ArrowContainer,
  BlackButton,
} from "../../../styles/HomePage/General.styled";
import * as Styles from "../../../styles/AdminAboutUs.styled";
import * as Styled from "../../../styles/AdminPage";
import { IAbout } from "../../../types/Admin/Response.types";
import { IImage } from "../../../types/Admin/Admin.types";

const AboutBlock = () => {
  const { values, handleChange, handleSubmit } = useFormikContext<IAbout>();

  const { video, image, header, codex, philosophy } = values.about ?? {
    video: { image: "" },
    image: "",
    codex: { title: "", text: "" },
    philosophy: { title: "", text: "" },
  };

  const deleteImageFunction = useDeleteImageFunction(values.about);
  const uploadImageFunction = useUploadImageFunction(values.about);
  const {
    deleteImageFunction: deleteVideoFunction,
    isLoading: isVideoDeleting,
  } = useDeleteVideoFuction(values.about.video);
  const { uploadVideoFunction, isLoading: isVideoLoading } =
    useUploadVideoFunction(values.about.video);

  const uploadFunc = (image: IImage) => uploadImageFunction(image);
  const deleteFunc = async () => (await deleteImageFunction)();
  const uploadVideo = (image: IImage) => uploadVideoFunction(image);
  const deleteVideo = async () => (await deleteVideoFunction)();

  const handleClick = () => handleSubmit();
  return (
    <Styled.ContentWrapper>
      <Styles.ImagesWrapper>
        <div>
          <Styled.AdminSubTitle>Banner backup image</Styled.AdminSubTitle>
          <PhotoBlockDashed
            style={{ marginBottom: "32px" }}
            photo={image}
            deleteFlag={true}
            uploadFunction={uploadFunc}
            deleteFunction={deleteFunc}
          />
        </div>
        <div>
          <Styled.AdminSubTitle>
            Banner video (.mp4, .webm)
          </Styled.AdminSubTitle>
          {isVideoDeleting || isVideoLoading ? (
            <Styled.AdminPhotoBlock>
              <ComponentLoader
                active={isVideoDeleting || isVideoLoading}
                text={isVideoLoading ? "loading file..." : "deleting file..."}
              ></ComponentLoader>
            </Styled.AdminPhotoBlock>
          ) : (
            <VideoBlockDashed
              style={{ marginBottom: "32px" }}
              photo={video?.image}
              deleteFlag={true}
              uploadFunction={uploadVideo}
              deleteFunction={deleteVideo}
            />
          )}
        </div>
        <div style={{ flexGrow: 1, textAlign: "left" }}>
          <SubHeaderWithInput
            placeholder="Header title"
            header="Header"
            inputValue={header}
            onChangeFunction={handleChange}
            name="about.header"
            titleStyle={{ textAlign: "left" }}
          />
        </div>
      </Styles.ImagesWrapper>

      <Styles.Headlines>
        <div>
          <SubHeaderWithInput
            placeholder="Codex title"
            header="Headline 1"
            inputValue={codex.title}
            onChangeFunction={handleChange}
            name="about.codex.title"
            titleStyle={{ textAlign: "left" }}
          />
          <SubHeaderWithInput
            placeholder="Text"
            header=""
            inputValue={codex.text}
            onChangeFunction={handleChange}
            name="about.codex.text"
            minRows={4}
          />
        </div>
        <div>
          <SubHeaderWithInput
            placeholder="Philosophy title"
            header="Headline 2"
            inputValue={philosophy.title}
            onChangeFunction={handleChange}
            name="about.philosophy.title"
            titleStyle={{ textAlign: "left" }}
          />
          <SubHeaderWithInput
            placeholder="Text"
            header=""
            inputValue={philosophy.text}
            onChangeFunction={handleChange}
            name="about.philosophy.text"
            minRows={4}
          />
        </div>
      </Styles.Headlines>
      <div>
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
      </div>
    </Styled.ContentWrapper>
  );
};

export default AboutBlock;
