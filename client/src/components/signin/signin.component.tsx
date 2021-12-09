import React, {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

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
  const [email, setEmail] = useState('test@test.com');
  const [password, setPassword] = useState('asdvasdvasdv');
  const [error, setError] = useState('');

  const { signInAsync, clearAuthError } = useActions();
  const authError = useAppSelector(selectAuthError);

  useEffect(() => {
    clearAuthError();
  }, []);

  useEffect(() => {
    if (!authError) {
      setError('');
      return;
    }

    if (authError && authError.message) {
      setError(authError.message);
    }
  }, [authError]);

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();
    await signInAsync({ email, password });
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
