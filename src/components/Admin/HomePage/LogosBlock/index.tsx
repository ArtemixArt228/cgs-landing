import React, { FC } from "react";
import { useFormikContext } from "formik";
import { SortableItem } from "react-easy-sort";

import AddLogoFrame from "./AddLogoFrame";
import LogoElement from "./LogoElement";

import * as Styled from "../../../../styles/AdminPage";

import { IHomePageResponse } from "../../../../types/Admin/AdminHomePage.types";

const AdminLogosBlock: FC = () => {
  const { values, setFieldValue } = useFormikContext<IHomePageResponse>();

  const deleteNormalLogo = (id: number) => {
    values.LogosBlock.images.splice(id, 1);
    const updatedValue = values.LogosBlock.images;
    setFieldValue("LogosBlock.images", updatedValue);
  };

  const onSortEnd = (oldIndex: number, newIndex: number) => {
    values.LogosBlock.images.splice(
      newIndex,
      0,
      values.LogosBlock.images.splice(oldIndex, 1)[0]
    );
    const updatedValue = values.LogosBlock.images;
    setFieldValue("LogosBlock.images", updatedValue);
  };

  return (
    <div>
      <Styled.AdminSubTitle>Logos</Styled.AdminSubTitle>
      <Styled.AdminLogosGrid
        onSortEnd={onSortEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        <AddLogoFrame state={values.LogosBlock} />
        {values.LogosBlock.images.map((item, index) => (
          <SortableItem key={item.url}>
            <div>
              <LogoElement
                image={item}
                key={Math.random()}
                deleteLogo={() => deleteNormalLogo(index)}
              />
            </div>
          </SortableItem>
        ))}
      </Styled.AdminLogosGrid>
    </div>
  );
};

export default AdminLogosBlock;
