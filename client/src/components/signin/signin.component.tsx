import React, { FormEventHandler, MouseEventHandler, useState } from 'react';
import { Helmet } from 'react-helmet';

import FormInput from '../form/form-input.component';
import { ButtonPrimary, Button } from '../UI/button.component';

import {
  SignInContainer,
  SignInHeading,
  SignInFormContainer,
  ButtonsGroup,
  FormError,
} from './signin.styles';

import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthError } from '../../redux/auth/auth.selector';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('hhnguyen255@gmail.com');
  const [password, setPassword] = useState('test1234');

  const { authenticateAsync } = useActions();
  const authError = useAppSelector(selectAuthError);

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();

    const formData = {
      email: email.trim(),
      password: password.trim(),
    };

    await authenticateAsync({
      type: 'signin',
      email: formData.email,
      password: formData.password,
    });
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
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
          <Button type="reset" onClick={handleResetForm}>
            Reset
          </Button>
        </ButtonsGroup>
      </SignInFormContainer>

      {authError && authError.message && (
        <FormError>{authError.message}</FormError>
      )}
    </SignInContainer>
  );
};

export default SignIn;
