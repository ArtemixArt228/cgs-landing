import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  ActiveConnector,
  ActiveLine,
  ActiveSideLine,
  NotActiveConnector,
  NotActiveLine,
  NotActiveSideLine,
} from "./ConnectorsElements";

interface IProps {
  condition: boolean;
  className: string;
}

interface IItemConnectorProps {
  index: number;
  condition: boolean;
  className?: string;
}

interface ILineProps extends IProps {
  index: number;
}

export const RenderConnector = ({ condition, className }: IProps) => (
  <TransitionGroup>
    <CSSTransition
      key={condition ? "active" : "not-active"}
      timeout={300}
      classNames="fade"
    >
      {condition ? (
        <ActiveConnector className={className} />
      ) : (
        <NotActiveConnector className={className} />
      )}
    </CSSTransition>
  </TransitionGroup>
);

export const RenderItemConnector = ({
  index,
  condition,
  className = "",
}: IItemConnectorProps) => {
  if (index === 0 || index === 5) {
    return (
      <RenderConnector condition={condition} className={`${className} right`} />
    );
  }

  if (index === 1) {
    return (
      <RenderConnector
        condition={condition}
        className={`${className} bottom`}
      />
    );
  }

  if (index === 2 || index === 3) {
    return (
      <RenderConnector condition={condition} className={`${className} left`} />
    );
  }

  if (index === 4) {
    return (
      <RenderConnector condition={condition} className={`${className} top`} />
    );
  }

  return null;
};

export const RenderItemLine = ({ condition, className, index }: ILineProps) => {
  if (index === 1 || index === 4) {
    return <RenderLine condition={condition} className={className} />;
  }
  return <RenderSideLine condition={condition} className={className} />;
};

export const RenderLine = ({ condition, className }: IProps) => (
  <TransitionGroup>
    <CSSTransition
      key={condition ? "active" : "not-active"}
      timeout={300}
      classNames="fade"
    >
      {condition ? (
        <ActiveLine className={className} />
      ) : (
        <NotActiveLine className={className} />
      )}
    </CSSTransition>
  </TransitionGroup>
);

export const RenderSideLine = ({ condition, className }: IProps) => (
  <TransitionGroup>
    <CSSTransition
      key={condition ? "active" : "not-active"}
      timeout={300}
      classNames="fade"
    >
      {condition ? (
        <ActiveSideLine className={className} />
      ) : (
        <NotActiveSideLine className={className} />
      )}
    </CSSTransition>
  </TransitionGroup>
);
