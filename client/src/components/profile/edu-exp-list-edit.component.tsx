import React, { MouseEventHandler, useState } from 'react';

import ContentBox from '../content-box/content-box.component';
import EducationExperienceItem from './education-experience-item.component';
import Modal from '../modal/modal.component';
import EducationExperienceForm from './forms/education-experience-form.component';

import { useProfile } from '../../hooks/useProfile';
import { ButtonsGroup } from './edu-exp-list-edit.styles';
import { BtnAddPrimary, BtnLinkGoBack } from '../UI/button.component';

interface EduExpListEditProps {
  type: 'experience' | 'education';
  profileId?: string;
}

const EduExpListEdit: React.FC<EduExpListEditProps> = ({
  type,
  profileId = '',
}) => {
  const [modalHidden, setModalHidden] = useState(true);
  const [itemId, setItemId] = useState('');

  const { data } = useProfile(profileId);

  const items = data && data[`${type}s`];

  const handleEditItem = (id: string) => {
    setModalHidden(false);
    setItemId(id);
  };

  const handleAddNewItem: MouseEventHandler<HTMLButtonElement> = () => {
    setModalHidden(false);
    setItemId('');
  };

  return (
    <>
      <ContentBox heading={`Update your ${type}`}>
        {items &&
          items.length !== 0 &&
          items.map((item, index) => {
            let title = '',
              organization = '';

            if ('qualification' in item) title = item.qualification;
            if ('position' in item) title = item.position;

            if ('school' in item) organization = item.school;
            if ('company' in item) organization = item.company;

            return (
              <EducationExperienceItem
                type={type}
                key={index}
                id={item._id}
                title={title}
                organization={organization}
                location={item.location}
                from={item.from}
                to={item.to}
                description={item.description}
                editable={true}
                handleEditItem={handleEditItem}
              />
            );
          })}

        <ButtonsGroup>
          <BtnAddPrimary onClick={handleAddNewItem}>Add new</BtnAddPrimary>
          <BtnLinkGoBack to="/profile">Back to Profile</BtnLinkGoBack>
        </ButtonsGroup>
      </ContentBox>

      <Modal modalHidden={modalHidden} setModalHidden={setModalHidden}>
        <EducationExperienceForm
          type={type}
          itemId={itemId}
          setModalHidden={setModalHidden}
        />
      </Modal>
    </>
  );
};

export default EduExpListEdit;
