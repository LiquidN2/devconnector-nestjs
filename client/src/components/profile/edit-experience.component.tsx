import React, { MouseEventHandler, useState } from 'react';

import ContentBox from '../content-box/content-box.component';

import { ButtonsGroup } from './edit-experience.styles';
import { BtnAddPrimary, BtnLinkGoBack } from '../UI/button.component';
import EducationExperienceItem from './education-experience-item.component';
import Modal from '../modal/modal.component';
import ExperienceForm from './forms/experience-form.component';

const EditExperience: React.FC = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const experiences = [
    {
      title: 'Job title',
      company: 'Company',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
    {
      title: 'Job title',
      company: 'Company',
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
      <ContentBox heading="Update Your Work Experience">
        {experiences.map(
          ({ title, company, location, time, description }, index) => (
            <EducationExperienceItem
              key={index}
              type="experience"
              title={title}
              subtitle={company}
              location={location}
              time={time}
              description={description}
              editable={true}
            />
          ),
        )}
        <ButtonsGroup>
          <BtnAddPrimary onClick={toggleModalHidden}>
            Add Experience
          </BtnAddPrimary>
          <BtnLinkGoBack to="/profile">Back to Profile View</BtnLinkGoBack>
        </ButtonsGroup>
      </ContentBox>
      <Modal modalHidden={modalHidden} setModalHidden={setModalHidden}>
        <ExperienceForm />
      </Modal>
    </>
  );
};

export default EditExperience;
