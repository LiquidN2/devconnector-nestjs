import React from 'react';

import FormInput from '../../form/form-input.component';
import ContentBox from '../../content-box/content-box.component';
import { ButtonPrimary, Button } from '../../UI/button.component';

import { EditMainContainer, ButtonsGroup } from './edit-main.styles';

const EditMain: React.FC = () => {
  return (
    <ContentBox heading="Update Your Profile">
      <EditMainContainer>
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
          <ButtonPrimary>Update Profile</ButtonPrimary>
          <Button type="button">Back to Profile View</Button>
        </ButtonsGroup>
      </EditMainContainer>
    </ContentBox>
  );
};

export default EditMain;
