import styled from 'styled-components';

export const SalesRow = styled.div`
  display: block;
  grid-area: sales;
  border-bottom: 2px solid #f4f4f4;
  padding: 10px;

  .uploadIcon{
    color: #3eb1eb;
    padding-right: 10px;
  }

  .infoIcon{
    position: absolute;
    color: #bfbbbb;
    right: 0;
    padding-right: 10px;
  }


  .uploadSection{
    padding: 10px;
    position: relative;
  }

  .salesTitle{
    font-weight: 700;
    color: #383838;
    height: fit-content;
  }

  .salesDesc{
    color: #838383;
  }
`