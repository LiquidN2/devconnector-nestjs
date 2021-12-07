import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ContentBox from '../../content-box/content-box.component';
import FormInput from '../../form/form-input.component';
import FormDatePicker from '../../form/form-datepicker.component';
import { BtnSavePrimary, Button } from '../../UI/button.component';

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 3rem;
`;

const ExperienceForm: React.FC = () => {
  const [from, setFrom] = useState<Date>(new Date());
  const [to, setTo] = useState<Date>(new Date());

  return (
    <ContentBox heading="Add new work experience">
      <FormContainer>
        <FormInput label="Position" handleChange={e => console.log(e)} />
        <FormInput label="Company" handleChange={e => console.log(e)} />
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
        <div style={{ gridColumn: '1 / -1', marginBottom: '2rem' }}>
          <FormInput label="Location" handleChange={e => console.log(e)} />
        </div>
        <BtnSavePrimary>Save</BtnSavePrimary>
        {/*<Button>Close</Button>*/}
      </FormContainer>
    </ContentBox>
  );
};

export default ExperienceForm;
