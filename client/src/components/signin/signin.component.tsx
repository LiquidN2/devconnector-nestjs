import React, { FormEventHandler, MouseEventHandler, useState } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import FormInput from '../form/form-input.component';
import { ButtonPrimary, Button } from '../UI/button.component';

import {
  SignInContainer,
  SignInHeading,
  SignInFormContainer,
  ButtonsGroup,
  FormError,
} from './signin.styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();
    // console.log(email, password);
    const response = await axios.post('/api/auth/signin', {
      email,
      password,
    });

    const { data } = response;

    console.log(data);
  };

  const handleResetForm: MouseEventHandler<HTMLButtonElement> = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <SignInContainer>
      <Helmet>
        <title>DevConnector | Sign In</title>
      </Helmet>

      <SignInHeading>Welcome Back!</SignInHeading>

      <SignInFormContainer onSubmit={handleSubmit}>
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
          <ButtonPrimary type="submit">Sign In</ButtonPrimary>
          <Button type="reset" onClick={handleResetForm}>
            Reset
          </Button>
        </ButtonsGroup>
      </SignInFormContainer>

      {error && <FormError>{error}</FormError>}
    </SignInContainer>
  );
};

export default SignIn;
