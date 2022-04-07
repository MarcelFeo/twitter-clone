import React from 'react'
// styles
import { Container, Wrapper } from './styles';
// components
import Main from '../Main';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <Main />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  )
}

export default Layout;
