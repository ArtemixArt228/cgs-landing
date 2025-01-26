import { useFormikContext } from "formik";
import React from "react";

import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

interface IHowDoWeWorkItemProps {
  item: {
    title: string;
    text: string;
    subContent?: { title: string; text: string }[];
  };
  idx: number;
}

const HowDoWeProvideBlockItem = ({ item, idx }: IHowDoWeWorkItemProps) => {
  const { handleChange } = useFormikContext();

  return (
    <>
      <div>
        <SubHeaderWithInput
          inputValue={item.title}
          onChangeFunction={handleChange}
          name={`howDoWeProvideBlock.textBlock.[${idx}].title`}
          placeholder={`Subtitle ${idx + 1}`}
          header={`Subtitle ${idx + 1}`}
        />
        <SubHeaderWithInput
          inputValue={item.text}
          onChangeFunction={handleChange}
          name={`howDoWeProvideBlock.textBlock.[${idx}].text`}
          placeholder={`Text ${idx + 1}`}
        />
      </div>
      {item.subContent &&
        item.subContent.map((subItem, index) => (
          <div key={index}>
            <SubHeaderWithInput
              inputValue={subItem.title}
              onChangeFunction={handleChange}
              name={`howDoWeProvideBlock.textBlock.[${idx}].subContent[${index}].title`}
              placeholder={`Subtitle ${index + 1}`}
              header={`${index + 1}`}
            />
            <SubHeaderWithInput
              inputValue={subItem.text}
              onChangeFunction={handleChange}
              name={`howDoWeProvideBlock.textBlock.[${idx}].subContent[${index}].text`}
              placeholder={`Text ${index + 1}`}
            />
          </div>
        ))}
    </>
  );
};

export default HowDoWeProvideBlockItem;
