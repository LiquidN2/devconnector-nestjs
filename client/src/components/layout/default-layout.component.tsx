import React from 'react';
import { Outlet } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import Header from '../header/header.component';
import NavBar from '../navigation/nav-bar.component';
import Footer from '../footer/footer.component';

import LoadingSpinner from '../loading-spinner/loading-spinner.component';
import Container from '../UI/container.component';
import ProfileInitForm from '../profile/forms/profile-init-form.component';

import { MainSection, ContentContainer } from './default-layout.styles';
import { useProfile } from '../../hooks/useProfile';

const DefaultLayout: React.FC = () => {
  const { data, error, isLoading } = useProfile('');
  const queryError = error as FetchBaseQueryError;

  if (isLoading)
    return (
      <ContentContainer>
        <LoadingSpinner />
      </ContentContainer>
    );

  const profileNotFound =
    !isLoading &&
    (!data || !data._id || (queryError && queryError.status === 404));

  if (profileNotFound)
    return (
      <ContentContainer>
        <Container>
          <ProfileInitForm />
        </Container>
      </ContentContainer>
    );

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
