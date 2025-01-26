import React from "react";
import { Formik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

import TextEditor from "../../TextEditor/TextEditor";
import { adminCalculatorService } from "../../../services/adminCalculator";
import SubHeaderWithInput from "../Global/SubHeaderWithInput";
import AdminBlockDropDown from "../Global/AdminBlockDropDown";
import SaveBtn from "../Global/SaveBtn";

import { queryKeys } from "../../../consts/queryKeys";
import * as Styled from "../../../styles/Calculator/CalculatorAdmin.styled";
import * as AdminPageStyled from "../../../styles/AdminPage";
import { ICalculator } from "../../../types/Admin/Response.types";

interface ICalculatorPagerProps {
  data: ICalculator;
  refetch: () => void;
  dataIsLoading: boolean;
}

const CalculatorPager = ({
  data,
  refetch,
  dataIsLoading,
}: ICalculatorPagerProps) => {
  const { mutateAsync } = useMutation(
    [queryKeys.updateCalculatorData],
    async (data: ICalculator) => {
      return await toast.promise(
        adminCalculatorService.updateCalculatorData(data),
        {
          pending: "Pending update",
          success: "Calculator pager data updated successfully 👌",
          error: "Some things went wrong 🤯",
        }
      );
    }
  );
  const handleSubmit = async (values: ICalculator) => {
    document.body.style.cursor = "wait";
    await mutateAsync(values);
    await refetch();
    document.body.style.cursor = "auto";
  };

  return dataIsLoading ? (
    <AdminPageStyled.AdminUnauthorizedModal>
      Loading...
    </AdminPageStyled.AdminUnauthorizedModal>
  ) : data !== undefined ? (
    <Formik initialValues={data!} onSubmit={handleSubmit}>
      {({ values, handleChange, handleSubmit }) => (
        <div>
          <Styled.InputWrapper className="withMarginBottom">
            <AdminPageStyled.AdminHalfGrid>
              <SubHeaderWithInput
                inputStyle={{ marginBottom: 0 }}
                width="100%"
                header="Text main page"
                name="previewTextMessage"
                inputValue={values.previewTextMessage || ""}
                onChangeFunction={handleChange}
              />
              <SubHeaderWithInput
                inputStyle={{ marginBottom: 0 }}
                width="100%"
                header="Text pop-up"
                name="popUpMessage"
                inputValue={values.popUpMessage || ""}
                onChangeFunction={handleChange}
              />
            </AdminPageStyled.AdminHalfGrid>
          </Styled.InputWrapper>
          <AdminBlockDropDown title="PAGER">
            <Styled.InputWrapper>
              <AdminPageStyled.AdminHalfGrid>
                <TextEditor
                  header="Text (start)"
                  name="startMessage"
                  props={{
                    defaultValue: values.startMessage || "",
                    setOptions: { buttonList: [["fontColor"]] },
                  }}
                />
                <SubHeaderWithInput
                  inputStyle={{ marginBottom: 0 }}
                  width="100%"
                  header="Text (finish)"
                  name="finishMessage"
                  inputValue={values.finishMessage || ""}
                  onChangeFunction={handleChange}
                />
              </AdminPageStyled.AdminHalfGrid>
              <SaveBtn
                handleClick={handleSubmit}
                style={{ marginTop: "37px", marginBottom: "50px" }}
              />
            </Styled.InputWrapper>
          </AdminBlockDropDown>
        </div>
      )}
    </Formik>
  ) : (
    <AdminPageStyled.AdminUnauthorizedModal>
      Something went wrong :(
    </AdminPageStyled.AdminUnauthorizedModal>
  );
};

export default CalculatorPager;
