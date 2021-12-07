import React, { FormEventHandler, useState } from 'react';

import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import FormDatePicker from '../../form/form-datepicker.component';
import { BtnSavePrimary } from '../../UI/button.component';

import { FormContainer, FullWidth } from './experience-form.styles';

const ExperienceForm: React.FC = () => {
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [from, setFrom] = useState<Date>(new Date());
  const [to, setTo] = useState<Date | null>(null);
  const [location, setLocation] = useState('');

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <ContentBox heading="Work Experience Details">
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Position"
          id="position"
          value={position}
          handleChange={e => setPosition(e.currentTarget.value)}
        />
        <FormInput
          label="Company"
          id="company"
          value={company}
          handleChange={e => setCompany(e.currentTarget.value)}
        />
        <FormDatePicker
          label="From"
          value={from}
          onChange={setFrom}
          format="dd/MM/y"
        />
        <FormDatePicker
          label="To (leave blank if current)"
          value={to}
          onChange={setTo}
          format="dd/MM/y"
        />
        <FullWidth>
          <FormInput
            label="Location"
            value={location}
            handleChange={e => setLocation(e.currentTarget.value)}
          />
        </FullWidth>
        <BtnSavePrimary>Save</BtnSavePrimary>
      </FormContainer>
    </ContentBox>
  );
};

export default ExperienceForm;
