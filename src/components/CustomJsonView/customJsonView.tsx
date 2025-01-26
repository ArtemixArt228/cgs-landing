import React from "react";
import * as Styled from "./jsonView.styled";

interface Props {
  data: any;
}

const CustomJsonView: React.FC<Props> = ({ data }) => {
  // Custom function to determine the style based on the text value
  const getStyle = (text: string) => {
    if (text.includes(">>")) {
      return { color: "red" };
    } else {
      return { color: "green" };
    }
  };

  // Recursive function to render JSON elements
  const renderJSON = (json: any) => {
    return Object.keys(json).map((key) => {
      if (typeof json[key] === "object" && !Array.isArray(json[key])) {
        return (
          <Styled.SubsectionKey key={key}>
            <span>{key}: </span>
            <div style={{ marginLeft: "20px" }}>{renderJSON(json[key])}</div>
          </Styled.SubsectionKey>
        );
      } else {
        return (
          <div key={key}>
            <span>{key}: </span>
            <span style={getStyle(json[key])}>
              {json[key].replace(">>", "")}
            </span>
          </div>
        );
      }
    });
  };

  return <div>{renderJSON(data)}</div>;
};

export default CustomJsonView;
