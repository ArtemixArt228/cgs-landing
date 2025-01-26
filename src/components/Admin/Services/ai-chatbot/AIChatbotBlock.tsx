import { getIn, useFormikContext } from "formik";
import React from "react";

import { AdminPaddedBlock } from "../../../../styles/AdminPage";
import * as Styled from "../../../../styles/AiService/AdminPage";

import AddIcon from "../../AddIcon";
import SubHeaderWithInput from "../../Global/SubHeaderWithInput";
import {
  IAIChatbotPageData,
  IBlockWithCardsItem,
} from "../../../../types/services/ai-chatbot.types";
import AddImage from "../../AddImage";
import TextEditor from "../../../TextEditor/TextEditor";
import { IImage } from "../../../../types/Admin/Admin.types";
import { TITLE_EDITOR_OPTIONS } from "../../../../consts/text-editor.const";
import SortableList, { SortableItem } from "react-easy-sort";
interface IProps {
  basePath?:
    | "benefitsBlock"
    | "featuresBlock"
    | "securityAndPrivacyBlock"
    | "domainsBlock"
    | "implementationProcessBlock";
  itemToInit: object;
  maxItemTextLength: number;
  imageIsIcon?: boolean;
}
const AIChatbotBlock = ({
  basePath = "benefitsBlock",
  itemToInit,
  maxItemTextLength,
  imageIsIcon = false,
}: IProps) => {
  const { values, errors, handleChange, setFieldValue } =
    useFormikContext<IAIChatbotPageData>();

  const isAddButtonDisabled = values[basePath]?.items.length >= 6;

  const handleAddItem = () => {
    setFieldValue(`${basePath}.items`, [
      ...values[basePath]?.items,
      { ...itemToInit },
    ]);
  };

  const handleDeleteItem = (deleteIndex: number) => {
    const items = values[basePath]?.items;

    if (Array.isArray(items)) {
      const filtered = (items as IBlockWithCardsItem[]).filter(
        (_, index) => index !== deleteIndex
      );
      setFieldValue(`${basePath}.items`, filtered);
    }
  };

  const handleDragEnd = async (oldIndex: number, newIndex: number) => {
    const swapped: IBlockWithCardsItem[] = getIn(values, `${basePath}.items`);
    swapped && swapped.splice(newIndex, 0, swapped.splice(oldIndex, 1)[0]);

    setFieldValue(`${basePath}.items`, swapped);
  };
  return (
    <AdminPaddedBlock className="services">
      <TextEditor
        isError={!!errors[basePath]?.title}
        header="Block Title"
        name={`${basePath}.title`}
        props={{
          defaultValue: values[basePath]?.title || "",
          setDefaultStyle: "color: #000000;",
          setOptions: TITLE_EDITOR_OPTIONS,
        }}
      />
      <SortableList
        onSortEnd={handleDragEnd}
        className="list"
        draggedItemClassName="dragged"
      >
        {values[basePath]?.items.map((item, index) => (
          <SortableItem key={index}>
            <div>
              <Styled.ServiceItemWrapper key={item._id ?? index}>
                <Styled.FlexWrapper key={index}>
                  <Styled.FieldWrapper
                    style={{ width: "50%", alignItems: "flex-start" }}
                  >
                    {basePath !== "benefitsBlock" ? (
                      <SubHeaderWithInput
                        iserror={
                          !!getIn(errors, `${basePath}.items[${index}].title`)
                        }
                        inputValue={values[basePath]?.items[index].title}
                        onChangeFunction={handleChange}
                        header={`#${index + 1} Title`}
                        name={`${basePath}.items[${index}].title`}
                        placeholder="Title"
                        width="100%"
                        containerWidth="100%"
                      />
                    ) : (
                      <TextEditor
                        isError={
                          !!getIn(errors, `${basePath}.items[${index}].title`)
                        }
                        header="Title"
                        name={`${basePath}.items[${index}].title`}
                        props={{
                          defaultValue: values[basePath]?.title || "",
                          setDefaultStyle: "color: #000000;",
                          setOptions: TITLE_EDITOR_OPTIONS,
                        }}
                      />
                    )}
                    <Styled.FieldWrapper
                      style={{ width: "100%", alignItems: "flex-start" }}
                    >
                      <SubHeaderWithInput
                        iserror={
                          !!getIn(
                            errors,
                            `${basePath}.items[${index}].subtitle`
                          )
                        }
                        inputValue={values[basePath]?.items[index].subtitle}
                        onChangeFunction={handleChange}
                        header={`Text`}
                        name={`${basePath}.items[${index}].subtitle`}
                        placeholder="Text"
                        maxLength={maxItemTextLength}
                        containerWidth="100%"
                      />
                      <div style={{ marginLeft: "auto" }}>
                        {values[basePath].items[index].subtitle.length}/
                        {maxItemTextLength}
                      </div>
                    </Styled.FieldWrapper>
                    {basePath == "securityAndPrivacyBlock" && (
                      <>
                        <SubHeaderWithInput
                          iserror={
                            !!getIn(errors, `${basePath}.items[${index}].link`)
                          }
                          inputValue={values[basePath]?.items[index].link}
                          onChangeFunction={handleChange}
                          header="Link"
                          name={`${basePath}.items[${index}].link`}
                          placeholder="Link"
                          maxLength={maxItemTextLength}
                          containerWidth="100%"
                        />
                        <SubHeaderWithInput
                          iserror={
                            !!getIn(
                              errors,
                              `${basePath}.items[${index}].linkText`
                            )
                          }
                          inputValue={values[basePath]?.items[index].linkText}
                          onChangeFunction={handleChange}
                          header="Link text"
                          name={`${basePath}.items[${index}].linkText`}
                          placeholder="Learn more"
                          containerWidth="100%"
                        />
                      </>
                    )}
                  </Styled.FieldWrapper>
                  {imageIsIcon ? (
                    <AddIcon
                      isError={
                        !!getIn(errors, `${basePath}.items[${index}].image`)
                      }
                      imageValue={values[basePath]?.items[index] as IImage}
                      nestedImageName={`${basePath}.items[${index}].image`}
                      className="author services"
                    />
                  ) : (
                    <AddImage
                      isError={
                        !!getIn(errors, `${basePath}.items[${index}].image`)
                      }
                      imageValue={values[basePath]?.items[index] as IImage}
                      nestedImageName={`${basePath}.items[${index}].image`}
                    />
                  )}
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
        + Add new
      </Styled.AddBtn>
    </AdminPaddedBlock>
  );
};

export default AIChatbotBlock;
