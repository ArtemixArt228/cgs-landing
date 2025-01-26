import React, { FC } from "react";

import {
  StyledLoader,
  ComponentStyledLoader,
  ContentStyledLoader,
} from "./Loader.styled";
import { StyledSpinner } from "./Loader.styled";

import { ILoaderProps } from "../../types/Components.types";

export const Loader: FC<ILoaderProps> = ({
  active,
  children,
  isContentLoader = false,
  className,
  isPortrait,
}) => {
  return isContentLoader ? (
    <ContentStyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="ContentLoader_"
      className={className}
      isPortrait={isPortrait}
    >
      {children}
    </ContentStyledLoader>
  ) : (
    <StyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
      className={className}
    >
      {children}
    </StyledLoader>
  );
};

export const ComponentLoader: FC<ILoaderProps> = ({
  active = false,
  children,
  text = "",
}) => {
  return (
    <ComponentStyledLoader
      active={active}
      fadeSpeed={200}
      spinner={<StyledSpinner />}
      classNamePrefix="MyLoader_"
      text={text}
    >
      {children}
    </ComponentStyledLoader>
  );
};
