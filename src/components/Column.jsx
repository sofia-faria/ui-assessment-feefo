import React from 'react';
import {StyledColumn} from './styles/Column.styled'


function Column({children, ...rest}) {

  return (
    <StyledColumn {...rest}>
      {children}
    </StyledColumn>
  );
}

export default Column;
