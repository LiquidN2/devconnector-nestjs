import React from 'react';

import Container from '../UI/container.component';
import Logo from '../UI/logo.component';
import FormUniversalSearch from '../form/form-universal-search.component';
import HeaderTopNav from '../navigation/header-top-nav.component';

import { UniversalSearchContainer, HeaderContainer } from './header.styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Container>
        <Logo />
        <UniversalSearchContainer>
          <FormUniversalSearch />
        </UniversalSearchContainer>
        <HeaderTopNav />
      </Container>
    </HeaderContainer>
  );
};

export default Header;
