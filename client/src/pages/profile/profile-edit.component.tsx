import React from 'react';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import EditMain from '../../components/profile/forms/edit-main.component';
import EditExperience from '../../components/profile/edit-experience.component';
import EditEducation from '../../components/profile/edit-education.component';
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
        {section === 'experience' && <EditExperience />}
        {section === 'education' && <EditEducation />}
      </ColRightSpan>
    </ContentContainer>
  );
};

export default ProfileEdit;
