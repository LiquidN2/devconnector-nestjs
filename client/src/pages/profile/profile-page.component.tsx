import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import {
  ProfileContainer,
  ColLeft,
  ColRight,
  ColMiddle,
  EditProfileBtn,
} from './profile-page.styles';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import ProfileSummary from '../../components/profile/profile-summary.component';
import ProfileExperience from '../../components/profile/profile-experience.component';
import ProfileEducation from '../../components/profile/profile-education.component';
import ProfileSkills from '../../components/profile/profile-skills.component';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <ProfileContainer>
      <Helmet>
        <title>DevConnector | Profile</title>
      </Helmet>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColMiddle>
        <ProfileSummary />
        <ProfileExperience />
        <ProfileEducation />
      </ColMiddle>
      <ColRight>
        <ProfileSkills />
      </ColRight>
    </ProfileContainer>
  );
};

export default ProfilePage;
