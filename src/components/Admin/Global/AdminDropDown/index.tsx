import React, { useRef, useState } from "react";
import * as Styled from "../../../../styles/AdminPage";
import ChooseElementBanner from "./chooseElementBanner";
import { IMenuProps } from "./dropDownTypes";
import MenuElementsRender from "./ElementsList";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import themes from "../../../../utils/themes";

const AdminDropDown = ({
  size = "",
  menu,
  optionsMenu,
  setValue,
  value,
  className,
  bannerClassName,
}: IMenuProps) => {
  const [isDropped, setIsDropped] = useState(false);

  const dropdownElementRef = useRef<HTMLHeadingElement>(null);

  useOutsideClick(dropdownElementRef, setIsDropped, false, isDropped);

  return (
    <Styled.AdminDropDownMenu
      size={size}
      color={themes.primary.colors.darkBlue}
      ref={dropdownElementRef}
    >
      <ChooseElementBanner
        value={value!}
        isDropped={isDropped}
        setIsDropped={setIsDropped}
        bannerContentColor={themes.primary.colors.black}
        bannerClassName={bannerClassName}
      />
      {isDropped && (
        <MenuElementsRender
          className={className}
          menu={menu}
          optionsMenu={optionsMenu}
          setValue={setValue}
          setIsDropped={setIsDropped}
        />
      )}
    </Styled.AdminDropDownMenu>
  );
};

export default AdminDropDown;
