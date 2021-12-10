import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/header.component';
import NavBar from '../navigation/nav-bar.component';
import Footer from '../footer/footer.component';

import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import Container from '../UI/container.component';
import CreateHandleForm from '../profile/forms/create-handle-form.component';

import { MainSection, ContentContainer } from './default-layout.styles';
import { useMyProfile } from '../../hooks/useMyProfile';

const DefaultLayout: React.FC = () => {
  const { data, error, isLoading } = useMyProfile();

  return (
    <>
      <Header />
      {!isLoading && data && data._id && <NavBar />}
      <MainSection>
        {isLoading && (
          <ContentContainer>
            <LoadingSpinner />
          </ContentContainer>
        )}

        {!isLoading && (!data || !data._id) && (
          <Container style={{ marginTop: '3rem' }}>
            <CreateHandleForm />
          </Container>
        )}

        {!isLoading && data && data._id && <Outlet />}
      </MainSection>
      <Footer />
    </>
  );
};

export default DefaultLayout;
