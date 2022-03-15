import React from 'react';
import {StyledRow} from './styles/Row.styled'


function Row({children, ...rest}) {

  return (
    <StyledRow {...rest}>
      {children}
    </StyledRow>
  );
}

export default Row;