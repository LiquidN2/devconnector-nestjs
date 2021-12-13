import React, { MouseEventHandler, useState } from 'react';

import ContentBox from '../content-box/content-box.component';

import { ButtonsGroup, SpinnerContainer } from './edit-experience.styles';
import { BtnAddPrimary, BtnLinkGoBack } from '../UI/button.component';
import EducationExperienceItem from './education-experience-item.component';
import Modal from '../modal/modal.component';
import ExperienceForm from './forms/experience-form.component';
import LoadingSpinner from '../loading-spinner/loading-spinner.component';

import { useProfile } from '../../hooks/useProfile';

interface EditExperienceProps {
  profileId?: string;
}

const EditExperience: React.FC<EditExperienceProps> = ({ profileId }) => {
  const [modalHidden, setModalHidden] = useState(true);
  const [experienceId, setExperienceId] = useState('');

  const { data, isLoading, isFetching } = useProfile(profileId);

  const handleEditExperience = (experienceId: string) => {
    setModalHidden(false);
    setExperienceId(experienceId);
  };

  const handleAddNewExperience: MouseEventHandler<HTMLButtonElement> = () => {
    setModalHidden(false);
    setExperienceId('');
  };

  if (isLoading || isFetching)
    return (
      <SpinnerContainer>
        <LoadingSpinner />
      </SpinnerContainer>
    );

  return (
    <>
      <ContentBox heading="Update Your Work Experience">
        {data &&
          data.experiences &&
          data.experiences.length !== 0 &&
          data.experiences.map(
            (
              { _id, position, company, location, description, from, to },
              index,
            ) => (
              <EducationExperienceItem
                id={_id}
                key={index}
                type="experience"
                title={position}
                subtitle={company}
                location={location}
                description={description}
                from={from}
                to={to}
                editable={true}
                handleEditItem={handleEditExperience}
              />
            ),
          )}
        <ButtonsGroup>
          <BtnAddPrimary onClick={handleAddNewExperience}>
            Add Experience
          </BtnAddPrimary>
          <BtnLinkGoBack to="/profile">Back to Profile View</BtnLinkGoBack>
        </ButtonsGroup>
      </ContentBox>

      <Modal
        modalHidden={modalHidden}
        setModalHidden={setModalHidden}
        btnCloseModalHidden={true}
      >
        <ExperienceForm
          experienceId={experienceId}
          setModalHidden={setModalHidden}
        />
      </Modal>
    </>
  );
};

export default EditExperience;
