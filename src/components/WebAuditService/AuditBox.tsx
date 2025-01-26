import React from "react";
import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";
import AuditListItem from "./AuditListItem";

interface IAuditBoxProps {
  data: string[];
}

const AuditBox = ({ data }: IAuditBoxProps) => {
  return (
    <Styled.AuditBox>
      <Styled.ListWrapper>
        {data.map((item, idx) => (
          <AuditListItem
            key={item}
            item={item}
            idx={idx !== data.length - 1 ? idx : null}
          />
        ))}
      </Styled.ListWrapper>
      <Styled.Shadow />
    </Styled.AuditBox>
  );
};

export default AuditBox;
