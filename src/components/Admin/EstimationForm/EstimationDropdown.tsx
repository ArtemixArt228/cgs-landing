import React, { useRef, useState } from "react";
import {
  AdminDropDownMenu,
  AdminDropDownMenuElement,
  AdminDropDownMenuList,
} from "../../../styles/AdminPage";
import { IMenuOption } from "../../../types/Admin/AdminEstimationForm.types";
import ChooseElementBanner from "../Global/AdminDropDown/chooseElementBanner";
import useOutsideClick from "../../../hooks/useOutsideClick";
import themes from "../../../utils/themes";

interface IEstimationDropdownProps {
  size?: string;
  menu: IMenuOption[];
  setValue: (i: IMenuOption) => void;
  value: IMenuOption;
}

const EstimationDropdown = ({
  size = "",
  menu,
  setValue,
  value,
}: IEstimationDropdownProps) => {
  const [isDropped, setIsDropped] = useState(false);
  const selectHandler = (i: IMenuOption) => () => {
    setValue!(i);
    setIsDropped!(false);
  };

  const dropdownElementRef = useRef<HTMLHeadingElement>(null);

  useOutsideClick(dropdownElementRef, setIsDropped, false, isDropped);

  return (
    <AdminDropDownMenu zIndex={1} size={size} ref={dropdownElementRef}>
      <ChooseElementBanner
        value={value.title!}
        isDropped={isDropped}
        setIsDropped={setIsDropped}
      />
      {isDropped && (
        <AdminDropDownMenuList>
          {menu &&
            menu!.map((i, ind) => (
              <AdminDropDownMenuElement
                onClick={selectHandler(i)}
                key={`dropElement${ind}`}
              >
                {i.title}
              </AdminDropDownMenuElement>
            ))}
        </AdminDropDownMenuList>
      )}
    </AdminDropDownMenu>
  );
};

export default EstimationDropdown;
