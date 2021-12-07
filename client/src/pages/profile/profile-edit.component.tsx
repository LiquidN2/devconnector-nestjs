import React from 'react';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import { ProfileContainer, ColLeft, ColRightSpan } from './profile-page.styles';
import EditMain from '../../components/profile/forms/edit-main.component';
import EditExperience from '../../components/profile/edit-experience.component';
import EditEducation from '../../components/profile/edit-education.component';

interface PropFileEditProps {
  section: 'main' | 'education' | 'experience';
}

const ProfileEdit: React.FC<PropFileEditProps> = ({ section }) => {
  return (
    <ProfileContainer>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColRightSpan>
        {section === 'main' && <EditMain />}
        {section === 'experience' && <EditExperience />}
        {section === 'education' && <EditEducation />}
      </ColRightSpan>
    </ProfileContainer>
  );
};

export default ProfileEdit;
