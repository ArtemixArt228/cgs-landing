import React, { FC } from "react";

import * as StyledThisComp from "./BaseButton.styled";

import { IBaseButtonProps } from "../../types/Button.types";

import themes from "../../utils/themes";

import backImg from "../../../public/back-button.webp";

import ImagePreview from "../Image/ImagePreview";

const BaseButton: FC<IBaseButtonProps> = ({
  type = "button",
  children,
  onClick = () => ({}),
  height = themes.primary.spacing.btnHeight,
  width = themes.primary.spacing.btnWidth,
  mobileWidth = "10em",
  topSpacing = themes.primary.spacing.topButtonSpace,
  letterSpacing = "normal",
  src = backImg,
  className = "",
}) => {
  return (
    <StyledThisComp.StyledButton
      type={type}
      width={width}
      mobileWidth={mobileWidth}
      height={height}
      onClick={onClick}
      letterSpacing={letterSpacing}
      marginTop={topSpacing}
      className={className}
    >
      <ImagePreview
        src={src}
        alt="back image photo"
        layout="fill"
        objectFit="cover"
      />
      {children}
    </StyledThisComp.StyledButton>
  );
};

export default BaseButton;
