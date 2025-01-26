import React from "react";
import * as Styled from "../../../../styles/AdminPage";
import { IMenuProps } from "./dropDownTypes";

const ChooseElementBanner = ({
  text = "category",
  isDropped,
  setIsDropped,
  value,
  bannerContentColor = "black",
  bannerClassName = "",
}: IMenuProps) => {
  const trigger = () => setIsDropped!((prev) => !prev);

  return (
    <Styled.AdminPointer onClick={trigger}>
      <Styled.AdminDropDownMenuBanner className={bannerClassName}>
        {value ? (
          <span>{value}</span>
        ) : (
          <Styled.AdminComment>{text}</Styled.AdminComment>
        )}

        <svg
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isDropped ? "dropped" : undefined}
        >
          <path d="M1 1L7.5 8L14 1" stroke={bannerContentColor} />
        </svg>
      </Styled.AdminDropDownMenuBanner>
    </Styled.AdminPointer>
  );
};

export default ChooseElementBanner;
