import React, { FormEventHandler, MouseEventHandler, useState } from 'react';
import { Helmet } from 'react-helmet';

import FormInput from '../form/form-input.component';
import FormCheckbox from '../form/form-checkbox.component';
import { ButtonPrimary, Button } from '../button/button.component';

import {
  SignUpContainer,
  SignUpHeading,
  SignUpFormContainer,
  ButtonsGroup,
  FormError,
} from './signup.styles';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();

    const formData = {
      name: name.trim(),
      email: email.trim(),
      password: password.trim(),
      confirmPassword: confirmPassword.trim(),
    };

    if (formData.password !== formData.confirmPassword) {
      setError('confirm password does not match');
      return;
    }

    console.log(email, password);
  };

  const handleResetForm: MouseEventHandler<HTMLButtonElement> = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
          value={confirmPassword}
          handleChange={e => setConfirmPassword(e.currentTarget.value)}
        />
        <FormCheckbox
          label="I agree with the Terms & Conditions"
          id="agreetnc"
        />
        <ButtonsGroup>
          <ButtonPrimary type="submit">Sign Up</ButtonPrimary>
          <Button type="reset" onClick={handleResetForm}>
            Reset
          </Button>
        </ButtonsGroup>
      </SignUpFormContainer>

      {error && <FormError>{error}</FormError>}
    </SignUpContainer>
  );
};

export default SignUp;
