import React from 'react';
import { Helmet } from 'react-helmet';

import ProfileBaseBox from '../../components/profile/profile-base-box.component';
import PostForm from '../../components/post/post-form.component';
import Post from '../../components/post/post.component';

import {
  ColLeft,
  ContentContainer,
  ColRightSpan,
} from '../../components/layout/content-layout.styles';

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
        <PostForm />
        <Post />
      </ColRightSpan>
    </ContentContainer>
  );
};

export default ProfilePage;
