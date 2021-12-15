import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
// import LoadingSpinner from '../../components/loading-spinner/loading-spinner.component';

// import { useProfileWithHandle } from '../../hooks/useProfile';

const ProfilePage: React.FC = () => {
  // const [userId, setUserId] = useState('');
  //
  // const params = useParams();
  // const handle = params.handle || '';
  // const { data, isLoading } = useProfileWithHandle(handle);
  //
  // useEffect(() => {
  //   if (!data || !data.user) return;
  //   setUserId(data.user._id);
  // }, [data]);
  //
  // if (isLoading) return <LoadingSpinner />;

  const params = useParams();
  const userId = params.userId || '';

  return (
    <ContentContainer>
      <Helmet>
        <title>DevConnector | Profile</title>
      </Helmet>
      <ColLeft>
        <ProfileBaseBox userId={userId} />
      </ColLeft>
      <ColMiddle>
        <ProfileSummary userId={userId} />
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
