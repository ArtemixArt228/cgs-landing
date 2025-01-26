import React from "react";

import TextEditor from "../../../TextEditor/TextEditor";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";

import { IHeroSectionBlock } from "../../../../types/Admin/AdminHomePage.types";

export interface IProps {
  state: IHeroSectionBlock;
  onChangeFunction: (e?: React.ChangeEvent<any> | string) => void;
}

const LeftSideBlock = ({ state, onChangeFunction }: IProps) => {
  return (
    <div style={{ width: "40em" }}>
      <TextEditor
        header="Title"
        name="HeroSectionBlock.title"
        props={{
          defaultValue: state?.title || "",
        }}
      />
      <TextEditor
        header="Subtitle"
        name="HeroSectionBlock.subtitle"
        props={{
          defaultValue: state?.subtitle || "",
        }}
      />
      <SubHeaderWithInput
        header="Button"
        name="HeroSectionBlock.button"
        inputValue={state?.button}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Whats App Link"
        name="HeroSectionBlock.whatsAppLink"
        inputValue={state?.whatsAppLink}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Telegram Link"
        name="HeroSectionBlock.telegramLink"
        inputValue={state?.telegramLink}
        onChangeFunction={onChangeFunction}
      />
      <SubHeaderWithInput
        header="Button Link"
        name="HeroSectionBlock.buttonLink"
        inputValue={state?.buttonLink}
        onChangeFunction={onChangeFunction}
      />
    </div>
  );
};

export default LeftSideBlock;
