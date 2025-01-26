import React, { FC } from "react";

import Form from "./Form/index";

import * as Styled from "./CareersForm.styled";

import { ICareersForm } from "../../types/Company.types";

const CareersForm: FC<ICareersForm> = ({ positions = [], data, ourRef }) => {
  return (
    <>
      <Styled.FormContainter>
        <Form positions={positions} data={data} ourRef={ourRef} />
      </Styled.FormContainter>
    </>
  );
};

export default CareersForm;
