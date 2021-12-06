import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/header.component';
import NavBar from '../navigation/nav-bar.component';
import Footer from '../footer/footer.component';

import { MainSection } from './default-layout.styles';

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <NavBar />
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </>
  );
};

export default DefaultLayout;
