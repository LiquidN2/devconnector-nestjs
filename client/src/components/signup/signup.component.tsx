import React, { FormEventHandler, MouseEventHandler, useState } from 'react';
import { Helmet } from 'react-helmet';

import FormInput from '../form/form-input.component';
import FormCheckbox from '../form/form-checkbox.component';
import { ButtonPrimary, Button } from '../UI/button.component';
import { LinkText } from '../UI/link.component';

import {
  SignUpContainer,
  SignUpHeading,
  SignUpFormContainer,
  ButtonsGroup,
  FormError,
} from './signup.styles';
import { useActions } from '../../hooks/useActions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthError } from '../../redux/auth/auth.selector';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');

  const { authenticateAsync } = useActions();
  const authError = useAppSelector(selectAuthError);

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();

    const formData = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      passwordConfirm: passwordConfirm.trim(),
    };

    await authenticateAsync({
      type: 'signup',
      name: formData.name,
      email: formData.email,
      password: formData.password,
      passwordConfirm: formData.passwordConfirm,
    });
  };

  const handleResetForm: MouseEventHandler<HTMLButtonElement> = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <SignUpContainer>
      <Helmet>
        <title>DevConnector | Sign Up</title>
      </Helmet>

      <SignUpHeading>Create a new account</SignUpHeading>

      <SignUpFormContainer onSubmit={handleSubmit}>
        <FormInput
          label=""
          id="name"
          name="name"
          placeholder="Full Name"
          type="text"
          required={true}
          value={name}
          handleChange={e => setName(e.currentTarget.value)}
        />
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
        <FormInput
          label=""
          id="confirm-password"
          name="confirm-password"
          placeholder="Confirm Password"
          type="password"
          required={true}
          value={passwordConfirm}
          handleChange={e => setPasswordConfirm(e.currentTarget.value)}
        />
        <FormCheckbox id="agreetnc" required={true}>
          I agree with the{' '}
          <LinkText href="#" target="_blank">
            Terms & Conditions
          </LinkText>
        </FormCheckbox>
        <ButtonsGroup>
          <ButtonPrimary type="submit">Submit</ButtonPrimary>
          <Button type="reset" onClick={handleResetForm}>
            Reset
          </Button>
        </ButtonsGroup>
      </SignUpFormContainer>

      {authError && authError.message && (
        <FormError>{authError.message}</FormError>
      )}
    </SignUpContainer>
  );
};

export default SignUp;
