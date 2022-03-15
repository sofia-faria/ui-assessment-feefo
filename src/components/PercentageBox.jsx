import React from "react";
import { StyledPercentageBox } from "./styles/PercentageBox";


function PercentageBox({propStyle, desc, percentage}) {
  return (
    <StyledPercentageBox>
      <div className = {propStyle}>
        <span id='perc'>{percentage}%</span>
        <p id='desc'>{desc}</p>
      </div>
    </StyledPercentageBox>
  );
}

export default PercentageBox;