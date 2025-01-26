import Image from "next/image";
import React from "react";

import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";

import { SplitBrackets } from "../../utils/splitBrackets";

import CheckMarkIcon from "../../../public/MobileAuditService/auditCheckMark.svg";

interface IAuditLisItemProps {
  item: string;
  idx: number | null;
  className?: string;
}

const AuditListItem = ({ item, idx, className }: IAuditLisItemProps) => {
  return (
    <Styled.ListItem key={item} className={className}>
      <Styled.CheckMarkWrapper>
        <Image
          src={CheckMarkIcon.src}
          alt="check mark icon image"
          layout="fill"
          objectFit="contain"
        />
      </Styled.CheckMarkWrapper>
      <Styled.ListText className={className}>
        <SplitBrackets text={item} />
      </Styled.ListText>
      {idx !== null && <Styled.ItemBottomLine />}
    </Styled.ListItem>
  );
};

export default AuditListItem;
