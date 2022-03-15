import React from "react";
import Row from "./Row";
import Column from "./Row";
import { StyledBox } from "./styles/SalesBox.styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { SalesRow } from "./styles/SalesRow.styled";
import PercentageBox from "./PercentageBox";

function SalesBox({sales}) {

  const uploadSuccess = (sales.successfulUploads/sales.uploads)*100;
  const linesSaved = (sales.linesSaved/sales.linesAttempted)*100;
  
  return (
    <StyledBox>
      <SalesRow>
        <Row className = "uploadSection">
          <FontAwesomeIcon className="uploadIcon" icon={faUpload} />
          <span id='salesTitle'>Sales</span>
          <FontAwesomeIcon className="infoIcon" icon={faInfoCircle}/>
        </Row>
        <Row className = "uploadSection">
          <span id='salesDesc'>You had <strong>{sales.uploads} uploads</strong> and <strong>{sales.linesAttempted}</strong> lines added.</span>
        </Row>
      </SalesRow>
      <PercentageBox propStyle='uploadSuccess' desc={'UPLOAD SUCCESS'} percentage = {uploadSuccess}/>
      <PercentageBox propStyle='linesSaved' desc={'LINES SAVED'} percentage = {linesSaved}/>
    </StyledBox>
  );
}

export default SalesBox;
