import { getIn, useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../styles/AdminPage";
import * as Styled from "../../../styles/AiService/AdminPage";

import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import { IBlockWithCardsItem } from "../../../types/services/ai-chatbot.types";
import SortableList, { SortableItem } from "react-easy-sort";
import { IAiAssistantData } from "../../../types/services/ai-chatbot.types";
const ChatSuggestions = () => {
  const { values, errors, handleChange, setFieldValue } =
    useFormikContext<IAiAssistantData>();

  const isAddButtonDisabled = values.messageSuggestions.length >= 6;

  const handleAddItem = () => {
    setFieldValue(`messageSuggestions`, [...values.messageSuggestions, ""]);
  };

  const handleDeleteItem = (deleteIndex: number) => {
    const items = values.messageSuggestions;

    if (Array.isArray(items)) {
      const filtered = items.filter((_, index) => index !== deleteIndex);
      setFieldValue(`messageSuggestions`, filtered);
    }
  };

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    const swapped: IBlockWithCardsItem[] = getIn(values, "messageSuggestions");
    swapped && swapped.splice(newIndex, 0, swapped.splice(oldIndex, 1)[0]);

    setFieldValue(`messageSuggestions`, swapped);
  };
  return (
    <AdminPaddedBlock className="services">
      <SortableList
        onSortEnd={handleDragEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        {values.messageSuggestions?.map((item, index) => (
          <SortableItem key={index}>
            <div>
              <Styled.ServiceItemWrapper key={index}>
                <Styled.FlexWrapper key={index}>
                  <Styled.FieldWrapper
                    style={{ width: "100%", alignItems: "flex-start" }}
                  >
                    <SubHeaderWithInput
                      iserror={!!getIn(errors, `messageSuggestions[${index}]`)}
                      inputValue={item}
                      onChangeFunction={handleChange}
                      header={`#${index + 1} Suggested text`}
                      name={`messageSuggestions[${index}]`}
                      placeholder="Suggested text"
                      width="100%"
                      containerWidth="100%"
                    />
                  </Styled.FieldWrapper>
                </Styled.FlexWrapper>
                <Styled.DeleteBtn
                  onClick={() => handleDeleteItem(index)}
                  style={{ marginTop: "1.33em" }}
                >
                  delete
                </Styled.DeleteBtn>
              </Styled.ServiceItemWrapper>
            </div>
          </SortableItem>
        ))}
      </SortableList>
      <Styled.AddBtn onClick={handleAddItem} disabled={isAddButtonDisabled}>
        + Add
      </Styled.AddBtn>
    </AdminPaddedBlock>
  );
};

export default ChatSuggestions;
