import React from "react";
import * as Styled from "../../../../styles/AdminPage";
import { IMenuProps } from "./dropDownTypes";
import Image from "next/image";
import checkbox from "../../../../../public/EstimationForm/checkboxAdmin.svg";
import radio from "../../../../../public/EstimationForm/radioAdmin.svg";

const MenuElementsRender = ({
  menu,
  optionsMenu,
  setValue,
  setIsDropped,
  className,
}: IMenuProps) => {
  const select = (i: string) => () => {
    setValue!(i);
    setIsDropped!(false);
  };

  return (
    <Styled.AdminDropDownMenuList className={className}>
      {menu
        ? menu!.map((i, ind) => (
            <Styled.AdminDropDownMenuElement
              onClick={select(i)}
              key={`dropElement${ind}`}
            >
              {i}
            </Styled.AdminDropDownMenuElement>
          ))
        : optionsMenu!.map((i, ind) => (
            <Styled.AdminDropDownMenuElement
              onClick={select(i.optionType)}
              key={`dropElement${ind}`}
            >
              {(i.optionType === "CHECKBOX" ||
                i.optionType === "RADIO_BUTTON") && (
                <Styled.AdminDropDownMenuElementImage>
                  <Image
                    src={
                      (i.optionType === "CHECKBOX" && checkbox.src) ||
                      (i.optionType === "RADIO_BUTTON" && radio.src)
                    }
                    alt="calculator type img"
                    width="15px"
                    height="15px"
                    objectFit="contain"
                  />
                </Styled.AdminDropDownMenuElementImage>
              )}
              {i.optionText}
            </Styled.AdminDropDownMenuElement>
          ))}
    </Styled.AdminDropDownMenuList>
  );
};

export default MenuElementsRender;
