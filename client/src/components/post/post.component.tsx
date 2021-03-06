import React, { MouseEventHandler, useState } from 'react';

import PostHeader from './post-header.component';
import PostContent from './post-content.component';
import PostInteraction from './post-interaction.component';
import Comments from '../comment/comments.component';

import { PostContainer } from './post.styles';

const Post: React.FC = () => {
  const [commentsHidden, setCommentsHidden] = useState(false);

  const toggleCommentsHidden: MouseEventHandler<HTMLElement> = () => {
    setCommentsHidden(!commentsHidden);
  };

  return (
    <PostContainer>
      <PostHeader />
      <PostContent />
      <PostInteraction toggleCommentsHidden={toggleCommentsHidden} />
      {!commentsHidden && <Comments />}
    </PostContainer>
  );
};

export default Post;
