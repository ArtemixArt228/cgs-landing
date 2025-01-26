import * as React from "react";
import Image from "next/image";

import TypesOfAuditHoverModal from "./TypesOfAuditHoverModal";

import * as Styled from "../../styles/WebAuditService/TypesOfAuditDesktopCard.styled";

import { webAuditTypesOfAuditImages } from "../../utils/variables";
import { SplitBrackets } from "../../utils/splitBrackets";

type ITypesOfAuditDesktopCardProps = {
  item: { _id: string; title: string; text: string };
  idx: number;
};

export function TypesOfAuditDesktopCard({
  item,
  idx,
}: ITypesOfAuditDesktopCardProps) {
  return (
    <Styled.TypeWrapper key={item.title}>
      <Styled.ImageWrapper>
        <Image
          src={webAuditTypesOfAuditImages[idx]}
          alt="types of grid image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.ImageWrapper>
      <Styled.TypeTitle>
        <SplitBrackets text={item.title} />
      </Styled.TypeTitle>
      <TypesOfAuditHoverModal
        className={idx < 3 ? "upper" : undefined}
        typeItem={item}
      />
    </Styled.TypeWrapper>
  );
}
