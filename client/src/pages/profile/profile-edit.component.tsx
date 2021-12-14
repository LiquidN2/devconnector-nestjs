import React from 'react';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import EditMain from '../../components/profile/forms/edit-main.component';
import EduExpListEdit from '../../components/profile/edu-exp-list-edit.component';

import {
  ContentContainer,
  ColLeft,
  ColRightSpan,
} from '../../components/layout/content-layout.styles';

interface PropFileEditProps {
  section: 'main' | 'education' | 'experience';
}

const ProfileEdit: React.FC<PropFileEditProps> = ({ section }) => {
  return (
    <ContentContainer>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColRightSpan>
        {section === 'main' && <EditMain />}
        {section === 'experience' && <EduExpListEdit type="experience" />}
        {section === 'education' && <EduExpListEdit type="education" />}
      </ColRightSpan>
    </ContentContainer>
  );
};

export default ProfileEdit;
