import React from 'react';

import { ProfileContainer, Col1 } from './profile-page.styles';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';

const ProfilePage: React.FC = () => {
  return (
    <ProfileContainer>
      <Col1>
        <ProfileBaseBox />
      </Col1>
      <div>col 2</div>
      <div>col 3</div>
    </ProfileContainer>
  );
};

export default ProfilePage;
