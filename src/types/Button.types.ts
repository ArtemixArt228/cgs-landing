import React, {
  CSSProperties,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

export interface IBaseButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: string;
  src?: any;
  mobileWidth?: string;
  onClick?: () => void;
  height?: string;
  width?: string;
  disabled?: boolean;
  letterSpacing?: string;
  isLoading?: boolean;
  topSpacing?: string;
}

export interface IStyledButtonProps {
  type: string;
  height?: string;
  width?: string;
  mobileWidth: string;
  marginTop?: string;
  letterSpacing: string;
}

export interface IBlackButtonProps {
  href?: string;
  style?: CSSProperties;
  text?: string;
  onClick?: () => void;
}

export interface IBookACallButtonProps {
  name: string;
  email: string;
  phoneNumber: string;
  buttonText?: string;
  buttonLink: string;
  buttonClassName?: string;
  type?: string;
  handleClose?: any;
  calendlyIsOpen: boolean;
  setCalendlyIsOpen: React.Dispatch<SetStateAction<boolean>>;
}

export interface IBurgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export interface IBurgerMenuProps {
  isOpen: boolean;
  children?: ReactNode[];
  burgerRef: React.RefObject<HTMLDivElement>;
  setIsScrolled: Dispatch<SetStateAction<boolean>>;
}

export interface IContactButton {
  className?: string;
  picture?: string;
  pictureWidth?: string;
  pictureHeight?: string;
  text?: string;
  link?: string;
  style?: CSSProperties;
  newTab?: boolean;
}
