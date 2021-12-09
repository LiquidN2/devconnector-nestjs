import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../../components/footer/footer.component';

import {
  AuthPageContainer,
  FormBoxContainer,
  FormBox,
  AuthNavContainer,
  AuthNavLink,
} from './auth-page.styles';

const AuthPage: React.FC = () => {
  return (
    <AuthPageContainer>
      <FormBoxContainer>
        <FormBox>
          <AuthNavContainer>
            <AuthNavLink to="/auth/signin">Sign In</AuthNavLink>
            <AuthNavLink to="/auth/signup">Sign Up</AuthNavLink>
          </AuthNavContainer>
          <Outlet />
        </FormBox>
      </FormBoxContainer>
      <Footer fontColor="white" />
    </AuthPageContainer>
  );
};

export default AuthPage;
