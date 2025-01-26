import React from "react";
import { ExplanationEmailFieldTooltip } from "../Footer.styled";

const ExplanationEmailField = ({ text }: { text: string }) => {
  return <ExplanationEmailFieldTooltip>{text}</ExplanationEmailFieldTooltip>;
};

export default ExplanationEmailField;
