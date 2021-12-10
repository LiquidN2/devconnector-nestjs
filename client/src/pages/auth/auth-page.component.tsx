import React from 'react';
import { Outlet } from 'react-router-dom';

import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthStatus } from '../../redux/auth/auth.selector';

import Footer from '../../components/footer/footer.component';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

import {
  AuthPageContainer,
  FormBoxContainer,
  FormBox,
  AuthNavContainer,
  AuthNavLink,
  SpinnerContainer,
} from './auth-page.styles';

const AuthPage: React.FC = () => {
  const authStatus = useAppSelector(selectAuthStatus);

  return (
    <AuthPageContainer>
      <FormBoxContainer>
        <FormBox>
          {authStatus === 'loading' ? (
            <SpinnerContainer>
              <LoadingSpinner />
            </SpinnerContainer>
          ) : (
            <>
              <AuthNavContainer>
                <AuthNavLink to="/auth/signin">Sign In</AuthNavLink>
                <AuthNavLink to="/auth/signup">Sign Up</AuthNavLink>
              </AuthNavContainer>
              <Outlet />
            </>
          )}
        </FormBox>
      </FormBoxContainer>
      <Footer fontColor="white" />
    </AuthPageContainer>
  );
};

export default AuthPage;
