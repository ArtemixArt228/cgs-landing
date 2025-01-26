import React from "react";
import { AdminInput } from "../../../styles/AdminPage";

interface ITitleBlockProps {
  titleTextBlock: { title: string; subtitle?: string };
  handleChange: (e?: React.ChangeEvent<any> | string) => void;
  name: string;
  page: number;
}

const TitleBlock = ({
  titleTextBlock,
  handleChange,
  name,
  page,
}: ITitleBlockProps) => {
  return (
    <>
      {Object.entries(titleTextBlock).map((i, ind) => {
        return (
          <AdminInput
            minRows={2}
            key={`inputContact${ind}.${page}`}
            name={`${name}${name === "info" ? `.${page}` : ""}.${
              name === "info" ? "text." : ""
            }${i[0]}`}
            value={i[1]}
            onChange={handleChange}
          />
        );
      })}
    </>
  );
};

export default TitleBlock;
