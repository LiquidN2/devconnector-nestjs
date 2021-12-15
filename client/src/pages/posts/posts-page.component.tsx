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

import { usePosts } from '../../hooks/usePosts';

interface PostPageProps {
  userId?: string;
}

const PostPage: React.FC<PostPageProps> = ({ userId = '' }) => {
  const { data } = usePosts(userId);

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
        {data &&
          data.map(({ _id, name, status, avatar, text, created }, index) => (
            <Post
              name={name}
              status={status}
              avatar={avatar}
              created={created}
              text={text}
            />
          ))}
      </ColRightSpan>
    </ContentContainer>
  );
};

export default PostPage;
