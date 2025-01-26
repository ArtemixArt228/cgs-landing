import React from "react";

import AuditBox from "../MobileAuditService/AuditBox";

interface IHowTodoDynamicMobileListProps {
  points: Array<string>;
}

const HowTodoDynamicMobileList: React.FC<IHowTodoDynamicMobileListProps> = ({
  points,
}) => {
  return <AuditBox className={"webAudit"} data={points} />;
};

export default HowTodoDynamicMobileList;
