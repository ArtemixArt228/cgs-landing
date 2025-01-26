import React, {
  Fragment,
  useRef,
  useState,
  memo,
  useEffect,
  useCallback,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import BlockDropdown from "../BlockDropdown";
import QuestionBlock from "./QuestionBlock";
import {
  IEstimationFormPage,
  IEstimationFormPages,
  IEstimationFormQuestion,
  IUpdatePageBody,
} from "../../../types/Admin/AdminEstimationForm.types";
import AddQuestionButton from "./AddQuestionButton";
import SaveBtn from "../Global/SaveBtn";
import Title from "./Title";

import { queryKeys } from "../../../consts/queryKeys";
import { adminEstimationFormService } from "../../../services/adminEstimationForm";

interface IEstimationFormPageProps {
  values: IEstimationFormPage;
  pageNumber: number;
  refetch: () => void;
  pages: IEstimationFormPages;
}

const EstimationFormPage = ({
  values,
  pageNumber,
  refetch,
  pages,
}: IEstimationFormPageProps) => {
  const textInput = useRef<HTMLTextAreaElement>(null);
  const buttonTextInput = useRef<HTMLTextAreaElement>(null);

  const { mutateAsync } = useMutation(
    [queryKeys.updateEstimationForm],
    async (data: IUpdatePageBody) => {
      return await toast.promise(
        adminEstimationFormService.updatePageData(data),
        {
          pending: "Pending update",
          success: "Estimation form updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );

  const [questions, setQuestions] = useState(values.questions ?? []);
  const [isQuestionChanged, setIsQuestionChanged] = useState(false);

  const saveChagesHandler = useCallback(async () => {
    document.body.style.cursor = "wait";
    await mutateAsync({
      pageId: values._id,
      pollTableId: values.pollTableId,
      data: {
        ...values,
        questions,
        title: textInput.current?.value ?? values.title,
        buttonName: buttonTextInput.current?.value ?? values.buttonName,
      },
    });
    await refetch();
    document.body.style.cursor = "auto";
  }, [mutateAsync, questions, refetch, values]);

  const removeQuestion = (index: number) => {
    setQuestions(questions.filter((_, i) => i !== index));
    setIsQuestionChanged(true);
  };
  const saveQuestion = (obj: IEstimationFormQuestion, index: number) => {
    const newQuestions = questions;
    newQuestions[index] = obj;
    setQuestions(newQuestions);
    setIsQuestionChanged(true);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        title: "",
        isRequired: false,
        isSplitColumns: false,
        isAbilityToAttachFile: false,
        isHiddenText: false,
        hiddenText: "",
        optionsType: "TEXT",
        options: [],
        conditionsForAppearance: null,
        questionNumber: 1,
      },
    ]);
  };

  useEffect(() => {
    if (isQuestionChanged) {
      saveChagesHandler();
      setIsQuestionChanged(false);
    }
  }, [saveChagesHandler, isQuestionChanged]);

  return (
    <BlockDropdown isOpened={pageNumber === 1} title={`Page ${pageNumber}`}>
      <div>
        <Title
          header="Title"
          ref={textInput}
          inputValue={values.title}
          minRows={1}
        />

        {questions
          ? questions.map((question, i) => {
              return (
                <Fragment key={question.questionKey}>
                  <QuestionBlock
                    pages={pages}
                    onRemoveHandler={removeQuestion}
                    saveQuestion={saveQuestion}
                    question={question}
                    name={questions[i].title}
                    index={i}
                    currentPage={pageNumber - 1}
                  />
                </Fragment>
              );
            })
          : null}

        <AddQuestionButton
          type="button"
          buttonText="Add a question"
          handleClick={addQuestion}
        />

        <Title
          width={"347px"}
          header="Button"
          ref={buttonTextInput}
          inputValue={values.buttonName}
          minRows={1}
        />

        <SaveBtn title="Save Changes" handleClick={saveChagesHandler} />
      </div>
    </BlockDropdown>
  );
};

export default memo(EstimationFormPage);
