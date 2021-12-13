import React, { FormEventHandler, useEffect, useState } from 'react';

import LoadingSpinner from '../../loading-spinner/loading-spinner.component';
import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import FormDatePicker from '../../form/form-datepicker.component';
import { BtnSavePrimary, Button } from '../../UI/button.component';

import {
  FormContainer,
  FullWidth,
  FormError,
  SpinnerContainer,
} from './experience-form.styles';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAuthToken } from '../../../redux/auth/auth.selector';
import { useProfile } from '../../../hooks/useProfile';
import {
  useAddMyExperienceMutation,
  useUpdateMyExperienceMutation,
} from '../../../redux/profile/profile.api';

interface ExperienceFormProps {
  profileId?: string;
  experienceId?: string;
  setModalHidden?: (modalHidden: boolean) => void;
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
  profileId = '',
  experienceId = '',
  setModalHidden,
}) => {
  const [inputPosition, setInputPosition] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputFrom, setInputFrom] = useState<Date>(new Date());
  const [inputTo, setInputTo] = useState<Date | null>(new Date());
  const [inputLocation, setInputLocation] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const authToken = useAppSelector(selectAuthToken);
  const { data } = useProfile(profileId);
  const [addExperience, resultAddExperience] = useAddMyExperienceMutation();
  const [updateExperience, resultUpdateExperience] =
    useUpdateMyExperienceMutation();
  const queryError =
    (resultAddExperience.error as AddExpQueryError) ||
    (resultUpdateExperience.error as AddExpQueryError);

  useEffect(() => {
    if (
      !experienceId ||
      !data ||
      !data.experiences ||
      data.experiences.length === 0
    )
      return;

    const experience = data.experiences.find(
      experience => experience._id === experienceId,
    );
    if (!experience) return;

    setInputPosition(experience.position);
    setInputCompany(experience.company);
    setInputFrom(experience.from);
    setInputTo(experience.to);
    setInputLocation(experience.location);
    setInputDescription(experience.description);
  }, []);

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

    // Request body
    const body = {
      position: inputPosition.trim(),
      company: inputCompany.trim(),
      location: inputLocation.trim(),
      description: inputDescription.trim(),
      from: inputFrom,
      to: inputTo,
    };

    if (!experienceId) {
      addExperience({ token: authToken, body });
    } else {
      updateExperience({ token: authToken, experienceId, body });
    }

    setModalHidden && setModalHidden(true);
  };

  if (resultAddExperience.isLoading || resultUpdateExperience.isLoading)
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );

  return (
    <ContentBox heading="Work Experience Details">
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Position"
          id="position"
          value={inputPosition}
          handleChange={e => setInputPosition(e.currentTarget.value)}
          isFocused={true}
          required={true}
        />
        <FormInput
          label="Company"
          id="company"
          value={inputCompany}
          handleChange={e => setInputCompany(e.currentTarget.value)}
          required={true}
        />
        <FormDatePicker
          label="From"
          value={inputFrom}
          onChange={setInputFrom}
          format="dd/MM/y"
          required={true}
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
            required={true}
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
        <Button
          type="button"
          onClick={() => setModalHidden && setModalHidden(true)}
        >
          Close
        </Button>
      </FormContainer>
      {renderErrorMessages(queryError)}
    </ContentBox>
  );
};

export default ExperienceForm;
