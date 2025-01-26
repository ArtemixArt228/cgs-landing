import React from "react";
import SortableList, { SortableItem } from "react-easy-sort";
import { useFormikContext } from "formik";

import SubHeaderWithInput from "../../../../../../../components/Admin/Global/SubHeaderWithInput";

import * as Styled from "./skills-card.styled";

import { useSkillHandlers } from "../../../../hooks";

import { CvData } from "../../../../../types";

interface ISkillsCardProps {
  card: CvData["skills"]["card"][number];
  cardIdx: number;
  isSortActive: boolean;
}

export const SkillsCard = ({
  card,
  cardIdx,
  isSortActive,
}: ISkillsCardProps) => {
  const { handleAddStack, handleDeleteStack, handleDragEnd } =
    useSkillHandlers();

  const { handleChange, errors } = useFormikContext<CvData>();

  return (
    <Styled.CardWrapper>
      <SubHeaderWithInput
        iserror={!!errors?.skills?.card?.[cardIdx] && !card.subtitle}
        inputValue={card.subtitle}
        onChangeFunction={handleChange}
        header={`${cardIdx + 1} Card Subtitle`}
        name={`skills.card[${cardIdx}].subtitle`}
      />

      <h2>Stack</h2>
      <SortableList
        onSortEnd={(oldIndex, newIndex) =>
          handleDragEnd(oldIndex, newIndex, cardIdx)
        }
        allowDrag={isSortActive}
      >
        <Styled.StackWrapper>
          {card.stack.map((stackItem, stackIdx) => (
            <SortableItem key={stackIdx}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Styled.AdminCategoryNameInput
                  isActive={isSortActive}
                  value={stackItem}
                  onChange={handleChange}
                  name={`skills.card[${cardIdx}].stack[${stackIdx}]`}
                  placeholder="Text"
                />
                {stackIdx !== 0 && (
                  <Styled.DeleteStack
                    type="button"
                    onClick={() => handleDeleteStack(cardIdx, stackIdx)}
                  >
                    delete
                  </Styled.DeleteStack>
                )}
              </div>
            </SortableItem>
          ))}
          <Styled.AdminCategoryAddBlockWrapper
            onClick={() => handleAddStack(cardIdx)}
          >
            <Styled.AdminCategoryAddBlockBtn type="button">
              {"[ +add next ]"}
            </Styled.AdminCategoryAddBlockBtn>
          </Styled.AdminCategoryAddBlockWrapper>
        </Styled.StackWrapper>
      </SortableList>
    </Styled.CardWrapper>
  );
};
