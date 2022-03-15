import React from 'react';
import {HeaderContainer} from './components/styles/HeaderContainer.styled'
import {Container} from './components/styles/Container.styled'


import './account-overview.css';
import Column from './components/Column';
import Contact from './components/Contact';
import SalesBox from './components/SalesBox';


export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <Container>
      <HeaderContainer>
        <Column id={'headerTitle'}>
          <h1>
            Account Overview
          </h1>
        </Column>
        <Column>
          <Contact contact={data.supportContact} />
        </Column>
      </HeaderContainer>
      <SalesBox sales = {data.salesOverview}>
      </SalesBox>
    </Container>
  )
}

export default AccountOverview;