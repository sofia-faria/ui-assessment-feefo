import React from "react";
import { StyledPercentageBox } from "./styles/PercentageBox";

function PercentageBox({ propStyle, desc, percentage }) {
  return (
    <StyledPercentageBox>
      <div className={propStyle}>
        <span data-testid="percentage" className="perc">{percentage}%</span>
        <p className="desc">{desc}</p>
      </div>
    </StyledPercentageBox>
  );
}

export default PercentageBox;
