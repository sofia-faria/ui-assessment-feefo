import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f4f4f4;
  display: grid;
  grid-template-rows: 0.6fr 1fr;
  grid-gap: 20px;
  padding-bottom: 50px; 

  @media only screen and (max-width: 900px) {
    width: max-content;
  }
`

