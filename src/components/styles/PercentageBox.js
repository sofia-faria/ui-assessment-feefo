import styled from 'styled-components';

export const StyledPercentageBox = styled.div`
  display: block;
  text-align: initial;

  div{
    padding: 20px;
  }

  .desc{
    color: #838383;
    font-weight: 500;
    margin: 0;
  }

  .perc{
    color: #22ab55;
    font-weight: 700;
    font-size: xxx-large;
  }

  .uploadSuccess{
    grid-area: uploads;
    border-right: 2px solid #f4f4f4;
  }

  .linesSaved{
    grid-area: lines;
  }
`