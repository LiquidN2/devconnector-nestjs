import React, { FormEventHandler, useEffect, useState } from 'react';

import FormInput from '../../form/form-input.component';
import ContentBox from '../../content-box/content-box.component';
import { BtnSavePrimary, BtnLinkGoBack } from '../../UI/button.component';

import { FormContainer, ButtonsGroup } from './edit-main.styles';

import { useAppSelector } from '../../../hooks/useAppSelector';
import { selectAuthToken } from '../../../redux/auth/auth.selector';
import { useProfile } from '../../../hooks/useProfile';
import { useUpdateMyProfileMutation } from '../../../redux/profile/profile.api';

const EditMain: React.FC = () => {
  const [inputHandle, setInputHandle] = useState('');
  const [inputStatus, setInputStatus] = useState('');
  const [inputWebsite, setInputWebsite] = useState('');
  const [inputCompany, setInputCompany] = useState('');
  const [inputLocation, setInputLocation] = useState('');
  const [inputAbout, setInputAbout] = useState('');
  const [inputGithub, setInputGithub] = useState('');
  const [inputLinkedIn, setInputLinkedIn] = useState('');
  const [inputSkills, setInputSkills] = useState('');

  const { data } = useProfile('');

  useEffect(() => {
    if (!data) return;
    const {
      handle = '',
      status = '',
      website = '',
      company = '',
      location = '',
      linkedIn = '',
      github = '',
      about = '',
      skills = [],
    } = data;

    setInputHandle(handle);
    setInputStatus(status);
    setInputWebsite(website);
    setInputCompany(company);
    setInputLocation(location);
    setInputGithub(github);
    setInputLinkedIn(linkedIn);
    setInputAbout(about);
    setInputSkills(skills.join());
  }, [data]);

  const authToken = useAppSelector(selectAuthToken);
  const [updateProfile] = useUpdateMyProfileMutation();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();

    const body = {
      handle: inputHandle.trim(),
      location: inputLocation.trim(),
      website: inputWebsite.trim(),
      company: inputCompany.trim(),
      status: inputStatus.trim(),
      linkedIn: inputLinkedIn.trim(),
      github: inputGithub.trim(),
      about: inputAbout.trim(),
      skills: inputSkills.split(',').map((skill: string) => skill.trim()),
    };

    updateProfile({ token: authToken, body });
  };

  return (
    <ContentBox heading="Update Your Profile">
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Handle"
          value={inputHandle}
          handleChange={e => setInputHandle(e.currentTarget.value)}
          required={true}
          placeholder="e.g. devninja"
        />
        <FormInput
          label="Status / Position"
          value={inputStatus}
          handleChange={e => setInputStatus(e.currentTarget.value)}
          placeholder="e.g. Fullstack Developer"
        />
        <FormInput
          label="Website"
          value={inputWebsite}
          handleChange={e => setInputWebsite(e.currentTarget.value)}
        />
        <FormInput
          label="Company"
          value={inputCompany}
          handleChange={e => setInputCompany(e.currentTarget.value)}
        />
        <FormInput
          label="Location"
          value={inputLocation}
          handleChange={e => setInputLocation(e.currentTarget.value)}
        />
        <FormInput
          label="Github username"
          value={inputGithub}
          handleChange={e => setInputGithub(e.currentTarget.value)}
        />
        <FormInput
          label="LinkedIn"
          value={inputLinkedIn}
          handleChange={e => setInputLinkedIn(e.currentTarget.value)}
        />
        <FormInput
          label="Skills (separated by commas)"
          value={inputSkills}
          handleChange={e => setInputSkills(e.currentTarget.value)}
        />

        <div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
          <FormInput
            type="textarea"
            label="About you"
            value={inputAbout}
            handleChange={e => setInputAbout(e.currentTarget.value)}
          />
        </div>

        <ButtonsGroup>
          <BtnSavePrimary>Save Changes</BtnSavePrimary>
          <BtnLinkGoBack to="/profile">Back to Profile View</BtnLinkGoBack>
        </ButtonsGroup>
      </FormContainer>
    </ContentBox>
  );
};

export default EditMain;
