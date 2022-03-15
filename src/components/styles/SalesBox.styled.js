import styled from 'styled-components';

export const StyledBox = styled.div`
  height: fit-content;
  width: 1000px;
  max-width: 100%;
  margin: 0 auto;
  background-color: white;
  display: grid;
  grid-template-areas:
      'sales sales'
      'uploads lines';
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // grid-gap: 20px;
  border-radius: 4px;
`
