import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import { ButtonPrimary } from '../../UI/button.component';

import { FormContainer, FormError } from './create-handle-form.styles';

const CreateHandleForm: React.FC = () => {
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = e => {
    const input = e.currentTarget.value;

    if (!input.match(/^[a-zA-Z\d-_]+$/))
      return setError(
        "Handle must contains only letters, numbers, '-' and '_'",
      );

    setHandle(input);
  };

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
  };

  return (
    <ContentBox
      heading="Initialize your profile with a cool handle 🥷"
      headingAlign="center"
    >
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label=""
          id="handle"
          name="handle"
          value={handle}
          handleChange={handleInputChange}
          placeholder="e.g. devninja"
          required={true}
          isFocused={true}
        />
        <ButtonPrimary>Submit</ButtonPrimary>
      </FormContainer>
      {error && <FormError>{error}</FormError>}
    </ContentBox>
  );
};

export default CreateHandleForm;
