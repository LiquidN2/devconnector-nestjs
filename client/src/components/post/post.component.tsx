import React from 'react';

import PostHeader from './post-header.component';

import { Container } from './post.styles';

const Post: React.FC = () => {
  return (
    <Container>
      <PostHeader />
    </Container>
  );
};

export default Post;
