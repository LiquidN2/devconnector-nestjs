import React, { MouseEventHandler, useState } from 'react';

import ContentBox from '../content-box/content-box.component';

import { ButtonsGroup } from './edit-experience.styles';
import { BtnAddPrimary, BtnLinkGoBack } from '../UI/button.component';
import EducationExperienceItem from './education-experience-item.component';
import Modal from '../modal/modal.component';
import EducationForm from './forms/education-form.component';

import { useProfile } from '../../hooks/useProfile';

interface EditEducationProps {
  profileId?: string;
}

const EditEducation: React.FC<EditEducationProps> = ({ profileId = '' }) => {
  const [modalHidden, setModalHidden] = useState(true);
  const [educationId, setEducationId] = useState('');

  const { data } = useProfile(profileId);

  const toggleModalHidden: MouseEventHandler<HTMLButtonElement> = () => {
    setModalHidden(!modalHidden);
  };

  const handleAddNewEducation: MouseEventHandler<HTMLButtonElement> = () => {
    setModalHidden(false);
    setEducationId('');
  };

  return (
    <>
      <ContentBox heading="Update Your Education">
        {data &&
          data.educations &&
          data.educations.length !== 0 &&
          data.educations.map(
            (
              { _id, qualification, school, location, from, to, description },
              index,
            ) => (
              <EducationExperienceItem
                id={_id}
                key={index}
                type="education"
                title={qualification}
                subtitle={school}
                location={location}
                description={description}
                from={from}
                to={to}
                editable={true}
              />
            ),
          )}
        <ButtonsGroup>
          <BtnAddPrimary onClick={handleAddNewEducation}>
            Add Education
          </BtnAddPrimary>
          <BtnLinkGoBack to="/profile">Back to Profile View</BtnLinkGoBack>
        </ButtonsGroup>
      </ContentBox>
      <Modal modalHidden={modalHidden} setModalHidden={setModalHidden}>
        <EducationForm />
      </Modal>
    </>
  );
};

export default EditEducation;
