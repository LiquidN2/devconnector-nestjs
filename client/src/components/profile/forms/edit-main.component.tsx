import React, { FormEventHandler } from 'react';

import FormInput from '../../form/form-input.component';
import ContentBox from '../../content-box/content-box.component';
import { BtnSavePrimary, BtnLinkGoBack } from '../../UI/button.component';

import { FormContainer, ButtonsGroup } from './edit-main.styles';

const EditMain: React.FC = () => {
  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
  };

  return (
    <ContentBox heading="Update Your Profile">
      <FormContainer onSubmit={handleSubmit}>
        <FormInput
          label="Handle"
          handleChange={e => console.log()}
          required={true}
          placeholder="e.g. devninja"
        />
        <FormInput
          label="Status / Position"
          handleChange={e => console.log()}
          placeholder="e.g. Fullstack Developer"
        />
        <FormInput label="Website" handleChange={e => console.log()} />
        <FormInput label="Company" handleChange={e => console.log()} />
        <FormInput label="Location" handleChange={e => console.log()} />
        <FormInput label="Skills" handleChange={e => console.log()} />
        <FormInput label="Github" handleChange={e => console.log()} />
        <FormInput label="LinkedIn" handleChange={e => console.log()} />

        <div style={{ gridColumn: '1 / -1' }}>
          <FormInput
            type="textarea"
            label="About you"
            handleChange={e => console.log()}
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
