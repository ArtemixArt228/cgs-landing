import React from "react";
import Image from "next/image";

import * as Styled from "./Picture.styled";

import { IImage } from "../../../../../types/Admin/Admin.types";

interface IPictureProps {
  imageColor: IImage;
  imageGrayscale: IImage;
  link: string;
}

export const Picture = ({
  imageColor,
  imageGrayscale,
  link,
}: IPictureProps) => {
  return (
    <Styled.PictureContainer
      href={link}
      target="blank"
      rel="noopener noreferrer"
    >
      <Styled.GrayscalePictureWrapper className="gray">
        <Image
          src={imageGrayscale.image ? imageGrayscale.image.url : ""}
          alt="Service Image"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          loading="eager"
          // priority
        />
      </Styled.GrayscalePictureWrapper>
      <Styled.ColorPictureWrapper className="color">
        <Image
          src={imageColor.image ? imageColor.image.url : ""}
          alt="Service Image"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
          loading="eager"
          // priority
        />
      </Styled.ColorPictureWrapper>
    </Styled.PictureContainer>
  );
};
