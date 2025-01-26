import React, { CSSProperties } from "react";

import { IPropsWithImage } from "./BlockProps";
import * as yup from "yup";

export interface IAdmin {
  username: string;
  password: string;
}

export interface IRes {
  accessToken: string;
}

export interface IPhotoBlock extends IPropsWithImage {
  photo: any;
  emptyHeader?: string;
  deleteFlag?: boolean;
  header?: string;
  deleteText?: string;
  className?: string;
  style?: CSSProperties;
  imageStyle?: CSSProperties;
  unchangeable?: boolean;
  isError?: boolean;
  acceptFormat?: string;
}

export interface InputPropsInterface {
  inputValue: string;
  onChangeFunction: (e?: string | React.ChangeEvent<any>) => void;
  onInputFunction?: (e: React.ChangeEvent<any>) => void;
  onBlurFunction?: (e: React.ChangeEvent<any>) => void;
  name?: string;
}

export interface DropdownPropsInterface {
  value: string;
  route?: string;
  children?: any;
  Icon?: any;
}

export interface IBlockDropDownProps {
  nextBtn?: boolean;
  title: string;
  style?: any;
  children: any;
  onNextClick?: () => void;
  defaultOpen?: boolean;
  onClickLogic?: () => void;
  isSuccess?: boolean;
}

export interface InputWithHeader extends InputPropsInterface {
  placeholder?: string;
  header?: string;
  minRows?: number;
  isBlog?: boolean;
  isMetaField?: boolean;
  height?: string;
  width?: string;
  containerWidth?: string;
  id?: string;
  inputStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  isadminblog?: boolean;
  iserror?: boolean;
  errorMessage?: string;
  maxLength?: number;
  minLength?: number;
  withLabel?: string;
  isDisabled?: boolean;
  schema?: yup.ObjectSchema<any, any>;
}

export interface InputWithImage extends InputPropsInterface {
  photo: any;
  deleteFunction?: () => void;
  uploadFunction?: (image: any) => void;
}

export interface IImage {
  image: {
    url: string;
  } | null;
}

export interface IQueryResult<T> {
  data: T | undefined;
  isLoading: boolean;
}
