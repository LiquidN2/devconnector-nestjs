import React from 'react';

import Container from '../UI/container.component';
import MainNav from './main-nav.component';

import { NavBarContainer } from './nav-bar.styles';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <Container>
        <MainNav />
      </Container>
    </NavBarContainer>
  );
};

export default NavBar;
