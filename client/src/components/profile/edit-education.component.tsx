import React, { MouseEventHandler, useState } from 'react';

import ContentBox from '../content-box/content-box.component';

import { ButtonsGroup } from './edit-experience.styles';
import { BtnAddPrimary, BtnLinkGoBack } from '../UI/button.component';
import EducationExperienceItem from './education-experience-item.component';
import Modal from '../modal/modal.component';
import EducationForm from './forms/education-form.component';

const EditEducation: React.FC = () => {
  const [modalHidden, setModalHidden] = useState(true);

  const educations = [
    {
      _id: '',
      degree: 'Degree / qualification',
      school: 'School',
      location: 'Sydney NSW, Australia',
      time: 'Mar 1990 - June 2000',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit inventore dolor voluptates in deleniti, dicta ullam sapiente tempore reprehenderit reiciendis hic exceptu',
    },
    {
      _id: '',
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
          ({ _id, degree, school, location, time, description }, index) => (
            <EducationExperienceItem
              id={_id}
              key={index}
              type="education"
              title={degree}
              subtitle={school}
              location={location}
              description={description}
              from={null}
              to={null}
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
