import React from 'react';

import PostHeader from './post-header.component';
import PostContent from './post-content.component';
import PostInteraction from './post-interaction.component';

import { PostContainer } from './post.styles';

const Post: React.FC = () => {
  return (
    <PostContainer>
      <PostHeader />
      <PostContent />
      <PostInteraction />
    </PostContainer>
  );
};

export default Post;
