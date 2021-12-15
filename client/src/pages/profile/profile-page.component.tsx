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
import ProfileSkills from '../../components/profile/profile-skills.component';
import ProfileEduExp from '../../components/profile/profile-edu-exp.component';

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
        <ProfileEduExp type="experience" />
        <ProfileEduExp type="education" />
      </ColMiddle>
      <ColRight>
        <ProfileSkills />
      </ColRight>
    </ContentContainer>
  );
};

export default ProfilePage;
