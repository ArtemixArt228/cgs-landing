import React from "react";
import { AdminHalfGrid } from "../../../styles/AdminPage";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";

interface IFooterProps {
  state: { link: string }[];
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
}

const AdminFooterLinks = ({ state, onChangeFunction }: IFooterProps) => {
  return (
    <AdminHalfGrid>
      {state.map((i, ind) => (
        <SubHeaderWithInput
          name={`FooterBlock.links.${ind}.link`}
          header={`Add link ${ind + 1}`}
          inputValue={i.link}
          onChangeFunction={onChangeFunction}
          key={`link${ind}`}
        />
      ))}
    </AdminHalfGrid>
  );
};

export default AdminFooterLinks;
