import React from "react";
import * as Styled from "./ConceptToCompletion.styled";
import activeConnector from "./svg/connector-blue.svg";
import notActiveConnector from "./svg/connector-gray.svg";
import activeSideLine from "./svg/side-line-blue.svg";
import notActiveSideLine from "./svg/side-line-gray.svg";
import activeLine from "./svg/line-blue.svg";
import notActiveLine from "./svg/line-gray.svg";

interface IProps {
  className: string;
}

export const ActiveConnector = ({ className }: IProps) => (
  <Styled.ConnectorSvg
    className={className}
    style={{ zIndex: 10 }}
    src={activeConnector}
    alt="Active connector"
  />
);

export const NotActiveConnector = ({ className }: IProps) => (
  <Styled.ConnectorSvg
    className={className}
    src={notActiveConnector}
    alt="Active connector"
  />
);

export const ActiveSideLine = ({ className }: IProps) => (
  <Styled.LineSvg
    style={{ zIndex: 10 }}
    className={className}
    src={activeSideLine}
    alt="Line"
  />
);

export const NotActiveSideLine = ({ className }: IProps) => (
  <Styled.LineSvg className={className} src={notActiveSideLine} alt="Line" />
);

export const ActiveLine = ({ className }: IProps) => (
  <Styled.LineSvg
    style={{ zIndex: 10 }}
    className={className}
    src={activeLine}
    alt="Line"
  />
);

export const NotActiveLine = ({ className }: IProps) => (
  <Styled.LineSvg className={className} src={notActiveLine} alt="Line" />
);
