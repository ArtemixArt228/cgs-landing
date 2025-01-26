import React from "react";

import * as Styled from "../../styles/WebAuditService/TypesOfAuditHoverModal.styled";

import { SplitBrackets } from "../../utils/splitBrackets";

interface ITypesOfAuditHoverModalProps {
  typeItem: {
    title: string;
    text: string;
  };
  className?: string;
}

const TypesOfAuditHoverModal = ({
  typeItem,
  className,
}: ITypesOfAuditHoverModalProps) => {
  return (
    <Styled.HoverModalWrapper className={className}>
      <Styled.HoverModalHeader>
        <Styled.ButtonContainer>
          <Styled.Button>
            <span className="min" />
          </Styled.Button>
          <Styled.Button>
            <span className="max" />
          </Styled.Button>
          <Styled.Button>
            <span className="close" />
          </Styled.Button>
        </Styled.ButtonContainer>
      </Styled.HoverModalHeader>
      <Styled.ModalContent>
        <Styled.ModalText className="title">
          <SplitBrackets text={typeItem.title} />
        </Styled.ModalText>
        <Styled.ModalText>{typeItem.text}</Styled.ModalText>
      </Styled.ModalContent>
    </Styled.HoverModalWrapper>
  );
};

export default TypesOfAuditHoverModal;
