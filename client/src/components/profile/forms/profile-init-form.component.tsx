import React, { ChangeEventHandler, FormEventHandler, useState } from 'react';

import LoadingSpinner from '../../loading-spinner/loading-spinner.component';
import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import { ButtonPrimary, Button } from '../../UI/button.component';

import { FormContainer, FormError } from './profile-init-form.styles';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAuthToken } from '../../../redux/auth/auth.selector';
import { useCreateProfileMutation } from '../../../redux/profile/profile.api';
import { useActions } from '../../../hooks/useActions';

const ProfileInitForm: React.FC = () => {
  const [handle, setHandle] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState('');

  const authToken = useAppSelector(selectAuthToken);
  const [createProfile, { isLoading }] = useCreateProfileMutation();
  const { signout } = useActions();

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
    createProfile({
      token: authToken,
      body: { handle, status: status.trim(), location: location.trim() },
    });
    // invalidateTags in useCreateMyProfile will trigger refetching profile
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <ContentBox
      heading="Initialize your profile with some basic details about you 🙂"
      headingAlign="center"
    >
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Your DevConnector Handle"
          id="handle"
          name="handle"
          value={handle}
          handleChange={handleInputChange}
          placeholder="e.g. devninja"
          required={true}
          isFocused={true}
        />
        <FormInput
          label="Status / Job Position"
          id="status"
          name="status"
          value={status}
          handleChange={e => setStatus(e.currentTarget.value)}
          placeholder="e.g. Fullstack Developer"
          required={true}
        />
        <FormInput
          label="Location"
          id="location"
          name="location"
          value={location}
          handleChange={e => setLocation(e.currentTarget.value)}
          placeholder="e.g. Sydney NSW, Australia"
          required={true}
        />

        <div style={{ display: 'flex' }}>
          <ButtonPrimary>Submit</ButtonPrimary>
          <Button type="button" onClick={() => signout()}>
            Sign Out
          </Button>
        </div>
      </FormContainer>
      {error && <FormError>{error}</FormError>}
    </ContentBox>
  );
};

export default ProfileInitForm;
