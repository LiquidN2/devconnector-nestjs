import React, { FormEventHandler, useState } from 'react';

import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import FormDatePicker from '../../form/form-datepicker.component';
import { BtnSavePrimary } from '../../UI/button.component';

import { FormContainer, FullWidth } from './education-form.styles';

const EducationForm: React.FC = () => {
  const [inputQualification, setInputQualification] = useState('');
  const [inputSchool, setInputSchool] = useState('');
  const [inputFrom, setInputFrom] = useState<Date>(new Date());
  const [inputTo, setInputTo] = useState<Date | null>(null);
  const [inputLocation, setInputLocation] = useState('');
  const [inputDescription, setInputDescription] = useState('');

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
          value={inputQualification}
          handleChange={e => setInputQualification(e.currentTarget.value)}
        />
        <FormInput
          label="School"
          id="school"
          value={inputSchool}
          handleChange={e => setInputSchool(e.currentTarget.value)}
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
    </ContentBox>
  );
};

export default EducationForm;
