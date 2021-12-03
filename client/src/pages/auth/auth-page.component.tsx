import React from 'react';
import { Outlet } from 'react-router-dom';

import {
  AuthPageContainer,
  FormBox,
  AuthNavContainer,
  AuthNavLink,
} from './auth-page.styles';

const AuthPage: React.FC = () => (
  <AuthPageContainer>
    <FormBox>
      <AuthNavContainer>
        <AuthNavLink to="/auth/signin">Sign In</AuthNavLink>
        <AuthNavLink to="/auth/signup">Sign Up</AuthNavLink>
      </AuthNavContainer>
      <Outlet />
    </FormBox>
  </AuthPageContainer>
);

export default AuthPage;
