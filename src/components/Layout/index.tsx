import React from 'react'
// styles
import { Container, Wrapper } from './styles';
// components
import Main from '../Main';
import MenuBar from '../MenuBar';
import SideBar from '../Sidebar';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  )
}

export default Layout;
