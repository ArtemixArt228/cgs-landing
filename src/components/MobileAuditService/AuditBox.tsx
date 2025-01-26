import React from "react";

import AuditListItem from "./AuditListItem";

import * as Styled from "../../styles/MobileAuditService/HowDoWeAudit.styled";

interface IAuditBoxProps {
  data: string[];
  className?: string;
}

const AuditBox = ({ data, className }: IAuditBoxProps) => {
  return (
    <Styled.AuditBox>
      <Styled.ListWrapper>
        {data.map((item, idx) => (
          <AuditListItem
            className="mobileAudit"
            key={item}
            item={item}
            idx={idx !== data.length - 1 ? idx : null}
          />
        ))}
      </Styled.ListWrapper>
      <Styled.Shadow className={className} />
    </Styled.AuditBox>
  );
};

export default AuditBox;
