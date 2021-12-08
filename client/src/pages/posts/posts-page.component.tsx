import React from 'react';
import {
  ColLeft,
  ColMiddle,
  ColRight,
  ContentContainer,
  ColRightSpan,
} from '../../components/layout/content-layout.styles';
import { Helmet } from 'react-helmet';
import ProfileBaseBox from '../../components/profile/profile-base-box.component';

import Post from '../../components/post/post.component';

const ProfilePage: React.FC = () => {
  return (
    <ContentContainer>
      <Helmet>
        <title>DevConnector | Posts</title>
      </Helmet>
      <ColLeft>
        <ProfileBaseBox />
      </ColLeft>
      <ColRightSpan>
        <Post />
      </ColRightSpan>
    </ContentContainer>
  );
};

export default ProfilePage;
