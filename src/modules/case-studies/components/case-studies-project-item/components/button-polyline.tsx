import React from "react";

export const BtnPolyline = () => {
  return (
    <svg width="190px" height="40px" viewBox="0 0 190 40" className="border">
      <polyline points="190,1 190,40 1,40 1,1 40,1" className="bg-line" />
      <polyline points="190,1 190,40 1,40 1,1 190,1" className="hl-line" />
    </svg>
  );
};
