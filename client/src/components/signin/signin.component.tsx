import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import FormInput from '../form/form-input.component';
import { ButtonPrimary, Button } from '../button/button.component';

import {
  SignInContainer,
  SignInHeading,
  SignInFormContainer,
  ButtonsGroup,
} from './signin.styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SignInContainer>
      <SignInHeading>Welcome Back!</SignInHeading>
      <SignInFormContainer>
        <FormInput
          label=""
          id="email"
          name="email"
          placeholder="Email"
          type="email"
          required={true}
          value={email}
          handleChange={e => setEmail(e.currentTarget.value)}
        />
        <FormInput
          label=""
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          required={true}
          value={password}
          handleChange={e => setPassword(e.currentTarget.value)}
        />
        <ButtonsGroup>
          <ButtonPrimary>Sign In</ButtonPrimary>
          <Button>Reset</Button>
        </ButtonsGroup>
      </SignInFormContainer>
    </SignInContainer>
  );
};

export default SignIn;
