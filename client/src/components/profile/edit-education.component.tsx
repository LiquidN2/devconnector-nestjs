import React, { MouseEventHandler, useState } from 'react';

import ContentBox from '../content-box/content-box.component';

import { ButtonsGroup } from './edit-experience.styles';
import { BtnAddPrimary, BtnLinkGoBack } from '../UI/button.component';
import EducationExperienceItem from './education-experience-item.component';
import Modal from '../modal/modal.component';
import EducationForm from './forms/education-form.component';
import ExperienceForm from './forms/experience-form.component';

const EditEducation: React.FC = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const educations = [
    {
      degree: 'Degree / qualification',
      school: 'School',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
    {
      degree: 'Degree / qualification',
      school: 'School',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
  ];

  const toggleModalHidden: MouseEventHandler<HTMLButtonElement> = () => {
    setModalHidden(!modalHidden);
  };

  return (
    <>
      <ContentBox heading="Update Your Education">
        {educations.map(
          ({ degree, school, location, time, description }, index) => (
            <EducationExperienceItem
              key={index}
              type="education"
              title={degree}
              subtitle={school}
              location={location}
              time={time}
              description={description}
              editable={true}
            />
          ),
        )}
        <ButtonsGroup>
          <BtnAddPrimary onClick={toggleModalHidden}>
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
