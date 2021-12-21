import React, { FormEventHandler, useEffect, useState } from 'react';

import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import FormDatePicker from '../../form/form-datepicker.component';
import { BtnSavePrimary, Button } from '../../UI/button.component';

import {
  FormContainer,
  FullWidth,
  // FormError,
  SpinnerContainer,
} from './education-experience-form.styles';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAuthToken } from '../../../redux/auth';
import { useProfile } from '../../../hooks/useProfile';
import {
  useAddExperienceOrEducationMutation,
  useUpdateExperienceOrEducationMutation,
} from '../../../redux/profile';

import LoadingSpinner from '../../loading-spinner/loading-spinner.component';

interface EducationExperienceProps {
  type: 'education' | 'experience';
  profileId?: string;
  itemId?: string;
  setModalHidden?: (modalHidden: boolean) => void;
}

interface RequestBody {
  location: string;
  description: string;
  from: Date;
  to: Date | null;
  position?: string;
  company?: string;
  qualification?: string;
  school?: string;
}

const EducationExperienceForm: React.FC<EducationExperienceProps> = ({
  type,
  profileId = '',
  itemId = '',
  setModalHidden = modalHidden => {},
}) => {
  const [inputPosition, setInputPosition] = useState('');
  const [inputQualification, setInputQualification] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputSchool, setInputSchool] = useState('');
  const [inputFrom, setInputFrom] = useState<Date>(new Date());
  const [inputTo, setInputTo] = useState<Date | null>(new Date());
  const [inputLocation, setInputLocation] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const authToken = useAppSelector(selectAuthToken);
  const { data } = useProfile(profileId);

  const [add, addResult] = useAddExperienceOrEducationMutation();
  const [update, updateResult] = useUpdateExperienceOrEducationMutation();

  useEffect(() => {
    console.log('test');
    if (!itemId || !data || !data[`${type}s`] || data[`${type}s`].length === 0)
      return;

    if (type === 'education') {
      const education = data.educations.find(
        education => education._id === itemId,
      );

      if (!education) return;

      console.log(education);

      setInputSchool(education.school);
      setInputQualification(education.qualification);
      setInputFrom(education.from);
      setInputTo(education.to);
      setInputLocation(education.location);
      setInputDescription(education.description);
    }

    if (type === 'experience') {
      const experience = data.experiences.find(
        experience => experience._id === itemId,
      );

      if (!experience) return;

      console.log(experience);

      setInputCompany(experience.company);
      setInputPosition(experience.position);
      setInputFrom(experience.from);
      setInputTo(experience.to);
      setInputLocation(experience.location);
      setInputDescription(experience.description);
    }
  }, []);

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();

    const body: RequestBody = {
      location: inputLocation.trim(),
      description: inputDescription.trim(),
      from: inputFrom,
      to: inputTo,
    };

    if (type === 'experience') {
      body.position = inputPosition.trim();
      body.company = inputCompany.trim();
    }

    if (type === 'education') {
      body.qualification = inputQualification.trim();
      body.school = inputSchool.trim();
    }

    if (!itemId) {
      add({ token: authToken, data: { type, body } });
    } else {
      update({ token: authToken, id: itemId, data: { type, body } });
    }
  };

  if (addResult.isSuccess || updateResult.isSuccess) setModalHidden(true);

  if (addResult.isLoading || updateResult.isLoading)
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );

  return (
    <ContentBox heading={`Profile details for your ${type}`}>
      <FormContainer onSubmit={handleSubmit}>
        {type === 'experience' && (
          <FormInput
            label="Position"
            id="position"
            value={inputPosition}
            handleChange={e => setInputPosition(e.currentTarget.value)}
            isFocused={true}
            required={true}
          />
        )}
        {type === 'experience' && (
          <FormInput
            label="Company"
            id="company"
            value={inputCompany}
            handleChange={e => setInputCompany(e.currentTarget.value)}
            required={true}
          />
        )}
        {type === 'education' && (
          <FormInput
            label="Qualification"
            id="qualification"
            value={inputQualification}
            handleChange={e => setInputQualification(e.currentTarget.value)}
            isFocused={true}
            required={true}
          />
        )}
        {type === 'education' && (
          <FormInput
            label="School"
            id="school"
            value={inputSchool}
            handleChange={e => setInputSchool(e.currentTarget.value)}
            required={true}
          />
        )}
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
        <Button type="button" onClick={() => setModalHidden(true)}>
          Close
        </Button>
      </FormContainer>
    </ContentBox>
  );
};

export default EducationExperienceForm;
