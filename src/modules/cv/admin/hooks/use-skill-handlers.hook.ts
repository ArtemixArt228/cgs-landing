import { useFormikContext } from "formik";

import { CvData } from "../../types";

export const useSkillHandlers = () => {
  const { values, setValues, setFieldValue } = useFormikContext<CvData>();

  const handleAddStack = (cardIdx: number) => {
    setValues((prevState) => {
      const updatedCard = [...prevState.skills.card];
      updatedCard[cardIdx] = {
        ...updatedCard[cardIdx],
        stack: [...updatedCard[cardIdx].stack, ""],
      };

      return {
        ...prevState,
        skills: {
          ...prevState.skills,
          card: updatedCard,
        },
      };
    });
  };

  const handleDeleteStack = (cardIdx: number, stackIdx: number) => {
    setValues((prevState) => {
      const updatedCard = prevState.skills.card.map((card, idx) => {
        if (idx === cardIdx) {
          return {
            ...card,
            stack: card.stack.filter((_, i) => i !== stackIdx),
          };
        }
        return card;
      });

      return {
        ...prevState,
        skills: {
          ...prevState.skills,
          card: updatedCard,
        },
      };
    });
  };

  const handleDragEnd = (
    oldIndex: number,
    newIndex: number,
    cardIdx: number
  ) => {
    const updatedStack = [...values.skills.card[cardIdx].stack];
    const [movedItem] = updatedStack.splice(oldIndex, 1);
    updatedStack.splice(newIndex, 0, movedItem);

    setFieldValue(`skills.card[${cardIdx}].stack`, updatedStack);
  };

  return {
    handleAddStack,
    handleDeleteStack,
    handleDragEnd,
  };
};
