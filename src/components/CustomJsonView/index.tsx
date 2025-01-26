import React from "react";
import { ThemeObject } from "react-json-view";
import dynamic from "next/dynamic";
const JSONView = dynamic(() => import("react-json-view"), {
  ssr: false,
});

interface IJsonViewProps {
  data: object;
}

const CustomJsonView = ({ data }: IJsonViewProps) => {
  const getTextColor = (text: string) => {
    if (text === "important") {
      return "red";
    } else {
      return "blue";
    }
  };

  const customTheme: ThemeObject = {
    base00: "transparent", // Background color
    base01: "silver", // Data type color
    base02: "silver", // Error color
    base03: "blue", // Link color
    base04: "purple", // Changed color
    base05: "orange", // Addition color
    base06: "green", // Object key color
    base07: "black", // Default text color
    base08: "cyan", // Null/Undefined color
    base09: "green", // Boolean color
    base0A: "pink", // Function color
    base0B: "green", // Object color
    base0C: "blue", // Array color
    base0D: "blue", // Number color
    base0E: "blue", // String color
    base0F: "blue", // Symbol color
  };

  return (
    <JSONView
      src={data}
      theme={customTheme}
      displayDataTypes={false}
      collapseStringsAfterLength={100}
      displayObjectSize={false}
      quotesOnKeys={false}
    />
  );
};

export default CustomJsonView;
