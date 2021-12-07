import React, { FormEventHandler, useState } from 'react';

import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import FormDatePicker from '../../form/form-datepicker.component';
import { BtnSavePrimary } from '../../UI/button.component';

import { FormContainer, FullWidth } from './education-form.styles';

const EducationForm: React.FC = () => {
  const [qualification, setQualification] = useState('');
  const [school, setSchool] = useState('');
  const [from, setFrom] = useState<Date>(new Date());
  const [to, setTo] = useState<Date | null>(null);
  const [location, setLocation] = useState('');

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <ContentBox heading="Education Details">
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Qualification / Degree"
          id="qualification"
          value={qualification}
          handleChange={e => setQualification(e.currentTarget.value)}
        />
        <FormInput
          label="School"
          id="school"
          value={school}
          handleChange={e => setSchool(e.currentTarget.value)}
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

export default EducationForm;
