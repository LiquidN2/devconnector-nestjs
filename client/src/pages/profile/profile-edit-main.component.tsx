import React from 'react';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import { ProfileContainer, ColLeft, ColRightSpan } from './profile-page.styles';
import ContentBox from '../../components/content-box/content-box.component';
import EditMain from '../../components/profile/forms/edit-main.component';

const ProfileEditMain: React.FC = () => {
  return (
    <ProfileContainer>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColRightSpan>
        <EditMain />
      </ColRightSpan>
    </ProfileContainer>
  );
};

export default ProfileEditMain;
