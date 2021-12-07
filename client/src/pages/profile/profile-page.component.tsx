import React from 'react';

import { Helmet } from 'react-helmet';

import {
  ContentContainer,
  ColLeft,
  ColRight,
  ColMiddle,
} from '../../components/layout/content-layout.styles';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import ProfileSummary from '../../components/profile/profile-summary.component';
import ProfileExperience from '../../components/profile/profile-experience.component';
import ProfileEducation from '../../components/profile/profile-education.component';
import ProfileSkills from '../../components/profile/profile-skills.component';

const ProfilePage: React.FC = () => {
  return (
    <ContentContainer>
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
    </ContentContainer>
  );
};

export default ProfilePage;
