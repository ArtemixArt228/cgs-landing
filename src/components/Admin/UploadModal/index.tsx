import Image from "next/image";
import React, { useState } from "react";

import * as Styled from "../../../styles/AdminPage";

import closeModal from "../../../../public/closeModal.svg";

interface IUploadProps {
  back: () => void;
  func?: (image: any) => void;
  acceptFormat?: string;
}

const AdminUploadModal = ({
  back,
  func,
  acceptFormat = "image/*",
}: IUploadProps) => {
  const [image, setImage] = useState<string | undefined>("");
  const [theme, setTheme] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [drag, setDrag] = useState(false);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const readerLoad = (loadedFile: any) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        if (typeof reader.result === "string") {
          setImage(reader.result);
          setTheme("filled");
        }
      }
    };
    try {
      reader.readAsDataURL(loadedFile);
      setFile(loadedFile);
    } catch (e) {
      setImage("");
      setTheme("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const loadedFile = event.target.files![0];
    readerLoad(loadedFile);
  };

  const handleClickUpload = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file!, file!.name);
        func!(formData);
        back();
      } catch (e) {
        console.error(e);
      }
    }
  };

  const dragStartHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDrag(true);
  };

  const dragLeaveHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setDrag(false);
  };

  const onDropHandler = (e: React.DragEvent) => {
    e.preventDefault();
    const fileFromDrag = e.dataTransfer!.files[0];
    readerLoad(fileFromDrag);
  };

  return (
    <Styled.AdminUploadModuleBack>
      <Styled.AdminUploadModuleWrapper>
        <Styled.AdminUploadModuleCloseButton onClick={back}>
          <Image src={closeModal} alt="close modal admin image" />
        </Styled.AdminUploadModuleCloseButton>
        <Styled.AdminUploadInput
          type="file"
          accept={acceptFormat}
          onChange={handleChange}
          ref={hiddenFileInput}
        />
        <Styled.AdminUploadModuleImgDiv
          onDragStart={dragStartHandler}
          onDragLeave={dragLeaveHandler}
          onDragOver={dragStartHandler}
          onDrop={onDropHandler}
        >
          {image ? (
            <Styled.AdminFullImage src={image} />
          ) : (
            <Styled.AdminSubTitle>
              <span>{drag ? "Release files" : "Drag and drop files here"}</span>
            </Styled.AdminSubTitle>
          )}
          <Styled.AdminUploadInfo>{file?.name}</Styled.AdminUploadInfo>
        </Styled.AdminUploadModuleImgDiv>
        <Styled.AdminUploadButtonsBlock>
          <Styled.AdminUploadModalButton
            theme="filled"
            onClick={handleClickUpload}
          >
            Upload
          </Styled.AdminUploadModalButton>
          <Styled.AdminUploadModalButton theme={theme} onClick={handleSubmit}>
            Submit
          </Styled.AdminUploadModalButton>
        </Styled.AdminUploadButtonsBlock>
      </Styled.AdminUploadModuleWrapper>
    </Styled.AdminUploadModuleBack>
  );
};

export default AdminUploadModal;
