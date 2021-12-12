import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

import LoadingSpinner from '../../loading-spinner/loading-spinner.component';
import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import { ButtonPrimary } from '../../UI/button.component';

import { FormContainer, FormError } from './create-handle-form.styles';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAuthToken } from '../../../redux/auth/auth.selector';
import { useCreateMyProfileHandleMutation } from '../../../redux/profile/profile.api';

const CreateHandleForm: React.FC = () => {
  const [handle, setHandle] = useState('');
  const [error, setError] = useState('');

  const authToken = useAppSelector(selectAuthToken);

  const [updateHandle, { isLoading }] = useCreateMyProfileHandleMutation();

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
    if (!authToken || !handle) return;
    updateHandle({ token: authToken, handle });
    // invalidateTags in useCreateMyProfile will trigger refetching profile
  };

  if (isLoading) return <LoadingSpinner />;

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
