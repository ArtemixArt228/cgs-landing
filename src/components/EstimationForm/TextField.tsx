import React, { ChangeEvent, useEffect, useState } from "react";

import { useField, useFormikContext } from "formik";
import {
  EstimateFileAttachInput,
  EstimateFileAttachInputLabel,
  EstimateFileContainerWithInput,
  EstimateFileCross,
  EstimateFileName,
  EstimateFileType,
  EstimationFieldLabel,
  EstimationTextInput,
} from "../../styles/EstimationForm.styled";
import { EstimationField } from "../../types/EstimationForm.types";

import { getTextFromHtml } from "../../utils/getTextFromHtml";
import { AddFileIcon } from "./SvgEstimationForm/AddFileIcon";
import { CrossIcon } from "./SvgEstimationForm/CrossIcon";
import {
  createField,
  updateField,
} from "../../utils/estimationFromUpdateAndCreateField";

const TextField = ({
  title,
  options,
  index,
  questionKey,
  currentPage,
  attachFile,
  setAttachFiles,
  attachFilesArr,
  touched,
  required,
  optionsType,
  optional,
  formData,
  name,
  ...props
}: EstimationField) => {
  const [filesPerQuestion, setFilesPerQuestion] = useState<File[]>(
    attachFilesArr?.map((item) => item.file) || []
  );
  const [tooManyFiles, setTooManyFiles] = useState(false);

  const formik = useFormikContext();
  const [field, meta] = useField(`questionsArr[${index}]`);
  const [, metaUsername] = useField("username");
  const [, metaEmail] = useField("email");

  let placeholder = "Text";
  if (options.length > 0) placeholder = getTextFromHtml(options[0]["text"]);

  useEffect(() => {
    setAttachFiles!(
      filesPerQuestion?.map((file, index) => ({
        index: `file${index}`,
        file: file,
      }))
    );
  }, [filesPerQuestion]);

  const handleFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const totalFilesLength = e.target.files!.length + filesPerQuestion.length;
    if (totalFilesLength > 10) {
      setTooManyFiles(true);
      return;
    }
    if (e.target.files!.length >= 1 && totalFilesLength <= 10) {
      setFilesPerQuestion((prevState) => {
        const addFile = prevState.some(
          (item) => item.name === e.target.files![0].name
        );
        return addFile
          ? prevState
          : [...prevState, ...Array.from(e.target.files!)];
      });
    }

    setTooManyFiles(false);
  };

  const deleteFile = (name: string) => {
    const newArrFiles = filesPerQuestion?.filter((file) => file.name !== name);
    setFilesPerQuestion(newArrFiles);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setFormData((prevState) => {
      const indexOfAnswer = prevState.clientAnswers.findIndex(
        (answer) => answer.questionTitle === getTextFromHtml(title)
      );
      return {
        ...prevState,
        clientName:
          getTextFromHtml(title) === "Your Name"
            ? e.target.value
            : prevState.clientName,
        clientEmail:
          getTextFromHtml(title) === "Your Email"
            ? e.target.value
            : prevState.clientEmail,
        clientAnswers:
          indexOfAnswer !== -1
            ? updateField(prevState, indexOfAnswer, e)
            : createField(
                prevState,
                indexOfAnswer,
                e,
                title,
                questionKey,
                currentPage,
                required,
                optionsType
              ),
      };
    });

    formik.setFieldValue(`questionsArr[${index}].value`, e.target.value);
    if (getTextFromHtml(title) === "Your Name") {
      formik.setFieldValue(`username`, e.target.value);
    }
    if (getTextFromHtml(title) === "Your Email")
      formik.setFieldValue(`email`, e.target.value);
  };

  const getRightName = (title: string) => {
    if (getTextFromHtml(title) === "Your Name") return "username";
    if (getTextFromHtml(title) === "Your Email") return "email";
    return `questionsArr.${index}.value`;
  };

  return (
    <div style={{ position: "relative" }}>
      <EstimationFieldLabel dangerouslySetInnerHTML={{ __html: title }} />
      <EstimateFileContainerWithInput>
        <EstimationTextInput
          optional={optional && true}
          error={!!meta.error && field.value.value.length === 0 && touched}
          borderErrorEmail={
            !!metaEmail.error &&
            getTextFromHtml(title) === "Your Email" &&
            formData!.clientEmail.length > 0
          }
          borderErrorUsername={
            !!metaUsername.error &&
            getTextFromHtml(title) === "Your Name" &&
            formData!.clientName.length > 0
          }
          onChange={handleOnChange}
          value={meta.value.value}
          type="text"
          placeholder={
            attachFile ? "< Put your link//file here > " : `< ${placeholder} >`
          }
          name={getRightName(name)}
        />
        {attachFile && (
          <div>
            <EstimateFileAttachInput
              multiple
              type="file"
              name="file-input"
              id="file-input"
              accept=".docx, .doc, .pdf, .txt"
              onChange={handleFiles}
            />
            <EstimateFileAttachInputLabel htmlFor="file-input">
              <AddFileIcon />
              <span>add file</span>
            </EstimateFileAttachInputLabel>
          </div>
        )}
      </EstimateFileContainerWithInput>
      {tooManyFiles && (
        <p style={{ color: "#5869dd", fontSize: "16px" }}>
          You are able to add only 10 files
        </p>
      )}
      {attachFile && (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            {filesPerQuestion?.map((file) => (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "5px",
                }}
                key={file.size}
              >
                <EstimateFileType>
                  {file.name.slice(
                    ((file.name.lastIndexOf(".") - 1) >>> 0) + 2
                  )}
                </EstimateFileType>
                <EstimateFileName>{file.name}</EstimateFileName>
                <EstimateFileCross onClick={() => deleteFile(file.name)}>
                  <CrossIcon />
                </EstimateFileCross>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TextField;
