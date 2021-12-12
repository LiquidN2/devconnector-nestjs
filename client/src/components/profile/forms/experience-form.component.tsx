import React, { FormEventHandler, useEffect, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import FormDatePicker from '../../form/form-datepicker.component';
import { BtnSavePrimary } from '../../UI/button.component';

import { FormContainer, FullWidth, FormError } from './experience-form.styles';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAuthToken } from '../../../redux/auth/auth.selector';
import { useProfile } from '../../../hooks/useProfile';
import { useAddMyExperienceMutation } from '../../../redux/profile/profile.api';

interface ExperienceFormProps {
  profileId?: string;
  experienceId?: string;
}

interface AddExpQueryError {
  status: number;
  data: {
    statusCode: number;
    message: string[];
    error: string;
  };
}

const ExperienceForm: React.FC<ExperienceFormProps> = ({
  profileId,
  experienceId,
}) => {
  const [inputPosition, setInputPosition] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputFrom, setInputFrom] = useState<Date>(new Date());
  const [inputTo, setInputTo] = useState<Date | null>(new Date());
  const [inputLocation, setInputLocation] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const authToken = useAppSelector(selectAuthToken);
  const { data } = useProfile(profileId);
  const [updateExperience, { error }] = useAddMyExperienceMutation();
  const queryError = error as AddExpQueryError;

  const renderErrorMessages = (error: AddExpQueryError) => {
    if (!error || !error.data || error.data.message.length === 0) return null;
    const errorMessages = error.data.message;
    return (
      <>
        {errorMessages.map((errMsg, index) => (
          <FormError key={index}>{errMsg}</FormError>
        ))}
      </>
    );
  };

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    // if (!data) return;

    const formData = {
      position: inputPosition.trim(),
      company: inputCompany.trim(),
      location: inputLocation.trim(),
      description: inputDescription.trim(),
      from: inputFrom,
      to: inputTo,
    };

    // console.log(inputFrom instanceof Date);

    if (!experienceId) {
      console.log('adding experience');
      updateExperience({ token: authToken, body: formData });
    }
  };

  return (
    <ContentBox heading="Work Experience Details">
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Position"
          id="position"
          value={inputPosition}
          handleChange={e => setInputPosition(e.currentTarget.value)}
          isFocused={true}
        />
        <FormInput
          label="Company"
          id="company"
          value={inputCompany}
          handleChange={e => setInputCompany(e.currentTarget.value)}
        />
        <FormDatePicker
          label="From"
          value={inputFrom}
          onChange={setInputFrom}
          format="dd/MM/y"
        />
        <FormDatePicker
          label="To (leave blank if current)"
          value={inputTo}
          onChange={setInputTo}
          format="dd/MM/y"
        />
        <FullWidth>
          <FormInput
            label="Location"
            value={inputLocation}
            handleChange={e => setInputLocation(e.currentTarget.value)}
          />
        </FullWidth>

        <FullWidth>
          <FormInput
            type="textarea"
            label="Description"
            value={inputDescription}
            handleChange={e => setInputDescription(e.currentTarget.value)}
          />
        </FullWidth>
        <BtnSavePrimary>Save</BtnSavePrimary>
      </FormContainer>
      {renderErrorMessages(queryError)}
    </ContentBox>
  );
};

export default ExperienceForm;
